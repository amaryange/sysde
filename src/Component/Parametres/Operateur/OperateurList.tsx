'use client';

import { useState, useMemo } from 'react';
import { Card, CardBody, Table, Badge, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import AppDrawer from '@/Component/Common/AppDrawer';
import { UserPlus, Eye, Edit2, Trash2 } from 'react-feather';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppPagination from '@/Component/Common/AppPagination';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import { useDebouncedCallback } from '@/hooks/useDebouncedCallback';
import { useLog } from '@/hooks/useLog';

type Operateur = { id: number; rs: string; acronyme: string; adresse: string; email: string; tel: string; encadreur: boolean };

const INITIAL: Operateur[] = [
  { id: 1, rs: 'ASSOCIATION DES PROFESSIONNELS DU CAOUTCHOUC',                      acronyme: 'APROMAC', adresse: '12 Bd Lagunaire, Abidjan',    email: 'contact@apromac.ci', tel: '01020304', encadreur: false },
  { id: 2, rs: 'FONDS INTERPROFESSIONNEL POUR LA RECHERCHE ET LE CONSEIL AGRICOLE', acronyme: 'FIRCA',   adresse: '01 BP 3726 Abidjan 01',        email: 'info@firca.ci',      tel: '05060708', encadreur: false },
  { id: 3, rs: 'SOCIETE AFRICAINE DE PLANTATION DHEVEA',                             acronyme: 'SAPH',    adresse: '08 BP 2188 Abidjan 08',        email: 'contact@saph.ci',    tel: '01020304', encadreur: true  },
  { id: 4, rs: 'SOCIETE DE CAOUTCHOUC DU PALMCI',                                   acronyme: 'PALMCI',  adresse: '15 Rue des Palmiers, Abidjan', email: 'info@palmci.ci',     tel: '05060708', encadreur: true  },
  { id: 5, rs: 'SOCIETE DE CAOUTCHOUC DE GRAND-BEREBY',                             acronyme: 'SOGB',    adresse: 'Grand-Béréby, Sud-Ouest',      email: 'sogb@sogb.ci',       tel: '07080910', encadreur: true  },
  { id: 6, rs: 'COMPAGNIE HEVECAM',                                                  acronyme: 'HVCM',    adresse: 'Niété, Cameroun',              email: 'hevecam@hvc.ci',     tel: '03040506', encadreur: false },
];

const PAGE_SIZE = 6;

const ENC_FILTER: ComboboxOption[] = [
  { value: '',    label: 'Tous'          },
  { value: 'Oui', label: 'Encadreur'    },
  { value: 'Non', label: 'Non-encadreur'},
];

const emptyForm = (): Omit<Operateur, 'id'> => ({ rs: '', acronyme: '', adresse: '', email: '', tel: '', encadreur: false });

const colStyle: React.CSSProperties   = { padding: '4px 8px' };
const inputStyle: React.CSSProperties = { fontSize: 12, padding: '3px 6px', height: 28 };

const OperateurList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  const log = useLog();
  const [data,    setData   ] = useState<Operateur[]>(INITIAL);
  const [modal,   setModal  ] = useState(false);
  const [editing, setEditing] = useState<Operateur | null>(null);
  const [viewing, setViewing] = useState(false);
  const [form,    setForm   ] = useState(emptyForm);

  const [fRs,    setFRs   ] = useState(() => searchParams.get('op_rs')    ?? '');
  const [fAcr,   setFAcr  ] = useState(() => searchParams.get('op_acr')   ?? '');
  const [fEmail, setFEmail] = useState(() => searchParams.get('op_email') ?? '');
  const [fTel,   setFTel  ] = useState(() => searchParams.get('op_tel')   ?? '');
  const [fEnc,   setFEnc  ] = useState(() => searchParams.get('op_enc')   ?? '');
  const [page,   setPage  ] = useState(() => Number(searchParams.get('op_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (!v) params.delete(k); else params.set(k, v); });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const debRs    = useDebouncedCallback((v: string) => pushUrl({ op_rs:    v || null, op_page: null }), 300);
  const debAcr   = useDebouncedCallback((v: string) => pushUrl({ op_acr:   v || null, op_page: null }), 300);
  const debEmail = useDebouncedCallback((v: string) => pushUrl({ op_email: v || null, op_page: null }), 300);
  const debTel   = useDebouncedCallback((v: string) => pushUrl({ op_tel:   v || null, op_page: null }), 300);

  const handleRs    = (v: string) => { setFRs(v);    setPage(1); debRs(v);    };
  const handleAcr   = (v: string) => { setFAcr(v);   setPage(1); debAcr(v);   };
  const handleEmail = (v: string) => { setFEmail(v);  setPage(1); debEmail(v); };
  const handleTel   = (v: string) => { setFTel(v);    setPage(1); debTel(v);   };
  const handleEnc   = (v: string) => { setFEnc(v);    setPage(1); pushUrl({ op_enc: v || null, op_page: null }); };
  const handlePage  = (p: number) => { setPage(p); pushUrl({ op_page: p > 1 ? String(p) : null }); };

  const openAdd  = () => { setViewing(false); setEditing(null); setForm(emptyForm()); setModal(true); };
  const openEdit = (o: Operateur) => { setViewing(false); setEditing(o); setForm({ rs: o.rs, acronyme: o.acronyme, adresse: o.adresse, email: o.email, tel: o.tel, encadreur: o.encadreur }); setModal(true); };
  const openView = (o: Operateur) => { setViewing(true);  setEditing(null); setForm({ rs: o.rs, acronyme: o.acronyme, adresse: o.adresse, email: o.email, tel: o.tel, encadreur: o.encadreur }); setModal(true); };
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

  const filtered = useMemo(() => data.filter((o) => (
    (!fRs    || o.rs.toLowerCase().includes(fRs.toLowerCase())) &&
    (!fAcr   || o.acronyme.toLowerCase().includes(fAcr.toLowerCase())) &&
    (!fEmail || o.email.toLowerCase().includes(fEmail.toLowerCase())) &&
    (!fTel   || o.tel.includes(fTel)) &&
    (!fEnc   || (fEnc === 'Oui' ? o.encadreur : !o.encadreur))
  )), [data, fRs, fAcr, fEmail, fTel, fEnc]);

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

      <Card>
        <CardBody className='p-0'>
          <div className='table-responsive'>
            <Table className='table table-hover mb-0' style={{ tableLayout: 'fixed', minWidth: 860 }}>
              <thead className='table-light'>
                <tr>
                  <th style={{ width: '32%' }}>Raison sociale</th>
                  <th style={{ width: '11%' }}>Acronyme</th>
                  <th style={{ width: '22%' }}>Email</th>
                  <th style={{ width: '13%' }}>Téléphone</th>
                  <th style={{ width: '12%' }}>Encadreur</th>
                  <th style={{ width: '10%' }} className='text-end'>Actions</th>
                </tr>
                <tr>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Raison sociale…' value={fRs}    onChange={(e) => handleRs(e.target.value)}    /></th>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Acronyme…'       value={fAcr}   onChange={(e) => handleAcr(e.target.value)}   /></th>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Email…'          value={fEmail} onChange={(e) => handleEmail(e.target.value)} /></th>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Tél…'            value={fTel}   onChange={(e) => handleTel(e.target.value)}   /></th>
                  <th style={colStyle}><Combobox options={ENC_FILTER} value={ENC_FILTER.find((o) => o.value === fEnc) ?? ENC_FILTER[0]} onChange={(opt) => handleEnc(opt?.value ?? '')} isClearable={false} compact /></th>
                  <th style={colStyle} />
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr><td colSpan={6} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                ) : paginated.map((o) => (
                  <tr key={o.id}>
                    <td className='f-w-600' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{o.rs}</td>
                    <td>{o.acronyme}</td>
                    <td className='text-muted' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{o.email}</td>
                    <td className='text-muted'>{o.tel}</td>
                    <td><Badge color={o.encadreur ? 'success' : 'secondary'} className='badge-light'>{o.encadreur ? 'Oui' : 'Non'}</Badge></td>
                    <td className='text-end'>
                      <Button color='light' size='sm' className='me-1 p-1' onClick={() => openView(o)}><Eye size={14} /></Button>
                      <Button color='light' size='sm' className='me-1 p-1' onClick={() => openEdit(o)}><Edit2 size={14} /></Button>
                      <Button color='light' size='sm' className='p-1' onClick={() => handleDelete(o.id)}><Trash2 size={14} className='text-danger' /></Button>
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
        title={viewing ? "Détails de l'opérateur" : editing ? "Modifier l'opérateur" : 'Ajouter un opérateur'}
        onSave={viewing ? undefined : handleSave}
        onCancel={() => setModal(false)}
        cancelLabel={viewing ? 'Fermer' : 'Annuler'}
      >
        <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <p className='text-muted fw-semibold small mb-2'>Identification</p>
          <FormGroup><Label>Raison sociale <span className='text-danger'>*</span></Label><Input disabled={viewing} value={form.rs}       onChange={(e) => setForm((f) => ({ ...f, rs: e.target.value }))}       placeholder='Ex: SOCIETE AFRICAINE DE PLANTATION DHEVEA' /></FormGroup>
          <FormGroup><Label>Acronyme <span className='text-danger'>*</span></Label>      <Input disabled={viewing} value={form.acronyme} onChange={(e) => setForm((f) => ({ ...f, acronyme: e.target.value }))} placeholder='Ex: SAPH' /></FormGroup>

          <hr style={{ borderColor: 'transparent' }} />
          <p className='text-muted fw-semibold small mb-2'>Coordonnées</p>
          <FormGroup><Label>Adresse</Label><Input disabled={viewing} value={form.adresse} onChange={(e) => setForm((f) => ({ ...f, adresse: e.target.value }))} /></FormGroup>
          <Row>
            <Col md='6'><FormGroup><Label>Email</Label>    <Input disabled={viewing} type='email' value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder='contact@exemple.ci' /></FormGroup></Col>
            <Col md='6'><FormGroup><Label>Téléphone</Label><Input disabled={viewing}             value={form.tel}   onChange={(e) => setForm((f) => ({ ...f, tel: e.target.value }))}   placeholder='0X XX XX XX'         /></FormGroup></Col>
          </Row>

          <hr style={{ borderColor: 'transparent' }} />
          <p className='text-muted fw-semibold small mb-2'>Statut</p>
          <FormGroup check>
            <Input disabled={viewing} type='checkbox' checked={form.encadreur} onChange={(e) => setForm((f) => ({ ...f, encadreur: e.target.checked }))} />
            <Label check>Opérateur d'encadrement</Label>
          </FormGroup>
        </Form>
      </AppDrawer>
    </div>
  );
};

export default OperateurList;
