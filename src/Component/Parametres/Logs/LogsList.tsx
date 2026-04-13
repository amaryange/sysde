'use client';

import { useMemo, useState } from 'react';
import { Card, CardBody, Table, Badge, Button, Row, Col, Input } from 'reactstrap';
import { Trash2, Search } from 'react-feather';
import { useLogStore, type LogAction, type LogEntity } from '@/Store/useLogStore';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';
import AppPagination from '@/Component/Common/AppPagination';

// ─── Config ────────────────────────────────────────────────────────────────────

const ACTION_COLORS: Record<LogAction, string> = {
  LOGIN:  'info',
  LOGOUT: 'secondary',
  CREATE: 'success',
  UPDATE: 'warning',
  DELETE: 'danger',
};

const ACTION_OPTS: ComboboxOption[] = [
  { value: 'Toutes', label: 'Toutes les actions' },
  { value: 'LOGIN',  label: 'Connexion'          },
  { value: 'LOGOUT', label: 'Déconnexion'        },
  { value: 'CREATE', label: 'Création'           },
  { value: 'UPDATE', label: 'Modification'       },
  { value: 'DELETE', label: 'Suppression'        },
];

const ENTITY_OPTS: ComboboxOption[] = [
  { value: 'Toutes',      label: 'Toutes les entités' },
  { value: 'Operateur',   label: 'Opérateur'          },
  { value: 'Poste',       label: 'Poste'              },
  { value: 'Contrat',     label: 'Contrat'            },
  { value: 'Exercice',    label: 'Exercice'           },
  { value: 'Lot',         label: 'Lot'                },
  { value: 'Utilisateur', label: 'Utilisateur'        },
  { value: 'Session',     label: 'Session'            },
];

const PAGE_SIZE = 15;

const fmtDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString('fr-CI', { day: '2-digit', month: '2-digit', year: 'numeric' })
    + ' ' + d.toLocaleTimeString('fr-CI', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
};

// ─── Composant ────────────────────────────────────────────────────────────────

const LogsList = () => {
  const logs      = useLogStore((s) => s.logs);
  const clearLogs = useLogStore((s) => s.clearLogs);

  const [search, setSearch] = useState('');
  const [action, setAction] = useState('Toutes');
  const [entity, setEntity] = useState('Toutes');
  const [page,   setPage  ] = useState(1);

  const filtered = useMemo(() => logs.filter((l) => {
    const q = search.toLowerCase();
    const matchQ = l.description.toLowerCase().includes(q) || l.user.toLowerCase().includes(q) || (l.details ?? '').toLowerCase().includes(q);
    const matchA = action === 'Toutes' || l.action === action;
    const matchE = entity === 'Toutes' || l.entity === entity;
    return matchQ && matchA && matchE;
  }), [logs, search, action, entity]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleClear = () => {
    if (!window.confirm('Vider tous les logs ? Cette action est irréversible.')) return;
    clearLogs();
  };

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <div>
          <h5 className='mb-0'>Journal d'activité</h5>
          <small className='text-muted'>{logs.length} entrée{logs.length !== 1 ? 's' : ''} enregistrée{logs.length !== 1 ? 's' : ''}</small>
        </div>
        <Button color='outline-danger' size='sm' className='d-flex align-items-center gap-1' onClick={handleClear} disabled={logs.length === 0}>
          <Trash2 size={14} /> Vider les logs
        </Button>
      </div>

      {logs.length === 0 ? (
        <Card>
          <CardBody className='text-center text-muted py-5'>
            <p className='mb-1'>Aucun log enregistré.</p>
            <small>Les actions (créations, modifications, suppressions, connexions) apparaîtront ici.</small>
          </CardBody>
        </Card>
      ) : (
        <>
          <Row className='mb-3 g-2'>
            <Col md='4'>
              <div className='input-group'>
                <span className='input-group-text bg-transparent'><Search size={15} className='text-muted' /></span>
                <Input type='text' placeholder='Rechercher…' value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
              </div>
            </Col>
            <Col md='3'>
              <Combobox options={ACTION_OPTS} value={ACTION_OPTS.find((o) => o.value === action) ?? null} onChange={(opt) => { setAction(opt?.value ?? 'Toutes'); setPage(1); }} isClearable={false} placeholder='Action' />
            </Col>
            <Col md='3'>
              <Combobox options={ENTITY_OPTS} value={ENTITY_OPTS.find((o) => o.value === entity) ?? null} onChange={(opt) => { setEntity(opt?.value ?? 'Toutes'); setPage(1); }} isClearable={false} placeholder='Entité' />
            </Col>
            <Col md='2' className='text-muted d-flex align-items-center'>
              <small>{filtered.length} résultat{filtered.length !== 1 ? 's' : ''}</small>
            </Col>
          </Row>

          <Card>
            <CardBody className='p-0'>
              <div className='table-responsive'>
                <Table className='table table-hover mb-0' style={{ fontSize: 13 }}>
                  <thead className='table-light'>
                    <tr>
                      <th style={{ whiteSpace: 'nowrap' }}>Horodatage</th>
                      <th>Utilisateur</th>
                      <th>Action</th>
                      <th>Entité</th>
                      <th>Description</th>
                      <th>Détail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginated.length === 0 ? (
                      <tr><td colSpan={6} className='text-center text-muted py-4'>Aucun résultat</td></tr>
                    ) : paginated.map((l) => (
                      <tr key={l.id}>
                        <td className='text-muted' style={{ whiteSpace: 'nowrap', fontFamily: 'monospace', fontSize: 12 }}>{fmtDate(l.timestamp)}</td>
                        <td className='f-w-600'>{l.user}</td>
                        <td>
                          <Badge color={ACTION_COLORS[l.action]} className='badge-light' style={{ fontSize: 11 }}>
                            {l.action}
                          </Badge>
                        </td>
                        <td className='text-muted'>{l.entity}</td>
                        <td>{l.description}</td>
                        <td><code style={{ fontSize: 11, color: '#888' }}>{l.details ?? '—'}</code></td>
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
        </>
      )}
    </div>
  );
};

export default LogsList;
