'use client';

import { useState, useMemo } from 'react';
import { Card, CardBody, Table, Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { UserPlus, Edit2, Trash2, Search } from 'react-feather';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppPagination from '@/Component/Common/AppPagination';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import { useDebouncedCallback } from '@/hooks/useDebouncedCallback';
import { useLog } from '@/hooks/useLog';

type Utilisateur = { id: number; nom: string; prenoms: string; genre: string; nat: string; mat: string; email: string; tel: string; poste: string; actif: boolean };

const POSTES_OPT: ComboboxOption[] = [
  { value: 'CS-ABG-001', label: 'CS-ABG-001 — Chef Secteur Abengourou'  },
  { value: 'CF-ABG-001', label: 'CF-ABG-001 — Contrôleur Formation'     },
  { value: 'MO-BDK-001', label: 'MO-BDK-001 — Moniteur Bondoukou'       },
  { value: 'FS-TDA-001', label: 'FS-TDA-001 — Formateur Tanda'          },
  { value: 'ES-DKR-001', label: 'ES-DKR-001 — Équipe Spéciale Daoukro'  },
  { value: 'CO-AGN-001', label: 'CO-AGN-001 — Contrôleur Agnibilékrou'  },
];

const GENRES_OPT: ComboboxOption[] = [
  { value: 'M', label: 'Masculin' },
  { value: 'F', label: 'Féminin'  },
];

const POSTE_FILTER: ComboboxOption[]  = [{ value: 'Tous', label: 'Tous les postes' }, ...POSTES_OPT];
const STATUT_FILTER: ComboboxOption[] = [{ value: 'Tous', label: 'Tous' }, { value: 'Actif', label: 'Actif' }, { value: 'Inactif', label: 'Inactif' }];

const INITIAL: Utilisateur[] = [
  { id: 1, nom: 'DELAFOSSE', prenoms: 'Arnaud',  genre: 'M', nat: 'Ivoirienne', mat: 'CS001', email: 'a.delafosse@saph.ci',  tel: '+225 07 01 23 45', poste: 'CS-ABG-001', actif: true  },
  { id: 2, nom: 'YAO',       prenoms: 'Konan',   genre: 'M', nat: 'Ivoirienne', mat: 'CF002', email: 'k.yao@saph.ci',         tel: '+225 05 78 90 12', poste: 'CF-ABG-001', actif: true  },
  { id: 3, nom: 'KOUASSI',   prenoms: 'Aya',     genre: 'F', nat: 'Ivoirienne', mat: 'MO003', email: 'a.kouassi@palmci.ci',   tel: '+225 07 34 56 78', poste: 'MO-BDK-001', actif: true  },
  { id: 4, nom: 'BAMBA',     prenoms: 'Moussa',  genre: 'M', nat: 'Ivoirienne', mat: 'FS004', email: 'm.bamba@sogb.ci',        tel: '+225 01 23 45 67', poste: 'FS-TDA-001', actif: false },
  { id: 5, nom: 'KOFFI',     prenoms: 'Adjoua',  genre: 'F', nat: 'Ivoirienne', mat: 'ES005', email: 'a.koffi@palmci.ci',     tel: '+225 05 89 01 23', poste: 'ES-DKR-001', actif: true  },
  { id: 6, nom: 'COULIBALY', prenoms: 'Drissa',  genre: 'M', nat: 'Ivoirienne', mat: 'CO006', email: 'd.coulibaly@saph.ci',   tel: '+225 07 45 67 89', poste: 'CO-AGN-001', actif: true  },
  { id: 7, nom: 'DIALLO',    prenoms: 'Fatou',   genre: 'F', nat: 'Ivoirienne', mat: 'MO007', email: 'f.diallo@palmci.ci',    tel: '+225 05 12 34 56', poste: 'MO-BDK-001', actif: false },
];

const PAGE_SIZE = 6;
const emptyForm = () => ({ nom: '', prenoms: '', genre: GENRES_OPT[0], nat: 'Ivoirienne', mat: '', mdp: '', email: '', tel: '', poste: POSTES_OPT[0], actif: true });

const UtilisateurList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  const log = useLog();
  const [data,    setData   ] = useState<Utilisateur[]>(INITIAL);
  const [modal,   setModal  ] = useState(false);
  const [editing, setEditing] = useState<Utilisateur | null>(null);
  const [form,    setForm   ] = useState<ReturnType<typeof emptyForm>>(emptyForm);

  const [search, setSearch] = useState(() => searchParams.get('ut_q')    ?? '');
  const [poste,  setPoste ] = useState(() => searchParams.get('ut_po')   ?? 'Tous');
  const [statut, setStatut] = useState(() => searchParams.get('ut_sta')  ?? 'Tous');
  const [page,   setPage  ] = useState(() => Number(searchParams.get('ut_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (v === null || v === '') params.delete(k); else params.set(k, v); });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const pushSearch   = useDebouncedCallback((v: string) => pushUrl({ ut_q: v || null, ut_page: null }), 300);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value); setPage(1); pushSearch(e.target.value); };
  const handlePoste  = (v: string) => { setPoste(v);  setPage(1); pushUrl({ ut_po:  v === 'Tous' ? null : v, ut_page: null }); };
  const handleStatut = (v: string) => { setStatut(v); setPage(1); pushUrl({ ut_sta: v === 'Tous' ? null : v, ut_page: null }); };
  const handlePage   = (p: number) => { setPage(p); pushUrl({ ut_page: p > 1 ? String(p) : null }); };

  const openAdd  = () => { setEditing(null); setForm(emptyForm()); setModal(true); };
  const openEdit = (u: Utilisateur) => {
    setEditing(u);
    setForm({ nom: u.nom, prenoms: u.prenoms, nat: u.nat, mat: u.mat, mdp: '', email: u.email, tel: u.tel, actif: u.actif, genre: GENRES_OPT.find((g) => g.value === u.genre) ?? GENRES_OPT[0], poste: POSTES_OPT.find((p) => p.value === u.poste) ?? POSTES_OPT[0] });
    setModal(true);
  };
  const handleDelete = (id: number) => {
    if (!window.confirm('Supprimer cet utilisateur ?')) return;
    const target = data.find((u) => u.id === id);
    setData((p) => p.filter((u) => u.id !== id));
    log('DELETE', 'Utilisateur', `Suppression de ${target?.nom ?? ''} ${target?.prenoms ?? ''} (${target?.mat ?? id})`, target?.mat);
  };
  const handleSave = () => {
    if (!form.nom.trim() || !form.mat.trim()) return;
    const payload = { nom: form.nom, prenoms: form.prenoms, genre: form.genre.value, nat: form.nat, mat: form.mat, email: form.email, tel: form.tel, poste: form.poste.value, actif: form.actif };
    if (editing) {
      setData((p) => p.map((u) => u.id === editing.id ? { ...u, ...payload } : u));
      log('UPDATE', 'Utilisateur', `Modification de ${form.nom} ${form.prenoms} (${form.mat})`, form.mat);
    } else {
      const nextId = Math.max(0, ...data.map((u) => u.id)) + 1;
      setData((p) => [...p, { id: nextId, ...payload }]);
      log('CREATE', 'Utilisateur', `Création de ${form.nom} ${form.prenoms} — poste ${form.poste.value}`, form.mat);
    }
    setModal(false);
  };

  const filtered = useMemo(() => data.filter((u) => {
    const q = search.toLowerCase();
    const matchQ = u.nom.toLowerCase().includes(q) || u.prenoms.toLowerCase().includes(q) || u.mat.toLowerCase().includes(q);
    const matchP = poste  === 'Tous' || u.poste === poste;
    const matchS = statut === 'Tous' || (statut === 'Actif' ? u.actif : !u.actif);
    return matchQ && matchP && matchS;
  }), [data, search, poste, statut]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h5 className='mb-0'>Liste des utilisateurs</h5>
        <Button color='primary' className='d-flex align-items-center gap-1' onClick={openAdd}>
          <UserPlus size={16} /> Ajouter utilisateur
        </Button>
      </div>

      <Row className='mb-3 g-2'>
        <Col md='4'>
          <div className='input-group'>
            <span className='input-group-text bg-transparent'><Search size={15} className='text-muted' /></span>
            <Input type='text' placeholder='Rechercher par nom, matricule…' value={search} onChange={handleSearch} />
          </div>
        </Col>
        <Col md='3'>
          <Combobox options={POSTE_FILTER}  value={POSTE_FILTER.find((o) => o.value === poste)   ?? null} onChange={(opt) => handlePoste(opt?.value ?? 'Tous')}  isClearable={false} placeholder='Poste'  />
        </Col>
        <Col md='2'>
          <Combobox options={STATUT_FILTER} value={STATUT_FILTER.find((o) => o.value === statut) ?? null} onChange={(opt) => handleStatut(opt?.value ?? 'Tous')} isClearable={false} placeholder='Statut' />
        </Col>
        <Col md='2' className='text-muted d-flex align-items-center'>
          <small>{filtered.length} résultat{filtered.length !== 1 ? 's' : ''}</small>
        </Col>
      </Row>

      <Card>
        <CardBody className='p-0'>
          <div className='table-responsive'>
            <Table className='table table-hover mb-0'>
              <thead className='table-light'>
                <tr><th>Nom & Prénoms</th><th>Matricule</th><th>Poste</th><th>Email</th><th>Téléphone</th><th>Statut</th><th className='text-end'>Actions</th></tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr><td colSpan={7} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                ) : paginated.map((u) => (
                  <tr key={u.id}>
                    <td className='f-w-600'>{u.nom} {u.prenoms}</td>
                    <td><code>{u.mat}</code></td>
                    <td className='text-muted'><code>{u.poste}</code></td>
                    <td className='text-muted'>{u.email}</td>
                    <td className='text-muted'>{u.tel}</td>
                    <td><Badge color={u.actif ? 'success' : 'secondary'} className='badge-light'>{u.actif ? 'Actif' : 'Inactif'}</Badge></td>
                    <td className='text-end'>
                      <Button color='light' size='sm' className='me-1 p-1' onClick={() => openEdit(u)}><Edit2 size={14} /></Button>
                      <Button color='light' size='sm' className='p-1' onClick={() => handleDelete(u.id)}><Trash2 size={14} className='text-danger' /></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className='px-3 pb-2'>
            <AppPagination currentPage={page} totalPages={totalPages} onPageChange={handlePage} />
          </div>
        </CardBody>
      </Card>

      <Modal isOpen={modal} toggle={() => setModal(false)} size='lg'>
        <ModalHeader toggle={() => setModal(false)}>{editing ? "Modifier l'utilisateur" : 'Ajouter un utilisateur'}</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <Row>
              <Col md='6'><FormGroup><Label>Nom <span className='text-danger'>*</span></Label><Input value={form.nom}     onChange={(e) => setForm((f) => ({ ...f, nom: e.target.value }))}     placeholder='DELAFOSSE' /></FormGroup></Col>
              <Col md='6'><FormGroup><Label>Prénoms</Label>                                   <Input value={form.prenoms} onChange={(e) => setForm((f) => ({ ...f, prenoms: e.target.value }))} placeholder='Arnaud'    /></FormGroup></Col>
            </Row>
            <Row>
              <Col md='4'><Combobox label='Genre' options={GENRES_OPT} value={form.genre} onChange={(opt) => opt && setForm((f) => ({ ...f, genre: opt }))} /></Col>
              <Col md='4'><FormGroup><Label>Nationalité</Label>                                      <Input value={form.nat} onChange={(e) => setForm((f) => ({ ...f, nat: e.target.value }))} /></FormGroup></Col>
              <Col md='4'><FormGroup><Label>Matricule <span className='text-danger'>*</span></Label><Input value={form.mat} onChange={(e) => setForm((f) => ({ ...f, mat: e.target.value }))} placeholder='CS001' /></FormGroup></Col>
            </Row>
            <Combobox label='Poste' options={POSTES_OPT} value={form.poste} onChange={(opt) => opt && setForm((f) => ({ ...f, poste: opt }))} />
            <Row>
              <Col md='6'><FormGroup><Label>Email</Label>    <Input type='email' value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder='user@exemple.ci'  /></FormGroup></Col>
              <Col md='6'><FormGroup><Label>Téléphone</Label><Input             value={form.tel}   onChange={(e) => setForm((f) => ({ ...f, tel: e.target.value }))}   placeholder='+225 XX XX XX XX' /></FormGroup></Col>
            </Row>
            {!editing && (
              <FormGroup><Label>Mot de passe <span className='text-danger'>*</span></Label><Input type='password' value={form.mdp} onChange={(e) => setForm((f) => ({ ...f, mdp: e.target.value }))} placeholder='••••••••' /></FormGroup>
            )}
            <FormGroup check>
              <Input type='checkbox' checked={form.actif} onChange={(e) => setForm((f) => ({ ...f, actif: e.target.checked }))} />
              <Label check>Compte actif</Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={handleSave}>Enregistrer</Button>
          <Button color='light' onClick={() => setModal(false)}>Annuler</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UtilisateurList;
