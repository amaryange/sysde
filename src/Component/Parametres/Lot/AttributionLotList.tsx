'use client';

import { useState, useMemo } from 'react';
import { Card, CardBody, Table, Button, Form } from 'reactstrap';
import AppDrawer from '@/Component/Common/AppDrawer';
import ConfirmDelete from '@/Component/Common/ConfirmDelete';
import RowActions from '@/Component/Common/RowActions';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import { PlusCircle } from 'react-feather';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppPagination from '@/Component/Common/AppPagination';
import { useLog } from '@/hooks/useLog';
import {
  MOCK_OPERATEUR_LOT, MOCK_OPERATEUR_SECTEUR, MOCK_OPERATEURS, MOCK_LOTS,
  MockOperateurLot,
} from '@/Data/mockData';

const PAGE_SIZE = 6;
const colStyle: React.CSSProperties = { padding: '4px 8px' };

const OP_OPTIONS: ComboboxOption[] = MOCK_OPERATEURS
  .filter((o) => MOCK_OPERATEUR_SECTEUR.some((os) => os.id_operateur === o.id))
  .map((o) => ({ value: o.id, label: o.acronyme }));

const OP_FILTER: ComboboxOption[] = [{ value: '', label: 'Tous' }, ...OP_OPTIONS];

const SEC_FILTER_ALL: ComboboxOption[] = [
  { value: '', label: 'Tous' },
  ...Array.from(new Map(
    MOCK_OPERATEUR_SECTEUR.map((os) => [os.id_secteur, { value: os.id_secteur, label: `${os.cde_secteur} — ${os.lib_secteur}` }])
  ).values()),
];

const opLabel  = (id: string) => MOCK_OPERATEURS.find((o) => o.id === id)?.acronyme ?? id;
const lotLabel = (id: string) => { const l = MOCK_LOTS.find((x) => x.id === id); return l ? `Lot ${l.num} (${l.cde})` : id; };

type AttLotForm = {
  id_operateur:         ComboboxOption;
  id_operateur_secteur: ComboboxOption | null;
  id_lot:               ComboboxOption | null;
};

const emptyForm = (): AttLotForm => ({
  id_operateur:         OP_OPTIONS[0],
  id_operateur_secteur: null,
  id_lot:               null,
});

const fillForm = (a: MockOperateurLot): AttLotForm => {
  const os = MOCK_OPERATEUR_SECTEUR.find((x) => x.id === a.id_operateur_secteur);
  const op = os ? MOCK_OPERATEURS.find((o) => o.id === os.id_operateur) : undefined;
  return {
    id_operateur:         op ? { value: op.id, label: op.acronyme } : OP_OPTIONS[0],
    id_operateur_secteur: os ? { value: os.id, label: `${os.cde_secteur} — ${os.lib_secteur}` } : null,
    id_lot:               { value: a.id_lot, label: lotLabel(a.id_lot) },
  };
};

