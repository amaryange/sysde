'use client';

import { useState, useMemo } from 'react';
import { Card, CardBody, Table, Badge, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import AppDrawer from '@/Component/Common/AppDrawer';
import ConfirmDelete from '@/Component/Common/ConfirmDelete';
import RowActions from '@/Component/Common/RowActions';
import { PlusCircle } from 'react-feather';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppPagination from '@/Component/Common/AppPagination';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import { useDebouncedCallback } from '@/hooks/useDebouncedCallback';
import { useLog } from '@/hooks/useLog';
import {
  MOCK_OPERATEURS,
  MOCK_ROLES,
  MOCK_SECTEURS,
  MOCK_OPERATEUR_SECTEUR,
  MOCK_OPERATEUR_LOT,
  MOCK_POSTES,
  type MockPoste as Poste,
} from '@/Data/mockData';

// Poste = MockPoste importé depuis mockData

type PosteForm = {
  lib:                   string;
  cde:                   string;
  nbre_postes:           number;
  role:                  ComboboxOption;
  operateur:             ComboboxOption | null;
  operateur_secteur:     ComboboxOption | null;   // value = id de operateur_secteur
  cde_secteur:           string;
  lib_secteur:           string;
  lots:                  ComboboxOption[];
  cde_section:           string;
  region:                string;
  departement:           string;
  sprefecture:           string;
  actif:                 boolean;
};

// ---------------------------------------------------------------------------
// Options statiques dérivées des mocks
// ---------------------------------------------------------------------------
const ROLES_OPT: ComboboxOption[] = MOCK_ROLES
  .filter((r) => r.encadreur)
  .map((r) => ({ value: r.id, label: `${r.acronyme} — ${r.nom}` }));

const ROLES_FILTER: ComboboxOption[] = [
  { value: '', label: 'Tous' },
  ...MOCK_ROLES.filter((r) => r.encadreur).map((r) => ({ value: r.acronyme, label: r.acronyme })),
];

const OPERATEURS_OPT: ComboboxOption[] = MOCK_OPERATEURS
  .filter((o) => MOCK_OPERATEUR_SECTEUR.some((os) => os.id_operateur === o.id))
  .map((o) => ({ value: o.id, label: o.acronyme }));

const OPERATEURS_FILTER: ComboboxOption[] = [{ value: '', label: 'Tous' }, ...OPERATEURS_OPT];

const STATUT_FILTER: ComboboxOption[] = [
  { value: '',        label: 'Tous'    },
  { value: 'Actif',   label: 'Actif'   },
  { value: 'Inactif', label: 'Inactif' },
];


// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const PAGE_SIZE = 6;
const colStyle: React.CSSProperties   = { padding: '4px 8px' };
const inputStyle: React.CSSProperties = { fontSize: 12, padding: '3px 6px', height: 28 };

const roleAcronyme = (id: string) => MOCK_ROLES.find((r) => r.id === id)?.acronyme ?? id;
const operateurFromOs = (idOs: string) => {
  const os = MOCK_OPERATEUR_SECTEUR.find((o) => o.id === idOs);
  return MOCK_OPERATEURS.find((o) => o.id === os?.id_operateur)?.acronyme ?? idOs;
};

const ROLE_BADGE_COLORS: Record<string, string> = {
  CS: 'danger', CF: 'warning', CO: 'info', FS: 'success', MO: 'primary', ES: 'secondary', SE: 'dark',
};

const emptyForm = (): PosteForm => ({
  lib: '', cde: '', nbre_postes: 1, role: ROLES_OPT[0],
  operateur: null, operateur_secteur: null,
  cde_secteur: '', lib_secteur: '', lots: [],
  cde_section: '', region: '', departement: '', sprefecture: '',
  actif: true,
});

const fillForm = (p: Poste): PosteForm => {
  const os    = MOCK_OPERATEUR_SECTEUR.find((o) => o.id === p.id_operateur_secteur);
  const opOpt = os ? OPERATEURS_OPT.find((o) => o.value === os.id_operateur) ?? null : null;
  const osOpt = opOpt
    ? MOCK_OPERATEUR_SECTEUR
        .filter((o) => o.id_operateur === os?.id_operateur)
        .map((os) => ({ value: os.id, label: `${os.cde_secteur} — ${os.lib_secteur}` }))
        .find((os) => os.value === p.id_operateur_secteur) ?? null
    : null;
  const lotsDisponibles = MOCK_OPERATEUR_LOT
    .filter((ol) => ol.id_operateur_secteur === p.id_operateur_secteur)
    .map((ol) => ({ value: ol.cde_lot, label: `Lot ${ol.num_lot} — ${ol.cde_lot}` }));
  const selectedLots = p.cde_lot
    ? p.cde_lot.split(',').map((c) => lotsDisponibles.find((l) => l.value === c.trim())).filter(Boolean) as ComboboxOption[]
    : [];
  return {
    lib: p.lib, cde: p.cde, nbre_postes: p.nbre_postes,
    role: ROLES_OPT.find((r) => r.value === p.role) ?? ROLES_OPT[0],
    operateur: opOpt, operateur_secteur: osOpt,
    cde_secteur: p.cde_secteur, lib_secteur: p.lib_secteur,
    lots: selectedLots, cde_section: p.cde_section,
    region: p.region, departement: p.departement, sprefecture: p.sprefecture,
    actif: p.actif,
  };
};

// ---------------------------------------------------------------------------
// Composant
// ---------------------------------------------------------------------------
const PosteList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();
  const log          = useLog();

  const [data,         setData        ] = useState<Poste[]>(MOCK_POSTES);
  const [modal,        setModal       ] = useState(false);
  const [editing,      setEditing     ] = useState<Poste | null>(null);
  const [viewing,      setViewing     ] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Poste | null>(null);
  const [form,         setForm        ] = useState<PosteForm>(emptyForm);

  const [fCde,    setFCde   ] = useState(() => searchParams.get('po_cde')  ?? '');
  const [fLib,    setFLib   ] = useState(() => searchParams.get('po_lib')  ?? '');
  const [fRole,   setFRole  ] = useState(() => searchParams.get('po_role') ?? '');
  const [fOp,     setFOp    ] = useState(() => searchParams.get('po_op')   ?? '');
  const [fSec,    setFSec   ] = useState(() => searchParams.get('po_sec')  ?? '');
  const [fStatut, setFStatut] = useState(() => searchParams.get('po_sta')  ?? '');
  const [page,    setPage   ] = useState(() => Number(searchParams.get('po_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (!v) params.delete(k); else params.set(k, v); });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const debCde = useDebouncedCallback((v: string) => pushUrl({ po_cde: v || null, po_page: null }), 300);
  const debLib = useDebouncedCallback((v: string) => pushUrl({ po_lib: v || null, po_page: null }), 300);
  const debSec = useDebouncedCallback((v: string) => pushUrl({ po_sec: v || null, po_page: null }), 300);

  const handleCde    = (v: string) => { setFCde(v);    setPage(1); debCde(v); };
  const handleLib    = (v: string) => { setFLib(v);    setPage(1); debLib(v); };
  const handleSec    = (v: string) => { setFSec(v);    setPage(1); debSec(v); };
  const handleRole   = (v: string) => { setFRole(v);   setPage(1); pushUrl({ po_role: v || null, po_page: null }); };
  const handleOp     = (v: string) => { setFOp(v);     setPage(1); pushUrl({ po_op:   v || null, po_page: null }); };
  const handleStatut = (v: string) => { setFStatut(v); setPage(1); pushUrl({ po_sta:  v || null, po_page: null }); };
  const handlePage   = (p: number) => { setPage(p); pushUrl({ po_page: p > 1 ? String(p) : null }); };

  const openAdd  = () => { setViewing(false); setEditing(null); setForm(emptyForm()); setModal(true); };
  const openEdit = (p: Poste) => { setViewing(false); setEditing(p);   setForm(fillForm(p)); setModal(true); };
  const openView = (p: Poste) => { setViewing(true);  setEditing(null); setForm(fillForm(p)); setModal(true); };

  const handleDeleteConfirm = () => {
    if (!deleteTarget) return;
    setData((prev) => prev.filter((p) => p.id !== deleteTarget.id));
    log('DELETE', 'Poste', `Suppression du poste ${deleteTarget.cde}`, deleteTarget.cde);
    setDeleteTarget(null);
  };

  const handleSave = () => {
    if (!form.cde.trim() || !form.operateur || !form.operateur_secteur) return;
    const payload: Omit<Poste, 'id'> = {
      lib:                  form.lib,
      cde:                  form.cde,
      nbre_postes:          form.nbre_postes,
      role:                 form.role.value,
      id_operateur_secteur: form.operateur_secteur.value,
      cde_secteur:          form.cde_secteur,
      lib_secteur:          form.lib_secteur,
      cde_lot:              form.lots.map((l) => l.value).join(','),
      num_lot:              form.lots.map((l) => l.label.split(' — ')[0].replace('Lot ', '')).join(', '),
      cde_section:          form.cde_section,
      region:               form.region,
      departement:          form.departement,
      sprefecture:          form.sprefecture,
      actif:                form.actif,
    };
    if (editing) {
      setData((prev) => prev.map((p) => p.id === editing.id ? { id: editing.id, ...payload } : p));
      log('UPDATE', 'Poste', `Modification du poste ${form.cde}`, form.cde);
    } else {
      setData((prev) => [...prev, { id: `po-${Date.now()}`, ...payload }]);
      log('CREATE', 'Poste', `Création du poste ${form.cde} — ${roleAcronyme(form.role.value)} chez ${form.operateur.label}`, form.cde);
    }
    setModal(false);
  };

  // Cascade dans le formulaire
  const secteursOpts: ComboboxOption[] = form.operateur
    ? MOCK_OPERATEUR_SECTEUR
        .filter((os) => os.id_operateur === form.operateur!.value)
        .map((os) => ({ value: os.id, label: `${os.cde_secteur} — ${os.lib_secteur}` }))
    : [];

  const lotsOpts: ComboboxOption[] = form.operateur_secteur
    ? MOCK_OPERATEUR_LOT
        .filter((ol) => ol.id_operateur_secteur === form.operateur_secteur!.value)
        .map((ol) => ({ value: ol.cde_lot, label: `Lot ${ol.num_lot} — ${ol.cde_lot}` }))
    : [];

  const handleOperateurChange = (opt: ComboboxOption | null) => {
    setForm((f) => ({ ...f, operateur: opt, operateur_secteur: null, cde_secteur: '', lib_secteur: '', lots: [], region: '', departement: '', sprefecture: '' }));
  };

  const handleSecteurChange = (opt: ComboboxOption | null) => {
    const os  = MOCK_OPERATEUR_SECTEUR.find((o) => o.id === opt?.value);
    const sec = MOCK_SECTEURS.find((s) => s.id === os?.id_secteur);
    setForm((f) => ({
      ...f,
      operateur_secteur: opt,
      cde_secteur:  os?.cde_secteur  ?? '',
      lib_secteur:  os?.lib_secteur  ?? '',
      region:       sec?.region      ?? '',
      departement:  sec?.departement ?? '',
      sprefecture:  sec?.sprefecture ?? '',
      lots: [],
    }));
  };

  const filtered = useMemo(() => data.filter((p) => {
    const acr = roleAcronyme(p.role);
    return (
      (!fCde    || p.cde.toLowerCase().includes(fCde.toLowerCase())) &&
      (!fLib    || p.lib.toLowerCase().includes(fLib.toLowerCase())) &&
      (!fRole   || acr === fRole) &&
      (!fOp     || MOCK_OPERATEUR_SECTEUR.find((o) => o.id === p.id_operateur_secteur)?.id_operateur === fOp) &&
      (!fSec    || p.lib_secteur.toLowerCase().includes(fSec.toLowerCase()) || p.cde_secteur.includes(fSec)) &&
      (!fStatut || (fStatut === 'Actif' ? p.actif : !p.actif))
    );
  }), [data, fCde, fLib, fRole, fOp, fSec, fStatut]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h5 className='mb-0'>Liste des postes</h5>
        <Button color='primary' className='d-flex align-items-center gap-1' onClick={openAdd}>
          <PlusCircle size={16} /> Ajouter poste
        </Button>
      </div>

      <Card>
        <CardBody className='p-0'>
          <div className='table-responsive'>
            <Table className='table table-hover mb-0' style={{ minWidth: 640 }}>
              <thead className='table-light'>
                <tr>
                  <th style={{ width: '11%' }}>Code</th>
                  <th style={{ width: '20%' }}>Libellé</th>
                  <th style={{ width: '7%'  }} className='text-center'>Nbre</th>
                  <th style={{ width: '10%' }}>Rôle</th>
                  <th style={{ width: '10%' }}>Opérateur</th>
                  <th style={{ width: '14%' }}>Secteur</th>
                  <th style={{ width: '10%' }}>Statut</th>
                  <th style={{ width: '9%'  }} className='text-end'>Actions</th>
                </tr>
                <tr>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Code…'    value={fCde} onChange={(e) => handleCde(e.target.value)} /></th>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Libellé…' value={fLib} onChange={(e) => handleLib(e.target.value)} /></th>
                  <th style={colStyle} />
                  <th style={colStyle}><Combobox options={ROLES_FILTER}      value={ROLES_FILTER.find((o) => o.value === fRole)    ?? ROLES_FILTER[0]}      onChange={(opt) => handleRole(opt?.value ?? '')}   isClearable={false} compact /></th>
                  <th style={colStyle}><Combobox options={OPERATEURS_FILTER} value={OPERATEURS_FILTER.find((o) => o.value === fOp) ?? OPERATEURS_FILTER[0]} onChange={(opt) => handleOp(opt?.value ?? '')}     isClearable={false} compact /></th>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Secteur…' value={fSec} onChange={(e) => handleSec(e.target.value)} /></th>
                  <th style={colStyle}><Combobox options={STATUT_FILTER}     value={STATUT_FILTER.find((o) => o.value === fStatut) ?? STATUT_FILTER[0]}     onChange={(opt) => handleStatut(opt?.value ?? '')} isClearable={false} compact /></th>
                  <th style={colStyle} />
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr><td colSpan={8} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                ) : paginated.map((p) => {
                  const acr = roleAcronyme(p.role);
                  return (
                    <tr key={p.id}>
                      <td><code>{p.cde}</code></td>
                      <td className='f-w-600' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.lib}</td>
                      <td className='text-center'>{p.nbre_postes}</td>
                      <td><Badge color={ROLE_BADGE_COLORS[acr] ?? 'secondary'} className='badge-light'>{acr}</Badge></td>
                      <td>{operateurFromOs(p.id_operateur_secteur)}</td>
                      <td className='text-muted'>
                        <span className='me-1' style={{ fontSize: 11, color: '#aaa' }}>{p.cde_secteur}</span>
                        {p.lib_secteur}
                      </td>
                      <td><Badge color={p.actif ? 'success' : 'secondary'} className='badge-light'>{p.actif ? 'Actif' : 'Inactif'}</Badge></td>
                      <td><RowActions prefix='po' id={p.id} onView={() => openView(p)} onEdit={() => openEdit(p)} onDelete={() => setDeleteTarget(p)} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className='px-3 pb-2 d-flex align-items-center justify-content-between'>
            <small className='text-muted'>{filtered.length} résultat{filtered.length !== 1 ? 's' : ''}</small>
            <AppPagination currentPage={page} totalPages={totalPages} onPageChange={handlePage} />
          </div>
        </CardBody>
      </Card>

      <AppDrawer
        isOpen={modal}
        toggle={() => setModal(false)}
        title={viewing ? 'Détails du poste' : editing ? 'Modifier le poste' : 'Ajouter un poste'}
        onSave={viewing ? undefined : handleSave}
        onCancel={() => setModal(false)}
        cancelLabel={viewing ? 'Fermer' : 'Annuler'}
      >
        <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <p className='text-muted fw-semibold small mb-2'>Identification</p>
          <Row>
            <Col xs='12' sm='8'>
              <FormGroup>
                <Label>Libellé</Label>
                <Input disabled={viewing} value={form.lib} onChange={(e) => setForm((f) => ({ ...f, lib: e.target.value }))} placeholder='Ex: Chef Secteur Abengourou' />
              </FormGroup>
            </Col>
            <Col xs='12' sm='4'>
              <FormGroup>
                <Label>Code <span className='text-danger'>*</span></Label>
                <Input disabled={viewing} value={form.cde} onChange={(e) => setForm((f) => ({ ...f, cde: e.target.value }))} placeholder='CS-ABG-001' />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs='6' sm='4'>
              <FormGroup>
                <Label>Nbre de postes <span className='text-danger'>*</span></Label>
                <Input
                  type='number' min={1} disabled={viewing}
                  value={form.nbre_postes}
                  onChange={(e) => setForm((f) => ({ ...f, nbre_postes: Math.max(1, parseInt(e.target.value) || 1) }))}
                />
              </FormGroup>
            </Col>
          </Row>

          <hr style={{ borderColor: 'transparent' }} />
          <p className='text-muted fw-semibold small mb-2'>Affectation</p>

          <Row>
            <Col xs='12' sm='6'>
              <Combobox
                label='Rôle'
                isDisabled={viewing}
                options={ROLES_OPT}
                value={form.role}
                onChange={(opt) => opt && setForm((f) => ({ ...f, role: opt }))}
              />
            </Col>
            <Col xs='12' sm='6'>
              <Combobox
                label='Opérateur *'
                isDisabled={viewing}
                options={OPERATEURS_OPT}
                value={form.operateur}
                onChange={handleOperateurChange}
                placeholder='Sélectionner un opérateur…'
              />
            </Col>
          </Row>

          <Combobox
            label='Secteur attribué *'
            isDisabled={viewing || !form.operateur}
            options={secteursOpts}
            value={form.operateur_secteur}
            onChange={handleSecteurChange}
            placeholder={form.operateur ? 'Sélectionner un secteur…' : "Choisir d'abord un opérateur"}
            noOptionsMessage='Aucun secteur attribué à cet opérateur'
          />

          <Combobox
            label='Lots'
            isDisabled={viewing || !form.operateur_secteur}
            isMulti
            options={lotsOpts}
            value={form.lots}
            onChange={(opts) => setForm((f) => ({ ...f, lots: opts }))}
            placeholder={form.operateur_secteur ? 'Sélectionner les lots…' : "Choisir d'abord un secteur"}
            noOptionsMessage='Aucun lot attribué pour ce secteur'
          />

          <FormGroup>
            <Label>Section(s)</Label>
            <Input disabled={viewing} value={form.cde_section} onChange={(e) => setForm((f) => ({ ...f, cde_section: e.target.value }))} placeholder='Ex: A, B' />
          </FormGroup>

          <hr style={{ borderColor: 'transparent' }} />
          <p className='text-muted fw-semibold small mb-2'>Localisation <span className='text-muted fw-normal'>(pré-remplie depuis le secteur)</span></p>
          <Row>
            <Col xs='12' sm='4'>
              <FormGroup>
                <Label>Région</Label>
                <Input disabled={viewing} value={form.region} onChange={(e) => setForm((f) => ({ ...f, region: e.target.value }))} />
              </FormGroup>
            </Col>
            <Col xs='12' sm='4'>
              <FormGroup>
                <Label>Département</Label>
                <Input disabled={viewing} value={form.departement} onChange={(e) => setForm((f) => ({ ...f, departement: e.target.value }))} />
              </FormGroup>
            </Col>
            <Col xs='12' sm='4'>
              <FormGroup>
                <Label>Sous-préfecture</Label>
                <Input disabled={viewing} value={form.sprefecture} onChange={(e) => setForm((f) => ({ ...f, sprefecture: e.target.value }))} />
              </FormGroup>
            </Col>
          </Row>

          <hr style={{ borderColor: 'transparent' }} />
          <p className='text-muted fw-semibold small mb-2'>Statut</p>
          <FormGroup check>
            <Input disabled={viewing} type='checkbox' checked={form.actif} onChange={(e) => setForm((f) => ({ ...f, actif: e.target.checked }))} />
            <Label check>Poste actif</Label>
          </FormGroup>
        </Form>
      </AppDrawer>

      <ConfirmDelete
        isOpen={!!deleteTarget}
        message={`Voulez-vous vraiment supprimer le poste "${deleteTarget?.cde}" ? Cette action est irréversible.`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
};

export default PosteList;
