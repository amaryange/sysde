'use client';

import { useMemo, useState } from 'react';
import { Card, CardBody, Table, Badge, Row, Col, Input } from 'reactstrap';
import { Search } from 'react-feather';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import AppPagination from '@/Component/Common/AppPagination';
import { MOCK_OPERATEURS, MOCK_EXERCICES, MOCK_CONTRATS, MOCK_ROLES } from '@/Data/mockData';

// ---------------------------------------------------------------------------
// Type
// ---------------------------------------------------------------------------
type Affectation = {
  id:          string;
  nom:         string;
  prenoms:     string;
  mat:         string;
  id_role:     string;
  cde_poste:   string;
  id_operateur:string;
  lib_secteur: string;
  num_lot:     string;
  id_exercice: string;
  id_contrat:  string;
  debut:       string;
  actif:       boolean;
};

// ---------------------------------------------------------------------------
// Données mockées
// ---------------------------------------------------------------------------
const AFFECTATIONS: Affectation[] = [
  { id: 'af-1',  nom: 'DELAFOSSE', prenoms: 'Arnaud',          mat: 'CS001', id_role: 'rl-1', cde_poste: 'CS-ABG-001', id_operateur: 'op-1', lib_secteur: 'Abengourou',   num_lot: '1, 2, 3', id_exercice: 'ex-2', id_contrat: 'ct-1', debut: '2025-01-01', actif: true  },
  { id: 'af-2',  nom: 'YAO',       prenoms: 'Konan',            mat: 'CF002', id_role: 'rl-2', cde_poste: 'CF-ABG-001', id_operateur: 'op-1', lib_secteur: 'Abengourou',   num_lot: '1',       id_exercice: 'ex-2', id_contrat: 'ct-1', debut: '2025-01-01', actif: true  },
  { id: 'af-3',  nom: 'KOUASSI',   prenoms: 'Aya',              mat: 'MO003', id_role: 'rl-5', cde_poste: 'MO-BDK-001', id_operateur: 'op-2', lib_secteur: 'Bondoukou',    num_lot: '4',       id_exercice: 'ex-3', id_contrat: 'ct-2', debut: '2024-02-01', actif: true  },
  { id: 'af-4',  nom: 'BAMBA',     prenoms: 'Moussa',           mat: 'FS004', id_role: 'rl-4', cde_poste: 'FS-TDA-001', id_operateur: 'op-3', lib_secteur: 'Tanda',        num_lot: '8, 9',    id_exercice: 'ex-4', id_contrat: 'ct-3', debut: '2023-06-01', actif: false },
  { id: 'af-5',  nom: 'KOFFI',     prenoms: 'Adjoua',           mat: 'ES005', id_role: 'rl-6', cde_poste: 'ES-DKR-001', id_operateur: 'op-2', lib_secteur: 'Daoukro',      num_lot: '10',      id_exercice: 'ex-3', id_contrat: 'ct-2', debut: '2024-02-01', actif: true  },
  { id: 'af-6',  nom: 'COULIBALY', prenoms: 'Drissa',           mat: 'CO006', id_role: 'rl-3', cde_poste: 'CO-AGN-001', id_operateur: 'op-1', lib_secteur: 'Agnibilékrou', num_lot: '6, 7',    id_exercice: 'ex-2', id_contrat: 'ct-1', debut: '2025-01-01', actif: true  },
  { id: 'af-7',  nom: 'DIALLO',    prenoms: 'Fatou',            mat: 'MO007', id_role: 'rl-5', cde_poste: 'MO-BDK-001', id_operateur: 'op-2', lib_secteur: 'Bondoukou',    num_lot: '4',       id_exercice: 'ex-3', id_contrat: 'ct-2', debut: '2024-02-01', actif: false },
  { id: 'af-8',  nom: 'TOURÉ',     prenoms: 'Aminata',          mat: 'CF008', id_role: 'rl-2', cde_poste: 'CF-ABG-001', id_operateur: 'op-1', lib_secteur: 'Abengourou',   num_lot: '2',       id_exercice: 'ex-1', id_contrat: 'ct-1', debut: '2024-01-01', actif: false },
  { id: 'af-9',  nom: "N'GORAN",   prenoms: 'Kouadio Emmanuel', mat: 'CS009', id_role: 'rl-1', cde_poste: 'CS-BDK-001', id_operateur: 'op-2', lib_secteur: 'Bondoukou',    num_lot: '4, 5',    id_exercice: 'ex-3', id_contrat: 'ct-2', debut: '2024-02-01', actif: true  },
  { id: 'af-10', nom: 'AKA',       prenoms: 'Kouamé Théodore',  mat: 'FS010', id_role: 'rl-4', cde_poste: 'FS-AGN-001', id_operateur: 'op-1', lib_secteur: 'Agnibilékrou', num_lot: '6',       id_exercice: 'ex-2', id_contrat: 'ct-1', debut: '2025-01-01', actif: true  },
];

