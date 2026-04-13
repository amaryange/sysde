'use client';

import { useState, useMemo } from 'react';
import { Card, CardBody, Table, Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { PlusCircle, Edit2, Trash2, Search } from 'react-feather';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppPagination from '@/Component/Common/AppPagination';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import DateInput from '@/Component/Common/DateInput';
import { useDebouncedCallback } from '@/hooks/useDebouncedCallback';
import { useLog } from '@/hooks/useLog';

type Contrat = { id: number; num: string; operateur: string; debut: string; fin: string; signature: string; montant: number; statut: boolean };

const OPERATEURS_OPT: ComboboxOption[] = [
  { value: 'SAPH',    label: 'SAPH'    },
  { value: 'PALMCI',  label: 'PALMCI'  },
  { value: 'SOGB',    label: 'SOGB'    },
  { value: 'FIRCA',   label: 'FIRCA'   },
  { value: 'APROMAC', label: 'APROMAC' },
];

const OP_FILTER: ComboboxOption[]     = [{ value: 'Tous', label: 'Tous les opérateurs' }, ...OPERATEURS_OPT];
const STATUT_FILTER: ComboboxOption[] = [{ value: 'Tous', label: 'Tous' }, { value: 'Actif', label: 'Actif' }, { value: 'Cloture', label: 'Clôturé' }];

const INITIAL: Contrat[] = [
  { id: 1, num: 'CTR-2024-001', operateur: 'SAPH',    debut: '2024-01-01', fin: '2024-12-31', signature: '2023-12-15', montant: 150000000, statut: true  },
  { id: 2, num: 'CTR-2024-002', operateur: 'PALMCI',  debut: '2024-02-01', fin: '2024-12-31', signature: '2024-01-20', montant: 85000000,  statut: true  },
  { id: 3, num: 'CTR-2023-005', operateur: 'SOGB',    debut: '2023-06-01', fin: '2024-05-31', signature: '2023-05-10', montant: 60000000,  statut: false },
  { id: 4, num: 'CTR-2024-003', operateur: 'FIRCA',   debut: '2024-03-01', fin: '2025-02-28', signature: '2024-02-25', montant: 200000000, statut: true  },
  { id: 5, num: 'CTR-2024-004', operateur: 'APROMAC', debut: '2024-04-01', fin: '2024-09-30', signature: '2024-03-28', montant: 45000000,  statut: true  },
];

const PAGE_SIZE   = 6;
const emptyForm   = () => ({ num: '', operateur: OPERATEURS_OPT[0], debut: '', fin: '', signature: '', montant: 0, statut: true });
const fmtMontant  = (n: number) => new Intl.NumberFormat('fr-CI', { style: 'currency', currency: 'XOF', maximumFractionDigits: 0 }).format(n);

const ContratList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  const log = useLog();
  const [data,    setData   ] = useState<Contrat[]>(INITIAL);
  const [modal,   setModal  ] = useState(false);
  const [editing, setEditing] = useState<Contrat | null>(null);
  const [form,    setForm   ] = useState(emptyForm);

  const [search,    setSearch   ] = useState(() => searchParams.get('ct_q')   ?? '');
  const [operateur, setOperateur] = useState(() => searchParams.get('ct_op')  ?? 'Tous');
  const [statut,    setStatut   ] = useState(() => searchParams.get('ct_sta') ?? 'Tous');
  const [page,      setPage     ] = useState(() => Number(searchParams.get('ct_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (v === null || v === '') params.delete(k); else params.set(k, v); });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const pushSearch   = useDebouncedCallback((v: string) => pushUrl({ ct_q: v || null, ct_page: null }), 300);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value); setPage(1); pushSearch(e.target.value); };
  const handleOp     = (v: string) => { setOperateur(v); setPage(1); pushUrl({ ct_op:  v === 'Tous' ? null : v, ct_page: null }); };
  const handleStatut = (v: string) => { setStatut(v);    setPage(1); pushUrl({ ct_sta: v === 'Tous' ? null : v, ct_page: null }); };
  const handlePage   = (p: number) => { setPage(p); pushUrl({ ct_page: p > 1 ? String(p) : null }); };

  const openAdd  = () => { setEditing(null); setForm(emptyForm()); setModal(true); };
  const openEdit = (c: Contrat) => {
    setEditing(c);
    setForm({ num: c.num, debut: c.debut, fin: c.fin, signature: c.signature, montant: c.montant, statut: c.statut, operateur: OPERATEURS_OPT.find((o) => o.value === c.operateur) ?? OPERATEURS_OPT[0] });
    setModal(true);
  };
  const handleDelete = (id: number) => {
    if (!window.confirm('Supprimer ce contrat ?')) return;
    const target = data.find((c) => c.id === id);
    setData((p) => p.filter((c) => c.id !== id));
    log('DELETE', 'Contrat', `Suppression du contrat ${target?.num ?? id}`, target?.num);
  };
  const handleSave = () => {
    if (!form.num.trim() || !form.debut || !form.fin) return;
    const payload = { num: form.num, operateur: form.operateur.value, debut: form.debut, fin: form.fin, signature: form.signature, montant: form.montant, statut: form.statut };
    if (editing) {
      setData((p) => p.map((c) => c.id === editing.id ? { ...c, ...payload } : c));
      log('UPDATE', 'Contrat', `Modification du contrat ${form.num}`, form.num);
    } else {
      const nextId = Math.max(0, ...data.map((c) => c.id)) + 1;
      setData((p) => [...p, { id: nextId, ...payload }]);
      log('CREATE', 'Contrat', `Création du contrat ${form.num} — ${form.operateur.value}`, form.num);
    }
    setModal(false);
  };

  const filtered = useMemo(() => data.filter((c) => {
    const q = search.toLowerCase();
    const matchQ  = c.num.toLowerCase().includes(q) || c.operateur.toLowerCase().includes(q);
    const matchO  = operateur === 'Tous' || c.operateur === operateur;
    const matchS  = statut   === 'Tous' || (statut === 'Actif' ? c.statut : !c.statut);
    return matchQ && matchO && matchS;
  }), [data, search, operateur, statut]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h5 className='mb-0'>Liste des contrats</h5>
        <Button color='primary' className='d-flex align-items-center gap-1' onClick={openAdd}>
          <PlusCircle size={16} /> Ajouter contrat
        </Button>
      </div>

      <Row className='mb-3 g-2'>
        <Col md='4'>
          <div className='input-group'>
            <span className='input-group-text bg-transparent'><Search size={15} className='text-muted' /></span>
            <Input type='text' placeholder='Rechercher par numéro, opérateur…' value={search} onChange={handleSearch} />
          </div>
        </Col>
        <Col md='3'>
          <Combobox options={OP_FILTER}     value={OP_FILTER.find((o) => o.value === operateur)  ?? null} onChange={(opt) => handleOp(opt?.value ?? 'Tous')}     isClearable={false} placeholder='Opérateur' />
        </Col>
        <Col md='2'>
          <Combobox options={STATUT_FILTER} value={STATUT_FILTER.find((o) => o.value === statut) ?? null} onChange={(opt) => handleStatut(opt?.value ?? 'Tous')} isClearable={false} placeholder='Statut'    />
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
                <tr><th>Numéro</th><th>Opérateur</th><th>Début</th><th>Fin</th><th>Montant</th><th>Statut</th><th className='text-end'>Actions</th></tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr><td colSpan={7} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                ) : paginated.map((c) => (
                  <tr key={c.id}>
                    <td className='f-w-600'><code>{c.num}</code></td>
                    <td>{c.operateur}</td>
                    <td className='text-muted'>{c.debut}</td>
                    <td className='text-muted'>{c.fin}</td>
                    <td>{fmtMontant(c.montant)}</td>
                    <td><Badge color={c.statut ? 'success' : 'secondary'} className='badge-light'>{c.statut ? 'Actif' : 'Clôturé'}</Badge></td>
                    <td className='text-end'>
                      <Button color='light' size='sm' className='me-1 p-1' onClick={() => openEdit(c)}><Edit2 size={14} /></Button>
                      <Button color='light' size='sm' className='p-1' onClick={() => handleDelete(c.id)}><Trash2 size={14} className='text-danger' /></Button>
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
        <ModalHeader toggle={() => setModal(false)}>{editing ? 'Modifier le contrat' : 'Ajouter un contrat'}</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <Row>
              <Col md='6'><FormGroup><Label>Numéro contrat <span className='text-danger'>*</span></Label><Input value={form.num} onChange={(e) => setForm((f) => ({ ...f, num: e.target.value }))} placeholder='CTR-2024-001' /></FormGroup></Col>
              <Col md='6'><Combobox label='Opérateur' options={OPERATEURS_OPT} value={form.operateur} onChange={(opt) => opt && setForm((f) => ({ ...f, operateur: opt }))} /></Col>
            </Row>
            <Row>
              <Col md='4'><DateInput label='Début'     required value={form.debut}     onChange={(v) => setForm((f) => ({ ...f, debut: v }))}     /></Col>
              <Col md='4'><DateInput label='Fin'       required value={form.fin}       onChange={(v) => setForm((f) => ({ ...f, fin: v }))}       /></Col>
              <Col md='4'><DateInput label='Signature'          value={form.signature} onChange={(v) => setForm((f) => ({ ...f, signature: v }))} /></Col>
            </Row>
            <FormGroup><Label>Montant (FCFA)</Label><Input type='number' min={0} value={form.montant} onChange={(e) => setForm((f) => ({ ...f, montant: Number(e.target.value) }))} /></FormGroup>
            <FormGroup check>
              <Input type='checkbox' checked={form.statut} onChange={(e) => setForm((f) => ({ ...f, statut: e.target.checked }))} />
              <Label check>Contrat actif</Label>
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

export default ContratList;
