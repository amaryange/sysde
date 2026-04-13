'use client';

import { useMemo, useState } from 'react';
import { Card, CardBody, Table, Badge, Row, Col, Input } from 'reactstrap';
import { Search } from 'react-feather';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import AppPagination from '@/Component/Common/AppPagination';

// ─── Mock data croisé ─────────────────────────────────────────────────────────

type Affectation = {
  id:        number;
  nom:       string;
  prenoms:   string;
  mat:       string;
  role:      string;
  roleNom:   string;
  poste:     string;
  operateur: string;
  secteur:   string;
  lot:       string;
  exercice:  string;
  contrat:   string;
  debut:     string;
  actif:     boolean;
};

const AFFECTATIONS: Affectation[] = [
  { id: 1,  nom: 'DELAFOSSE', prenoms: 'Arnaud',          mat: 'CS001', role: 'CS', roleNom: 'Chef Secteur',          poste: 'CS-ABG-001', operateur: 'SAPH',   secteur: 'Abengourou',   lot: '1, 2, 3', exercice: 'Exercice 2024 S2', contrat: 'CTR-2024-001', debut: '2024-07-01', actif: true  },
  { id: 2,  nom: 'YAO',       prenoms: 'Konan',            mat: 'CF002', role: 'CF', roleNom: 'Contrôleur Formation',  poste: 'CF-ABG-001', operateur: 'SAPH',   secteur: 'Abengourou',   lot: '1',       exercice: 'Exercice 2024 S2', contrat: 'CTR-2024-001', debut: '2024-07-01', actif: true  },
  { id: 3,  nom: 'KOUASSI',   prenoms: 'Aya',              mat: 'MO003', role: 'MO', roleNom: 'Moniteur',              poste: 'MO-BDK-001', operateur: 'PALMCI', secteur: 'Bondoukou',    lot: '4',       exercice: 'Exercice 2024',    contrat: 'CTR-2024-002', debut: '2024-02-01', actif: true  },
  { id: 4,  nom: 'BAMBA',     prenoms: 'Moussa',           mat: 'FS004', role: 'FS', roleNom: 'Formateur Saigné',      poste: 'FS-TDA-001', operateur: 'SOGB',   secteur: 'Tanda',        lot: '5, 6',    exercice: 'Exercice 2023',    contrat: 'CTR-2023-005', debut: '2023-06-01', actif: false },
  { id: 5,  nom: 'KOFFI',     prenoms: 'Adjoua',           mat: 'ES005', role: 'ES', roleNom: 'Équipe Spéciale',       poste: 'ES-DKR-001', operateur: 'PALMCI', secteur: 'Daoukro',      lot: '7',       exercice: 'Exercice 2024',    contrat: 'CTR-2024-002', debut: '2024-02-01', actif: true  },
  { id: 6,  nom: 'COULIBALY', prenoms: 'Drissa',           mat: 'CO006', role: 'CO', roleNom: 'Contrôleur Ordinaire',  poste: 'CO-AGN-001', operateur: 'SAPH',   secteur: 'Agnibilékrou', lot: '8, 9',    exercice: 'Exercice 2024 S2', contrat: 'CTR-2024-001', debut: '2024-07-01', actif: true  },
  { id: 7,  nom: 'DIALLO',    prenoms: 'Fatou',            mat: 'MO007', role: 'MO', roleNom: 'Moniteur',              poste: 'MO-BDK-001', operateur: 'PALMCI', secteur: 'Bondoukou',    lot: '4',       exercice: 'Exercice 2024',    contrat: 'CTR-2024-002', debut: '2024-02-01', actif: false },
  { id: 8,  nom: 'TOURÉ',     prenoms: 'Aminata',          mat: 'CF008', role: 'CF', roleNom: 'Contrôleur Formation',  poste: 'CF-ABG-001', operateur: 'SAPH',   secteur: 'Abengourou',   lot: '2',       exercice: 'Exercice 2024 S1', contrat: 'CTR-2024-001', debut: '2024-01-01', actif: false },
  { id: 9,  nom: "N'GORAN",   prenoms: 'Kouadio Emmanuel', mat: 'CS009', role: 'CS', roleNom: 'Chef Secteur',          poste: 'CS-BDK-001', operateur: 'PALMCI', secteur: 'Bondoukou',    lot: '4, 5',    exercice: 'Exercice 2024',    contrat: 'CTR-2024-002', debut: '2024-02-01', actif: true  },
  { id: 10, nom: 'AKA',       prenoms: 'Kouamé Théodore',  mat: 'FS010', role: 'FS', roleNom: 'Formateur Saigné',      poste: 'FS-AGN-001', operateur: 'SAPH',   secteur: 'Agnibilékrou', lot: '6',       exercice: 'Exercice 2024 S2', contrat: 'CTR-2024-001', debut: '2024-07-01', actif: true  },
];

