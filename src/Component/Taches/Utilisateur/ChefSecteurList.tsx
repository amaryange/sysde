import React, { useState, useMemo } from 'react';
import { Card, CardBody, Table, Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { UserPlus, Edit2, Trash2, Search } from 'react-feather';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppPagination from '@/Component/Common/AppPagination';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import { useDebouncedCallback } from '@/hooks/useDebouncedCallback';

type ChefSecteur = { id: number; nom: string; secteur: string; lots: number; tel: string; statut: boolean };

const INITIAL_DATA: ChefSecteur[] = [
  { id: 1, nom: 'Arnaud DELAFOSSE',  secteur: 'Abengourou',   lots: 5, tel: '+225 07 01 23 45', statut: true  },
  { id: 2, nom: 'Konan YAO',         secteur: 'Bondoukou',    lots: 4, tel: '+225 05 78 90 12', statut: true  },
  { id: 3, nom: 'Aya KOUASSI',       secteur: 'Agnibilékrou', lots: 3, tel: '+225 07 34 56 78', statut: true  },
  { id: 4, nom: 'Moussa BAMBA',      secteur: 'Tanda',        lots: 4, tel: '+225 01 23 45 67', statut: false },
  { id: 5, nom: 'Adjoua KOFFI',      secteur: 'Daoukro',      lots: 2, tel: '+225 05 89 01 23', statut: true  },
  { id: 6, nom: 'Drissa COULIBALY',  secteur: 'Abengourou',   lots: 3, tel: '+225 07 45 67 89', statut: true  },
  { id: 7, nom: 'Fatou DIALLO',      secteur: 'Bondoukou',    lots: 2, tel: '+225 05 12 34 56', statut: false },
];

const PAGE_SIZE = 5;
const SECTEURS = ['Abengourou', 'Bondoukou', 'Agnibilékrou', 'Tanda', 'Daoukro'];
const SECTEUR_OPTIONS: ComboboxOption[] = SECTEURS.map((s) => ({ value: s, label: s }));
const SECTEUR_FILTER_OPTIONS: ComboboxOption[] = [{ value: 'Tous', label: 'Tous' }, ...SECTEUR_OPTIONS];
const STATUT_FILTER_OPTIONS: ComboboxOption[]  = [
  { value: 'Tous',    label: 'Tous'    },
  { value: 'Actif',   label: 'Actif'   },
  { value: 'Inactif', label: 'Inactif' },
];

const emptyForm = () => ({
  nom:     '',
  secteur: SECTEUR_OPTIONS[0],
  tel:     '',
  lots:    0,
});

const ChefSecteurList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  const [data,    setData   ] = useState<ChefSecteur[]>(INITIAL_DATA);
  const [modal,   setModal  ] = useState(false);
  const [editing, setEditing] = useState<ChefSecteur | null>(null);
  const [form,    setForm   ] = useState(emptyForm);

  const [search,  setSearch ] = useState(() => searchParams.get('chef_q') ?? '');
  const [secteur, setSecteur] = useState(() => searchParams.get('chef_secteur') ?? 'Tous');
  const [statut,  setStatut ] = useState(() => searchParams.get('chef_statut') ?? 'Tous');
  const [page,    setPage   ] = useState(() => Number(searchParams.get('chef_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => {
      if (v === null || v === '') params.delete(k);
      else params.set(k, v);
    });
    const qs = params.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ''}`, { scroll: false });
  };

  const pushSearchUrl = useDebouncedCallback((val: string) => {
    pushUrl({ chef_q: val || null, chef_page: null });
  }, 300);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearch(val);
    setPage(1);
    pushSearchUrl(val);
  };

  const handleSecteur = (val: string) => {
    setSecteur(val);
    setPage(1);
    pushUrl({ chef_secteur: val === 'Tous' ? null : val, chef_page: null });
  };

  const handleStatut = (val: string) => {
    setStatut(val);
    setPage(1);
    pushUrl({ chef_statut: val === 'Tous' ? null : val, chef_page: null });
  };

  const handlePage = (p: number) => {
    setPage(p);
    pushUrl({ chef_page: p > 1 ? String(p) : null });
  };

  const openAdd = () => {
    setEditing(null);
    setForm(emptyForm());
    setModal(true);
  };

  const openEdit = (c: ChefSecteur) => {
    setEditing(c);
    setForm({
      nom:     c.nom,
      secteur: SECTEUR_OPTIONS.find((o) => o.value === c.secteur) ?? SECTEUR_OPTIONS[0],
      tel:     c.tel,
      lots:    c.lots,
    });
    setModal(true);
  };

  const handleDelete = (id: number) => {
    if (!window.confirm('Supprimer ce chef de secteur ?')) return;
    setData((prev) => prev.filter((c) => c.id !== id));
  };

  const handleSave = () => {
    if (!form.nom.trim()) return;
    const payload: Omit<ChefSecteur, 'id' | 'statut'> = {
      nom:     form.nom.trim(),
      secteur: form.secteur.value,
      tel:     form.tel.trim(),
      lots:    form.lots,
    };
    if (editing) {
      setData((prev) => prev.map((c) => c.id === editing.id ? { ...c, ...payload } : c));
    } else {
      const nextId = Math.max(0, ...data.map((c) => c.id)) + 1;
      setData((prev) => [...prev, { id: nextId, statut: true, ...payload }]);
    }
    setModal(false);
  };

  const filtered = useMemo(() => {
    return data.filter((c) => {
      const matchSearch  = c.nom.toLowerCase().includes(search.toLowerCase()) || c.secteur.toLowerCase().includes(search.toLowerCase());
      const matchSecteur = secteur === 'Tous' || c.secteur === secteur;
      const matchStatut  = statut === 'Tous' || (statut === 'Actif' ? c.statut : !c.statut);
      return matchSearch && matchSecteur && matchStatut;
    });
  }, [data, search, secteur, statut]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h5 className='mb-0'>Liste des chefs secteurs</h5>
        <Button color='primary' className='d-flex align-items-center gap-1' onClick={openAdd}>
          <UserPlus size={16} />
          Ajouter chef secteur
        </Button>
      </div>

      <Row className='mb-3 g-2'>
        <Col md='5'>
          <div className='input-group'>
            <span className='input-group-text bg-transparent'>
              <Search size={15} className='text-muted' />
            </span>
            <Input
              type='text'
              placeholder='Rechercher par nom ou secteur…'
              value={search}
              onChange={handleSearch}
            />
          </div>
        </Col>
        <Col md='3'>
          <Combobox
            options={SECTEUR_FILTER_OPTIONS}
            value={SECTEUR_FILTER_OPTIONS.find((o) => o.value === secteur) ?? null}
            onChange={(opt) => handleSecteur(opt?.value ?? 'Tous')}
            isClearable={false}
            placeholder='Secteur'
          />
        </Col>
        <Col md='2'>
          <Combobox
            options={STATUT_FILTER_OPTIONS}
            value={STATUT_FILTER_OPTIONS.find((o) => o.value === statut) ?? null}
            onChange={(opt) => handleStatut(opt?.value ?? 'Tous')}
            isClearable={false}
            placeholder='Statut'
          />
        </Col>
        <Col md='2' className='text-muted d-flex align-items-center'>
          <small>{filtered.length} résultat{filtered.length !== 1 ? 's' : ''}</small>
        </Col>
      </Row>

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
                    <td>
                      <Badge color={c.statut ? 'success' : 'secondary'} className='badge-light'>
                        {c.statut ? 'Actif' : 'Inactif'}
                      </Badge>
                    </td>
                    <td className='text-end'>
                      <Button color='light' size='sm' className='me-1 p-1' onClick={() => openEdit(c)}>
                        <Edit2 size={14} />
                      </Button>
                      <Button color='light' size='sm' className='p-1' onClick={() => handleDelete(c.id)}>
                        <Trash2 size={14} className='text-danger' />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className='px-3 pb-2'>
            <AppPagination currentPage={page} totalPages={totalPages} onPageChange={handlePage} />
          </div>
        </CardBody>
      </Card>

      <Modal isOpen={modal} toggle={() => setModal(false)}>
        <ModalHeader toggle={() => setModal(false)}>
          {editing ? 'Modifier le chef de secteur' : 'Ajouter un chef de secteur'}
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <FormGroup>
              <Label>Nom & Prénom</Label>
              <Input
                type='text'
                placeholder='Ex: Jean DUPONT'
                value={form.nom}
                onChange={(e) => setForm((f) => ({ ...f, nom: e.target.value }))}
              />
            </FormGroup>
            <Combobox
              label='Secteur assigné'
              options={SECTEUR_OPTIONS}
              value={form.secteur}
              onChange={(opt) => opt && setForm((f) => ({ ...f, secteur: opt }))}
              placeholder='-- Choisir un secteur --'
            />
            <FormGroup>
              <Label>Téléphone</Label>
              <Input
                type='text'
                placeholder='+225 XX XX XX XX'
                value={form.tel}
                onChange={(e) => setForm((f) => ({ ...f, tel: e.target.value }))}
              />
            </FormGroup>
            <FormGroup>
              <Label>Lots gérés</Label>
              <Input
                type='number'
                min={0}
                value={form.lots}
                onChange={(e) => setForm((f) => ({ ...f, lots: Number(e.target.value) }))}
              />
            </FormGroup>
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

export default ChefSecteurList;
