'use client';

import { useState, useMemo } from 'react';
import { Card, CardBody, Table, Badge, Button, Form, FormGroup, Label, Input, Row, Col, UncontrolledTooltip } from 'reactstrap';
import AppDrawer from '@/Component/Common/AppDrawer';
import ConfirmDelete from '@/Component/Common/ConfirmDelete';
import { PlusCircle, Eye, Edit2, Trash2 } from 'react-feather';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppPagination from '@/Component/Common/AppPagination';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import DateInput from '@/Component/Common/DateInput';
import { useDebouncedCallback } from '@/hooks/useDebouncedCallback';
import { useLog } from '@/hooks/useLog';

type Contrat = { id: number; num: string; operateur: string; debut: string; fin: string; signature: string; montant: number; statut: boolean };

// Uniquement les opérateurs encadreurs — les non-encadreurs (FIRCA, APROMAC…) n'ont pas de contrat
const OPERATEURS_OPT: ComboboxOption[] = [
  { value: 'SAPH',   label: 'SAPH'   },
  { value: 'PALMCI', label: 'PALMCI' },
  { value: 'SOGB',   label: 'SOGB'   },
];

const OP_FILTER     = [{ value: '', label: 'Tous' }, ...OPERATEURS_OPT];
const STATUT_FILTER: ComboboxOption[] = [{ value: '', label: 'Tous' }, { value: 'Actif', label: 'Actif' }, { value: 'Cloture', label: 'Clôturé' }];

const INITIAL: Contrat[] = [
  { id: 1, num: 'CTR-2024-001', operateur: 'SAPH',   debut: '2024-01-01', fin: '2026-12-31', signature: '2023-12-15', montant: 150000000, statut: true  },
  { id: 2, num: 'CTR-2024-002', operateur: 'PALMCI', debut: '2024-02-01', fin: '2026-01-31', signature: '2024-01-20', montant: 85000000,  statut: true  },
  { id: 3, num: 'CTR-2023-005', operateur: 'SOGB',   debut: '2023-06-01', fin: '2026-05-31', signature: '2023-05-10', montant: 60000000,  statut: false },
];

const PAGE_SIZE  = 6;
const emptyForm  = () => ({ num: '', operateur: OPERATEURS_OPT[0], debut: '', fin: '', signature: '', montant: 0, statut: true });
const fmtMontant = (n: number) => new Intl.NumberFormat('fr-CI', { style: 'currency', currency: 'XOF', maximumFractionDigits: 0 }).format(n);

const colStyle: React.CSSProperties   = { padding: '4px 8px' };
const inputStyle: React.CSSProperties = { fontSize: 12, padding: '3px 6px', height: 28 };

