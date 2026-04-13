'use client';

import { Col, Row } from 'reactstrap';
import { Users, MapPin, FileText, AlertTriangle } from 'react-feather';
import KpiCard         from './KpiCard';
import DeploiementChart from './DeploiementChart';
import RolesChart       from './RolesChart';
import OperateursChart  from './OperateursChart';
import EvolutionChart   from './EvolutionChart';
import AlertesPanel     from './AlertesPanel';
import SecteursTable    from './SecteursTable';
import { kpiData }      from '@/Data/analyticsMock';

const kpis = [
  {
    label: 'Taux de déploiement',
    value: `${kpiData.tauxDeploiement}%`,
    sub: `${kpiData.postesPouvus} postes sur ${kpiData.postesTotal}`,
    icon: <MapPin size={22} />,
    color: '#24695c',
    trend: 'up' as const,
  },
  {
    label: 'Postes vacants',
    value: kpiData.postesVacants,
    sub: 'Répartis sur 3 secteurs',
    icon: <AlertTriangle size={22} />,
    color: '#dc2626',
    trend: 'down' as const,
  },
  {
    label: 'Encadreurs actifs',
    value: kpiData.encadreursActifs,
    sub: '+18 vs exercice précédent',
    icon: <Users size={22} />,
    color: '#2980b9',
    trend: 'up' as const,
  },
  {
    label: 'Contrats expirant',
    value: kpiData.contratsExpirant,
    sub: 'Dans les 30 prochains jours',
    icon: <FileText size={22} />,
    color: '#d97706',
    trend: 'neutral' as const,
  },
];

const AnalyticsContainer = () => (
  <div className='container-fluid p-3' style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

    {/* En-tête */}
    <div>
      <h4 style={{ margin: '0 0 4px', fontWeight: 700 }}>Analytics</h4>
      <p style={{ margin: 0, color: '#9ca3af', fontSize: 13 }}>Indicateurs de pilotage — Exercice 2024</p>
    </div>

    {/* KPI */}
    <Row className='g-3'>
      {kpis.map((kpi) => (
        <Col key={kpi.label} xl='3' md='6' xs='12'>
          <KpiCard {...kpi} />
        </Col>
      ))}
    </Row>

    {/* Jauge + Rôles + Opérateurs */}
    <Row className='g-3'>
      <Col xl='3' md='6' xs='12'>
        <DeploiementChart />
      </Col>
      <Col xl='5' md='6' xs='12'>
        <RolesChart />
      </Col>
      <Col xl='4' xs='12'>
        <OperateursChart />
      </Col>
    </Row>

    {/* Évolution + Alertes */}
    <Row className='g-3'>
      <Col xl='8' xs='12'>
        <EvolutionChart />
      </Col>
      <Col xl='4' xs='12'>
        <AlertesPanel />
      </Col>
    </Row>

    {/* Tableau secteurs */}
    <Row>
      <Col xs='12'>
        <SecteursTable />
      </Col>
    </Row>

  </div>
);

export default AnalyticsContainer;
