'use client';

import { useState, useMemo } from 'react';
import { Card, CardBody, Table, Badge, Button, Form, FormGroup, Label, Input, Row, Col, Alert } from 'reactstrap';
import AppDrawer from '@/Component/Common/AppDrawer';
import ConfirmDelete from '@/Component/Common/ConfirmDelete';
import RowActions from '@/Component/Common/RowActions';
import { PlusCircle } from 'react-feather';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppPagination from '@/Component/Common/AppPagination';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import DateInput from '@/Component/Common/DateInput';
import { useDebouncedCallback } from '@/hooks/useDebouncedCallback';
import { useLog } from '@/hooks/useLog';
import {
  MOCK_EXERCICES, MOCK_CONTRATS, MOCK_OPERATEURS,
  MOCK_OPERATEUR_SECTEUR, MOCK_OPERATEUR_LOT, MOCK_LOT_EXERCICE,
  MockExercice, MockLotExercice,
} from '@/Data/mockData';

// ---------------------------------------------------------------------------
// Options
// ---------------------------------------------------------------------------
const CONTRATS_OPT: ComboboxOption[] = MOCK_CONTRATS.map((c) => {
  const op = MOCK_OPERATEURS.find((o) => o.id === c.id_operateur);
  return { value: c.id, label: `${c.num} — ${op?.acronyme ?? ''}` };
});

const CONTRAT_FILTER: ComboboxOption[] = [{ value: '', label: 'Tous' }, ...CONTRATS_OPT];

const STATUT_FILTER: ComboboxOption[] = [
  { value: '',         label: 'Tous'     },
  { value: 'EnCours',  label: 'En cours' },
  { value: 'Cloture',  label: 'Clôturé'  },
];

// ---------------------------------------------------------------------------
// Effectifs columns
// ---------------------------------------------------------------------------
const EFF_COLS = ['nbre_cs', 'nbre_cf', 'nbre_co', 'nbre_fs', 'nbre_mo', 'nbre_es', 'nbre_se'] as const;
type EffKey = typeof EFF_COLS[number];
const EFF_LABELS: Record<EffKey, string> = {
  nbre_cs: 'CS', nbre_cf: 'CF', nbre_co: 'CO', nbre_fs: 'FS', nbre_mo: 'MO', nbre_es: 'ES', nbre_se: 'SE',
};
const EFF_TITLES: Record<EffKey, string> = {
  nbre_cs: 'Chef Secteur', nbre_cf: 'Contrôleur Formation', nbre_co: 'Contrôleur Ordinaire',
  nbre_fs: 'Formateur Saigné', nbre_mo: 'Moniteur', nbre_es: 'Équipe Spéciale', nbre_se: 'Secrétaire',
};
const rowTotal = (le: LotEffectif) => EFF_COLS.reduce((s, k) => s + (le[k] ?? 0), 0);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const PAGE_SIZE = 6;
const colStyle: React.CSSProperties   = { padding: '4px 8px' };
const inputStyle: React.CSSProperties = { fontSize: 12, padding: '3px 6px', height: 28 };

const contratLabel = (id: string) => CONTRATS_OPT.find((c) => c.value === id)?.label ?? id;