// ---------------------------------------------------------------------------
// Options dérivées des mocks
// ---------------------------------------------------------------------------
const ROLE_OPTS: ComboboxOption[] = [
  { value: 'Tous', label: 'Tous les rôles' },
  ...MOCK_ROLES.filter((r) => r.encadreur).map((r) => ({ value: r.id, label: r.acronyme })),
];

const OP_OPTS: ComboboxOption[] = [
  { value: 'Tous', label: 'Tous les opérateurs' },
  ...MOCK_OPERATEURS.map((o) => ({ value: o.id, label: o.acronyme })),
];

const EX_OPTS: ComboboxOption[] = [
  { value: 'Tous', label: 'Tous les exercices' },
  ...MOCK_EXERCICES.map((e) => {
    const ct = MOCK_CONTRATS.find((c) => c.id === e.id_contrat);
    const op = MOCK_OPERATEURS.find((o) => o.id === ct?.id_operateur);
    return { value: e.id, label: `${e.lib} — ${op?.acronyme ?? ''}` };
  }),
];

const STATUT_OPTS: ComboboxOption[] = [
  { value: 'Tous',    label: 'Tous'    },
  { value: 'Actif',   label: 'Actif'   },
  { value: 'Inactif', label: 'Inactif' },
];

const ROLE_BADGE_COLORS: Record<string, string> = {
  'rl-1': 'danger', 'rl-2': 'warning', 'rl-3': 'info',
  'rl-4': 'success', 'rl-5': 'primary', 'rl-6': 'secondary', 'rl-7': 'dark',
};

const roleAcronyme     = (id: string) => MOCK_ROLES.find((r) => r.id === id)?.acronyme ?? id;
const operateurAcronyme = (id: string) => MOCK_OPERATEURS.find((o) => o.id === id)?.acronyme ?? id;
const exerciceLabel    = (id: string) => EX_OPTS.find((e) => e.value === id)?.label ?? id;
const contratNum       = (id: string) => MOCK_CONTRATS.find((c) => c.id === id)?.num ?? id;

const PAGE_SIZE = 8;

