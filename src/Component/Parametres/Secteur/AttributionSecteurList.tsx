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
import { MOCK_OPERATEUR_SECTEUR, MOCK_OPERATEURS, MOCK_SECTEURS, MockOperateurSecteur } from '@/Data/mockData';

const PAGE_SIZE = 6;
const colStyle: React.CSSProperties = { padding: '4px 8px' };

const OP_OPTIONS: ComboboxOption[]  = MOCK_OPERATEURS.map((o) => ({ value: o.id, label: o.acronyme }));
const SEC_OPTIONS: ComboboxOption[] = MOCK_SECTEURS.map((s) => ({ value: s.id, label: `${s.cde} — ${s.lib}` }));

const OP_FILTER:  ComboboxOption[] = [{ value: '', label: 'Tous' }, ...OP_OPTIONS];
const SEC_FILTER: ComboboxOption[] = [{ value: '', label: 'Tous' }, ...SEC_OPTIONS];

type AttForm = { id_operateur: ComboboxOption; id_secteur: ComboboxOption };

const emptyForm = (): AttForm => ({ id_operateur: OP_OPTIONS[0], id_secteur: SEC_OPTIONS[0] });
const fillForm  = (a: MockOperateurSecteur): AttForm => ({
  id_operateur: OP_OPTIONS.find((o) => o.value === a.id_operateur) ?? OP_OPTIONS[0],
  id_secteur:   SEC_OPTIONS.find((s) => s.value === a.id_secteur)  ?? SEC_OPTIONS[0],
});

const opLabel = (id: string) => MOCK_OPERATEURS.find((o) => o.id === id)?.acronyme ?? id;