const AttributionLotList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();
  const log          = useLog();

  const [data,         setData        ] = useState<MockOperateurLot[]>(MOCK_OPERATEUR_LOT);
  const [modal,        setModal       ] = useState(false);
  const [editing,      setEditing     ] = useState<MockOperateurLot | null>(null);
  const [viewing,      setViewing     ] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<MockOperateurLot | null>(null);
  const [form,         setForm        ] = useState<AttLotForm>(emptyForm);

  const [fOp,  setFOp ] = useState(() => searchParams.get('al_op')  ?? '');
  const [fSec, setFSec] = useState(() => searchParams.get('al_sec') ?? '');
  const [page, setPage] = useState(() => Number(searchParams.get('al_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (!v) params.delete(k); else params.set(k, v); });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleOp   = (v: string) => { setFOp(v);  setPage(1); pushUrl({ al_op:  v || null, al_page: null }); };
  const handleSec  = (v: string) => { setFSec(v); setPage(1); pushUrl({ al_sec: v || null, al_page: null }); };
  const handlePage = (p: number) => { setPage(p); pushUrl({ al_page: p > 1 ? String(p) : null }); };

  const openAdd  = () => { setViewing(false); setEditing(null);  setForm(emptyForm());   setModal(true); };
  const openEdit = (a: MockOperateurLot) => { setViewing(false); setEditing(a);   setForm(fillForm(a)); setModal(true); };
  const openView = (a: MockOperateurLot) => { setViewing(true);  setEditing(null); setForm(fillForm(a)); setModal(true); };

  const secOptionsForOp: ComboboxOption[] = useMemo(() =>
    MOCK_OPERATEUR_SECTEUR
      .filter((os) => os.id_operateur === form.id_operateur.value)
      .map((os) => ({ value: os.id, label: `${os.cde_secteur} — ${os.lib_secteur}` })),
    [form.id_operateur.value]
  );

  const lotOptionsForSec: ComboboxOption[] = useMemo(() => {
    if (!form.id_operateur_secteur) return [];
    const os = MOCK_OPERATEUR_SECTEUR.find((x) => x.id === form.id_operateur_secteur!.value);
    if (!os) return [];
    return MOCK_LOTS
      .filter((l) => l.id_secteur === os.id_secteur)
      .map((l) => ({ value: l.id, label: `Lot ${l.num} (${l.cde})` }));
  }, [form.id_operateur_secteur]);

  const handleOpChange  = (opt: ComboboxOption | null) => {
    if (!opt) return;
    setForm((f) => ({ ...f, id_operateur: opt, id_operateur_secteur: null, id_lot: null }));
  };
  const handleSecChange = (opt: ComboboxOption | null) => {
    setForm((f) => ({ ...f, id_operateur_secteur: opt ?? null, id_lot: null }));
  };

  const handleDeleteConfirm = () => {
    if (!deleteTarget) return;
    setData((p) => p.filter((a) => a.id !== deleteTarget.id));
    log('DELETE', 'Lot', `Retrait du lot ${deleteTarget.cde_lot} (attribution opérateur)`, deleteTarget.cde_lot);
    setDeleteTarget(null);
  };

  const handleSave = () => {
    if (!form.id_operateur_secteur || !form.id_lot) return;
    const lot = MOCK_LOTS.find((l) => l.id === form.id_lot!.value);
    if (!lot) return;
    const duplicate = data.some(
      (a) => a.id_operateur_secteur === form.id_operateur_secteur!.value && a.id_lot === form.id_lot!.value && (!editing || a.id !== editing.id)
    );
    if (duplicate) return;
    if (editing) {
      setData((p) => p.map((a) => a.id === editing.id ? {
        ...a,
        id_operateur_secteur: form.id_operateur_secteur!.value,
        id_lot:  form.id_lot!.value,
        cde_lot: lot.cde,
        num_lot: lot.num,
      } : a));
      log('UPDATE', 'Lot', `Modification attribution lot ${lot.cde}`, lot.cde);
    } else {
      const next: MockOperateurLot = {
        id: `ol-${Date.now()}`,
        id_operateur_secteur: form.id_operateur_secteur.value,
        id_lot:  form.id_lot.value,
        cde_lot: lot.cde,
        num_lot: lot.num,
      };
      setData((p) => [...p, next]);
      log('CREATE', 'Lot', `Attribution lot ${lot.cde} — ${opLabel(form.id_operateur.value)}`, lot.cde);
    }
    setModal(false);
  };

  const enriched = useMemo(() => data.map((a) => {
    const os = MOCK_OPERATEUR_SECTEUR.find((x) => x.id === a.id_operateur_secteur);
    return { ...a, id_operateur: os?.id_operateur ?? '', id_secteur: os?.id_secteur ?? '', lib_secteur: os?.lib_secteur ?? '', cde_secteur: os?.cde_secteur ?? '' };
  }), [data]);

  const filtered = useMemo(() => enriched.filter((a) => (
    (!fOp  || a.id_operateur === fOp) &&
    (!fSec || a.id_secteur   === fSec)
  )), [enriched, fOp, fSec]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h5 className='mb-0'>Attributions opérateur — lot</h5>
        <Button color='primary' className='d-flex align-items-center gap-1' onClick={openAdd}>
          <PlusCircle size={16} /> Attribuer un lot
        </Button>
      </div>

      <Card>
        <CardBody className='p-0'>
          <div className='table-responsive'>
            <Table className='table table-hover mb-0' style={{ minWidth: 460 }}>
              <thead className='table-light'>
                <tr>
                  <th style={{ width: '25%' }}>Opérateur</th>
                  <th style={{ width: '30%' }}>Secteur</th>
                  <th style={{ width: '15%' }}>N° Lot</th>
                  <th style={{ width: '20%' }}>Code lot</th>
                  <th style={{ width: '10%' }} className='text-end'>Actions</th>
                </tr>
                <tr>
                  <th style={colStyle}>
                    <Combobox compact options={OP_FILTER}      value={OP_FILTER.find((o) => o.value === fOp)       ?? OP_FILTER[0]}      onChange={(opt) => handleOp(opt?.value  ?? '')} isClearable={false} />
                  </th>
                  <th style={colStyle}>
                    <Combobox compact options={SEC_FILTER_ALL} value={SEC_FILTER_ALL.find((o) => o.value === fSec) ?? SEC_FILTER_ALL[0]} onChange={(opt) => handleSec(opt?.value ?? '')} isClearable={false} />
                  </th>
                  <th style={colStyle} />
                  <th style={colStyle} />
                  <th style={colStyle} />
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr><td colSpan={5} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                ) : paginated.map((a) => (
                  <tr key={a.id}>
                    <td className='f-w-600'>{opLabel(a.id_operateur)}</td>
                    <td className='text-muted'>{a.cde_secteur} — {a.lib_secteur}</td>
                    <td>Lot {a.num_lot}</td>
                    <td><code>{a.cde_lot}</code></td>
                    <td>
                      <RowActions
                        prefix='al' id={a.id}
                        onView={() => openView(data.find((x) => x.id === a.id)!)}
                        onEdit={() => openEdit(data.find((x) => x.id === a.id)!)}
                        onDelete={() => setDeleteTarget(data.find((x) => x.id === a.id)!)}
                      />
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
        isOpen={modal} toggle={() => setModal(false)}
        title={viewing ? "Détails de l'attribution" : editing ? "Modifier l'attribution" : 'Attribuer un lot'}
        onSave={viewing ? undefined : handleSave}
        onCancel={() => setModal(false)}
        cancelLabel={viewing ? 'Fermer' : 'Annuler'}
      >
        <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <p className='text-muted fw-semibold small mb-2'>Sélection en cascade</p>
          <Combobox
            label='Opérateur *'
            isDisabled={viewing}
            options={OP_OPTIONS}
            value={form.id_operateur}
            onChange={handleOpChange}
          />
          <Combobox
            label='Secteur attribué *'
            isDisabled={viewing || secOptionsForOp.length === 0}
            options={secOptionsForOp}
            value={form.id_operateur_secteur}
            onChange={handleSecChange}
            placeholder={secOptionsForOp.length === 0 ? 'Aucun secteur attribué' : 'Sélectionner…'}
          />
          <Combobox
            label='Lot *'
            isDisabled={viewing || !form.id_operateur_secteur}
            options={lotOptionsForSec}
            value={form.id_lot}
            onChange={(opt) => setForm((f) => ({ ...f, id_lot: opt ?? null }))}
            placeholder={!form.id_operateur_secteur ? "Sélectionner un secteur d'abord" : 'Sélectionner…'}
          />
        </Form>
      </AppDrawer>

      <ConfirmDelete
        isOpen={!!deleteTarget}
        message={`Voulez-vous retirer le lot "${deleteTarget?.cde_lot}" de cette attribution ?`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
};

export default AttributionLotList;
