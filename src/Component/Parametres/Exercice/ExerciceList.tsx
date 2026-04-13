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

type Exercice = { id: number; lib: string; annee: string; cloture: string; statut: boolean; contrat: string };

const CONTRATS_OPT: ComboboxOption[] = [
  { value: 'CTR-2024-001', label: 'CTR-2024-001 — SAPH'    },
  { value: 'CTR-2024-002', label: 'CTR-2024-002 — PALMCI'  },
  { value: 'CTR-2024-003', label: 'CTR-2024-003 — FIRCA'   },
  { value: 'CTR-2024-004', label: 'CTR-2024-004 — APROMAC' },
  { value: 'CTR-2023-005', label: 'CTR-2023-005 — SOGB'    },
];

const CONTRAT_FILTER: ComboboxOption[] = [{ value: 'Tous', label: 'Tous les contrats' }, ...CONTRATS_OPT];
const STATUT_FILTER: ComboboxOption[]  = [{ value: 'Tous', label: 'Tous' }, { value: 'EnCours', label: 'En cours' }, { value: 'Cloture', label: 'Clôturé' }];

const INITIAL: Exercice[] = [
  { id: 1, lib: 'Exercice 2024 S1', annee: '2024-01-01', cloture: '2024-06-30', statut: false, contrat: 'CTR-2024-001' },
  { id: 2, lib: 'Exercice 2024 S2', annee: '2024-07-01', cloture: '',           statut: true,  contrat: 'CTR-2024-001' },
  { id: 3, lib: 'Exercice 2024',    annee: '2024-02-01', cloture: '',           statut: true,  contrat: 'CTR-2024-002' },
  { id: 4, lib: 'Exercice 2024',    annee: '2024-03-01', cloture: '',           statut: true,  contrat: 'CTR-2024-003' },
  { id: 5, lib: 'Exercice 2023',    annee: '2023-06-01', cloture: '2024-05-31', statut: false, contrat: 'CTR-2023-005' },
];

const PAGE_SIZE = 6;
const emptyForm = () => ({ lib: '', annee: '', cloture: '', statut: true, contrat: CONTRATS_OPT[0] });

