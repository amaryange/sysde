'use client';

import { useState, useMemo } from 'react';
import { Card, CardBody, Table, Badge, Button, Form, FormGroup, Label, Input, Row, Col, UncontrolledTooltip } from 'reactstrap';
import AppDrawer from '@/Component/Common/AppDrawer';
import ConfirmDelete from '@/Component/Common/ConfirmDelete';
import { UserPlus, Eye, Edit2, Trash2 } from 'react-feather';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppPagination from '@/Component/Common/AppPagination';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import { useDebouncedCallback } from '@/hooks/useDebouncedCallback';
import { useLog } from '@/hooks/useLog';

type Utilisateur = { id: number; nom: string; prenoms: string; genre: string; nat: string; mat: string; email: string; tel: string; poste: string; operateur: string; actif: boolean };

const OPERATEURS_OPT: ComboboxOption[] = [
  { value: 'FIRCA',   label: 'FIRCA'   },
  { value: 'APROMAC', label: 'APROMAC' },
];

const POSTES_PAR_OP: Record<string, ComboboxOption[]> = {
  FIRCA:   [
    { value: 'AD-FIRCA-001', label: 'AD-FIRCA-001 — Administrateur FIRCA' },
    { value: 'DI-FIRCA-001', label: 'DI-FIRCA-001 — Directeur FIRCA'      },
    { value: 'SU-FIRCA-001', label: 'SU-FIRCA-001 — Superviseur FIRCA'    },
  ],
  APROMAC: [
    { value: 'AD-APR-001', label: 'AD-APR-001 — Administrateur APROMAC' },
    { value: 'DI-APR-001', label: 'DI-APR-001 — Directeur APROMAC'      },
    { value: 'SU-APR-001', label: 'SU-APR-001 — Superviseur APROMAC'    },
  ],
};

const POSTES_OPT = Object.values(POSTES_PAR_OP).flat();

const GENRES_OPT: ComboboxOption[] = [
  { value: 'M', label: 'Masculin' },
  { value: 'F', label: 'Féminin'  },
];

const INITIAL: Utilisateur[] = [
  { id: 1, nom: 'BAMBA',     prenoms: 'Seydou',     genre: 'M', nat: 'Ivoirienne', mat: 'AD001', email: 's.bamba@firca.ci',      tel: '+225 07 11 22 33', poste: 'AD-FIRCA-001', operateur: 'FIRCA',   actif: true  },
  { id: 2, nom: 'COULIBALY', prenoms: 'Aminata',    genre: 'F', nat: 'Ivoirienne', mat: 'SU002', email: 'a.coulibaly@firca.ci',   tel: '+225 05 44 55 66', poste: 'SU-FIRCA-001', operateur: 'FIRCA',   actif: true  },
  { id: 3, nom: 'KONE',      prenoms: 'Ibrahim',    genre: 'M', nat: 'Ivoirienne', mat: 'AD003', email: 'i.kone@apromac.ci',     tel: '+225 01 77 88 99', poste: 'AD-APR-001',   operateur: 'APROMAC', actif: true  },
  { id: 4, nom: 'DIOMANDE',  prenoms: 'Fatoumata',  genre: 'F', nat: 'Ivoirienne', mat: 'DI004', email: 'f.diomande@apromac.ci', tel: '+225 05 99 00 11', poste: 'DI-APR-001',   operateur: 'APROMAC', actif: false },
];

const PAGE_SIZE = 6;
const emptyForm = () => ({ nom: '', prenoms: '', genre: GENRES_OPT[0], nat: 'Ivoirienne', mat: '', mdp: '', email: '', tel: '', poste: POSTES_OPT[0], operateur: OPERATEURS_OPT[0], actif: true });

const OP_COL_FILTER     = [{ value: '', label: 'Tous' }, ...OPERATEURS_OPT];
const STATUT_COL_FILTER = [{ value: '', label: 'Tous' }, { value: 'Actif', label: 'Actif' }, { value: 'Inactif', label: 'Inactif' }];

