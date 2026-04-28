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

type Poste = { id: number; lib: string; cde: string; secteur: string; lot: string; section: string; region: string; departement: string; sprefecture: string; role: string; operateur: string; actif: boolean };

const ROLES_OPT: ComboboxOption[] = [
  { value: 'CS', label: 'Chef Secteur'         },
  { value: 'CF', label: 'Contrôleur Formation' },
  { value: 'CO', label: 'Contrôleur Ordinaire' },
  { value: 'FS', label: 'Formateur Saigné'     },
  { value: 'MO', label: 'Moniteur'             },
  { value: 'ES', label: 'Équipe Spéciale'      },
];

const OPERATEURS_OPT: ComboboxOption[] = [
  { value: 'SAPH',   label: 'SAPH'   },
  { value: 'PALMCI', label: 'PALMCI' },
  { value: 'SOGB',   label: 'SOGB'   },
];

const ROLE_FILTER   = [{ value: '', label: 'Tous' }, ...ROLES_OPT];
const OP_FILTER     = [{ value: '', label: 'Tous' }, ...OPERATEURS_OPT];
const STATUT_FILTER: ComboboxOption[] = [{ value: '', label: 'Tous' }, { value: 'Actif', label: 'Actif' }, { value: 'Inactif', label: 'Inactif' }];

const INITIAL: Poste[] = [
  { id: 1, lib: 'Chef Secteur Abengourou',    cde: 'CS-ABG-001', secteur: 'Abengourou',   lot: '1, 2, 3', section: 'A, B', region: 'Indénié-Djuablin', departement: 'Abengourou',   sprefecture: 'Abengourou',   role: 'CS', operateur: 'SAPH',   actif: true  },
  { id: 2, lib: 'Contrôleur Formation L1',    cde: 'CF-ABG-001', secteur: 'Abengourou',   lot: '1',       section: 'A',    region: 'Indénié-Djuablin', departement: 'Abengourou',   sprefecture: 'Abengourou',   role: 'CF', operateur: 'SAPH',   actif: true  },
  { id: 3, lib: 'Moniteur Bondoukou 1',       cde: 'MO-BDK-001', secteur: 'Bondoukou',    lot: '4',       section: 'C',    region: 'Zanzan',           departement: 'Bondoukou',    sprefecture: 'Bondoukou',    role: 'MO', operateur: 'PALMCI', actif: true  },
  { id: 4, lib: 'Formateur Saigné Tanda',     cde: 'FS-TDA-001', secteur: 'Tanda',        lot: '5, 6',    section: 'D',    region: 'Zanzan',           departement: 'Tanda',        sprefecture: 'Tanda',        role: 'FS', operateur: 'SOGB',   actif: false },
  { id: 5, lib: "Équipe Spéciale Daoukro",    cde: 'ES-DKR-001', secteur: 'Daoukro',      lot: '7',       section: 'E',    region: "N'Zi-Comoé",      departement: 'Daoukro',      sprefecture: 'Daoukro',      role: 'ES', operateur: 'PALMCI', actif: true  },
  { id: 6, lib: 'Contrôleur Ordinaire Agni.', cde: 'CO-AGN-001', secteur: 'Agnibilékrou', lot: '8, 9',    section: 'F',    region: 'Indénié-Djuablin', departement: 'Agnibilékrou', sprefecture: 'Agnibilékrou', role: 'CO', operateur: 'SAPH',   actif: true  },
];

const PAGE_SIZE = 6;
const emptyForm = () => ({ lib: '', cde: '', secteur: '', lot: '', section: '', region: '', departement: '', sprefecture: '', role: ROLES_OPT[0], operateur: OPERATEURS_OPT[0], actif: true });

const colStyle: React.CSSProperties   = { padding: '4px 8px' };
const inputStyle: React.CSSProperties = { fontSize: 12, padding: '3px 6px', height: 28 };

