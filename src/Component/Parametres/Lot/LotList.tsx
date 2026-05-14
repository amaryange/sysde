'use client';

import { useState, useMemo } from 'react';
import { Card, CardBody, Table, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import AppDrawer from '@/Component/Common/AppDrawer';
import ConfirmDelete from '@/Component/Common/ConfirmDelete';
import RowActions from '@/Component/Common/RowActions';
import { PlusCircle } from 'react-feather';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppPagination from '@/Component/Common/AppPagination';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import { useDebouncedCallback } from '@/hooks/useDebouncedCallback';
import { useLog } from '@/hooks/useLog';
import { MOCK_LOTS, MOCK_SECTEURS, MockLot } from '@/Data/mockData';

// ---------------------------------------------------------------------------
// Options
// ---------------------------------------------------------------------------
const SECTEURS_OPT: ComboboxOption[] = MOCK_SECTEURS.map((s) => ({
  value: s.id,
  label: `${s.cde} — ${s.lib}`,
}));

const SECTEUR_FILTER: ComboboxOption[] = [{ value: '', label: 'Tous' }, ...SECTEURS_OPT];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const PAGE_SIZE = 6;
const colStyle: React.CSSProperties   = { padding: '4px 8px' };
const inputStyle: React.CSSProperties = { fontSize: 12, padding: '3px 6px', height: 28 };

const secteurLabel = (id: string) => MOCK_SECTEURS.find((s) => s.id === id)?.lib ?? id;

type LotForm = {
  num:         string;
  cde:         string;
  couvert:     string;
  id_secteur:  ComboboxOption;
  region:      string;
  departement: string;
  sprefecture: string;
};

const emptyForm = (): LotForm => ({
  num: '', cde: '', couvert: '', id_secteur: SECTEURS_OPT[0], region: '', departement: '', sprefecture: '',
});

const fillForm = (l: MockLot): LotForm => ({
  num:         l.num,
  cde:         l.cde,
  couvert:     l.couvert,
  id_secteur:  SECTEURS_OPT.find((s) => s.value === l.id_secteur) ?? SECTEURS_OPT[0],
  region:      l.region,
  departement: l.departement,
  sprefecture: l.sprefecture,
});

// ---------------------------------------------------------------------------
// Composant
// ---------------------------------------------------------------------------
const LotList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();
  const log          = useLog();

  const [data,         setData        ] = useState<MockLot[]>(MOCK_LOTS);
  const [modal,        setModal       ] = useState(false);
  const [editing,      setEditing     ] = useState<MockLot | null>(null);
  const [viewing,      setViewing     ] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<MockLot | null>(null);
  const [form,         setForm        ] = useState<LotForm>(emptyForm);

  const [fNum,  setFNum  ] = useState(() => searchParams.get('lt_num')  ?? '');
  const [fCde,  setFCde  ] = useState(() => searchParams.get('lt_cde')  ?? '');
  const [fCouv, setFCouv ] = useState(() => searchParams.get('lt_couv') ?? '');
  const [fSec,  setFSec  ] = useState(() => searchParams.get('lt_sec')  ?? '');
  const [fDep,  setFDep  ] = useState(() => searchParams.get('lt_dep')  ?? '');
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

  const openAdd  = () => { setViewing(false); setEditing(null); setForm(emptyForm()); setModal(true); };
  const openEdit = (l: MockLot) => { setViewing(false); setEditing(l);   setForm(fillForm(l)); setModal(true); };
  const openView = (l: MockLot) => { setViewing(true);  setEditing(null); setForm(fillForm(l)); setModal(true); };

  const handleDeleteConfirm = () => {
    if (!deleteTarget) return;
    setData((p) => p.filter((l) => l.id !== deleteTarget.id));
    log('DELETE', 'Lot', `Suppression du lot ${deleteTarget.cde}`, deleteTarget.cde);
    setDeleteTarget(null);
  };

  // Quand le secteur change, pré-remplit région/dept/spref
  const handleSecteurChange = (opt: ComboboxOption | null) => {
    if (!opt) return;
    const sec = MOCK_SECTEURS.find((s) => s.id === opt.value);
    setForm((f) => ({
      ...f,
      id_secteur:  opt,
      region:      sec?.region      ?? f.region,
      departement: sec?.departement ?? f.departement,
      sprefecture: sec?.sprefecture ?? f.sprefecture,
    }));
  };

  const handleSave = () => {
    if (!form.num.trim() || !form.cde.trim()) return;
    const payload: Omit<MockLot, 'id'> = {
      num:         form.num,
      cde:         form.cde,
      couvert:     form.couvert,
      id_secteur:  form.id_secteur.value,
      region:      form.region,
      departement: form.departement,
      sprefecture: form.sprefecture,
    };
    if (editing) {
      setData((p) => p.map((l) => l.id === editing.id ? { id: editing.id, ...payload } : l));
      log('UPDATE', 'Lot', `Modification du lot ${form.cde}`, form.cde);
    } else {
      setData((p) => [...p, { id: `lt-${Date.now()}`, ...payload }]);
      log('CREATE', 'Lot', `Création du lot ${form.cde} — ${form.id_secteur.label}`, form.cde);
    }
    setModal(false);
  };

  const filtered = useMemo(() => data.filter((l) => (
    (!fNum  || l.num.includes(fNum)) &&
    (!fCde  || l.cde.toLowerCase().includes(fCde.toLowerCase())) &&
    (!fCouv || l.couvert.toLowerCase().includes(fCouv.toLowerCase())) &&
    (!fSec  || l.id_secteur === fSec) &&
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
            <Table className='table table-hover mb-0' style={{ minWidth: 560 }}>
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
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='N°…'   value={fNum}  onChange={(e) => handleNum(e.target.value)}  /></th>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Code…' value={fCde}  onChange={(e) => handleCde(e.target.value)}  /></th>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Zone…' value={fCouv} onChange={(e) => handleCouv(e.target.value)} /></th>
                  <th style={colStyle}><Combobox options={SECTEUR_FILTER} value={SECTEUR_FILTER.find((o) => o.value === fSec) ?? SECTEUR_FILTER[0]} onChange={(opt) => handleSec(opt?.value ?? '')} isClearable={false} compact /></th>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Dépt…' value={fDep}  onChange={(e) => handleDep(e.target.value)}  /></th>
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
                    <td style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.couvert}</td>
                    <td className='text-muted'>{secteurLabel(l.id_secteur)}</td>
                    <td className='text-muted'>{l.departement}</td>
                    <td><RowActions prefix='lt' id={l.id} onView={() => openView(l)} onEdit={() => openEdit(l)} onDelete={() => setDeleteTarget(l)} /></td>
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
        isOpen={modal} toggle={() => setModal(false)}
        title={viewing ? 'Détails du lot' : editing ? 'Modifier le lot' : 'Ajouter un lot'}
        onSave={viewing ? undefined : handleSave}
        onCancel={() => setModal(false)}
        cancelLabel={viewing ? 'Fermer' : 'Annuler'}
      >
        <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <p className='text-muted fw-semibold small mb-2'>Identification</p>
          <Row>
            <Col xs='12' sm='6'><FormGroup><Label>N° Lot <span className='text-danger'>*</span></Label><Input disabled={viewing} value={form.num} onChange={(e) => setForm((f) => ({ ...f, num: e.target.value }))} placeholder='Ex: 1' /></FormGroup></Col>
            <Col xs='12' sm='6'><FormGroup><Label>Code <span className='text-danger'>*</span></Label>  <Input disabled={viewing} value={form.cde} onChange={(e) => setForm((f) => ({ ...f, cde: e.target.value }))} placeholder='LT-01' /></FormGroup></Col>
          </Row>
          <Combobox label='Secteur' isDisabled={viewing} options={SECTEURS_OPT} value={form.id_secteur} onChange={handleSecteurChange} />
          <hr style={{ borderColor: 'transparent' }} />
          <p className='text-muted fw-semibold small mb-2'>Zone</p>
          <FormGroup><Label>Zone de couverture</Label><Input disabled={viewing} value={form.couvert} onChange={(e) => setForm((f) => ({ ...f, couvert: e.target.value }))} placeholder='Ex: Zone Nord Abengourou' /></FormGroup>
          <hr style={{ borderColor: 'transparent' }} />
          <p className='text-muted fw-semibold small mb-2'>Localisation <span className='text-muted fw-normal'>(pré-remplie depuis le secteur)</span></p>
          <Row>
            <Col xs='12' sm='4'><FormGroup><Label>Région</Label>          <Input disabled={viewing} value={form.region}      onChange={(e) => setForm((f) => ({ ...f, region: e.target.value }))}      /></FormGroup></Col>
            <Col xs='12' sm='4'><FormGroup><Label>Département</Label>     <Input disabled={viewing} value={form.departement} onChange={(e) => setForm((f) => ({ ...f, departement: e.target.value }))} /></FormGroup></Col>
            <Col xs='12' sm='4'><FormGroup><Label>Sous-préfecture</Label> <Input disabled={viewing} value={form.sprefecture} onChange={(e) => setForm((f) => ({ ...f, sprefecture: e.target.value }))} /></FormGroup></Col>
          </Row>
        </Form>
      </AppDrawer>

      <ConfirmDelete
        isOpen={!!deleteTarget}
        message={`Voulez-vous vraiment supprimer le lot "${deleteTarget?.cde}" ? Cette action est irréversible.`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
};

export default LotList;