const colStyle: React.CSSProperties  = { padding: '4px 8px' };
const inputStyle: React.CSSProperties = { fontSize: 12, padding: '3px 6px', height: 28 };

const UtilisateurNonEncadreurList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  const log = useLog();
  const [data,    setData   ] = useState<Utilisateur[]>(INITIAL);
  const [modal,   setModal  ] = useState(false);
  const [editing, setEditing] = useState<Utilisateur | null>(null);
  const [viewing,      setViewing     ] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Utilisateur | null>(null);
  const [form,         setForm        ] = useState<ReturnType<typeof emptyForm>>(emptyForm);

  const [fNom,      setFNom     ] = useState(() => searchParams.get('ut_nom')   ?? '');
  const [fMat,      setFMat     ] = useState(() => searchParams.get('ut_mat')   ?? '');
  const [fOp,       setFOp      ] = useState(() => searchParams.get('ut_op')    ?? '');
  const [fPoste,    setFPoste   ] = useState(() => searchParams.get('ut_poste') ?? '');
  const [fEmail,    setFEmail   ] = useState(() => searchParams.get('ut_email') ?? '');
  const [fTel,      setFTel     ] = useState(() => searchParams.get('ut_tel')   ?? '');
  const [fStatut,   setFStatut  ] = useState(() => searchParams.get('ut_sta')   ?? '');
  const [page,      setPage     ] = useState(() => Number(searchParams.get('ut_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (!v) params.delete(k); else params.set(k, v); });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const debNom   = useDebouncedCallback((v: string) => pushUrl({ ut_nom:   v || null, ut_page: null }), 300);
  const debMat   = useDebouncedCallback((v: string) => pushUrl({ ut_mat:   v || null, ut_page: null }), 300);
  const debPoste = useDebouncedCallback((v: string) => pushUrl({ ut_poste: v || null, ut_page: null }), 300);
  const debEmail = useDebouncedCallback((v: string) => pushUrl({ ut_email: v || null, ut_page: null }), 300);
  const debTel   = useDebouncedCallback((v: string) => pushUrl({ ut_tel:   v || null, ut_page: null }), 300);

  const handleNom   = (v: string) => { setFNom(v);   setPage(1); debNom(v);   };
  const handleMat   = (v: string) => { setFMat(v);   setPage(1); debMat(v);   };
  const handlePoste = (v: string) => { setFPoste(v); setPage(1); debPoste(v); };
  const handleEmail = (v: string) => { setFEmail(v); setPage(1); debEmail(v); };
  const handleTel   = (v: string) => { setFTel(v);   setPage(1); debTel(v);   };
  const handleOp    = (v: string) => { setFOp(v);    setPage(1); pushUrl({ ut_op:  v || null, ut_page: null }); };
  const handleStatut= (v: string) => { setFStatut(v);setPage(1); pushUrl({ ut_sta: v || null, ut_page: null }); };
  const handlePage  = (p: number) => { setPage(p); pushUrl({ ut_page: p > 1 ? String(p) : null }); };

  const openAdd  = () => { setViewing(false); setEditing(null); setForm(emptyForm()); setModal(true); };
  const fillForm = (u: Utilisateur) => ({ nom: u.nom, prenoms: u.prenoms, nat: u.nat, mat: u.mat, mdp: '', email: u.email, tel: u.tel, actif: u.actif, genre: GENRES_OPT.find((g) => g.value === u.genre) ?? GENRES_OPT[0], poste: POSTES_OPT.find((p) => p.value === u.poste) ?? POSTES_OPT[0], operateur: OPERATEURS_OPT.find((o) => o.value === u.operateur) ?? OPERATEURS_OPT[0] });
  const openEdit = (u: Utilisateur) => { setViewing(false); setEditing(u); setForm(fillForm(u)); setModal(true); };
  const openView = (u: Utilisateur) => { setViewing(true);  setEditing(null); setForm(fillForm(u)); setModal(true); };
  const handleDeleteConfirm = () => {
    if (!deleteTarget) return;
    setData((p) => p.filter((u) => u.id !== deleteTarget.id));
    log('DELETE', 'Utilisateur', `Suppression de ${deleteTarget.nom} ${deleteTarget.prenoms} (${deleteTarget.mat})`, deleteTarget.mat);
    setDeleteTarget(null);
  };
  const handleSave = () => {
    if (!form.nom.trim() || !form.mat.trim()) return;
    const payload = { nom: form.nom, prenoms: form.prenoms, genre: form.genre.value, nat: form.nat, mat: form.mat, email: form.email, tel: form.tel, poste: form.poste.value, operateur: form.operateur.value, actif: form.actif };
    if (editing) {
      setData((p) => p.map((u) => u.id === editing.id ? { ...u, ...payload } : u));
      log('UPDATE', 'Utilisateur', `Modification de ${form.nom} ${form.prenoms} (${form.mat})`, form.mat);
    } else {
      const nextId = Math.max(0, ...data.map((u) => u.id)) + 1;
      setData((p) => [...p, { id: nextId, ...payload }]);
      log('CREATE', 'Utilisateur', `Création de ${form.nom} ${form.prenoms} — ${form.operateur.value}`, form.mat);
    }
    setModal(false);
  };

  const filtered = useMemo(() => data.filter((u) => {
    const nom    = `${u.nom} ${u.prenoms}`.toLowerCase();
    return (
      (!fNom    || nom.includes(fNom.toLowerCase())) &&
      (!fMat    || u.mat.toLowerCase().includes(fMat.toLowerCase())) &&
      (!fOp     || u.operateur === fOp) &&
      (!fPoste  || u.poste.toLowerCase().includes(fPoste.toLowerCase())) &&
      (!fEmail  || u.email.toLowerCase().includes(fEmail.toLowerCase())) &&
      (!fTel    || u.tel.toLowerCase().includes(fTel.toLowerCase())) &&
      (!fStatut || (fStatut === 'Actif' ? u.actif : !u.actif))
    );
  }), [data, fNom, fMat, fOp, fPoste, fEmail, fTel, fStatut]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h5 className='mb-0'>Liste des utilisateurs</h5>
        <Button color='primary' className='d-flex align-items-center gap-1' onClick={openAdd}>
          <UserPlus size={16} /> Ajouter un utilisateur
        </Button>
      </div>

      <Card>
        <CardBody className='p-0'>
          <div className='table-responsive'>
            <Table className='table table-hover mb-0' style={{ tableLayout: 'fixed', minWidth: 900 }}>
              <thead className='table-light'>
                <tr>
                  <th style={{ width: '18%' }}>Nom & {"Prénoms"}</th>
                  <th style={{ width: '9%'  }}>Matricule</th>
                  <th style={{ width: '10%' }}>{"Opérateur"}</th>
                  <th style={{ width: '16%' }}>Poste</th>
                  <th style={{ width: '18%' }}>Email</th>
                  <th style={{ width: '12%' }}>{"Téléphone"}</th>
                  <th style={{ width: '8%'  }}>Statut</th>
                  <th style={{ width: '9%'  }} className='text-end'>Actions</th>
                </tr>
                <tr>
                  <th style={colStyle}>
                    <Input bsSize='sm' style={inputStyle} placeholder='Nom…' value={fNom}   onChange={(e) => handleNom(e.target.value)}   />
                  </th>
                  <th style={colStyle}>
                    <Input bsSize='sm' style={inputStyle} placeholder='Mat…' value={fMat}   onChange={(e) => handleMat(e.target.value)}   />
                  </th>
                  <th style={colStyle}>
                    <Combobox options={OP_COL_FILTER} value={OP_COL_FILTER.find((o) => o.value === fOp) ?? OP_COL_FILTER[0]} onChange={(opt) => handleOp(opt?.value ?? '')} isClearable={false} compact />
                  </th>
                  <th style={colStyle}>
                    <Input bsSize='sm' style={inputStyle} placeholder='Poste…' value={fPoste} onChange={(e) => handlePoste(e.target.value)} />
                  </th>
                  <th style={colStyle}>
                    <Input bsSize='sm' style={inputStyle} placeholder='Email…' value={fEmail} onChange={(e) => handleEmail(e.target.value)} />
                  </th>
                  <th style={colStyle}>
                    <Input bsSize='sm' style={inputStyle} placeholder='Tel…' value={fTel} onChange={(e) => handleTel(e.target.value)} />
                  </th>
                  <th style={colStyle}>
                    <Combobox options={STATUT_COL_FILTER} value={STATUT_COL_FILTER.find((o) => o.value === fStatut) ?? STATUT_COL_FILTER[0]} onChange={(opt) => handleStatut(opt?.value ?? '')} isClearable={false} compact />
                  </th>
                  <th style={colStyle} />
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr><td colSpan={8} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                ) : paginated.map((u) => (
                  <tr key={u.id}>
                    <td className='f-w-600' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{u.nom} {u.prenoms}</td>
                    <td><code>{u.mat}</code></td>
                    <td>{u.operateur}</td>
                    <td className='text-muted' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}><code>{u.poste}</code></td>
                    <td className='text-muted' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{u.email}</td>
                    <td className='text-muted'>{u.tel}</td>
                    <td><Badge color={u.actif ? 'success' : 'secondary'} className='badge-light'>{u.actif ? 'Actif' : 'Inactif'}</Badge></td>
                    <td className='text-end'>
                      <Button id={`ut-view-${u.id}`} color='light' size='sm' className='me-1 p-1' onClick={() => openView(u)}><Eye size={14} /></Button>
                      <UncontrolledTooltip target={`ut-view-${u.id}`}>Consulter</UncontrolledTooltip>
                      <Button id={`ut-edit-${u.id}`} color='light' size='sm' className='me-1 p-1' onClick={() => openEdit(u)}><Edit2 size={14} /></Button>
                      <UncontrolledTooltip target={`ut-edit-${u.id}`}>Modifier</UncontrolledTooltip>
                      <Button id={`ut-del-${u.id}`} color='light' size='sm' className='p-1' onClick={() => setDeleteTarget(u)}><Trash2 size={14} className='text-danger' /></Button>
                      <UncontrolledTooltip target={`ut-del-${u.id}`}>Supprimer</UncontrolledTooltip>
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
        title={viewing ? "Détails de l'utilisateur" : editing ? "Modifier l'utilisateur" : 'Ajouter un utilisateur'}
        onSave={viewing ? undefined : handleSave}
        onCancel={() => setModal(false)}
        cancelLabel={viewing ? 'Fermer' : 'Annuler'}
      >
          <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>

            {/* ── Identité ─────────────────────────────────── */}
            <p className='text-uppercase text-muted fw-semibold mb-2' style={{ fontSize: 11, letterSpacing: '0.08em' }}>
              Identité
            </p>
            <Row className='g-3'>
              <Col xs='6'>
                <FormGroup className='mb-0'>
                  <Label className='form-label fw-semibold mb-1'>
                    Nom <span className='text-danger'>*</span>
                  </Label>
                  <Input disabled={viewing} value={form.nom} onChange={(e) => setForm((f) => ({ ...f, nom: e.target.value }))} placeholder='BAMBA' />
                </FormGroup>
              </Col>
              <Col xs='6'>
                <FormGroup className='mb-0'>
                  <Label className='form-label fw-semibold mb-1'>Prénoms</Label>
                  <Input disabled={viewing} value={form.prenoms} onChange={(e) => setForm((f) => ({ ...f, prenoms: e.target.value }))} placeholder='Seydou' />
                </FormGroup>
              </Col>
              <Col xs='4'>
                <FormGroup className='mb-0'>
                  <Label className='form-label fw-semibold mb-1'>Genre</Label>
                  <Combobox isDisabled={viewing} options={GENRES_OPT} value={form.genre} onChange={(opt) => opt && setForm((f) => ({ ...f, genre: opt }))} />
                </FormGroup>
              </Col>
              <Col xs='4'>
                <FormGroup className='mb-0'>
                  <Label className='form-label fw-semibold mb-1'>Nationalité</Label>
                  <Input disabled={viewing} value={form.nat} onChange={(e) => setForm((f) => ({ ...f, nat: e.target.value }))} />
                </FormGroup>
              </Col>
              <Col xs='4'>
                <FormGroup className='mb-0'>
                  <Label className='form-label fw-semibold mb-1'>
                    Matricule <span className='text-danger'>*</span>
                  </Label>
                  <Input disabled={viewing} value={form.mat} onChange={(e) => setForm((f) => ({ ...f, mat: e.target.value }))} placeholder='AD001' />
                </FormGroup>
              </Col>
            </Row>

            <hr className='my-3' style={{ borderColor: 'transparent' }} />

            {/* ── Affectation ───────────────────────────────── */}
            <p className='text-uppercase text-muted fw-semibold mb-2' style={{ fontSize: 11, letterSpacing: '0.08em' }}>
              Affectation
            </p>
            <Row className='g-3'>
              <Col xs='12'>
                <Combobox
                  isDisabled={viewing}
                  label='Opérateur (non-encadreur)'
                  options={OPERATEURS_OPT}
                  value={form.operateur}
                  onChange={(opt) => {
                    if (!opt) return;
                    const postes = POSTES_PAR_OP[opt.value] ?? [];
                    setForm((f) => ({ ...f, operateur: opt, poste: postes[0] ?? f.poste }));
                  }}
                />
              </Col>
              <Col xs='12'>
                <Combobox isDisabled={viewing} label='Poste' options={POSTES_PAR_OP[form.operateur.value] ?? []} value={form.poste} onChange={(opt) => opt && setForm((f) => ({ ...f, poste: opt }))} />
              </Col>
            </Row>

            <hr className='my-3' style={{ borderColor: 'transparent' }} />

            {/* ── Contact ───────────────────────────────────── */}
            <p className='text-uppercase text-muted fw-semibold mb-2' style={{ fontSize: 11, letterSpacing: '0.08em' }}>
              Contact
            </p>
            <Row className='g-3'>
              <Col xs='7'>
                <FormGroup className='mb-0'>
                  <Label className='form-label fw-semibold mb-1'>Email</Label>
                  <Input disabled={viewing} type='email' value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder='user@firca.ci' />
                </FormGroup>
              </Col>
              <Col xs='5'>
                <FormGroup className='mb-0'>
                  <Label className='form-label fw-semibold mb-1'>Téléphone</Label>
                  <Input disabled={viewing} value={form.tel} onChange={(e) => setForm((f) => ({ ...f, tel: e.target.value }))} placeholder='+225 XX XX XX XX' />
                </FormGroup>
              </Col>
            </Row>

            {!editing && !viewing && (
              <>
                <hr className='my-3' style={{ borderColor: 'transparent' }} />

                {/* ── Accès ─────────────────────────────────── */}
                <p className='text-uppercase text-muted fw-semibold mb-2' style={{ fontSize: 11, letterSpacing: '0.08em' }}>
                  Accès
                </p>
                <FormGroup className='mb-0'>
                  <Label className='form-label fw-semibold mb-1'>
                    Mot de passe <span className='text-danger'>*</span>
                  </Label>
                  <Input type='password' value={form.mdp} onChange={(e) => setForm((f) => ({ ...f, mdp: e.target.value }))} placeholder='••••••••' />
                </FormGroup>
              </>
            )}

            <hr className='my-3' style={{ borderColor: 'transparent' }} />

            <FormGroup check className='mb-0'>
              <Input disabled={viewing} type='checkbox' id='actif-check' checked={form.actif} onChange={(e) => setForm((f) => ({ ...f, actif: e.target.checked }))} />
              <Label check htmlFor='actif-check' className='fw-semibold'>Compte actif</Label>
            </FormGroup>

          </Form>
      </AppDrawer>

      <ConfirmDelete
        isOpen={!!deleteTarget}
        message={`Voulez-vous vraiment supprimer l'utilisateur "${deleteTarget?.nom} ${deleteTarget?.prenoms}" ? Cette action est irréversible.`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
};

export default UtilisateurNonEncadreurList;
