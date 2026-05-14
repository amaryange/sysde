'use client';

import { useState, useMemo } from 'react';
import { Card, CardBody, Table, Badge, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import AppDrawer from '@/Component/Common/AppDrawer';
import ConfirmDelete from '@/Component/Common/ConfirmDelete';
import RowActions from '@/Component/Common/RowActions';
import { MapPin } from 'react-feather';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppPagination from '@/Component/Common/AppPagination';
import { useDebouncedCallback } from '@/hooks/useDebouncedCallback';
import { useLog } from '@/hooks/useLog';
import { MOCK_SECTEURS, MOCK_LOTS, MockSecteur } from '@/Data/mockData';

const PAGE_SIZE = 6;
const colStyle: React.CSSProperties   = { padding: '4px 8px' };
const inputStyle: React.CSSProperties = { fontSize: 12, padding: '3px 6px', height: 28 };

type SecteurForm = { lib: string; cde: string };
const emptyForm = (): SecteurForm => ({ lib: '', cde: '' });
const fillForm  = (s: MockSecteur): SecteurForm => ({ lib: s.lib, cde: s.cde });

const nbLots = (id: string) => MOCK_LOTS.filter((l) => l.id_secteur === id).length;

const SecteurList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();
  const log          = useLog();

  const [data,         setData        ] = useState<MockSecteur[]>(MOCK_SECTEURS);
  const [modal,        setModal       ] = useState(false);
  const [editing,      setEditing     ] = useState<MockSecteur | null>(null);
  const [viewing,      setViewing     ] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<MockSecteur | null>(null);
  const [form,         setForm        ] = useState<SecteurForm>(emptyForm);

  const [fLib,  setFLib ] = useState(() => searchParams.get('sec_lib')  ?? '');
  const [fCde,  setFCde ] = useState(() => searchParams.get('sec_cde')  ?? '');
  const [page,  setPage ] = useState(() => Number(searchParams.get('sec_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (!v) params.delete(k); else params.set(k, v); });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const debLib = useDebouncedCallback((v: string) => pushUrl({ sec_lib: v || null, sec_page: null }), 300);
  const debCde = useDebouncedCallback((v: string) => pushUrl({ sec_cde: v || null, sec_page: null }), 300);

  const handleLib  = (v: string) => { setFLib(v);  setPage(1); debLib(v); };
  const handleCde  = (v: string) => { setFCde(v);  setPage(1); debCde(v); };
  const handlePage = (p: number) => { setPage(p); pushUrl({ sec_page: p > 1 ? String(p) : null }); };

  const openAdd  = () => { setViewing(false); setEditing(null);  setForm(emptyForm());   setModal(true); };
  const openEdit = (s: MockSecteur) => { setViewing(false); setEditing(s);   setForm(fillForm(s)); setModal(true); };
  const openView = (s: MockSecteur) => { setViewing(true);  setEditing(null); setForm(fillForm(s)); setModal(true); };

  const handleDeleteConfirm = () => {
    if (!deleteTarget) return;
    setData((p) => p.filter((s) => s.id !== deleteTarget.id));
    log('DELETE', 'Secteur', `Suppression du secteur ${deleteTarget.cde} — ${deleteTarget.lib}`, deleteTarget.cde);
    setDeleteTarget(null);
  };

  const handleSave = () => {
    const lib = form.lib.trim();
    const cde = form.cde.trim();
    if (!lib || !cde) return;
    if (editing) {
      setData((p) => p.map((s) => s.id === editing.id ? { ...s, lib, cde } : s));
      log('UPDATE', 'Secteur', `Modification du secteur ${cde} — ${lib}`, cde);
    } else {
      const next: MockSecteur = {
        id: `sec-${Date.now()}`, lib, cde,
        region: '', departement: '', sprefecture: '',
      };
      setData((p) => [...p, next]);
      log('CREATE', 'Secteur', `Création du secteur ${cde} — ${lib}`, cde);
    }
    setModal(false);
  };

  const filtered = useMemo(() => data.filter((s) => (
    (!fLib || s.lib.toLowerCase().includes(fLib.toLowerCase())) &&
    (!fCde || s.cde.includes(fCde))
  )), [data, fLib, fCde]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h5 className='mb-0'>Liste des secteurs</h5>
        <Button color='primary' className='d-flex align-items-center gap-1' onClick={openAdd}>
          <MapPin size={16} /> Ajouter secteur
        </Button>
      </div>

      <Card>
        <CardBody className='p-0'>
          <div className='table-responsive'>
            <Table className='table table-hover mb-0' style={{ minWidth: 420 }}>
              <thead className='table-light'>
                <tr>
                  <th style={{ width: '50%' }}>Libellé</th>
                  <th style={{ width: '15%' }}>Code</th>
                  <th style={{ width: '20%' }}>Lots</th>
                  <th style={{ width: '15%' }} className='text-end'>Actions</th>
                </tr>
                <tr>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Libellé…' value={fLib} onChange={(e) => handleLib(e.target.value)} /></th>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Code…'    value={fCde} onChange={(e) => handleCde(e.target.value)} /></th>
                  <th style={colStyle} />
                  <th style={colStyle} />
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr><td colSpan={4} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                ) : paginated.map((s) => {
                  const n = nbLots(s.id);
                  return (
                    <tr key={s.id}>
                      <td className='f-w-600'>{s.lib}</td>
                      <td><code>{s.cde}</code></td>
                      <td>
                        <Badge color={n > 0 ? 'primary' : 'secondary'} className='badge-light'>
                          {n} lot{n !== 1 ? 's' : ''}
                        </Badge>
                      </td>
                      <td><RowActions prefix='sec' id={s.id} onView={() => openView(s)} onEdit={() => openEdit(s)} onDelete={() => setDeleteTarget(s)} /></td>
                    </tr>
                  );
                })}
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
        title={viewing ? 'Détails du secteur' : editing ? 'Modifier le secteur' : 'Ajouter un secteur'}
        onSave={viewing ? undefined : handleSave}
        onCancel={() => setModal(false)}
        cancelLabel={viewing ? 'Fermer' : 'Annuler'}
      >
        <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <p className='text-muted fw-semibold small mb-2'>Identification</p>
          <FormGroup>
            <Label>Libellé <span className='text-danger'>*</span></Label>
            <Input
              disabled={viewing}
              value={form.lib}
              onChange={(e) => setForm((f) => ({ ...f, lib: e.target.value }))}
              placeholder='Ex: Abengourou'
            />
          </FormGroup>
          <FormGroup>
            <Label>Code secteur <span className='text-danger'>*</span></Label>
            <Input
              disabled={viewing}
              value={form.cde}
              onChange={(e) => setForm((f) => ({ ...f, cde: e.target.value }))}
              placeholder='Ex: 001'
              maxLength={10}
            />
          </FormGroup>

          <hr style={{ borderColor: 'transparent' }} />
          <p className='text-muted fw-semibold small mb-1'>Géométrie</p>
          <div
            className='d-flex align-items-center justify-content-center text-muted rounded'
            style={{ height: 120, border: '1.5px dashed #ced4da', fontSize: 12, gap: 6 }}
          >
            <MapPin size={14} />
            <span>Carte Leaflet disponible après connexion à l&apos;API</span>
          </div>
        </Form>
      </AppDrawer>

      <ConfirmDelete
        isOpen={!!deleteTarget}
        message={`Voulez-vous vraiment supprimer le secteur "${deleteTarget?.cde} — ${deleteTarget?.lib}" ? Cette action est irréversible.`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
};

export default SecteurList;
