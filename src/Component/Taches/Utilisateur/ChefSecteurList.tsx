'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardBody, Table, Badge, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import RowActions from '@/Component/Common/RowActions';
import AppDrawer from '@/Component/Common/AppDrawer';
import ConfirmDelete from '@/Component/Common/ConfirmDelete';
import { UserPlus } from 'react-feather';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppPagination from '@/Component/Common/AppPagination';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import { useDebouncedCallback } from '@/hooks/useDebouncedCallback';
import { useAuthStore } from '@/Store/useAuthStore';
import { MOCK_OPERATEURS, MOCK_SECTEURS, MOCK_OPERATEUR_SECTEUR } from '@/Data/mockData';

type ChefSecteur = {
  id: number; nom: string; secteur: string; id_secteur: string;
  id_operateur: string; lots: number; tel: string; statut: boolean;
};

// Secteur → opérateur principal encadreur (premier trouvé parmi les encadreurs)
const secteurOpMap: Record<string, string> = Object.fromEntries(
  MOCK_SECTEURS.map((s) => {
    const os = MOCK_OPERATEUR_SECTEUR.find(
      (o) => o.id_secteur === s.id && MOCK_OPERATEURS.find((op) => op.id === o.id_operateur && op.encadreur)
    );
    return [s.id, os?.id_operateur ?? ''];
  })
);

const INITIAL_DATA: ChefSecteur[] = [
  { id: 1, nom: 'Arnaud DELAFOSSE',  secteur: 'Abengourou',   id_secteur: 'sec-1', id_operateur: 'op-1', lots: 5, tel: '+225 07 01 23 45', statut: true  },
  { id: 2, nom: 'Konan YAO',         secteur: 'Bondoukou',    id_secteur: 'sec-2', id_operateur: 'op-2', lots: 4, tel: '+225 05 78 90 12', statut: true  },
  { id: 3, nom: 'Aya KOUASSI',       secteur: 'Agnibilékrou', id_secteur: 'sec-3', id_operateur: 'op-1', lots: 3, tel: '+225 07 34 56 78', statut: true  },
  { id: 4, nom: 'Moussa BAMBA',      secteur: 'Tanda',        id_secteur: 'sec-4', id_operateur: 'op-3', lots: 4, tel: '+225 01 23 45 67', statut: false },
  { id: 5, nom: 'Adjoua KOFFI',      secteur: 'Daoukro',      id_secteur: 'sec-5', id_operateur: 'op-2', lots: 2, tel: '+225 05 89 01 23', statut: true  },
  { id: 6, nom: 'Drissa COULIBALY',  secteur: 'Abengourou',   id_secteur: 'sec-1', id_operateur: 'op-1', lots: 3, tel: '+225 07 45 67 89', statut: true  },
  { id: 7, nom: 'Fatou DIALLO',      secteur: 'Bondoukou',    id_secteur: 'sec-2', id_operateur: 'op-2', lots: 2, tel: '+225 05 12 34 56', statut: false },
];

const PAGE_SIZE = 5;

const ALL_SECTEUR_OPTIONS: ComboboxOption[] = MOCK_SECTEURS.map((s) => ({ value: s.id, label: s.lib }));
const STATUT_FILTER: ComboboxOption[] = [
  { value: '',        label: 'Tous'    },
  { value: 'Actif',   label: 'Actif'   },
  { value: 'Inactif', label: 'Inactif' },
];

const colStyle:   React.CSSProperties = { padding: '4px 8px' };
const inputStyle: React.CSSProperties = { fontSize: 12, padding: '3px 6px', height: 28 };

