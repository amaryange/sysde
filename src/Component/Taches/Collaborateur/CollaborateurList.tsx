'use client';

import { useState, useMemo } from 'react';
import { Card, CardBody, Table, Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { UserPlus, Edit2, Trash2, Search } from 'react-feather';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppPagination from '@/Component/Common/AppPagination';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import { useDebouncedCallback } from '@/hooks/useDebouncedCallback';
import { useLog } from '@/hooks/useLog';

type ChefDepartement = { id: number; nom: string; prenoms: string; genre: string; nat: string; mat: string; email: string; tel: string; poste: string; operateur: string; actif: boolean };

// Opérateurs encadreurs uniquement (pas FIRCA ni APROMAC)
const OPERATEURS_OPT: ComboboxOption[] = [
  { value: 'SAPH',   label: 'SAPH'   },
  { value: 'PALMCI', label: 'PALMCI' },
  { value: 'SOGB',   label: 'SOGB'   },
];

const POSTES_OPT: ComboboxOption[] = [
  { value: 'CD-SAPH-001',   label: 'CD-SAPH-001 — Chef Département SAPH'   },
  { value: 'CD-PMC-001',    label: 'CD-PMC-001 — Chef Département PALMCI'  },
  { value: 'CD-SOGB-001',   label: 'CD-SOGB-001 — Chef Département SOGB'   },
];

const GENRES_OPT: ComboboxOption[] = [
  { value: 'M', label: 'Masculin' },
  { value: 'F', label: 'Féminin'  },
];

const OP_FILTER: ComboboxOption[]     = [{ value: 'Tous', label: 'Tous les opérateurs' }, ...OPERATEURS_OPT];
const STATUT_FILTER: ComboboxOption[] = [{ value: 'Tous', label: 'Tous' }, { value: 'Actif', label: 'Actif' }, { value: 'Inactif', label: 'Inactif' }];

const INITIAL: ChefDepartement[] = [
  { id: 1, nom: 'KONAN',   prenoms: 'Brou Édouard', genre: 'M', nat: 'Ivoirienne', mat: 'CD001', email: 'e.konan@saph.ci',    tel: '+225 07 11 22 33', poste: 'CD-SAPH-001',  operateur: 'SAPH',   actif: true  },
  { id: 2, nom: 'ASSI',    prenoms: 'Marie-Claire',  genre: 'F', nat: 'Ivoirienne', mat: 'CD002', email: 'm.assi@palmci.ci',   tel: '+225 05 44 55 66', poste: 'CD-PMC-001',   operateur: 'PALMCI', actif: true  },
  { id: 3, nom: 'GNANGUI', prenoms: 'Patrice',       genre: 'M', nat: 'Ivoirienne', mat: 'CD003', email: 'p.gnangui@sogb.ci', tel: '+225 01 77 88 99', poste: 'CD-SOGB-001',  operateur: 'SOGB',   actif: false },
];

const PAGE_SIZE = 6;
const emptyForm = () => ({ nom: '', prenoms: '', genre: GENRES_OPT[0], nat: 'Ivoirienne', mat: '', mdp: '', email: '', tel: '', poste: POSTES_OPT[0], operateur: OPERATEURS_OPT[0], actif: true });

const ChefDepartementList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  const log = useLog();
  const [data,    setData   ] = useState<ChefDepartement[]>(INITIAL);
  const [modal,   setModal  ] = useState(false);
  const [editing, setEditing] = useState<ChefDepartement | null>(null);
  const [form,    setForm   ] = useState<ReturnType<typeof emptyForm>>(emptyForm);

  const [search,    setSearch   ] = useState(() => searchParams.get('cd_q')   ?? '');
  const [operateur, setOperateur] = useState(() => searchParams.get('cd_op')  ?? 'Tous');
  const [statut,    setStatut   ] = useState(() => searchParams.get('cd_sta') ?? 'Tous');
  const [page,      setPage     ] = useState(() => Number(searchParams.get('cd_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (v === null || v === '') params.delete(k); else params.set(k, v); });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const pushSearch   = useDebouncedCallback((v: string) => pushUrl({ cd_q: v || null, cd_page: null }), 300);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value); setPage(1); pushSearch(e.target.value); };
  const handleOp     = (v: string) => { setOperateur(v); setPage(1); pushUrl({ cd_op:  v === 'Tous' ? null : v, cd_page: null }); };
  const handleStatut = (v: string) => { setStatut(v);    setPage(1); pushUrl({ cd_sta: v === 'Tous' ? null : v, cd_page: null }); };
  const handlePage   = (p: number) => { setPage(p); pushUrl({ cd_page: p > 1 ? String(p) : null }); };

  const openAdd  = () => { setEditing(null); setForm(emptyForm()); setModal(true); };
  const openEdit = (u: ChefDepartement) => {
    setEditing(u);
    setForm({ nom: u.nom, prenoms: u.prenoms, nat: u.nat, mat: u.mat, mdp: '', email: u.email, tel: u.tel, actif: u.actif, genre: GENRES_OPT.find((g) => g.value === u.genre) ?? GENRES_OPT[0], poste: POSTES_OPT.find((p) => p.value === u.poste) ?? POSTES_OPT[0], operateur: OPERATEURS_OPT.find((o) => o.value === u.operateur) ?? OPERATEURS_OPT[0] });
    setModal(true);
  };
  const handleDelete = (id: number) => {
    if (!window.confirm('Supprimer ce chef de département ?')) return;
    const target = data.find((u) => u.id === id);
    setData((p) => p.filter((u) => u.id !== id));
    log('DELETE', 'Utilisateur', `Suppression du chef de département ${target?.nom ?? ''} ${target?.prenoms ?? ''} (${target?.mat ?? id})`, target?.mat);
  };
  const handleSave = () => {
    if (!form.nom.trim() || !form.mat.trim()) return;
    const payload = { nom: form.nom, prenoms: form.prenoms, genre: form.genre.value, nat: form.nat, mat: form.mat, email: form.email, tel: form.tel, poste: form.poste.value, operateur: form.operateur.value, actif: form.actif };
    if (editing) {
      setData((p) => p.map((u) => u.id === editing.id ? { ...u, ...payload } : u));
      log('UPDATE', 'Utilisateur', `Modification du chef de département ${form.nom} ${form.prenoms} (${form.mat})`, form.mat);
    } else {
      const nextId = Math.max(0, ...data.map((u) => u.id)) + 1;
      setData((p) => [...p, { id: nextId, ...payload }]);
      log('CREATE', 'Utilisateur', `Création du chef de département ${form.nom} ${form.prenoms} — ${form.operateur.value}`, form.mat);
    }
    setModal(false);
  };

  const filtered = useMemo(() => data.filter((u) => {
    const q = search.toLowerCase();
    const matchQ = u.nom.toLowerCase().includes(q) || u.prenoms.toLowerCase().includes(q) || u.mat.toLowerCase().includes(q);
    const matchO = operateur === 'Tous' || u.operateur === operateur;
    const matchS = statut   === 'Tous' || (statut === 'Actif' ? u.actif : !u.actif);
    return matchQ && matchO && matchS;
  }), [data, search, operateur, statut]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h5 className='mb-0'>Liste des chefs de département</h5>
        <Button color='primary' className='d-flex align-items-center gap-1' onClick={openAdd}>
          <UserPlus size={16} /> Ajouter un chef de département
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
          <Combobox options={OP_FILTER}     value={OP_FILTER.find((o) => o.value === operateur)   ?? null} onChange={(opt) => handleOp(opt?.value ?? 'Tous')}     isClearable={false} placeholder='Opérateur' />
        </Col>
        <Col md='2'>
          <Combobox options={STATUT_FILTER} value={STATUT_FILTER.find((o) => o.value === statut)  ?? null} onChange={(opt) => handleStatut(opt?.value ?? 'Tous')} isClearable={false} placeholder='Statut'    />
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
                <tr>
                  <th>Nom & Prénoms</th><th>Matricule</th><th>Opérateur</th><th>Poste</th><th>Email</th><th>Téléphone</th><th>Statut</th><th className='text-end'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr><td colSpan={8} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                ) : paginated.map((u) => (
                  <tr key={u.id}>
                    <td className='f-w-600'>{u.nom} {u.prenoms}</td>
                    <td><code>{u.mat}</code></td>
                    <td>{u.operateur}</td>
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
        <ModalHeader toggle={() => setModal(false)}>{editing ? 'Modifier le chef de département' : 'Ajouter un chef de département'}</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <Row>
              <Col md='6'><FormGroup><Label>Nom <span className='text-danger'>*</span></Label><Input value={form.nom}     onChange={(e) => setForm((f) => ({ ...f, nom: e.target.value }))}     placeholder='KONAN' /></FormGroup></Col>
              <Col md='6'><FormGroup><Label>Prénoms</Label>                                   <Input value={form.prenoms} onChange={(e) => setForm((f) => ({ ...f, prenoms: e.target.value }))} placeholder='Brou Édouard' /></FormGroup></Col>
            </Row>
            <Row>
              <Col md='4'><Combobox label='Genre' options={GENRES_OPT} value={form.genre} onChange={(opt) => opt && setForm((f) => ({ ...f, genre: opt }))} /></Col>
              <Col md='4'><FormGroup><Label>Nationalité</Label><Input value={form.nat} onChange={(e) => setForm((f) => ({ ...f, nat: e.target.value }))} /></FormGroup></Col>
              <Col md='4'><FormGroup><Label>Matricule <span className='text-danger'>*</span></Label><Input value={form.mat} onChange={(e) => setForm((f) => ({ ...f, mat: e.target.value }))} placeholder='CD001' /></FormGroup></Col>
            </Row>
            <Row>
              <Col md='6'><Combobox label='Opérateur (encadreur)' options={OPERATEURS_OPT} value={form.operateur} onChange={(opt) => opt && setForm((f) => ({ ...f, operateur: opt }))} /></Col>
              <Col md='6'><Combobox label='Poste' options={POSTES_OPT} value={form.poste} onChange={(opt) => opt && setForm((f) => ({ ...f, poste: opt }))} /></Col>
            </Row>
            <Row>
              <Col md='6'><FormGroup><Label>Email</Label>    <Input type='email' value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder='user@operateur.ci' /></FormGroup></Col>
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

export default ChefDepartementList;
