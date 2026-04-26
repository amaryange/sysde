'use client';

import { useState, useMemo } from 'react';
import { Card, CardBody, Table, Badge, Button, Form, FormGroup, Label, Input, Row, Col, Alert } from 'reactstrap';
import AppDrawer from '@/Component/Common/AppDrawer';
import { PlusCircle, Edit2, Trash2 } from 'react-feather';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppPagination from '@/Component/Common/AppPagination';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import DateInput from '@/Component/Common/DateInput';
import { useDebouncedCallback } from '@/hooks/useDebouncedCallback';
import { useLog } from '@/hooks/useLog';

type Exercice = { id: number; lib: string; annee: string; cloture: string; statut: boolean; contrat: string };

// Uniquement les contrats des opérateurs encadreurs
const CONTRATS_OPT: ComboboxOption[] = [
  { value: 'CTR-2024-001', label: 'CTR-2024-001 — SAPH'   },
  { value: 'CTR-2024-002', label: 'CTR-2024-002 — PALMCI' },
  { value: 'CTR-2023-005', label: 'CTR-2023-005 — SOGB'   },
];

// Dates des contrats — miroir de ContratList (remplacé par API quand la BDD sera branchée)
const CONTRATS_DATES: Record<string, { debut: string; fin: string }> = {
  'CTR-2024-001': { debut: '2024-01-01', fin: '2026-12-31' }, // 3 ans
  'CTR-2024-002': { debut: '2024-02-01', fin: '2026-01-31' }, // 2 ans
  'CTR-2023-005': { debut: '2023-06-01', fin: '2026-05-31' }, // 3 ans
};

const dureeAns = (num: string): number => {
  const d = CONTRATS_DATES[num];
  if (!d) return 0;
  const ms = new Date(d.fin).getTime() - new Date(d.debut).getTime();
  return Math.ceil(ms / (365.25 * 24 * 60 * 60 * 1000));
};

const CONTRAT_FILTER  = [{ value: '', label: 'Tous' }, ...CONTRATS_OPT];
const STATUT_FILTER: ComboboxOption[] = [{ value: '', label: 'Tous' }, { value: 'EnCours', label: 'En cours' }, { value: 'Cloture', label: 'Clôturé' }];

const INITIAL: Exercice[] = [
  { id: 1, lib: 'Exercice 2024', annee: '2024-01-01', cloture: '2024-12-31', statut: false, contrat: 'CTR-2024-001' },
  { id: 2, lib: 'Exercice 2025', annee: '2025-01-01', cloture: '',           statut: true,  contrat: 'CTR-2024-001' },
  { id: 3, lib: 'Exercice 2024', annee: '2024-02-01', cloture: '',           statut: true,  contrat: 'CTR-2024-002' },
  { id: 4, lib: 'Exercice 2023', annee: '2023-06-01', cloture: '2024-05-31', statut: false, contrat: 'CTR-2023-005' },
];

const PAGE_SIZE = 6;
const emptyForm = () => ({ lib: '', annee: '', cloture: '', statut: true, contrat: CONTRATS_OPT[0] });

const colStyle: React.CSSProperties   = { padding: '4px 8px' };
const inputStyle: React.CSSProperties = { fontSize: 12, padding: '3px 6px', height: 28 };