const ExerciceList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  const log = useLog();
  const [data,    setData   ] = useState<Exercice[]>(INITIAL);
  const [modal,   setModal  ] = useState(false);
  const [editing, setEditing] = useState<Exercice | null>(null);
  const [form,    setForm   ] = useState(emptyForm);

  const [search,  setSearch ] = useState(() => searchParams.get('ex_q')   ?? '');
  const [contrat, setContrat] = useState(() => searchParams.get('ex_ct')  ?? 'Tous');
  const [statut,  setStatut ] = useState(() => searchParams.get('ex_sta') ?? 'Tous');
  const [page,    setPage   ] = useState(() => Number(searchParams.get('ex_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (v === null || v === '') params.delete(k); else params.set(k, v); });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const pushSearch   = useDebouncedCallback((v: string) => pushUrl({ ex_q: v || null, ex_page: null }), 300);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value); setPage(1); pushSearch(e.target.value); };
  const handleContrat = (v: string) => { setContrat(v); setPage(1); pushUrl({ ex_ct:  v === 'Tous' ? null : v, ex_page: null }); };
  const handleStatut  = (v: string) => { setStatut(v);  setPage(1); pushUrl({ ex_sta: v === 'Tous' ? null : v, ex_page: null }); };
  const handlePage    = (p: number) => { setPage(p); pushUrl({ ex_page: p > 1 ? String(p) : null }); };

  const openAdd  = () => { setEditing(null); setForm(emptyForm()); setModal(true); };
  const openEdit = (e: Exercice) => {
    setEditing(e);
    setForm({ lib: e.lib, annee: e.annee, cloture: e.cloture, statut: e.statut, contrat: CONTRATS_OPT.find((c) => c.value === e.contrat) ?? CONTRATS_OPT[0] });
    setModal(true);
  };
  const handleDelete = (id: number) => {
    if (!window.confirm('Supprimer cet exercice ?')) return;
    const target = data.find((e) => e.id === id);
    setData((p) => p.filter((e) => e.id !== id));
    log('DELETE', 'Exercice', `Suppression de l'exercice ${target?.lib ?? id}`, target?.lib);
  };
  const handleSave = () => {
    if (!form.lib.trim() || !form.annee) return;
    const payload = { lib: form.lib, annee: form.annee, cloture: form.cloture, statut: form.statut, contrat: form.contrat.value };
    if (editing) {
      setData((p) => p.map((e) => e.id === editing.id ? { ...e, ...payload } : e));
      log('UPDATE', 'Exercice', `Modification de l'exercice ${form.lib}`, form.lib);
    } else {
      const nextId = Math.max(0, ...data.map((e) => e.id)) + 1;
      setData((p) => [...p, { id: nextId, ...payload }]);
      log('CREATE', 'Exercice', `Création de l'exercice ${form.lib} — ${form.contrat.value}`, form.lib);
    }
    setModal(false);
  };

  const filtered = useMemo(() => data.filter((e) => {
    const q = search.toLowerCase();
    const matchQ  = e.lib.toLowerCase().includes(q) || e.contrat.toLowerCase().includes(q);
    const matchC  = contrat === 'Tous' || e.contrat === contrat;
    const matchS  = statut  === 'Tous' || (statut === 'EnCours' ? e.statut : !e.statut);
    return matchQ && matchC && matchS;
  }), [data, search, contrat, statut]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h5 className='mb-0'>Liste des exercices</h5>
        <Button color='primary' className='d-flex align-items-center gap-1' onClick={openAdd}>
          <PlusCircle size={16} /> Ajouter exercice
        </Button>
      </div>

      <Row className='mb-3 g-2'>
        <Col md='4'>
          <div className='input-group'>
            <span className='input-group-text bg-transparent'><Search size={15} className='text-muted' /></span>
            <Input type='text' placeholder='Rechercher par libellé, contrat…' value={search} onChange={handleSearch} />
          </div>
        </Col>
        <Col md='3'>
          <Combobox options={CONTRAT_FILTER} value={CONTRAT_FILTER.find((o) => o.value === contrat) ?? null} onChange={(opt) => handleContrat(opt?.value ?? 'Tous')} isClearable={false} placeholder='Contrat' />
        </Col>
        <Col md='2'>
          <Combobox options={STATUT_FILTER}  value={STATUT_FILTER.find((o) => o.value === statut)   ?? null} onChange={(opt) => handleStatut(opt?.value ?? 'Tous')}  isClearable={false} placeholder='Statut'  />
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
                <tr><th>Libellé</th><th>Contrat</th><th>Début</th><th>Clôture</th><th>Statut</th><th className='text-end'>Actions</th></tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr><td colSpan={6} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                ) : paginated.map((e) => (
                  <tr key={e.id}>
                    <td className='f-w-600'>{e.lib}</td>
                    <td><code>{e.contrat}</code></td>
                    <td className='text-muted'>{e.annee}</td>
                    <td className='text-muted'>{e.cloture || '—'}</td>
                    <td><Badge color={e.statut ? 'success' : 'secondary'} className='badge-light'>{e.statut ? 'En cours' : 'Clôturé'}</Badge></td>
                    <td className='text-end'>
                      <Button color='light' size='sm' className='me-1 p-1' onClick={() => openEdit(e)}><Edit2 size={14} /></Button>
                      <Button color='light' size='sm' className='p-1' onClick={() => handleDelete(e.id)}><Trash2 size={14} className='text-danger' /></Button>
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
        <ModalHeader toggle={() => setModal(false)}>{editing ? "Modifier l'exercice" : 'Ajouter un exercice'}</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <FormGroup><Label>Libellé <span className='text-danger'>*</span></Label><Input value={form.lib} onChange={(e) => setForm((f) => ({ ...f, lib: e.target.value }))} placeholder='Ex: Exercice 2024 S1' /></FormGroup>
            <Combobox label='Contrat' options={CONTRATS_OPT} value={form.contrat} onChange={(opt) => opt && setForm((f) => ({ ...f, contrat: opt }))} />
            <Row>
              <Col md='6'><DateInput label='Date de début'   required value={form.annee}   onChange={(v) => setForm((f) => ({ ...f, annee: v }))}   /></Col>
              <Col md='6'><DateInput label='Date de clôture'          value={form.cloture} onChange={(v) => setForm((f) => ({ ...f, cloture: v }))} /></Col>
            </Row>
            <FormGroup check>
              <Input type='checkbox' checked={form.statut} onChange={(e) => setForm((f) => ({ ...f, statut: e.target.checked }))} />
              <Label check>Exercice en cours</Label>
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

export default ExerciceList;
