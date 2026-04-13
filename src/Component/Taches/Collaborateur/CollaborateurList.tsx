import React, { useState, useMemo } from 'react';
import { Card, CardBody, Table, Badge, Button, Row, Col, Input, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label } from 'reactstrap';
import { Plus, Edit2, Trash2, Search } from 'react-feather';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AppPagination from '@/Component/Common/AppPagination';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import { useDebouncedCallback } from '@/hooks/useDebouncedCallback';

const STATUT_FILTER_OPTIONS = [
  { value: 'Tous',    label: 'Tous'    },
  { value: 'Actif',   label: 'Actif'   },
  { value: 'Inactif', label: 'Inactif' },
];

const TYPE_OPTIONS: ComboboxOption[] = [
  { value: 'Opérateur encadreur',  label: 'Opérateur encadreur'  },
  { value: 'Partenaire technique', label: 'Partenaire technique' },
  { value: 'Prestataire',          label: 'Prestataire'          },
];

const STATUT_OPTIONS: ComboboxOption[] = [
  { value: 'true',  label: 'Actif'   },
  { value: 'false', label: 'Inactif' },
];

type Collaborateur = { id: number; nom: string; type: string; contrats: number; postes: number; statut: boolean };

const INITIAL_DATA: Collaborateur[] = [
  { id: 1, nom: 'FIRCA',   type: 'Opérateur encadreur', contrats: 1, postes: 85, statut: true  },
  { id: 2, nom: 'ANADER',  type: 'Opérateur encadreur', contrats: 1, postes: 72, statut: true  },
  { id: 3, nom: 'CNRA',    type: 'Opérateur encadreur', contrats: 1, postes: 38, statut: true  },
  { id: 4, nom: 'SODEFOR', type: 'Opérateur encadreur', contrats: 1, postes: 22, statut: false },
];

const PAGE_SIZE = 5;

const emptyForm = () => ({
  nom:      '',
  type:     TYPE_OPTIONS[0],
  statut:   STATUT_OPTIONS[0],
  contrats: 0,
  postes:   0,
});