const ExerciceList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  const log = useLog();
  const [data,    setData   ] = useState<Exercice[]>(INITIAL);
  const [modal,   setModal  ] = useState(false);
  const [editing, setEditing] = useState<Exercice | null>(null);
  const [form,    setForm   ] = useState(emptyForm);

  const [fLib,    setFLib   ] = useState(() => searchParams.get('ex_lib')   ?? '');
  const [fCt,     setFCt    ] = useState(() => searchParams.get('ex_ct')    ?? '');
  const [fDebut,  setFDebut ] = useState(() => searchParams.get('ex_debut') ?? '');
  const [fCloture,setFCloture]=useState(() => searchParams.get('ex_clot')  ?? '');
  const [fStatut, setFStatut] = useState(() => searchParams.get('ex_sta')   ?? '');
  const [page,    setPage   ] = useState(() => Number(searchParams.get('ex_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (!v) params.delete(k); else params.set(k, v); });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const debLib    = useDebouncedCallback((v: string) => pushUrl({ ex_lib:   v || null, ex_page: null }), 300);

  const handleLib     = (v: string) => { setFLib(v);     setPage(1); debLib(v);     };
  const handleDebut   = (v: string) => { setFDebut(v);   setPage(1); pushUrl({ ex_debut: v || null, ex_page: null }); };
  const handleCloture = (v: string) => { setFCloture(v); setPage(1); pushUrl({ ex_clot:  v || null, ex_page: null }); };
  const handleCt      = (v: string) => { setFCt(v);      setPage(1); pushUrl({ ex_ct:  v || null, ex_page: null }); };
  const handleStatut  = (v: string) => { setFStatut(v);  setPage(1); pushUrl({ ex_sta: v || null, ex_page: null }); };
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

  const maxExercices  = dureeAns(form.contrat.value);
  const nbExistants   = useMemo(
    () => data.filter((e) => e.contrat === form.contrat.value && (!editing || e.id !== editing.id)).length,
    [data, form.contrat.value, editing]
  );
  const limiteAtteinte = nbExistants >= maxExercices;

  const handleSave = () => {
    if (!form.lib.trim() || !form.annee) return;
    if (limiteAtteinte) return;
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

  const filtered = useMemo(() => data.filter((e) => (
    (!fLib     || e.lib.toLowerCase().includes(fLib.toLowerCase())) &&
    (!fCt      || e.contrat === fCt) &&
    (!fDebut   || e.annee === fDebut) &&
    (!fCloture || e.cloture === fCloture) &&
    (!fStatut  || (fStatut === 'EnCours' ? e.statut : !e.statut))
  )), [data, fLib, fCt, fDebut, fCloture, fStatut]);

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

      <Card>
        <CardBody className='p-0'>
          <div className='table-responsive'>
            <Table className='table table-hover mb-0' style={{ tableLayout: 'fixed', minWidth: 800 }}>
              <thead className='table-light'>
                <tr>
                  <th style={{ width: '22%' }}>Libellé</th>
                  <th style={{ width: '24%' }}>Contrat</th>
                  <th style={{ width: '14%' }}>Début</th>
                  <th style={{ width: '14%' }}>Clôture</th>
                  <th style={{ width: '14%' }}>Statut</th>
                  <th style={{ width: '12%' }} className='text-end'>Actions</th>
                </tr>
                <tr>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Libellé…'  value={fLib}     onChange={(e) => handleLib(e.target.value)}     /></th>
                  <th style={colStyle}><Combobox options={CONTRAT_FILTER} value={CONTRAT_FILTER.find((o) => o.value === fCt) ?? CONTRAT_FILTER[0]} onChange={(opt) => handleCt(opt?.value ?? '')} isClearable={false} compact /></th>
                  <th style={colStyle}><DateInput compact value={fDebut}   onChange={handleDebut}   /></th>
                  <th style={colStyle}><DateInput compact value={fCloture} onChange={handleCloture} /></th>
                  <th style={colStyle}><Combobox options={STATUT_FILTER} value={STATUT_FILTER.find((o) => o.value === fStatut) ?? STATUT_FILTER[0]} onChange={(opt) => handleStatut(opt?.value ?? '')} isClearable={false} compact /></th>
                  <th style={colStyle} />
                </tr>
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
          <div className='px-3 pb-2 d-flex align-items-center justify-content-between'>
            <small className='text-muted'>{filtered.length} résultat{filtered.length !== 1 ? 's' : ''}</small>
            <AppPagination currentPage={page} totalPages={totalPages} onPageChange={handlePage} />
          </div>
        </CardBody>
      </Card>

      <AppDrawer
        isOpen={modal}
        toggle={() => setModal(false)}
        title={editing ? "Modifier l'exercice" : 'Ajouter un exercice'}
        onCancel={() => setModal(false)}
        footer={
          <div className='d-flex gap-2'>
            <Button color='primary' onClick={handleSave} disabled={limiteAtteinte}>Enregistrer</Button>
            <Button color='light' onClick={() => setModal(false)}>Annuler</Button>
          </div>
        }
      >
        <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <p className='text-muted fw-semibold small mb-2'>Contrat</p>
          <FormGroup><Label>Libellé <span className='text-danger'>*</span></Label><Input value={form.lib} onChange={(e) => setForm((f) => ({ ...f, lib: e.target.value }))} placeholder='Ex: Exercice 2024' /></FormGroup>
          <FormGroup><Label>Contrat</Label><Combobox options={CONTRATS_OPT} value={form.contrat} onChange={(opt) => opt && setForm((f) => ({ ...f, contrat: opt }))} /></FormGroup>

          {maxExercices > 0 && (
            <Alert color={limiteAtteinte ? 'danger' : nbExistants === maxExercices - 1 ? 'warning' : 'info'} className='py-2 px-3 mb-3' style={{ fontSize: 13 }}>
              {limiteAtteinte
                ? <>Ce contrat a atteint sa limite de <strong>{maxExercices} exercice{maxExercices > 1 ? 's' : ''}</strong> ({maxExercices} an{maxExercices > 1 ? 's' : ''} de durée). Impossible d'en ajouter un autre.</>
                : <><strong>{nbExistants}</strong> exercice{nbExistants > 1 ? 's' : ''} sur <strong>{maxExercices}</strong> autorisé{maxExercices > 1 ? 's' : ''} pour ce contrat ({maxExercices} an{maxExercices > 1 ? 's' : ''}).</>
              }
            </Alert>
          )}

          <hr style={{ borderColor: 'transparent' }} />
          <p className='text-muted fw-semibold small mb-2'>Période</p>
          <Row>
            <Col md='6'><DateInput label='Date de début'   required value={form.annee}   onChange={(v) => setForm((f) => ({ ...f, annee: v }))}   /></Col>
            <Col md='6'><DateInput label='Date de clôture'          value={form.cloture} onChange={(v) => setForm((f) => ({ ...f, cloture: v }))} /></Col>
          </Row>

          <hr style={{ borderColor: 'transparent' }} />
          <p className='text-muted fw-semibold small mb-2'>Statut</p>
          <FormGroup check>
            <Input type='checkbox' checked={form.statut} onChange={(e) => setForm((f) => ({ ...f, statut: e.target.checked }))} />
            <Label check>Exercice en cours</Label>
          </FormGroup>
        </Form>
      </AppDrawer>
    </div>
  );
};

export default ExerciceList;
