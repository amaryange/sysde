'use client';

import { useState, useMemo } from 'react';
import { Card, CardBody, Table, Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { PlusCircle, Edit2, Trash2, Search } from 'react-feather';
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
  { value: 'FIRCA',  label: 'FIRCA'  },
];

const ROLE_FILTER: ComboboxOption[]     = [{ value: 'Tous', label: 'Tous les rôles' }, ...ROLES_OPT];
const OP_FILTER: ComboboxOption[]       = [{ value: 'Tous', label: 'Tous les opérateurs' }, ...OPERATEURS_OPT];
const STATUT_FILTER: ComboboxOption[]   = [{ value: 'Tous', label: 'Tous' }, { value: 'Actif', label: 'Actif' }, { value: 'Inactif', label: 'Inactif' }];

const INITIAL: Poste[] = [
  { id: 1, lib: 'Chef Secteur Abengourou',    cde: 'CS-ABG-001', secteur: 'Abengourou',   lot: '1, 2, 3', section: 'A, B', region: 'Indénié-Djuablin', departement: 'Abengourou',   sprefecture: 'Abengourou',   role: 'CS', operateur: 'SAPH',   actif: true  },
  { id: 2, lib: 'Contrôleur Formation L1',    cde: 'CF-ABG-001', secteur: 'Abengourou',   lot: '1',       section: 'A',    region: 'Indénié-Djuablin', departement: 'Abengourou',   sprefecture: 'Abengourou',   role: 'CF', operateur: 'SAPH',   actif: true  },
  { id: 3, lib: 'Moniteur Bondoukou 1',       cde: 'MO-BDK-001', secteur: 'Bondoukou',    lot: '4',       section: 'C',    region: 'Zanzan',           departement: 'Bondoukou',    sprefecture: 'Bondoukou',    role: 'MO', operateur: 'PALMCI', actif: true  },
  { id: 4, lib: 'Formateur Saigné Tanda',     cde: 'FS-TDA-001', secteur: 'Tanda',        lot: '5, 6',    section: 'D',    region: 'Zanzan',           departement: 'Tanda',        sprefecture: 'Tanda',        role: 'FS', operateur: 'SOGB',   actif: false },
  { id: 5, lib: "Équipe Spéciale Daoukro",    cde: 'ES-DKR-001', secteur: 'Daoukro',      lot: '7',       section: 'E',    region: "N'Zi-Comoé",      departement: 'Daoukro',      sprefecture: 'Daoukro',      role: 'ES', operateur: 'PALMCI', actif: true  },
  { id: 6, lib: 'Contrôleur Ordinaire Agni.', cde: 'CO-AGN-001', secteur: 'Agnibilékrou', lot: '8, 9',    section: 'F',    region: 'Indénié-Djuablin', departement: 'Agnibilékrou', sprefecture: 'Agnibilékrou', role: 'CO', operateur: 'SAPH',   actif: true  },
];

const PAGE_SIZE   = 6;
const emptyForm   = () => ({ lib: '', cde: '', secteur: '', lot: '', section: '', region: '', departement: '', sprefecture: '', role: ROLES_OPT[0], operateur: OPERATEURS_OPT[0], actif: true });