const ChefSecteurList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  const user     = useAuthStore((s) => s.user);
  const userOpId = MOCK_OPERATEURS.find((o) => o.acronyme === user?.operateur && o.encadreur)?.id ?? null;
  const isLocked = userOpId !== null;

  // Secteurs disponibles selon l'opérateur connecté
  const secteurOptions: ComboboxOption[] = useMemo(() =>
    isLocked
      ? MOCK_OPERATEUR_SECTEUR
          .filter((os) => os.id_operateur === userOpId)
          .map((os) => ({ value: os.id_secteur, label: os.lib_secteur }))
      : ALL_SECTEUR_OPTIONS,
    [isLocked, userOpId]
  );
  const secteurFilter: ComboboxOption[] = [{ value: '', label: 'Tous' }, ...secteurOptions];

  const emptyForm = () => ({ nom: '', secteur: secteurOptions[0] ?? ALL_SECTEUR_OPTIONS[0], tel: '', lots: 0 });

  const [data,         setData        ] = useState<ChefSecteur[]>(INITIAL_DATA);
  const [modal,        setModal       ] = useState(false);
  const [viewing,      setViewing     ] = useState(false);
  const [editing,      setEditing     ] = useState<ChefSecteur | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<ChefSecteur | null>(null);
  const [form,         setForm        ] = useState(emptyForm);

  const [fNom,     setFNom    ] = useState(() => searchParams.get('cs_nom') ?? '');
  const [fSecteur, setFSecteur] = useState(() => searchParams.get('cs_sec') ?? '');
  const [fTel,     setFTel    ] = useState(() => searchParams.get('cs_tel') ?? '');
  const [fStatut,  setFStatut ] = useState(() => searchParams.get('cs_sta') ?? '');
  const [page,     setPage    ] = useState(() => Number(searchParams.get('cs_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (!v) params.delete(k); else params.set(k, v); });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const debNom = useDebouncedCallback((v: string) => pushUrl({ cs_nom: v || null, cs_page: null }), 300);
  const debTel = useDebouncedCallback((v: string) => pushUrl({ cs_tel: v || null, cs_page: null }), 300);

  const handleNom     = (v: string) => { setFNom(v);     setPage(1); debNom(v); };
  const handleTel     = (v: string) => { setFTel(v);     setPage(1); debTel(v); };
  const handleSecteur = (v: string) => { setFSecteur(v); setPage(1); pushUrl({ cs_sec: v || null, cs_page: null }); };
  const handleStatut  = (v: string) => { setFStatut(v);  setPage(1); pushUrl({ cs_sta: v || null, cs_page: null }); };
  const handlePage    = (p: number) => { setPage(p); pushUrl({ cs_page: p > 1 ? String(p) : null }); };

  const fillForm = (c: ChefSecteur) => ({
    nom:     c.nom,
    secteur: secteurOptions.find((o) => o.value === c.id_secteur) ?? secteurOptions[0],
    tel:     c.tel,
    lots:    c.lots,
  });

  const openAdd  = () => { setViewing(false); setEditing(null); setForm(emptyForm()); setModal(true); };
  const openView = (c: ChefSecteur) => { setViewing(true);  setEditing(null); setForm(fillForm(c)); setModal(true); };
  const openEdit = (c: ChefSecteur) => { setViewing(false); setEditing(c);    setForm(fillForm(c)); setModal(true); };

  const handleDeleteConfirm = () => {
    if (!deleteTarget) return;
    setData((prev) => prev.filter((c) => c.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  const handleSave = () => {
    if (!form.nom.trim()) return;
    const id_secteur   = form.secteur.value;
    const id_operateur = isLocked ? (userOpId ?? secteurOpMap[id_secteur] ?? '') : secteurOpMap[id_secteur] ?? '';
    const secteurLib   = MOCK_SECTEURS.find((s) => s.id === id_secteur)?.lib ?? form.secteur.label;
    const payload = { nom: form.nom.trim(), secteur: secteurLib, id_secteur, id_operateur, tel: form.tel.trim(), lots: form.lots };
    if (editing) {
      setData((prev) => prev.map((c) => c.id === editing.id ? { ...c, ...payload } : c));
    } else {
      const nextId = Math.max(0, ...data.map((c) => c.id)) + 1;
      setData((prev) => [...prev, { id: nextId, statut: true, ...payload }]);
    }
    setModal(false);
  };

  const filtered = useMemo(() => {
    const base = isLocked ? data.filter((c) => c.id_operateur === userOpId) : data;
    return base.filter((c) =>
      (!fNom     || c.nom.toLowerCase().includes(fNom.toLowerCase())) &&
      (!fSecteur || c.id_secteur === fSecteur) &&
      (!fTel     || c.tel.toLowerCase().includes(fTel.toLowerCase())) &&
      (!fStatut  || (fStatut === 'Actif' ? c.statut : !c.statut))
    );
  }, [data, fNom, fSecteur, fTel, fStatut, isLocked, userOpId]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h5 className='mb-0'>Liste des chefs secteurs</h5>
        <Button color='primary' className='d-flex align-items-center gap-1' onClick={openAdd}>
          <UserPlus size={16} /> Ajouter chef secteur
        </Button>
      </div>

      <Card>
        <CardBody className='p-0'>
          <div className='table-responsive'>
            <Table className='table table-hover mb-0'>
              <thead className='table-light'>
                <tr>
                  <th>Nom & Prénom</th>
                  <th>Secteur</th>
                  <th>Lots gérés</th>
                  <th>Téléphone</th>
                  <th>Statut</th>
                  <th className='text-end'>Actions</th>
                </tr>
                <tr>
                  <th style={colStyle}>
                    <Input bsSize='sm' style={inputStyle} placeholder='Nom…' value={fNom} onChange={(e) => handleNom(e.target.value)} />
                  </th>
                  <th style={colStyle}>
                    <Combobox options={secteurFilter} value={secteurFilter.find((o) => o.value === fSecteur) ?? secteurFilter[0]} onChange={(opt) => handleSecteur(opt?.value ?? '')} isClearable={false} compact />
                  </th>
                  <th style={colStyle} />
                  <th style={colStyle}>
                    <Input bsSize='sm' style={inputStyle} placeholder='Tél…' value={fTel} onChange={(e) => handleTel(e.target.value)} />
                  </th>
                  <th style={colStyle}>
                    <Combobox options={STATUT_FILTER} value={STATUT_FILTER.find((o) => o.value === fStatut) ?? STATUT_FILTER[0]} onChange={(opt) => handleStatut(opt?.value ?? '')} isClearable={false} compact />
                  </th>
                  <th style={colStyle} />
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr><td colSpan={6} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                ) : paginated.map((c) => (
                  <tr key={c.id}>
                    <td className='f-w-600'>{c.nom}</td>
                    <td>{c.secteur}</td>
                    <td>{c.lots}</td>
                    <td className='text-muted'>{c.tel}</td>
                    <td><Badge color={c.statut ? 'success' : 'secondary'} className='badge-light'>{c.statut ? 'Actif' : 'Inactif'}</Badge></td>
                    <td>
                      <RowActions prefix='cs' id={c.id} onView={() => openView(c)} onEdit={() => openEdit(c)} onDelete={() => setDeleteTarget(c)} />
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
        title={viewing ? 'Détails du chef de secteur' : editing ? 'Modifier le chef de secteur' : 'Ajouter un chef de secteur'}
        onSave={viewing ? undefined : handleSave}
        onCancel={() => setModal(false)}
        cancelLabel={viewing ? 'Fermer' : 'Annuler'}
      >
        <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <FormGroup>
            <Label className='fw-semibold'>Nom & Prénom</Label>
            <Input disabled={viewing} type='text' placeholder='Ex: Jean DUPONT' value={form.nom} onChange={(e) => setForm((f) => ({ ...f, nom: e.target.value }))} />
          </FormGroup>
          <Combobox
            isDisabled={viewing}
            label='Secteur assigné'
            options={secteurOptions}
            value={form.secteur}
            onChange={(opt) => opt && setForm((f) => ({ ...f, secteur: opt }))}
            placeholder='-- Choisir un secteur --'
          />
          <FormGroup>
            <Label className='fw-semibold'>Téléphone</Label>
            <Input disabled={viewing} type='text' placeholder='+225 XX XX XX XX' value={form.tel} onChange={(e) => setForm((f) => ({ ...f, tel: e.target.value }))} />
          </FormGroup>
          <FormGroup>
            <Label className='fw-semibold'>Lots gérés</Label>
            <Input disabled={viewing} type='number' min={0} value={form.lots} onChange={(e) => setForm((f) => ({ ...f, lots: Number(e.target.value) }))} />
          </FormGroup>
        </Form>
      </AppDrawer>

      <ConfirmDelete
        isOpen={!!deleteTarget}
        message={`Voulez-vous vraiment supprimer "${deleteTarget?.nom}" ? Cette action est irréversible.`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
};

export default ChefSecteurList;