const dureeAns = (id_contrat: string): number => {
  const c = MOCK_CONTRATS.find((c) => c.id === id_contrat);
  if (!c) return 0;
  const ms = new Date(c.fin).getTime() - new Date(c.debut).getTime();
  return Math.ceil(ms / (365.25 * 24 * 60 * 60 * 1000));
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type LotEffectif = {
  id_operateur_lot: string;
  num_lot:          string;
  cde_lot:          string;
  lib_secteur:      string;
  nbre_cs: number; nbre_cf: number; nbre_co: number;
  nbre_fs: number; nbre_mo: number; nbre_es: number; nbre_se: number;
};

type ExerciceForm = {
  lib:            string;
  annee:          string;
  cloture:        string;
  statut:         boolean;
  id_contrat:     ComboboxOption;
  lots_effectifs: LotEffectif[];
};

// ---------------------------------------------------------------------------
// Builders
// ---------------------------------------------------------------------------
const buildLotsEffectifs = (id_contrat_val: string, lotExForEx: MockLotExercice[]): LotEffectif[] => {
  const contrat = MOCK_CONTRATS.find((c) => c.id === id_contrat_val);
  if (!contrat) return [];
  return MOCK_OPERATEUR_SECTEUR
    .filter((os) => os.id_operateur === contrat.id_operateur)
    .flatMap((os) =>
      MOCK_OPERATEUR_LOT
        .filter((ol) => ol.id_operateur_secteur === os.id)
        .map((ol) => {
          const ex = lotExForEx.find((le) => le.id_operateur_lot === ol.id);
          return {
            id_operateur_lot: ol.id,
            num_lot:          ol.num_lot,
            cde_lot:          ol.cde_lot,
            lib_secteur:      os.lib_secteur,
            nbre_cs: ex?.nbre_cs ?? 0, nbre_cf: ex?.nbre_cf ?? 0, nbre_co: ex?.nbre_co ?? 0,
            nbre_fs: ex?.nbre_fs ?? 0, nbre_mo: ex?.nbre_mo ?? 0, nbre_es: ex?.nbre_es ?? 0,
            nbre_se: ex?.nbre_se ?? 0,
          };
        })
    );
};

const emptyForm = (): ExerciceForm => ({
  lib: '', annee: '', cloture: '', statut: true,
  id_contrat:     CONTRATS_OPT[0],
  lots_effectifs: buildLotsEffectifs(CONTRATS_OPT[0].value, []),
});

const fillForm = (e: MockExercice, lotExData: MockLotExercice[]): ExerciceForm => ({
  lib:        e.lib,
  annee:      e.annee,
  cloture:    e.cloture,
  statut:     e.statut,
  id_contrat: CONTRATS_OPT.find((c) => c.value === e.id_contrat) ?? CONTRATS_OPT[0],
  lots_effectifs: buildLotsEffectifs(e.id_contrat, lotExData.filter((le) => le.id_exercice === e.id)),
});

// ---------------------------------------------------------------------------
// Composant
// ---------------------------------------------------------------------------
const ExerciceList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();
  const log          = useLog();

  const [data,         setData        ] = useState<MockExercice[]>(MOCK_EXERCICES);
  const [lotExData,    setLotExData   ] = useState<MockLotExercice[]>(MOCK_LOT_EXERCICE);
  const [modal,        setModal       ] = useState(false);
  const [editing,      setEditing     ] = useState<MockExercice | null>(null);
  const [viewing,      setViewing     ] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<MockExercice | null>(null);
  const [form,         setForm        ] = useState<ExerciceForm>(emptyForm);

  const [fLib,     setFLib    ] = useState(() => searchParams.get('ex_lib')   ?? '');
  const [fCt,      setFCt     ] = useState(() => searchParams.get('ex_ct')    ?? '');
  const [fDebut,   setFDebut  ] = useState(() => searchParams.get('ex_debut') ?? '');
  const [fCloture, setFCloture] = useState(() => searchParams.get('ex_clot')  ?? '');
  const [fStatut,  setFStatut ] = useState(() => searchParams.get('ex_sta')   ?? '');
  const [page,     setPage    ] = useState(() => Number(searchParams.get('ex_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (!v) params.delete(k); else params.set(k, v); });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const debLib = useDebouncedCallback((v: string) => pushUrl({ ex_lib: v || null, ex_page: null }), 300);

  const handleLib     = (v: string) => { setFLib(v);     setPage(1); debLib(v); };
  const handleDebut   = (v: string) => { setFDebut(v);   setPage(1); pushUrl({ ex_debut: v || null, ex_page: null }); };
  const handleCloture = (v: string) => { setFCloture(v); setPage(1); pushUrl({ ex_clot:  v || null, ex_page: null }); };
  const handleCt      = (v: string) => { setFCt(v);      setPage(1); pushUrl({ ex_ct:    v || null, ex_page: null }); };
  const handleStatut  = (v: string) => { setFStatut(v);  setPage(1); pushUrl({ ex_sta:   v || null, ex_page: null }); };
  const handlePage    = (p: number) => { setPage(p); pushUrl({ ex_page: p > 1 ? String(p) : null }); };

  const openAdd  = ()                => { setViewing(false); setEditing(null); setForm(emptyForm());          setModal(true); };
  const openEdit = (e: MockExercice) => { setViewing(false); setEditing(e);    setForm(fillForm(e, lotExData)); setModal(true); };
  const openView = (e: MockExercice) => { setViewing(true);  setEditing(null); setForm(fillForm(e, lotExData)); setModal(true); };

  const handleDeleteConfirm = () => {
    if (!deleteTarget) return;
    setData((p) => p.filter((e) => e.id !== deleteTarget.id));
    setLotExData((p) => p.filter((le) => le.id_exercice !== deleteTarget.id));
    log('DELETE', 'Exercice', `Suppression de l'exercice ${deleteTarget.lib}`, deleteTarget.lib);
    setDeleteTarget(null);
  };

  const maxExercices   = dureeAns(form.id_contrat.value);
  const nbExistants    = useMemo(
    () => data.filter((e) => e.id_contrat === form.id_contrat.value && (!editing || e.id !== editing.id)).length,
    [data, form.id_contrat.value, editing],
  );
  const limiteAtteinte = nbExistants >= maxExercices;

  const handleContratChange = (opt: ComboboxOption | null) => {
    if (!opt) return;
    setForm((f) => ({ ...f, id_contrat: opt, lots_effectifs: buildLotsEffectifs(opt.value, []) }));
  };

  const handleSave = () => {
    if (!form.lib.trim() || !form.annee || limiteAtteinte) return;
    const exId = editing ? editing.id : `ex-${Date.now()}`;
    const payload: Omit<MockExercice, 'id'> = {
      lib:        form.lib,
      annee:      form.annee,
      cloture:    form.cloture,
      statut:     form.statut,
      id_contrat: form.id_contrat.value,
    };
    if (editing) {
      setData((p) => p.map((e) => e.id === editing.id ? { id: exId, ...payload } : e));
      log('UPDATE', 'Exercice', `Modification de l'exercice ${form.lib}`, form.lib);
    } else {
      setData((p) => [...p, { id: exId, ...payload }]);
      log('CREATE', 'Exercice', `Création de l'exercice ${form.lib} — ${form.id_contrat.label}`, form.lib);
    }
    setLotExData((prev) => [
      ...prev.filter((le) => le.id_exercice !== exId),
      ...form.lots_effectifs.map((le, i) => ({
        id:               `le-${exId}-${i}`,
        id_exercice:      exId,
        id_operateur_lot: le.id_operateur_lot,
        nbre_cs: le.nbre_cs, nbre_cf: le.nbre_cf, nbre_co: le.nbre_co,
        nbre_fs: le.nbre_fs, nbre_mo: le.nbre_mo, nbre_es: le.nbre_es, nbre_se: le.nbre_se,
      })),
    ]);
    setModal(false);
  };

  const filtered = useMemo(() => data.filter((e) => (
    (!fLib     || e.lib.toLowerCase().includes(fLib.toLowerCase())) &&
    (!fCt      || e.id_contrat === fCt) &&
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
            <Table className='table table-hover mb-0' style={{ minWidth: 560 }}>
              <thead className='table-light'>
                <tr>
                  <th style={{ width: '22%' }}>Libellé</th>
                  <th style={{ width: '26%' }}>Contrat</th>
                  <th style={{ width: '14%' }}>Début</th>
                  <th style={{ width: '14%' }}>Clôture</th>
                  <th style={{ width: '12%' }}>Statut</th>
                  <th style={{ width: '12%' }} className='text-end'>Actions</th>
                </tr>
                <tr>
                  <th style={colStyle}><Input bsSize='sm' style={inputStyle} placeholder='Libellé…' value={fLib} onChange={(e) => handleLib(e.target.value)} /></th>
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
                    <td><code style={{ fontSize: 11 }}>{contratLabel(e.id_contrat)}</code></td>
                    <td className='text-muted'>{e.annee}</td>
                    <td className='text-muted'>{e.cloture || '—'}</td>
                    <td><Badge color={e.statut ? 'success' : 'secondary'} className='badge-light'>{e.statut ? 'En cours' : 'Clôturé'}</Badge></td>
                    <td><RowActions prefix='ex' id={e.id} onView={() => openView(e)} onEdit={() => openEdit(e)} onDelete={() => setDeleteTarget(e)} /></td>
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
        title={viewing ? "Détails de l'exercice" : editing ? "Modifier l'exercice" : 'Ajouter un exercice'}
        onCancel={() => setModal(false)}
        footer={viewing ? (
          <Button color='light' onClick={() => setModal(false)}>Fermer</Button>
        ) : (
          <div className='d-flex gap-2'>
            <Button color='primary' onClick={handleSave} disabled={limiteAtteinte}>Enregistrer</Button>
            <Button color='light'   onClick={() => setModal(false)}>Annuler</Button>
          </div>
        )}
      >
        <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <p className='text-muted fw-semibold small mb-2'>Contrat</p>
          <FormGroup>
            <Label>Libellé <span className='text-danger'>*</span></Label>
            <Input disabled={viewing} value={form.lib} onChange={(e) => setForm((f) => ({ ...f, lib: e.target.value }))} placeholder='Ex: Exercice 2024' />
          </FormGroup>
          <Combobox label='Contrat' isDisabled={viewing} options={CONTRATS_OPT} value={form.id_contrat} onChange={handleContratChange} />

          {!viewing && maxExercices > 0 && (
            <Alert color={limiteAtteinte ? 'danger' : nbExistants === maxExercices - 1 ? 'warning' : 'info'} className='py-2 px-3 mb-3' style={{ fontSize: 13 }}>
              {limiteAtteinte
                ? <>Ce contrat a atteint sa limite de <strong>{maxExercices} exercice{maxExercices > 1 ? 's' : ''}</strong>. Impossible d'en ajouter un autre.</>
                : <><strong>{nbExistants}</strong> exercice{nbExistants > 1 ? 's' : ''} sur <strong>{maxExercices}</strong> autorisé{maxExercices > 1 ? 's' : ''} pour ce contrat.</>
              }
            </Alert>
          )}

          <hr style={{ borderColor: 'transparent' }} />
          <p className='text-muted fw-semibold small mb-2'>Période</p>
          <Row>
            <Col xs='12' sm='6'><DateInput disabled={viewing} label='Date de début'   required value={form.annee}   onChange={(v) => setForm((f) => ({ ...f, annee: v }))}   /></Col>
            <Col xs='12' sm='6'><DateInput disabled={viewing} label='Date de clôture'          value={form.cloture} onChange={(v) => setForm((f) => ({ ...f, cloture: v }))} /></Col>
          </Row>

          <hr style={{ borderColor: 'transparent' }} />
          <p className='text-muted fw-semibold small mb-2'>Statut</p>
          <FormGroup check>
            <Input disabled={viewing} type='checkbox' checked={form.statut} onChange={(e) => setForm((f) => ({ ...f, statut: e.target.checked }))} />
            <Label check>Exercice en cours</Label>
          </FormGroup>

          <hr style={{ borderColor: 'transparent' }} />
          <p className='text-muted fw-semibold small mb-2'>Effectifs cibles par lot</p>
          {form.lots_effectifs.length === 0 ? (
            <p className='text-muted small'>Aucun lot trouvé pour ce contrat.</p>
          ) : (() => {
            // Grouper par secteur
            const groups: { lib: string; rows: { le: LotEffectif; i: number }[] }[] = [];
            form.lots_effectifs.forEach((le, i) => {
              const g = groups.find((g) => g.lib === le.lib_secteur);
              if (g) g.rows.push({ le, i });
              else groups.push({ lib: le.lib_secteur, rows: [{ le, i }] });
            });
            return (
              <div className='table-responsive'>
                <Table size='sm' className='mb-0' style={{ fontSize: 12 }}>
                  <thead className='table-light'>
                    <tr>
                      <th className='text-center' style={{ minWidth: 56, whiteSpace: 'nowrap' }}>Lot</th>
                      {EFF_COLS.map((k) => (
                        <th key={k} className='text-center' style={{ minWidth: 48 }} title={EFF_TITLES[k]}>
                          {EFF_LABELS[k]}
                        </th>
                      ))}
                      <th className='text-center' style={{ minWidth: 48 }}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groups.map((g) => {
                      const secTotal = g.rows.reduce((s, { le }) => s + rowTotal(le), 0);
                      return [
                        <tr key={`sec-${g.lib}`} style={{ background: '#f3f4f6' }}>
                          <td
                            colSpan={EFF_COLS.length + 2}
                            style={{ fontWeight: 600, fontSize: 11, color: '#374151', padding: '4px 8px', letterSpacing: '0.03em' }}
                          >
                            {g.lib}
                            <span className='ms-2 text-muted fw-normal'>— {g.rows.length} lot{g.rows.length > 1 ? 's' : ''}, {secTotal} agent{secTotal > 1 ? 's' : ''}</span>
                          </td>
                        </tr>,
                        ...g.rows.map(({ le, i }) => (
                          <tr key={le.id_operateur_lot}>
                            <td className='text-center' style={{ whiteSpace: 'nowrap' }}>
                              <code style={{ fontSize: 11 }}>{le.cde_lot}</code>
                            </td>
                            {EFF_COLS.map((k) => (
                              <td key={k} className='text-center p-1'>
                                <Input
                                  disabled={viewing}
                                  type='number'
                                  min={0}
                                  value={le[k]}
                                  onChange={(e) => {
                                    const val = Math.max(0, Number(e.target.value));
                                    setForm((f) => {
                                      const lots = [...f.lots_effectifs];
                                      lots[i] = { ...lots[i], [k]: val };
                                      return { ...f, lots_effectifs: lots };
                                    });
                                  }}
                                  style={{ width: 48, fontSize: 11, padding: '2px 4px', textAlign: 'center', margin: '0 auto' }}
                                />
                              </td>
                            ))}
                            <td className='text-center text-muted' style={{ fontWeight: 500, whiteSpace: 'nowrap' }}>
                              {rowTotal(le)}
                            </td>
                          </tr>
                        )),
                      ];
                    })}
                  </tbody>
                </Table>
              </div>
            );
          })()}
        </Form>
      </AppDrawer>

      <ConfirmDelete
        isOpen={!!deleteTarget}
        message={`Voulez-vous vraiment supprimer l'exercice "${deleteTarget?.lib}" ? Cette action est irréversible.`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
};

export default ExerciceList;