const ContratList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  const log = useLog();
  const [data,    setData   ] = useState<Contrat[]>(INITIAL);
  const [modal,   setModal  ] = useState(false);
  const [editing, setEditing] = useState<Contrat | null>(null);
  const [viewing,      setViewing     ] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Contrat | null>(null);
  const [form,         setForm        ] = useState(emptyForm);

  const [fNum,    setFNum   ] = useState(() => searchParams.get('ct_num')   ?? '');
  const [fOp,     setFOp    ] = useState(() => searchParams.get('ct_op')    ?? '');
  const [fDebut,  setFDebut ] = useState(() => searchParams.get('ct_debut') ?? '');
  const [fFin,    setFFin   ] = useState(() => searchParams.get('ct_fin')   ?? '');
  const [fStatut, setFStatut] = useState(() => searchParams.get('ct_sta')   ?? '');
  const [page,    setPage   ] = useState(() => Number(searchParams.get('ct_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (!v) params.delete(k); else params.set(k, v); });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const debNum   = useDebouncedCallback((v: string) => pushUrl({ ct_num:   v || null, ct_page: null }), 300);

  const handleNum    = (v: string) => { setFNum(v);    setPage(1); debNum(v);   };
  const handleDebut  = (v: string) => { setFDebut(v);  setPage(1); pushUrl({ ct_debut: v || null, ct_page: null }); };
  const handleFin    = (v: string) => { setFFin(v);    setPage(1); pushUrl({ ct_fin:   v || null, ct_page: null }); };
  const handleOp     = (v: string) => { setFOp(v);     setPage(1); pushUrl({ ct_op:  v || null, ct_page: null }); };
  const handleStatut = (v: string) => { setFStatut(v); setPage(1); pushUrl({ ct_sta: v || null, ct_page: null }); };
  const handlePage   = (p: number) => { setPage(p); pushUrl({ ct_page: p > 1 ? String(p) : null }); };

  const openAdd  = () => { setViewing(false); setEditing(null); setForm(emptyForm()); setModal(true); };
  const fillForm = (c: Contrat) => ({ num: c.num, debut: c.debut, fin: c.fin, signature: c.signature, montant: c.montant, statut: c.statut, operateur: OPERATEURS_OPT.find((o) => o.value === c.operateur) ?? OPERATEURS_OPT[0] });
  const openEdit = (c: Contrat) => { setViewing(false); setEditing(c); setForm(fillForm(c)); setModal(true); };
  const openView = (c: Contrat) => { setViewing(true);  setEditing(null); setForm(fillForm(c)); setModal(true); };
  const handleDeleteConfirm = () => {
    if (!deleteTarget) return;
    setData((p) => p.filter((c) => c.id !== deleteTarget.id));
    log('DELETE', 'Contrat', `Suppression du contrat ${deleteTarget.num}`, deleteTarget.num);
    setDeleteTarget(null);
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

  const filtered = useMemo(() => data.filter((c) => (
    (!fNum    || c.num.toLowerCase().includes(fNum.toLowerCase())) &&
    (!fOp     || c.operateur === fOp) &&
    (!fDebut  || c.debut === fDebut) &&
    (!fFin    || c.fin === fFin) &&
    (!fStatut || (fStatut === 'Actif' ? c.statut : !c.statut))
  )), [data, fNum, fOp, fDebut, fFin, fStatut]);

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

      <Card>
        <CardBody className='p-0'>
          <div className='table-responsive'>
            <Table className='table table-hover mb-0' style={{ tableLayout: 'fixed', minWidth: 860 }}>
              <thead className='table-light'>
                <tr>
                  <th style={{ width: '18%' }}>Numéro</th>
                  <th style={{ width: '12%' }}>Opérateur</th>
                  <th style={{ width: '13%' }}>Début</th>
                  <th style={{ width: '13%' }}>Fin</th>
                  <th style={{ width: '20%' }}>Montant</th>
                  <th style={{ width: '12%' }}>Statut</th>
                  <th style={{ width: '12%' }} className='text-end'>Actions</th>
                </tr>
                <tr>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Numéro…' value={fNum}   onChange={(e) => handleNum(e.target.value)}   /></th>
                  <th style={colStyle}><Combobox options={OP_FILTER} value={OP_FILTER.find((o) => o.value === fOp) ?? OP_FILTER[0]} onChange={(opt) => handleOp(opt?.value ?? '')} isClearable={false} compact /></th>
                  <th style={colStyle}><DateInput compact value={fDebut} onChange={handleDebut} /></th>
                  <th style={colStyle}><DateInput compact value={fFin}   onChange={handleFin}   /></th>
                  <th style={colStyle} />
                  <th style={colStyle}><Combobox options={STATUT_FILTER} value={STATUT_FILTER.find((o) => o.value === fStatut) ?? STATUT_FILTER[0]} onChange={(opt) => handleStatut(opt?.value ?? '')} isClearable={false} compact /></th>
                  <th style={colStyle} />
                </tr>
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
                      <Button id={`ct-view-${c.id}`} color='light' size='sm' className='me-1 p-1' onClick={() => openView(c)}><Eye size={14} /></Button>
                      <UncontrolledTooltip target={`ct-view-${c.id}`}>Consulter</UncontrolledTooltip>
                      <Button id={`ct-edit-${c.id}`} color='light' size='sm' className='me-1 p-1' onClick={() => openEdit(c)}><Edit2 size={14} /></Button>
                      <UncontrolledTooltip target={`ct-edit-${c.id}`}>Modifier</UncontrolledTooltip>
                      <Button id={`ct-del-${c.id}`} color='light' size='sm' className='p-1' onClick={() => setDeleteTarget(c)}><Trash2 size={14} className='text-danger' /></Button>
                      <UncontrolledTooltip target={`ct-del-${c.id}`}>Supprimer</UncontrolledTooltip>
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
        title={viewing ? 'Détails du contrat' : editing ? 'Modifier le contrat' : 'Ajouter un contrat'}
        onSave={viewing ? undefined : handleSave}
        onCancel={() => setModal(false)}
        cancelLabel={viewing ? 'Fermer' : 'Annuler'}
      >
        <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <p className='text-muted fw-semibold small mb-2'>Identification</p>
          <Row>
            <Col md='6'><FormGroup><Label>Numéro contrat <span className='text-danger'>*</span></Label><Input disabled={viewing} value={form.num} onChange={(e) => setForm((f) => ({ ...f, num: e.target.value }))} placeholder='CTR-2024-001' /></FormGroup></Col>
            <Col md='6'><FormGroup><Label>Opérateur</Label><Combobox isDisabled={viewing} options={OPERATEURS_OPT} value={form.operateur} onChange={(opt) => opt && setForm((f) => ({ ...f, operateur: opt }))} /></FormGroup></Col>
          </Row>

          <hr style={{ borderColor: 'transparent' }} />
          <p className='text-muted fw-semibold small mb-2'>Période</p>
          <Row>
            <Col md='4'><DateInput disabled={viewing} label='Début'     required value={form.debut}     onChange={(v) => setForm((f) => ({ ...f, debut: v }))}     /></Col>
            <Col md='4'><DateInput disabled={viewing} label='Fin'       required value={form.fin}       onChange={(v) => setForm((f) => ({ ...f, fin: v }))}       /></Col>
            <Col md='4'><DateInput disabled={viewing} label='Signature'          value={form.signature} onChange={(v) => setForm((f) => ({ ...f, signature: v }))} /></Col>
          </Row>

          <hr style={{ borderColor: 'transparent' }} />
          <p className='text-muted fw-semibold small mb-2'>Financier</p>
          <FormGroup><Label>Montant (FCFA)</Label><Input disabled={viewing} type='number' min={0} value={form.montant} onChange={(e) => setForm((f) => ({ ...f, montant: Number(e.target.value) }))} /></FormGroup>

          <hr style={{ borderColor: 'transparent' }} />
          <p className='text-muted fw-semibold small mb-2'>Statut</p>
          <FormGroup check>
            <Input disabled={viewing} type='checkbox' checked={form.statut} onChange={(e) => setForm((f) => ({ ...f, statut: e.target.checked }))} />
            <Label check>Contrat actif</Label>
          </FormGroup>
        </Form>
      </AppDrawer>

      <ConfirmDelete
        isOpen={!!deleteTarget}
        message={`Voulez-vous vraiment supprimer le contrat "${deleteTarget?.num}" ? Cette action est irréversible.`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
};

export default ContratList;