const CollaborateurList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  const [data,    setData   ] = useState<Collaborateur[]>(INITIAL_DATA);
  const [modal,   setModal  ] = useState(false);
  const [editing, setEditing] = useState<Collaborateur | null>(null);
  const [form,    setForm   ] = useState(emptyForm);

  const [search, setSearch] = useState(() => searchParams.get('collab_q') ?? '');
  const [statut, setStatut] = useState(() => searchParams.get('collab_statut') ?? 'Tous');
  const [page,   setPage  ] = useState(() => Number(searchParams.get('collab_page') ?? '1'));

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
    pushUrl({ collab_q: val || null, collab_page: null });
  }, 300);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearch(val);
    setPage(1);
    pushSearchUrl(val);
  };

  const handleStatut = (val: string) => {
    setStatut(val);
    setPage(1);
    pushUrl({ collab_statut: val === 'Tous' ? null : val, collab_page: null });
  };

  const handlePage = (p: number) => {
    setPage(p);
    pushUrl({ collab_page: p > 1 ? String(p) : null });
  };

  const openAdd = () => {
    setEditing(null);
    setForm(emptyForm());
    setModal(true);
  };

  const openEdit = (c: Collaborateur) => {
    setEditing(c);
    setForm({
      nom:      c.nom,
      type:     TYPE_OPTIONS.find((o) => o.value === c.type) ?? TYPE_OPTIONS[0],
      statut:   STATUT_OPTIONS.find((o) => o.value === String(c.statut)) ?? STATUT_OPTIONS[0],
      contrats: c.contrats,
      postes:   c.postes,
    });
    setModal(true);
  };

  const handleDelete = (id: number) => {
    if (!window.confirm('Supprimer ce collaborateur ?')) return;
    setData((prev) => prev.filter((c) => c.id !== id));
  };

  const handleSave = () => {
    if (!form.nom.trim()) return;
    const payload: Omit<Collaborateur, 'id'> = {
      nom:      form.nom.trim(),
      type:     form.type.value,
      statut:   form.statut.value === 'true',
      contrats: form.contrats,
      postes:   form.postes,
    };
    if (editing) {
      setData((prev) => prev.map((c) => c.id === editing.id ? { ...c, ...payload } : c));
    } else {
      const nextId = Math.max(0, ...data.map((c) => c.id)) + 1;
      setData((prev) => [...prev, { id: nextId, ...payload }]);
    }
    setModal(false);
  };

  const filtered = useMemo(() => {
    return data.filter((c) => {
      const matchSearch = c.nom.toLowerCase().includes(search.toLowerCase());
      const matchStatut = statut === 'Tous' || (statut === 'Actif' ? c.statut : !c.statut);
      return matchSearch && matchStatut;
    });
  }, [data, search, statut]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h5 className='mb-0'>Liste des collaborateurs</h5>
        <Button color='primary' className='d-flex align-items-center gap-1' onClick={openAdd}>
          <Plus size={16} />
          Ajouter collaborateur
        </Button>
      </div>

      <Row className='mb-3 g-2'>
        <Col md='6'>
          <div className='input-group'>
            <span className='input-group-text bg-white'>
              <Search size={15} className='text-muted' />
            </span>
            <Input
              type='text'
              placeholder='Rechercher un collaborateur…'
              value={search}
              onChange={handleSearch}
            />
          </div>
        </Col>
        <Col md='3'>
          <Combobox
            options={STATUT_FILTER_OPTIONS}
            value={STATUT_FILTER_OPTIONS.find((o) => o.value === statut) ?? null}
            onChange={(opt) => handleStatut(opt?.value ?? 'Tous')}
            isClearable={false}
            placeholder='Statut'
          />
        </Col>
        <Col md='3' className='text-muted d-flex align-items-center'>
          <small>{filtered.length} résultat{filtered.length !== 1 ? 's' : ''}</small>
        </Col>
      </Row>

      <Card>
        <CardBody className='p-0'>
          <div className='table-responsive'>
            <Table className='table table-hover mb-0'>
              <thead className='table-light'>
                <tr>
                  <th>Opérateur</th>
                  <th>Type</th>
                  <th>Contrats actifs</th>
                  <th>Postes gérés</th>
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
                    <td className='text-muted'>{c.type}</td>
                    <td>{c.contrats}</td>
                    <td>{c.postes}</td>
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
          {editing ? 'Modifier le collaborateur' : 'Ajouter un collaborateur'}
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <FormGroup>
              <Label>Nom de l'opérateur</Label>
              <Input
                type='text'
                placeholder='Ex: FIRCA'
                value={form.nom}
                onChange={(e) => setForm((f) => ({ ...f, nom: e.target.value }))}
              />
            </FormGroup>
            <Combobox
              label='Type'
              options={TYPE_OPTIONS}
              value={form.type}
              onChange={(opt) => opt && setForm((f) => ({ ...f, type: opt }))}
              isClearable={false}
              placeholder='Choisir un type'
            />
            <Combobox
              label='Statut'
              options={STATUT_OPTIONS}
              value={form.statut}
              onChange={(opt) => opt && setForm((f) => ({ ...f, statut: opt }))}
              isClearable={false}
              placeholder='Choisir un statut'
            />
            <Row>
              <Col sm='6'>
                <FormGroup>
                  <Label>Contrats actifs</Label>
                  <Input
                    type='number'
                    min={0}
                    value={form.contrats}
                    onChange={(e) => setForm((f) => ({ ...f, contrats: Number(e.target.value) }))}
                  />
                </FormGroup>
              </Col>
              <Col sm='6'>
                <FormGroup>
                  <Label>Postes gérés</Label>
                  <Input
                    type='number'
                    min={0}
                    value={form.postes}
                    onChange={(e) => setForm((f) => ({ ...f, postes: Number(e.target.value) }))}
                  />
                </FormGroup>
              </Col>
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

export default CollaborateurList;
