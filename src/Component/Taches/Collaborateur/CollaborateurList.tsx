'use client';

import { useState, useMemo } from 'react';
import { Card, CardBody, Table, Badge, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import AppDrawer from '@/Component/Common/AppDrawer';
import ConfirmDelete from '@/Component/Common/ConfirmDelete';
import RowActions from '@/Component/Common/RowActions';
import { UserPlus } from 'react-feather';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppPagination from '@/Component/Common/AppPagination';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import { useDebouncedCallback } from '@/hooks/useDebouncedCallback';
import { useLog } from '@/hooks/useLog';
import { MOCK_ROLES, MOCK_SECTEURS, MOCK_OPERATEURS } from '@/Data/mockData';

type Collaborateur = {
  id: number; nom: string; prenoms: string; mat: string;
  id_role: string; id_secteur: string; id_operateur: string;
  tel: string; actif: boolean;
};

const INITIAL: Collaborateur[] = [
  { id: 1, nom: 'DELAFOSSE', prenoms: 'Arnaud',          mat: 'CS001', id_role: 'rl-1', id_secteur: 'sec-1', id_operateur: 'op-1', tel: '+225 07 01 23 45', actif: true  },
  { id: 2, nom: 'YAO',       prenoms: 'Konan',            mat: 'CF002', id_role: 'rl-2', id_secteur: 'sec-1', id_operateur: 'op-1', tel: '+225 05 78 90 12', actif: true  },
  { id: 3, nom: 'KOUASSI',   prenoms: 'Aya',              mat: 'MO003', id_role: 'rl-5', id_secteur: 'sec-2', id_operateur: 'op-2', tel: '+225 07 34 56 78', actif: true  },
  { id: 4, nom: 'BAMBA',     prenoms: 'Moussa',           mat: 'FS004', id_role: 'rl-4', id_secteur: 'sec-4', id_operateur: 'op-3', tel: '+225 01 23 45 67', actif: false },
  { id: 5, nom: 'KOFFI',     prenoms: 'Adjoua',           mat: 'ES005', id_role: 'rl-6', id_secteur: 'sec-5', id_operateur: 'op-2', tel: '+225 05 89 01 23', actif: true  },
  { id: 6, nom: 'COULIBALY', prenoms: 'Drissa',           mat: 'CO006', id_role: 'rl-3', id_secteur: 'sec-3', id_operateur: 'op-1', tel: '+225 07 45 67 89', actif: true  },
  { id: 7, nom: 'DIALLO',    prenoms: 'Fatou',            mat: 'MO007', id_role: 'rl-5', id_secteur: 'sec-2', id_operateur: 'op-2', tel: '+225 05 12 34 56', actif: false },
];

const PAGE_SIZE = 6;

const ROLE_OPTS:     ComboboxOption[] = MOCK_ROLES.filter((r) => r.encadreur && r.slug !== 'chef_secteur').map((r) => ({ value: r.id, label: `${r.acronyme} — ${r.nom}` }));
const SECTEUR_OPTS:  ComboboxOption[] = MOCK_SECTEURS.map((s) => ({ value: s.id, label: s.lib }));
const OP_OPTS:       ComboboxOption[] = MOCK_OPERATEURS.filter((o) => o.encadreur).map((o) => ({ value: o.id, label: o.acronyme }));

const ROLE_FILTER    = [{ value: '', label: 'Tous' }, ...ROLE_OPTS];
const SECTEUR_FILTER = [{ value: '', label: 'Tous' }, ...SECTEUR_OPTS];
const OP_FILTER      = [{ value: '', label: 'Tous' }, ...OP_OPTS];
const STATUT_FILTER  = [{ value: '', label: 'Tous' }, { value: 'Actif', label: 'Actif' }, { value: 'Inactif', label: 'Inactif' }];

const emptyForm = () => ({
  nom: '', prenoms: '', mat: '',
  role:     ROLE_OPTS[0],
  secteur:  SECTEUR_OPTS[0],
  operateur: OP_OPTS[0],
  tel: '', actif: true,
});

const colStyle:   React.CSSProperties = { padding: '4px 8px' };
const inputStyle: React.CSSProperties = { fontSize: 12, padding: '3px 6px', height: 28 };

const roleLabel    = (id: string) => MOCK_ROLES.find((r) => r.id === id)?.acronyme ?? id;
const secteurLabel = (id: string) => MOCK_SECTEURS.find((s) => s.id === id)?.lib   ?? id;
const opLabel      = (id: string) => MOCK_OPERATEURS.find((o) => o.id === id)?.acronyme ?? id;

const CollaborateurList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();
  const log          = useLog();

  const [data,         setData        ] = useState<Collaborateur[]>(INITIAL);
  const [modal,        setModal       ] = useState(false);
  const [viewing,      setViewing     ] = useState(false);
  const [editing,      setEditing     ] = useState<Collaborateur | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Collaborateur | null>(null);
  const [form,         setForm        ] = useState<ReturnType<typeof emptyForm>>(emptyForm);

  const [fNom,    setFNom    ] = useState(() => searchParams.get('cl_nom') ?? '');
  const [fMat,    setFMat    ] = useState(() => searchParams.get('cl_mat') ?? '');
  const [fRole,   setFRole   ] = useState(() => searchParams.get('cl_role') ?? '');
  const [fSecteur,setFSecteur] = useState(() => searchParams.get('cl_sec')  ?? '');
  const [fOp,     setFOp     ] = useState(() => searchParams.get('cl_op')   ?? '');
  const [fStatut, setFStatut ] = useState(() => searchParams.get('cl_sta')  ?? '');
  const [page,    setPage    ] = useState(() => Number(searchParams.get('cl_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (!v) params.delete(k); else params.set(k, v); });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const debNom = useDebouncedCallback((v: string) => pushUrl({ cl_nom: v || null, cl_page: null }), 300);
  const debMat = useDebouncedCallback((v: string) => pushUrl({ cl_mat: v || null, cl_page: null }), 300);

  const handleNom    = (v: string) => { setFNom(v);     setPage(1); debNom(v); };
  const handleMat    = (v: string) => { setFMat(v);     setPage(1); debMat(v); };
  const handleRole   = (v: string) => { setFRole(v);    setPage(1); pushUrl({ cl_role: v || null, cl_page: null }); };
  const handleSecteur= (v: string) => { setFSecteur(v); setPage(1); pushUrl({ cl_sec:  v || null, cl_page: null }); };
  const handleOp     = (v: string) => { setFOp(v);      setPage(1); pushUrl({ cl_op:   v || null, cl_page: null }); };
  const handleStatut = (v: string) => { setFStatut(v);  setPage(1); pushUrl({ cl_sta:  v || null, cl_page: null }); };
  const handlePage   = (p: number) => { setPage(p); pushUrl({ cl_page: p > 1 ? String(p) : null }); };

  const fillForm = (c: Collaborateur) => ({
    nom:      c.nom,
    prenoms:  c.prenoms,
    mat:      c.mat,
    tel:      c.tel,
    actif:    c.actif,
    role:     ROLE_OPTS.find((o) => o.value === c.id_role)      ?? ROLE_OPTS[0],
    secteur:  SECTEUR_OPTS.find((o) => o.value === c.id_secteur) ?? SECTEUR_OPTS[0],
    operateur:OP_OPTS.find((o) => o.value === c.id_operateur)   ?? OP_OPTS[0],
  });

  const openAdd  = () => { setViewing(false); setEditing(null); setForm(emptyForm()); setModal(true); };
  const openView = (c: Collaborateur) => { setViewing(true);  setEditing(null); setForm(fillForm(c)); setModal(true); };
  const openEdit = (c: Collaborateur) => { setViewing(false); setEditing(c);    setForm(fillForm(c)); setModal(true); };

  const handleDeleteConfirm = () => {
    if (!deleteTarget) return;
    setData((p) => p.filter((c) => c.id !== deleteTarget.id));
    log('DELETE', 'Utilisateur', `Suppression du collaborateur ${deleteTarget.nom} ${deleteTarget.prenoms} (${deleteTarget.mat})`, deleteTarget.mat);
    setDeleteTarget(null);
  };

  const handleSave = () => {
    if (!form.nom.trim() || !form.mat.trim()) return;
    const payload = {
      nom: form.nom.trim(), prenoms: form.prenoms.trim(), mat: form.mat.trim(),
      id_role: form.role.value, id_secteur: form.secteur.value, id_operateur: form.operateur.value,
      tel: form.tel.trim(), actif: form.actif,
    };
    if (editing) {
      setData((p) => p.map((c) => c.id === editing.id ? { ...c, ...payload } : c));
      log('UPDATE', 'Utilisateur', `Modification du collaborateur ${form.nom} ${form.prenoms} (${form.mat})`, form.mat);
    } else {
      const nextId = Math.max(0, ...data.map((c) => c.id)) + 1;
      setData((p) => [...p, { id: nextId, ...payload }]);
      log('CREATE', 'Utilisateur', `Création du collaborateur ${form.nom} ${form.prenoms} — ${form.role.label}`, form.mat);
    }
    setModal(false);
  };

  const filtered = useMemo(() => data.filter((c) => {
    const nom = `${c.nom} ${c.prenoms}`.toLowerCase();
    return (
      (!fNom     || nom.includes(fNom.toLowerCase())) &&
      (!fMat     || c.mat.toLowerCase().includes(fMat.toLowerCase())) &&
      (!fRole    || c.id_role    === fRole)    &&
      (!fSecteur || c.id_secteur === fSecteur) &&
      (!fOp      || c.id_operateur === fOp)    &&
      (!fStatut  || (fStatut === 'Actif' ? c.actif : !c.actif))
    );
  }), [data, fNom, fMat, fRole, fSecteur, fOp, fStatut]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h5 className='mb-0'>Liste des collaborateurs</h5>
        <Button color='primary' className='d-flex align-items-center gap-1' onClick={openAdd}>
          <UserPlus size={16} /> Ajouter un collaborateur
        </Button>
      </div>

      <Card>
        <CardBody className='p-0'>
          <div className='table-responsive'>
            <Table className='table table-hover mb-0' style={{ tableLayout: 'fixed', minWidth: 860 }}>
              <thead className='table-light'>
                <tr>
                  <th style={{ width: '20%' }}>Nom & Prénoms</th>
                  <th style={{ width: '9%'  }}>Matricule</th>
                  <th style={{ width: '10%' }}>Rôle</th>
                  <th style={{ width: '14%' }}>Secteur</th>
                  <th style={{ width: '10%' }}>Opérateur</th>
                  <th style={{ width: '13%' }}>Téléphone</th>
                  <th style={{ width: '8%'  }}>Statut</th>
                  <th style={{ width: '9%'  }} className='text-end'>Actions</th>
                </tr>
                <tr>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Nom…' value={fNom} onChange={(e) => handleNom(e.target.value)} /></th>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Mat…' value={fMat} onChange={(e) => handleMat(e.target.value)} /></th>
                  <th style={colStyle}><Combobox options={ROLE_FILTER}    value={ROLE_FILTER.find((o) => o.value === fRole) ?? ROLE_FILTER[0]}       onChange={(opt) => handleRole(opt?.value ?? '')}    isClearable={false} compact /></th>
                  <th style={colStyle}><Combobox options={SECTEUR_FILTER} value={SECTEUR_FILTER.find((o) => o.value === fSecteur) ?? SECTEUR_FILTER[0]} onChange={(opt) => handleSecteur(opt?.value ?? '')} isClearable={false} compact /></th>
                  <th style={colStyle}><Combobox options={OP_FILTER}      value={OP_FILTER.find((o) => o.value === fOp) ?? OP_FILTER[0]}             onChange={(opt) => handleOp(opt?.value ?? '')}      isClearable={false} compact /></th>
                  <th style={colStyle} />
                  <th style={colStyle}><Combobox options={STATUT_FILTER}  value={STATUT_FILTER.find((o) => o.value === fStatut) ?? STATUT_FILTER[0]}  onChange={(opt) => handleStatut(opt?.value ?? '')}  isClearable={false} compact /></th>
                  <th style={colStyle} />
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr><td colSpan={8} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                ) : paginated.map((c) => (
                  <tr key={c.id}>
                    <td className='f-w-600' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.nom} {c.prenoms}</td>
                    <td><code>{c.mat}</code></td>
                    <td><Badge color='primary' className='badge-light'>{roleLabel(c.id_role)}</Badge></td>
                    <td className='text-muted' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{secteurLabel(c.id_secteur)}</td>
                    <td>{opLabel(c.id_operateur)}</td>
                    <td className='text-muted'>{c.tel}</td>
                    <td><Badge color={c.actif ? 'success' : 'secondary'} className='badge-light'>{c.actif ? 'Actif' : 'Inactif'}</Badge></td>
                    <td className='text-end'>
                      <RowActions prefix='cl' id={c.id} onView={() => openView(c)} onEdit={() => openEdit(c)} onDelete={() => setDeleteTarget(c)} />
                    </td>
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
        title={viewing ? 'Détails du collaborateur' : editing ? 'Modifier le collaborateur' : 'Ajouter un collaborateur'}
        onSave={viewing ? undefined : handleSave}
        onCancel={() => setModal(false)}
        cancelLabel={viewing ? 'Fermer' : 'Annuler'}
      >
        <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <p className='text-uppercase text-muted fw-semibold mb-2' style={{ fontSize: 11, letterSpacing: '0.08em' }}>Identité</p>
          <Row className='g-3'>
            <Col xs='6'>
              <FormGroup className='mb-0'>
                <Label className='form-label fw-semibold mb-1'>Nom <span className='text-danger'>*</span></Label>
                <Input disabled={viewing} value={form.nom} onChange={(e) => setForm((f) => ({ ...f, nom: e.target.value }))} placeholder='KONAN' />
              </FormGroup>
            </Col>
            <Col xs='6'>
              <FormGroup className='mb-0'>
                <Label className='form-label fw-semibold mb-1'>Prénoms</Label>
                <Input disabled={viewing} value={form.prenoms} onChange={(e) => setForm((f) => ({ ...f, prenoms: e.target.value }))} placeholder='Brou Édouard' />
              </FormGroup>
            </Col>
            <Col xs='6'>
              <FormGroup className='mb-0'>
                <Label className='form-label fw-semibold mb-1'>Matricule <span className='text-danger'>*</span></Label>
                <Input disabled={viewing} value={form.mat} onChange={(e) => setForm((f) => ({ ...f, mat: e.target.value }))} placeholder='CS001' />
              </FormGroup>
            </Col>
            <Col xs='6'>
              <FormGroup className='mb-0'>
                <Label className='form-label fw-semibold mb-1'>Téléphone</Label>
                <Input disabled={viewing} value={form.tel} onChange={(e) => setForm((f) => ({ ...f, tel: e.target.value }))} placeholder='+225 XX XX XX XX' />
              </FormGroup>
            </Col>
          </Row>

          <hr className='my-3' style={{ borderColor: 'transparent' }} />

          <p className='text-uppercase text-muted fw-semibold mb-2' style={{ fontSize: 11, letterSpacing: '0.08em' }}>Affectation</p>
          <Row className='g-3'>
            <Col xs='12'>
              <Combobox isDisabled={viewing} label='Rôle' options={ROLE_OPTS} value={form.role} onChange={(opt) => opt && setForm((f) => ({ ...f, role: opt }))} />
            </Col>
            <Col xs='12'>
              <Combobox isDisabled={viewing} label='Secteur' options={SECTEUR_OPTS} value={form.secteur} onChange={(opt) => opt && setForm((f) => ({ ...f, secteur: opt }))} />
            </Col>
            <Col xs='12'>
              <Combobox isDisabled={viewing} label='Opérateur' options={OP_OPTS} value={form.operateur} onChange={(opt) => opt && setForm((f) => ({ ...f, operateur: opt }))} />
            </Col>
          </Row>

          <hr className='my-3' style={{ borderColor: 'transparent' }} />

          <FormGroup check className='mb-0'>
            <Input disabled={viewing} type='checkbox' id='cl-actif-check' checked={form.actif} onChange={(e) => setForm((f) => ({ ...f, actif: e.target.checked }))} />
            <Label check htmlFor='cl-actif-check' className='fw-semibold'>Compte actif</Label>
          </FormGroup>
        </Form>
      </AppDrawer>

      <ConfirmDelete
        isOpen={!!deleteTarget}
        message={`Voulez-vous vraiment supprimer le collaborateur "${deleteTarget?.nom} ${deleteTarget?.prenoms}" ? Cette action est irréversible.`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
};

export default CollaborateurList;
