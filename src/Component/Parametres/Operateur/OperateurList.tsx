'use client';

import { useState, useMemo } from 'react';
import { Card, CardBody, Table, Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { UserPlus, Edit2, Trash2, Search } from 'react-feather';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppPagination from '@/Component/Common/AppPagination';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import { useDebouncedCallback } from '@/hooks/useDebouncedCallback';
import { useLog } from '@/hooks/useLog';

type Operateur = { id: number; rs: string; acronyme: string; adresse: string; email: string; tel: string; encadreur: boolean };

const INITIAL: Operateur[] = [
  { id: 1, rs: 'ASSOCIATION DES PROFESSIONNELS',                                     acronyme: 'APROMAC', adresse: '12 Bd Lagunaire, Abidjan',    email: 'contact@saph.ci', tel: '01020304', encadreur: false },
  { id: 2, rs: 'FONDS INTERPROFESSIONNEL POUR LA RECHERCHE ET LE CONSEIL AGRICOLE', acronyme: 'FIRCA',   adresse: '01 BP 3726 Abidjan 01',        email: 'info@palmci.ci',  tel: '05060708', encadreur: false },
  { id: 3, rs: 'SOCIETE AFRICAINE DE PLANTATION DHEVEA',                             acronyme: 'SAPH',    adresse: '08 BP 2188 Abidjan 08',        email: 'contact@saph.ci', tel: '01020304', encadreur: true  },
  { id: 4, rs: 'PALMCI',                                                              acronyme: 'PMC',     adresse: '15 Rue des Palmiers, Abidjan', email: 'info@palmci.ci',  tel: '05060708', encadreur: true  },
  { id: 5, rs: 'SAPH',                                                                acronyme: 'SPH',     adresse: '08 BP 2188 Abidjan 08',        email: 'contact@saph.ci', tel: '01020304', encadreur: true  },
  { id: 6, rs: 'PALMCI',                                                              acronyme: 'PMC',     adresse: '15 Rue des Palmiers, Abidjan', email: 'info@palmci.ci',  tel: '05060708', encadreur: true  },
  { id: 7, rs: 'SOCIETE DE CAOUTCHOUC DE GRAND-BEREBY',                              acronyme: 'SOGB',    adresse: 'Grand-Béréby, Sud-Ouest',      email: 'sogb@sogb.ci',    tel: '07080910', encadreur: true  },
  { id: 8, rs: 'COMPAGNIE HEVECAM',                                                  acronyme: 'HVCM',    adresse: 'Niété, Cameroun',              email: 'hevecam@hvc.ci',  tel: '03040506', encadreur: false },
];

const PAGE_SIZE = 6;

const ENC_OPTIONS: ComboboxOption[] = [
  { value: 'Tous', label: 'Tous'         },
  { value: 'Oui',  label: 'Encadreur'    },
  { value: 'Non',  label: 'Non-encadreur'},
];

const empty = (): Omit<Operateur, 'id'> => ({ rs: '', acronyme: '', adresse: '', email: '', tel: '', encadreur: false });

const OperateurList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  const log = useLog();
  const [data,    setData   ] = useState<Operateur[]>(INITIAL);
  const [modal,   setModal  ] = useState(false);
  const [editing, setEditing] = useState<Operateur | null>(null);
  const [form,    setForm   ] = useState(empty);

  const [search, setSearch] = useState(() => searchParams.get('op_q')   ?? '');
  const [enc,    setEnc   ] = useState(() => searchParams.get('op_enc') ?? 'Tous');
  const [page,   setPage  ] = useState(() => Number(searchParams.get('op_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (v === null || v === '') params.delete(k); else params.set(k, v); });
    const qs = params.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ''}`, { scroll: false });
  };

  const pushSearch = useDebouncedCallback((v: string) => pushUrl({ op_q: v || null, op_page: null }), 300);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value); setPage(1); pushSearch(e.target.value); };
  const handleEnc    = (v: string) => { setEnc(v); setPage(1); pushUrl({ op_enc: v === 'Tous' ? null : v, op_page: null }); };
  const handlePage   = (p: number) => { setPage(p); pushUrl({ op_page: p > 1 ? String(p) : null }); };

  const openAdd  = () => { setEditing(null); setForm(empty()); setModal(true); };
  const openEdit = (o: Operateur) => { setEditing(o); setForm({ rs: o.rs, acronyme: o.acronyme, adresse: o.adresse, email: o.email, tel: o.tel, encadreur: o.encadreur }); setModal(true); };
  const handleDelete = (id: number) => {
    if (!window.confirm('Supprimer cet opérateur ?')) return;
    const target = data.find((o) => o.id === id);
    setData((p) => p.filter((o) => o.id !== id));
    log('DELETE', 'Operateur', `Suppression de l'opérateur ${target?.acronyme ?? id}`, target?.acronyme);
  };
  const handleSave = () => {
    if (!form.rs.trim() || !form.acronyme.trim()) return;
    if (editing) {
      setData((p) => p.map((o) => o.id === editing.id ? { ...o, ...form } : o));
      log('UPDATE', 'Operateur', `Modification de l'opérateur ${form.acronyme}`, form.acronyme);
    } else {
      const nextId = Math.max(0, ...data.map((o) => o.id)) + 1;
      setData((p) => [...p, { id: nextId, ...form }]);
      log('CREATE', 'Operateur', `Création de l'opérateur ${form.acronyme} — ${form.rs}`, form.acronyme);
    }
    setModal(false);
  };

  const filtered = useMemo(() => data.filter((o) => {
    const q = search.toLowerCase();
    const matchQ   = o.rs.toLowerCase().includes(q) || o.acronyme.toLowerCase().includes(q);
    const matchEnc = enc === 'Tous' || (enc === 'Oui' ? o.encadreur : !o.encadreur);
    return matchQ && matchEnc;
  }), [data, search, enc]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h5 className='mb-0'>Liste des opérateurs</h5>
        <Button color='primary' className='d-flex align-items-center gap-1' onClick={openAdd}>
          <UserPlus size={16} /> Ajouter opérateur
        </Button>
      </div>

      <Row className='mb-3 g-2'>
        <Col md='5'>
          <div className='input-group'>
            <span className='input-group-text bg-transparent'><Search size={15} className='text-muted' /></span>
            <Input type='text' placeholder='Rechercher par raison sociale ou acronyme…' value={search} onChange={handleSearch} />
          </div>
        </Col>
        <Col md='3'>
          <Combobox options={ENC_OPTIONS} value={ENC_OPTIONS.find((o) => o.value === enc) ?? null} onChange={(opt) => handleEnc(opt?.value ?? 'Tous')} isClearable={false} placeholder='Encadreur' />
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
                  <th>Raison sociale</th><th>Acronyme</th><th>Email</th><th>Téléphone</th><th>Encadreur</th><th className='text-end'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr><td colSpan={6} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                ) : paginated.map((o) => (
                  <tr key={o.id}>
                    <td className='f-w-600'>{o.rs}</td>
                    <td>{o.acronyme}</td>
                    <td className='text-muted'>{o.email}</td>
                    <td className='text-muted'>{o.tel}</td>
                    <td><Badge color={o.encadreur ? 'success' : 'secondary'} className='badge-light'>{o.encadreur ? 'Oui' : 'Non'}</Badge></td>
                    <td className='text-end'>
                      <Button color='light' size='sm' className='me-1 p-1' onClick={() => openEdit(o)}><Edit2 size={14} /></Button>
                      <Button color='light' size='sm' className='p-1' onClick={() => handleDelete(o.id)}><Trash2 size={14} className='text-danger' /></Button>
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

      <Modal isOpen={modal} toggle={() => setModal(false)}>
        <ModalHeader toggle={() => setModal(false)}>{editing ? "Modifier l'opérateur" : 'Ajouter un opérateur'}</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <FormGroup><Label>Raison sociale <span className='text-danger'>*</span></Label><Input value={form.rs}      onChange={(e) => setForm((f) => ({ ...f, rs: e.target.value }))}      placeholder='Ex: SAPH' /></FormGroup>
            <FormGroup><Label>Acronyme <span className='text-danger'>*</span></Label>      <Input value={form.acronyme} onChange={(e) => setForm((f) => ({ ...f, acronyme: e.target.value }))} placeholder='Ex: SPH'  /></FormGroup>
            <FormGroup><Label>Adresse</Label>                                               <Input value={form.adresse}  onChange={(e) => setForm((f) => ({ ...f, adresse: e.target.value }))}  /></FormGroup>
            <Row>
              <Col md='6'><FormGroup><Label>Email</Label>    <Input type='email' value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder='contact@exemple.ci'  /></FormGroup></Col>
              <Col md='6'><FormGroup><Label>Téléphone</Label><Input              value={form.tel}   onChange={(e) => setForm((f) => ({ ...f, tel: e.target.value }))}   placeholder='0X XX XX XX'          /></FormGroup></Col>
            </Row>
            <FormGroup check>
              <Input type='checkbox' checked={form.encadreur} onChange={(e) => setForm((f) => ({ ...f, encadreur: e.target.checked }))} />
              <Label check>Opérateur d'encadrement</Label>
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

export default OperateurList;