// ---------------------------------------------------------------------------
// Composant
// ---------------------------------------------------------------------------
const AffectationList = () => {
  const [search,    setSearch   ] = useState('');
  const [role,      setRole     ] = useState('Tous');
  const [operateur, setOperateur] = useState('Tous');
  const [exercice,  setExercice ] = useState('Tous');
  const [statut,    setStatut   ] = useState('Tous');
  const [page,      setPage     ] = useState(1);

  const filtered = useMemo(() => AFFECTATIONS.filter((a) => {
    const q = search.toLowerCase();
    const matchQ = `${a.nom} ${a.prenoms}`.toLowerCase().includes(q)
               || a.mat.toLowerCase().includes(q)
               || a.cde_poste.toLowerCase().includes(q)
               || a.lib_secteur.toLowerCase().includes(q);
    return matchQ
      && (role      === 'Tous' || a.id_role      === role)
      && (operateur === 'Tous' || a.id_operateur === operateur)
      && (exercice  === 'Tous' || a.id_exercice  === exercice)
      && (statut    === 'Tous' || (statut === 'Actif' ? a.actif : !a.actif));
  }), [search, role, operateur, exercice, statut]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className='mb-3'>
        <h5 className='mb-0'>Affectations</h5>
        <small className='text-muted'>Vue consolidée — qui est sur quel poste, où, chez qui et quand</small>
      </div>

      <Row className='mb-3 g-2'>
        <Col md='3'>
          <div className='input-group'>
            <span className='input-group-text bg-transparent'><Search size={15} className='text-muted' /></span>
            <Input type='text' placeholder='Nom, matricule, poste…' value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
          </div>
        </Col>
        <Col md='2'>
          <Combobox options={ROLE_OPTS}   value={ROLE_OPTS.find((o) => o.value === role)       ?? null} onChange={(opt) => { setRole(opt?.value ?? 'Tous');       setPage(1); }} isClearable={false} />
        </Col>
        <Col md='2'>
          <Combobox options={OP_OPTS}     value={OP_OPTS.find((o) => o.value === operateur)     ?? null} onChange={(opt) => { setOperateur(opt?.value ?? 'Tous'); setPage(1); }} isClearable={false} />
        </Col>
        <Col md='2'>
          <Combobox options={EX_OPTS}     value={EX_OPTS.find((o) => o.value === exercice)      ?? null} onChange={(opt) => { setExercice(opt?.value ?? 'Tous');  setPage(1); }} isClearable={false} />
        </Col>
        <Col md='2'>
          <Combobox options={STATUT_OPTS} value={STATUT_OPTS.find((o) => o.value === statut)    ?? null} onChange={(opt) => { setStatut(opt?.value ?? 'Tous');    setPage(1); }} isClearable={false} />
        </Col>
        <Col md='1' className='text-muted d-flex align-items-center'>
          <small>{filtered.length}</small>
        </Col>
      </Row>

      <Card>
        <CardBody className='p-0'>
          <div className='table-responsive'>
            <Table className='table table-hover mb-0' style={{ fontSize: 13 }}>
              <thead className='table-light'>
                <tr>
                  <th>Encadreur</th>
                  <th>Matricule</th>
                  <th>Rôle</th>
                  <th>Poste</th>
                  <th>Opérateur</th>
                  <th>Secteur / Lot</th>
                  <th>Exercice</th>
                  <th>Contrat</th>
                  <th>Depuis</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr><td colSpan={10} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                ) : paginated.map((a) => (
                  <tr key={a.id}>
                    <td className='f-w-600'>{a.nom} {a.prenoms}</td>
                    <td><code style={{ fontSize: 11 }}>{a.mat}</code></td>
                    <td>
                      <Badge color={ROLE_BADGE_COLORS[a.id_role] ?? 'secondary'} className='badge-light' style={{ fontSize: 11 }}>
                        {roleAcronyme(a.id_role)}
                      </Badge>
                    </td>
                    <td><code style={{ fontSize: 11 }}>{a.cde_poste}</code></td>
                    <td className='text-muted'>{operateurAcronyme(a.id_operateur)}</td>
                    <td className='text-muted'>{a.lib_secteur} / {a.num_lot}</td>
                    <td className='text-muted' style={{ fontSize: 12 }}>{exerciceLabel(a.id_exercice)}</td>
                    <td><code style={{ fontSize: 11, color: '#888' }}>{contratNum(a.id_contrat)}</code></td>
                    <td className='text-muted' style={{ whiteSpace: 'nowrap' }}>{a.debut}</td>
                    <td>
                      <Badge color={a.actif ? 'success' : 'secondary'} className='badge-light'>
                        {a.actif ? 'Actif' : 'Inactif'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className='px-3 pb-2'>
            <AppPagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AffectationList;