const PosteList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  const log = useLog();
  const [data,    setData   ] = useState<Poste[]>(INITIAL);
  const [modal,   setModal  ] = useState(false);
  const [editing, setEditing] = useState<Poste | null>(null);
  const [viewing,      setViewing     ] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Poste | null>(null);
  const [form,         setForm        ] = useState(emptyForm);

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
  const fillForm = (p: Poste) => ({ lib: p.lib, cde: p.cde, secteur: p.secteur, lot: p.lot, section: p.section, region: p.region, departement: p.departement, sprefecture: p.sprefecture, actif: p.actif, role: ROLES_OPT.find((r) => r.value === p.role) ?? ROLES_OPT[0], operateur: OPERATEURS_OPT.find((o) => o.value === p.operateur) ?? OPERATEURS_OPT[0] });
  const openEdit = (p: Poste) => { setViewing(false); setEditing(p); setForm(fillForm(p)); setModal(true); };
  const openView = (p: Poste) => { setViewing(true);  setEditing(null); setForm(fillForm(p)); setModal(true); };
  const handleDeleteConfirm = () => {
    if (!deleteTarget) return;
    setData((prev) => prev.filter((p) => p.id !== deleteTarget.id));
    log('DELETE', 'Poste', `Suppression du poste ${deleteTarget.cde}`, deleteTarget.cde);
    setDeleteTarget(null);
  };
  const handleSave = () => {
    if (!form.cde.trim()) return;
    const payload = { lib: form.lib, cde: form.cde, secteur: form.secteur, lot: form.lot, section: form.section, region: form.region, departement: form.departement, sprefecture: form.sprefecture, role: form.role.value, operateur: form.operateur.value, actif: form.actif };
    if (editing) {
      setData((prev) => prev.map((p) => p.id === editing.id ? { ...p, ...payload } : p));
      log('UPDATE', 'Poste', `Modification du poste ${form.cde} — ${form.role.value}`, form.cde);
    } else {
      const nextId = Math.max(0, ...data.map((p) => p.id)) + 1;
      setData((prev) => [...prev, { id: nextId, ...payload }]);
      log('CREATE', 'Poste', `Création du poste ${form.cde} — ${form.role.value} chez ${form.operateur.value}`, form.cde);
    }
    setModal(false);
  };

  const filtered = useMemo(() => data.filter((p) => (
    (!fCde    || p.cde.toLowerCase().includes(fCde.toLowerCase())) &&
    (!fLib    || p.lib.toLowerCase().includes(fLib.toLowerCase())) &&
    (!fRole   || p.role === fRole) &&
    (!fOp     || p.operateur === fOp) &&
    (!fSec    || p.secteur.toLowerCase().includes(fSec.toLowerCase())) &&
    (!fStatut || (fStatut === 'Actif' ? p.actif : !p.actif))
  )), [data, fCde, fLib, fRole, fOp, fSec, fStatut]);

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
            <Table className='table table-hover mb-0' style={{ minWidth: 620 }}>
              <thead className='table-light'>
                <tr>
                  <th style={{ width: '11%' }}>Code</th>
                  <th style={{ width: '24%' }}>Libellé</th>
                  <th style={{ width: '11%' }}>Rôle</th>
                  <th style={{ width: '11%' }}>Opérateur</th>
                  <th style={{ width: '15%' }}>Secteur</th>
                  <th style={{ width: '10%' }}>Statut</th>
                  <th style={{ width: '10%' }} className='text-end'>Actions</th>
                </tr>
                <tr>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Code…'    value={fCde} onChange={(e) => handleCde(e.target.value)} /></th>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Libellé…' value={fLib} onChange={(e) => handleLib(e.target.value)} /></th>
                  <th style={colStyle}><Combobox options={ROLE_FILTER}   value={ROLE_FILTER.find((o) => o.value === fRole)   ?? ROLE_FILTER[0]}   onChange={(opt) => handleRole(opt?.value ?? '')}   isClearable={false} compact /></th>
                  <th style={colStyle}><Combobox options={OP_FILTER}     value={OP_FILTER.find((o) => o.value === fOp)       ?? OP_FILTER[0]}     onChange={(opt) => handleOp(opt?.value ?? '')}     isClearable={false} compact /></th>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Secteur…' value={fSec} onChange={(e) => handleSec(e.target.value)} /></th>
                  <th style={colStyle}><Combobox options={STATUT_FILTER} value={STATUT_FILTER.find((o) => o.value === fStatut) ?? STATUT_FILTER[0]} onChange={(opt) => handleStatut(opt?.value ?? '')} isClearable={false} compact /></th>
                  <th style={colStyle} />
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr><td colSpan={7} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                ) : paginated.map((p) => (
                  <tr key={p.id}>
                    <td><code>{p.cde}</code></td>
                    <td className='f-w-600' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.lib}</td>
                    <td><Badge color='info' className='badge-light'>{p.role}</Badge></td>
                    <td>{p.operateur}</td>
                    <td className='text-muted'>{p.secteur}</td>
                    <td><Badge color={p.actif ? 'success' : 'secondary'} className='badge-light'>{p.actif ? 'Actif' : 'Inactif'}</Badge></td>
                    <td><RowActions prefix='po' id={p.id} onView={() => openView(p)} onEdit={() => openEdit(p)} onDelete={() => setDeleteTarget(p)} /></td>
                  </tr>
                ))}
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
            <Col xs='12' sm='8'><FormGroup><Label>Libellé</Label><Input disabled={viewing} value={form.lib} onChange={(e) => setForm((f) => ({ ...f, lib: e.target.value }))} placeholder='Ex: Chef Secteur Abengourou' /></FormGroup></Col>
            <Col xs='12' sm='4'><FormGroup><Label>Code <span className='text-danger'>*</span></Label><Input disabled={viewing} value={form.cde} onChange={(e) => setForm((f) => ({ ...f, cde: e.target.value }))} placeholder='CS-ABG-001' /></FormGroup></Col>
          </Row>

          <hr style={{ borderColor: 'transparent' }} />
          <p className='text-muted fw-semibold small mb-2'>Affectation</p>
          <Row>
            <Col xs='12' sm='6'><Combobox label='Rôle'      isDisabled={viewing} options={ROLES_OPT}     value={form.role}      onChange={(opt) => opt && setForm((f) => ({ ...f, role: opt }))}      /></Col>
            <Col xs='12' sm='6'><Combobox label='Opérateur' isDisabled={viewing} options={OPERATEURS_OPT} value={form.operateur} onChange={(opt) => opt && setForm((f) => ({ ...f, operateur: opt }))} /></Col>
          </Row>

          <hr style={{ borderColor: 'transparent' }} />
          <p className='text-muted fw-semibold small mb-2'>Localisation</p>
          <Row>
            <Col xs='12' sm='4'><FormGroup><Label>Secteur</Label>   <Input disabled={viewing} value={form.secteur} onChange={(e) => setForm((f) => ({ ...f, secteur: e.target.value }))}   /></FormGroup></Col>
            <Col xs='12' sm='4'><FormGroup><Label>Lot(s)</Label>    <Input disabled={viewing} value={form.lot}     onChange={(e) => setForm((f) => ({ ...f, lot: e.target.value }))}        placeholder='Ex: 1, 2, 3' /></FormGroup></Col>
            <Col xs='12' sm='4'><FormGroup><Label>Section(s)</Label><Input disabled={viewing} value={form.section} onChange={(e) => setForm((f) => ({ ...f, section: e.target.value }))}    placeholder='Ex: A, B'    /></FormGroup></Col>
          </Row>
          <Row>
            <Col xs='12' sm='4'><FormGroup><Label>Région</Label>         <Input disabled={viewing} value={form.region}      onChange={(e) => setForm((f) => ({ ...f, region: e.target.value }))}      /></FormGroup></Col>
            <Col xs='12' sm='4'><FormGroup><Label>Département</Label>    <Input disabled={viewing} value={form.departement} onChange={(e) => setForm((f) => ({ ...f, departement: e.target.value }))} /></FormGroup></Col>
            <Col xs='12' sm='4'><FormGroup><Label>Sous-préfecture</Label><Input disabled={viewing} value={form.sprefecture} onChange={(e) => setForm((f) => ({ ...f, sprefecture: e.target.value }))} /></FormGroup></Col>
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
