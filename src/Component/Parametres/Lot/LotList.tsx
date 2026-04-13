'use client';

import { useState, useMemo } from 'react';
import { Card, CardBody, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { PlusCircle, Edit2, Trash2, Search } from 'react-feather';
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

const SECTEUR_FILTER: ComboboxOption[] = [{ value: 'Tous', label: 'Tous les secteurs' }, ...SECTEURS_OPT];

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

const LotList = () => {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  const log = useLog();
  const [data,    setData   ] = useState<Lot[]>(INITIAL);
  const [modal,   setModal  ] = useState(false);
  const [editing, setEditing] = useState<Lot | null>(null);
  const [form,    setForm   ] = useState(emptyForm);

  const [search,  setSearch ] = useState(() => searchParams.get('lt_q')   ?? '');
  const [secteur, setSecteur] = useState(() => searchParams.get('lt_sec') ?? 'Tous');
  const [page,    setPage   ] = useState(() => Number(searchParams.get('lt_page') ?? '1'));

  const pushUrl = (overrides: Record<string, string | null>) => {
    const params = new URLSearchParams(window.location.search);
    Object.entries(overrides).forEach(([k, v]) => { if (v === null || v === '') params.delete(k); else params.set(k, v); });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const pushSearch    = useDebouncedCallback((v: string) => pushUrl({ lt_q: v || null, lt_page: null }), 300);
  const handleSearch  = (e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value); setPage(1); pushSearch(e.target.value); };
  const handleSecteur = (v: string) => { setSecteur(v); setPage(1); pushUrl({ lt_sec: v === 'Tous' ? null : v, lt_page: null }); };
  const handlePage    = (p: number) => { setPage(p); pushUrl({ lt_page: p > 1 ? String(p) : null }); };

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

  const filtered = useMemo(() => data.filter((l) => {
    const q = search.toLowerCase();
    const matchQ = l.num.toLowerCase().includes(q) || l.cde.toLowerCase().includes(q) || l.couverture.toLowerCase().includes(q);
    const matchS = secteur === 'Tous' || l.secteur === secteur;
    return matchQ && matchS;
  }), [data, search, secteur]);

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

      <Row className='mb-3 g-2'>
        <Col md='5'>
          <div className='input-group'>
            <span className='input-group-text bg-transparent'><Search size={15} className='text-muted' /></span>
            <Input type='text' placeholder='Rechercher par numéro, code, zone…' value={search} onChange={handleSearch} />
          </div>
        </Col>
        <Col md='3'>
          <Combobox options={SECTEUR_FILTER} value={SECTEUR_FILTER.find((o) => o.value === secteur) ?? null} onChange={(opt) => handleSecteur(opt?.value ?? 'Tous')} isClearable={false} placeholder='Secteur' />
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
                <tr><th>N° Lot</th><th>Code</th><th>Zone de couverture</th><th>Secteur</th><th>Département</th><th className='text-end'>Actions</th></tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr><td colSpan={6} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                ) : paginated.map((l) => (
                  <tr key={l.id}>
                    <td className='f-w-600'>Lot {l.num}</td>
                    <td><code>{l.cde}</code></td>
                    <td>{l.couverture}</td>
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
          <div className='px-3 pb-2'>
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