// ─── Options filtres ──────────────────────────────────────────────────────────

const ROLE_OPTS: ComboboxOption[] = [
  { value: 'Tous', label: 'Tous les rôles'  },
  { value: 'CS',   label: 'Chef Secteur'    },
  { value: 'CF',   label: 'Contrôleur Formation' },
  { value: 'CO',   label: 'Contrôleur Ordinaire' },
  { value: 'FS',   label: 'Formateur Saigné' },
  { value: 'MO',   label: 'Moniteur'         },
  { value: 'ES',   label: 'Équipe Spéciale'  },
];

const OP_OPTS: ComboboxOption[] = [
  { value: 'Tous',   label: 'Tous les opérateurs' },
  { value: 'SAPH',   label: 'SAPH'   },
  { value: 'PALMCI', label: 'PALMCI' },
  { value: 'SOGB',   label: 'SOGB'   },
  { value: 'FIRCA',  label: 'FIRCA'  },
];

const EX_OPTS: ComboboxOption[] = [
  { value: 'Tous',              label: 'Tous les exercices'   },
  { value: 'Exercice 2024 S2',  label: 'Exercice 2024 S2'     },
  { value: 'Exercice 2024 S1',  label: 'Exercice 2024 S1'     },
  { value: 'Exercice 2024',     label: 'Exercice 2024'        },
  { value: 'Exercice 2023',     label: 'Exercice 2023'        },
];

const STATUT_OPTS: ComboboxOption[] = [
  { value: 'Tous',    label: 'Tous'    },
  { value: 'Actif',   label: 'Actif'   },
  { value: 'Inactif', label: 'Inactif' },
];

const ROLE_COLORS: Record<string, string> = {
  CS: 'danger', CF: 'warning', CO: 'info', FS: 'success', MO: 'primary', ES: 'secondary',
};

const PAGE_SIZE = 8;

// ─── Composant ────────────────────────────────────────────────────────────────

const AffectationList = () => {
  const [search,   setSearch  ] = useState('');
  const [role,     setRole    ] = useState('Tous');
  const [operateur,setOperateur] = useState('Tous');
  const [exercice, setExercice] = useState('Tous');
  const [statut,   setStatut  ] = useState('Tous');
  const [page,     setPage    ] = useState(1);

  const filtered = useMemo(() => AFFECTATIONS.filter((a) => {
    const q = search.toLowerCase();
    const matchQ = `${a.nom} ${a.prenoms}`.toLowerCase().includes(q) || a.mat.toLowerCase().includes(q) || a.poste.toLowerCase().includes(q) || a.secteur.toLowerCase().includes(q);
    const matchR = role      === 'Tous' || a.role      === role;
    const matchO = operateur === 'Tous' || a.operateur === operateur;
    const matchE = exercice  === 'Tous' || a.exercice  === exercice;
    const matchS = statut    === 'Tous' || (statut === 'Actif' ? a.actif : !a.actif);
    return matchQ && matchR && matchO && matchE && matchS;
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
          <Combobox options={ROLE_OPTS}   value={ROLE_OPTS.find((o) => o.value === role)      ?? null} onChange={(opt) => { setRole(opt?.value ?? 'Tous');      setPage(1); }} isClearable={false} placeholder='Rôle'      />
        </Col>
        <Col md='2'>
          <Combobox options={OP_OPTS}     value={OP_OPTS.find((o) => o.value === operateur)   ?? null} onChange={(opt) => { setOperateur(opt?.value ?? 'Tous'); setPage(1); }} isClearable={false} placeholder='Opérateur' />
        </Col>
        <Col md='2'>
          <Combobox options={EX_OPTS}     value={EX_OPTS.find((o) => o.value === exercice)    ?? null} onChange={(opt) => { setExercice(opt?.value ?? 'Tous');  setPage(1); }} isClearable={false} placeholder='Exercice'  />
        </Col>
        <Col md='2'>
          <Combobox options={STATUT_OPTS} value={STATUT_OPTS.find((o) => o.value === statut)  ?? null} onChange={(opt) => { setStatut(opt?.value ?? 'Tous');    setPage(1); }} isClearable={false} placeholder='Statut'    />
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
                      <Badge color={ROLE_COLORS[a.role] ?? 'secondary'} className='badge-light' style={{ fontSize: 11 }}>
                        {a.role}
                      </Badge>
                    </td>
                    <td><code style={{ fontSize: 11 }}>{a.poste}</code></td>
                    <td className='text-muted'>{a.operateur}</td>
                    <td className='text-muted'>{a.secteur} / {a.lot}</td>
                    <td className='text-muted'>{a.exercice}</td>
                    <td><code style={{ fontSize: 11, color: '#888' }}>{a.contrat}</code></td>
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
