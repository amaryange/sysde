'use client';

import { useState, useMemo } from 'react';
import { Card, CardBody, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { PlusCircle, Edit2, Trash2 } from 'react-feather';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppPagination from '@/Component/Common/AppPagination';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import { useDebouncedCallback } from '@/hooks/useDebouncedCallback';
import { useLog } from '@/hooks/useLog';

type Lot = { id: number; num: string; cde: string; couverture: string; secteur: string; region: string; departement: string; sprefecture: string };

const SECTEURS_OPT: ComboboxOption[] = [
  { value: 'Abengourou',   label: 'Abengourou'   },
  { value: 'Bondoukou',    label: 'Bondoukou'    },
  { value: 'Agnibilékrou', label: 'Agnibilékrou' },
  { value: 'Tanda',        label: 'Tanda'        },
  { value: 'Daoukro',      label: 'Daoukro'      },
];

const SECTEUR_FILTER = [{ value: '', label: 'Tous' }, ...SECTEURS_OPT];

const INITIAL: Lot[] = [
  { id: 1, num: '1', cde: 'LT-01', couverture: 'Zone Nord Abengourou', secteur: 'Abengourou',   region: 'Indénié-Djuablin', departement: 'Abengourou',   sprefecture: 'Abengourou'   },
  { id: 2, num: '2', cde: 'LT-02', couverture: 'Zone Sud Abengourou',  secteur: 'Abengourou',   region: 'Indénié-Djuablin', departement: 'Abengourou',   sprefecture: 'Aniassué'     },
  { id: 3, num: '3', cde: 'LT-03', couverture: 'Zone Est Abengourou',  secteur: 'Abengourou',   region: 'Indénié-Djuablin', departement: 'Abengourou',   sprefecture: 'Ebilassokro'  },
  { id: 4, num: '4', cde: 'LT-04', couverture: 'Zone Nord Bondoukou',  secteur: 'Bondoukou',    region: 'Zanzan',           departement: 'Bondoukou',    sprefecture: 'Bondoukou'    },
  { id: 5, num: '5', cde: 'LT-05', couverture: 'Zone Sud Bondoukou',   secteur: 'Bondoukou',    region: 'Zanzan',           departement: 'Bondoukou',    sprefecture: 'Laoudi-Ba'    },
  { id: 6, num: '6', cde: 'LT-06', couverture: 'Zone Agnibilékrou 1',  secteur: 'Agnibilékrou', region: 'Indénié-Djuablin', departement: 'Agnibilékrou', sprefecture: 'Agnibilékrou' },
  { id: 7, num: '7', cde: 'LT-07', couverture: 'Zone Tanda Centrale',  secteur: 'Tanda',        region: 'Zanzan',           departement: 'Tanda',        sprefecture: 'Tanda'        },
  { id: 8, num: '8', cde: 'LT-08', couverture: 'Zone Daoukro Nord',    secteur: 'Daoukro',      region: "N'Zi-Comoé",      departement: 'Daoukro',      sprefecture: 'Daoukro'      },
];

const PAGE_SIZE = 6;
const emptyForm = () => ({ num: '', cde: '', couverture: '', secteur: SECTEURS_OPT[0], region: '', departement: '', sprefecture: '' });

const colStyle: React.CSSProperties   = { padding: '4px 8px' };
const inputStyle: React.CSSProperties = { fontSize: 12, padding: '3px 6px', height: 28 };

const LotList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  const log = useLog();
  const [data,    setData   ] = useState<Lot[]>(INITIAL);
  const [modal,   setModal  ] = useState(false);
  const [editing, setEditing] = useState<Lot | null>(null);
  const [form,    setForm   ] = useState(emptyForm);

  const [fNum,  setFNum  ] = useState(() => searchParams.get('lt_num') ?? '');
  const [fCde,  setFCde  ] = useState(() => searchParams.get('lt_cde') ?? '');
  const [fCouv, setFCouv ] = useState(() => searchParams.get('lt_couv') ?? '');
  const [fSec,  setFSec  ] = useState(() => searchParams.get('lt_sec') ?? '');
  const [fDep,  setFDep  ] = useState(() => searchParams.get('lt_dep') ?? '');
  const [page,  setPage  ] = useState(() => Number(searchParams.get('lt_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (!v) params.delete(k); else params.set(k, v); });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const debNum  = useDebouncedCallback((v: string) => pushUrl({ lt_num:  v || null, lt_page: null }), 300);
  const debCde  = useDebouncedCallback((v: string) => pushUrl({ lt_cde:  v || null, lt_page: null }), 300);
  const debCouv = useDebouncedCallback((v: string) => pushUrl({ lt_couv: v || null, lt_page: null }), 300);
  const debDep  = useDebouncedCallback((v: string) => pushUrl({ lt_dep:  v || null, lt_page: null }), 300);

  const handleNum  = (v: string) => { setFNum(v);  setPage(1); debNum(v);  };
  const handleCde  = (v: string) => { setFCde(v);  setPage(1); debCde(v);  };
  const handleCouv = (v: string) => { setFCouv(v); setPage(1); debCouv(v); };
  const handleDep  = (v: string) => { setFDep(v);  setPage(1); debDep(v);  };
  const handleSec  = (v: string) => { setFSec(v);  setPage(1); pushUrl({ lt_sec: v || null, lt_page: null }); };
  const handlePage = (p: number) => { setPage(p); pushUrl({ lt_page: p > 1 ? String(p) : null }); };

  const openAdd  = () => { setEditing(null); setForm(emptyForm()); setModal(true); };
  const openEdit = (l: Lot) => {
    setEditing(l);
    setForm({ num: l.num, cde: l.cde, couverture: l.couverture, region: l.region, departement: l.departement, sprefecture: l.sprefecture, secteur: SECTEURS_OPT.find((s) => s.value === l.secteur) ?? SECTEURS_OPT[0] });
    setModal(true);
  };
  const handleDelete = (id: number) => {
    if (!window.confirm('Supprimer ce lot ?')) return;
    const target = data.find((l) => l.id === id);
    setData((p) => p.filter((l) => l.id !== id));
    log('DELETE', 'Lot', `Suppression du lot ${target?.cde ?? id} — ${target?.couverture ?? ''}`, target?.cde);
  };
  const handleSave = () => {
    if (!form.num.trim() || !form.cde.trim()) return;
    const payload = { num: form.num, cde: form.cde, couverture: form.couverture, secteur: form.secteur.value, region: form.region, departement: form.departement, sprefecture: form.sprefecture };
    if (editing) {
      setData((p) => p.map((l) => l.id === editing.id ? { ...l, ...payload } : l));
      log('UPDATE', 'Lot', `Modification du lot ${form.cde}`, form.cde);
    } else {
      const nextId = Math.max(0, ...data.map((l) => l.id)) + 1;
      setData((p) => [...p, { id: nextId, ...payload }]);
      log('CREATE', 'Lot', `Création du lot ${form.cde} — ${form.secteur.value}`, form.cde);
    }
    setModal(false);
  };

  const filtered = useMemo(() => data.filter((l) => (
    (!fNum  || l.num.includes(fNum)) &&
    (!fCde  || l.cde.toLowerCase().includes(fCde.toLowerCase())) &&
    (!fCouv || l.couverture.toLowerCase().includes(fCouv.toLowerCase())) &&
    (!fSec  || l.secteur === fSec) &&
    (!fDep  || l.departement.toLowerCase().includes(fDep.toLowerCase()))
  )), [data, fNum, fCde, fCouv, fSec, fDep]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h5 className='mb-0'>Liste des lots</h5>
        <Button color='primary' className='d-flex align-items-center gap-1' onClick={openAdd}>
          <PlusCircle size={16} /> Ajouter lot
        </Button>
      </div>

      <Card>
        <CardBody className='p-0'>
          <div className='table-responsive'>
            <Table className='table table-hover mb-0' style={{ tableLayout: 'fixed', minWidth: 860 }}>
              <thead className='table-light'>
                <tr>
                  <th style={{ width: '8%'  }}>N° Lot</th>
                  <th style={{ width: '10%' }}>Code</th>
                  <th style={{ width: '24%' }}>Zone de couverture</th>
                  <th style={{ width: '15%' }}>Secteur</th>
                  <th style={{ width: '18%' }}>Département</th>
                  <th style={{ width: '10%' }} className='text-end'>Actions</th>
                </tr>
                <tr>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='N°…'      value={fNum}  onChange={(e) => handleNum(e.target.value)}  /></th>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Code…'    value={fCde}  onChange={(e) => handleCde(e.target.value)}  /></th>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Zone…'    value={fCouv} onChange={(e) => handleCouv(e.target.value)} /></th>
                  <th style={colStyle}><Combobox options={SECTEUR_FILTER} value={SECTEUR_FILTER.find((o) => o.value === fSec) ?? SECTEUR_FILTER[0]} onChange={(opt) => handleSec(opt?.value ?? '')} isClearable={false} compact /></th>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Dépt…'    value={fDep}  onChange={(e) => handleDep(e.target.value)}  /></th>
                  <th style={colStyle} />
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr><td colSpan={6} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                ) : paginated.map((l) => (
                  <tr key={l.id}>
                    <td className='f-w-600'>Lot {l.num}</td>
                    <td><code>{l.cde}</code></td>
                    <td style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.couverture}</td>
                    <td className='text-muted'>{l.secteur}</td>
                    <td className='text-muted'>{l.departement}</td>
                    <td className='text-end'>
                      <Button color='light' size='sm' className='me-1 p-1' onClick={() => openEdit(l)}><Edit2 size={14} /></Button>
                      <Button color='light' size='sm' className='p-1' onClick={() => handleDelete(l.id)}><Trash2 size={14} className='text-danger' /></Button>
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

      <Modal isOpen={modal} toggle={() => setModal(false)}>
        <ModalHeader toggle={() => setModal(false)}>{editing ? 'Modifier le lot' : 'Ajouter un lot'}</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <Row>
              <Col md='4'><FormGroup><Label>N° Lot <span className='text-danger'>*</span></Label><Input value={form.num} onChange={(e) => setForm((f) => ({ ...f, num: e.target.value }))} placeholder='Ex: 1' /></FormGroup></Col>
              <Col md='4'><FormGroup><Label>Code <span className='text-danger'>*</span></Label>  <Input value={form.cde} onChange={(e) => setForm((f) => ({ ...f, cde: e.target.value }))} placeholder='LT-01' /></FormGroup></Col>
              <Col md='4'><Combobox label='Secteur' options={SECTEURS_OPT} value={form.secteur} onChange={(opt) => opt && setForm((f) => ({ ...f, secteur: opt }))} /></Col>
            </Row>
            <FormGroup><Label>Zone de couverture</Label><Input value={form.couverture} onChange={(e) => setForm((f) => ({ ...f, couverture: e.target.value }))} placeholder='Ex: Zone Nord Abengourou' /></FormGroup>
            <Row>
              <Col md='4'><FormGroup><Label>Région</Label>         <Input value={form.region}      onChange={(e) => setForm((f) => ({ ...f, region: e.target.value }))}      /></FormGroup></Col>
              <Col md='4'><FormGroup><Label>Département</Label>    <Input value={form.departement} onChange={(e) => setForm((f) => ({ ...f, departement: e.target.value }))} /></FormGroup></Col>
              <Col md='4'><FormGroup><Label>Sous-préfecture</Label><Input value={form.sprefecture} onChange={(e) => setForm((f) => ({ ...f, sprefecture: e.target.value }))} /></FormGroup></Col>
            </Row>
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

export default LotList;