const PosteList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  const log = useLog();
  const [data,    setData   ] = useState<Poste[]>(INITIAL);
  const [modal,   setModal  ] = useState(false);
  const [editing, setEditing] = useState<Poste | null>(null);
  const [form,    setForm   ] = useState(emptyForm);

  const [search,    setSearch   ] = useState(() => searchParams.get('po_q')   ?? '');
  const [role,      setRole     ] = useState(() => searchParams.get('po_role') ?? 'Tous');
  const [operateur, setOperateur] = useState(() => searchParams.get('po_op')  ?? 'Tous');
  const [statut,    setStatut   ] = useState(() => searchParams.get('po_sta') ?? 'Tous');
  const [page,      setPage     ] = useState(() => Number(searchParams.get('po_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (v === null || v === '') params.delete(k); else params.set(k, v); });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const pushSearch   = useDebouncedCallback((v: string) => pushUrl({ po_q: v || null, po_page: null }), 300);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value); setPage(1); pushSearch(e.target.value); };
  const handleRole   = (v: string) => { setRole(v);      setPage(1); pushUrl({ po_role: v === 'Tous' ? null : v, po_page: null }); };
  const handleOp     = (v: string) => { setOperateur(v); setPage(1); pushUrl({ po_op:   v === 'Tous' ? null : v, po_page: null }); };
  const handleStatut = (v: string) => { setStatut(v);    setPage(1); pushUrl({ po_sta:  v === 'Tous' ? null : v, po_page: null }); };
  const handlePage   = (p: number) => { setPage(p); pushUrl({ po_page: p > 1 ? String(p) : null }); };

  const openAdd  = () => { setEditing(null); setForm(emptyForm()); setModal(true); };
  const openEdit = (p: Poste) => {
    setEditing(p);
    setForm({ lib: p.lib, cde: p.cde, secteur: p.secteur, lot: p.lot, section: p.section, region: p.region, departement: p.departement, sprefecture: p.sprefecture, actif: p.actif, role: ROLES_OPT.find((r) => r.value === p.role) ?? ROLES_OPT[0], operateur: OPERATEURS_OPT.find((o) => o.value === p.operateur) ?? OPERATEURS_OPT[0] });
    setModal(true);
  };
  const handleDelete = (id: number) => {
    if (!window.confirm('Supprimer ce poste ?')) return;
    const target = data.find((p) => p.id === id);
    setData((prev) => prev.filter((p) => p.id !== id));
    log('DELETE', 'Poste', `Suppression du poste ${target?.cde ?? id}`, target?.cde);
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

  const filtered = useMemo(() => data.filter((p) => {
    const q = search.toLowerCase();
    const matchQ  = p.lib.toLowerCase().includes(q) || p.cde.toLowerCase().includes(q) || p.secteur.toLowerCase().includes(q);
    const matchR  = role      === 'Tous' || p.role      === role;
    const matchO  = operateur === 'Tous' || p.operateur === operateur;
    const matchS  = statut    === 'Tous' || (statut === 'Actif' ? p.actif : !p.actif);
    return matchQ && matchR && matchO && matchS;
  }), [data, search, role, operateur, statut]);

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

      <Row className='mb-3 g-2'>
        <Col md='4'>
          <div className='input-group'>
            <span className='input-group-text bg-transparent'><Search size={15} className='text-muted' /></span>
            <Input type='text' placeholder='Rechercher par code, libellé, secteur…' value={search} onChange={handleSearch} />
          </div>
        </Col>
        <Col md='2'>
          <Combobox options={ROLE_FILTER}   value={ROLE_FILTER.find((o) => o.value === role)      ?? null} onChange={(opt) => handleRole(opt?.value ?? 'Tous')}   isClearable={false} placeholder='Rôle'      />
        </Col>
        <Col md='2'>
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
                <tr><th>Code</th><th>Libellé</th><th>Rôle</th><th>Opérateur</th><th>Secteur</th><th>Statut</th><th className='text-end'>Actions</th></tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr><td colSpan={7} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                ) : paginated.map((p) => (
                  <tr key={p.id}>
                    <td><code>{p.cde}</code></td>
                    <td className='f-w-600'>{p.lib}</td>
                    <td><Badge color='info' className='badge-light'>{p.role}</Badge></td>
                    <td>{p.operateur}</td>
                    <td className='text-muted'>{p.secteur}</td>
                    <td><Badge color={p.actif ? 'success' : 'secondary'} className='badge-light'>{p.actif ? 'Actif' : 'Inactif'}</Badge></td>
                    <td className='text-end'>
                      <Button color='light' size='sm' className='me-1 p-1' onClick={() => openEdit(p)}><Edit2 size={14} /></Button>
                      <Button color='light' size='sm' className='p-1' onClick={() => handleDelete(p.id)}><Trash2 size={14} className='text-danger' /></Button>
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
        <ModalHeader toggle={() => setModal(false)}>{editing ? 'Modifier le poste' : 'Ajouter un poste'}</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <Row>
              <Col md='8'><FormGroup><Label>Libellé</Label><Input value={form.lib} onChange={(e) => setForm((f) => ({ ...f, lib: e.target.value }))} placeholder='Ex: Chef Secteur Abengourou' /></FormGroup></Col>
              <Col md='4'><FormGroup><Label>Code <span className='text-danger'>*</span></Label><Input value={form.cde} onChange={(e) => setForm((f) => ({ ...f, cde: e.target.value }))} placeholder='CS-ABG-001' /></FormGroup></Col>
            </Row>
            <Row>
              <Col md='6'><Combobox label='Rôle'      options={ROLES_OPT}     value={form.role}      onChange={(opt) => opt && setForm((f) => ({ ...f, role: opt }))}      /></Col>
              <Col md='6'><Combobox label='Opérateur' options={OPERATEURS_OPT} value={form.operateur} onChange={(opt) => opt && setForm((f) => ({ ...f, operateur: opt }))} /></Col>
            </Row>
            <Row>
              <Col md='4'><FormGroup><Label>Secteur</Label>   <Input value={form.secteur}     onChange={(e) => setForm((f) => ({ ...f, secteur: e.target.value }))}     /></FormGroup></Col>
              <Col md='4'><FormGroup><Label>Lot(s)</Label>    <Input value={form.lot}         onChange={(e) => setForm((f) => ({ ...f, lot: e.target.value }))}         placeholder='Ex: 1, 2, 3' /></FormGroup></Col>
              <Col md='4'><FormGroup><Label>Section(s)</Label><Input value={form.section}     onChange={(e) => setForm((f) => ({ ...f, section: e.target.value }))}     placeholder='Ex: A, B'    /></FormGroup></Col>
            </Row>
            <Row>
              <Col md='4'><FormGroup><Label>Région</Label>         <Input value={form.region}      onChange={(e) => setForm((f) => ({ ...f, region: e.target.value }))}      /></FormGroup></Col>
              <Col md='4'><FormGroup><Label>Département</Label>    <Input value={form.departement} onChange={(e) => setForm((f) => ({ ...f, departement: e.target.value }))} /></FormGroup></Col>
              <Col md='4'><FormGroup><Label>Sous-préfecture</Label><Input value={form.sprefecture} onChange={(e) => setForm((f) => ({ ...f, sprefecture: e.target.value }))} /></FormGroup></Col>
            </Row>
            <FormGroup check>
              <Input type='checkbox' checked={form.actif} onChange={(e) => setForm((f) => ({ ...f, actif: e.target.checked }))} />
              <Label check>Poste actif</Label>
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

export default PosteList;