const AttributionSecteurList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();
  const log          = useLog();

  const [data,         setData        ] = useState<MockOperateurSecteur[]>(MOCK_OPERATEUR_SECTEUR);
  const [modal,        setModal       ] = useState(false);
  const [editing,      setEditing     ] = useState<MockOperateurSecteur | null>(null);
  const [viewing,      setViewing     ] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<MockOperateurSecteur | null>(null);
  const [form,         setForm        ] = useState<AttForm>(emptyForm);

  const [fOp,  setFOp ] = useState(() => searchParams.get('as_op')  ?? '');
  const [fSec, setFSec] = useState(() => searchParams.get('as_sec') ?? '');
  const [page, setPage] = useState(() => Number(searchParams.get('as_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (!v) params.delete(k); else params.set(k, v); });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleOp   = (v: string) => { setFOp(v);  setPage(1); pushUrl({ as_op:  v || null, as_page: null }); };
  const handleSec  = (v: string) => { setFSec(v); setPage(1); pushUrl({ as_sec: v || null, as_page: null }); };
  const handlePage = (p: number) => { setPage(p); pushUrl({ as_page: p > 1 ? String(p) : null }); };

  const openAdd  = () => { setViewing(false); setEditing(null);  setForm(emptyForm());   setModal(true); };
  const openEdit = (a: MockOperateurSecteur) => { setViewing(false); setEditing(a);   setForm(fillForm(a)); setModal(true); };
  const openView = (a: MockOperateurSecteur) => { setViewing(true);  setEditing(null); setForm(fillForm(a)); setModal(true); };

  const handleDeleteConfirm = () => {
    if (!deleteTarget) return;
    setData((p) => p.filter((a) => a.id !== deleteTarget.id));
    log('DELETE', 'Operateur', `Retrait du secteur ${deleteTarget.cde_secteur} pour ${opLabel(deleteTarget.id_operateur)}`, deleteTarget.cde_secteur);
    setDeleteTarget(null);
  };

  const handleSave = () => {
    const sec = MOCK_SECTEURS.find((s) => s.id === form.id_secteur.value);
    if (!sec) return;
    const duplicate = data.some(
      (a) => a.id_operateur === form.id_operateur.value && a.id_secteur === form.id_secteur.value && (!editing || a.id !== editing.id)
    );
    if (duplicate) return;
    if (editing) {
      setData((p) => p.map((a) => a.id === editing.id ? {
        ...a,
        id_operateur: form.id_operateur.value,
        id_secteur:   form.id_secteur.value,
        cde_secteur:  sec.cde,
        lib_secteur:  sec.lib,
      } : a));
      log('UPDATE', 'Operateur', `Modification attribution secteur ${sec.cde}`, sec.cde);
    } else {
      const next: MockOperateurSecteur = {
        id: `os-${Date.now()}`,
        id_operateur: form.id_operateur.value,
        id_secteur:   form.id_secteur.value,
        cde_secteur:  sec.cde,
        lib_secteur:  sec.lib,
      };
      setData((p) => [...p, next]);
      log('CREATE', 'Operateur', `Attribution secteur ${sec.cde} — ${opLabel(form.id_operateur.value)}`, sec.cde);
    }
    setModal(false);
  };

  const filtered = useMemo(() => data.filter((a) => (
    (!fOp  || a.id_operateur === fOp) &&
    (!fSec || a.id_secteur   === fSec)
  )), [data, fOp, fSec]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h5 className='mb-0'>Attributions opérateur — secteur</h5>
        <Button color='primary' className='d-flex align-items-center gap-1' onClick={openAdd}>
          <PlusCircle size={16} /> Attribuer un secteur
        </Button>
      </div>

      <Card>
        <CardBody className='p-0'>
          <div className='table-responsive'>
            <Table className='table table-hover mb-0' style={{ minWidth: 420 }}>
              <thead className='table-light'>
                <tr>
                  <th style={{ width: '30%' }}>Opérateur</th>
                  <th style={{ width: '15%' }}>Code secteur</th>
                  <th style={{ width: '45%' }}>Libellé secteur</th>
                  <th style={{ width: '10%' }} className='text-end'>Actions</th>
                </tr>
                <tr>
                  <th style={colStyle}>
                    <Combobox compact options={OP_FILTER}  value={OP_FILTER.find((o) => o.value === fOp)   ?? OP_FILTER[0]}  onChange={(opt) => handleOp(opt?.value  ?? '')} isClearable={false} />
                  </th>
                  <th style={colStyle}>
                    <Combobox compact options={SEC_FILTER} value={SEC_FILTER.find((o) => o.value === fSec) ?? SEC_FILTER[0]} onChange={(opt) => handleSec(opt?.value ?? '')} isClearable={false} />
                  </th>
                  <th style={colStyle} />
                  <th style={colStyle} />
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr><td colSpan={4} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                ) : paginated.map((a) => (
                  <tr key={a.id}>
                    <td className='f-w-600'>{opLabel(a.id_operateur)}</td>
                    <td><code>{a.cde_secteur}</code></td>
                    <td className='text-muted'>{a.lib_secteur}</td>
                    <td><RowActions prefix='as' id={a.id} onView={() => openView(a)} onEdit={() => openEdit(a)} onDelete={() => setDeleteTarget(a)} /></td>
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
        title={viewing ? "Détails de l'attribution" : editing ? "Modifier l'attribution" : 'Attribuer un secteur'}
        onSave={viewing ? undefined : handleSave}
        onCancel={() => setModal(false)}
        cancelLabel={viewing ? 'Fermer' : 'Annuler'}
      >
        <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <p className='text-muted fw-semibold small mb-2'>Attribution</p>
          <Combobox
            label='Opérateur *'
            isDisabled={viewing}
            options={OP_OPTIONS}
            value={form.id_operateur}
            onChange={(opt) => opt && setForm((f) => ({ ...f, id_operateur: opt }))}
          />
          <Combobox
            label='Secteur *'
            isDisabled={viewing}
            options={SEC_OPTIONS}
            value={form.id_secteur}
            onChange={(opt) => opt && setForm((f) => ({ ...f, id_secteur: opt }))}
          />
        </Form>
      </AppDrawer>

      <ConfirmDelete
        isOpen={!!deleteTarget}
        message={`Voulez-vous retirer le secteur "${deleteTarget?.lib_secteur}" de l'opérateur "${opLabel(deleteTarget?.id_operateur ?? '')}" ?`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
};

export default AttributionSecteurList;
