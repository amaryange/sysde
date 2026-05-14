'use client';

import { useMemo } from 'react';
import { Col, Row } from 'reactstrap';
import { Users, MapPin, FileText, AlertTriangle } from 'react-feather';
import KpiCard         from './KpiCard';
import DeploiementChart from './DeploiementChart';
import RolesChart       from './RolesChart';
import OperateursChart  from './OperateursChart';
import EvolutionChart   from './EvolutionChart';
import AlertesPanel     from './AlertesPanel';
import SecteursTable    from './SecteursTable';
import { getAnalyticsData } from '@/Data/analyticsMock';
import { useAuthStore } from '@/Store/useAuthStore';
import { MOCK_OPERATEURS } from '@/Data/mockData';

const AnalyticsContainer = () => {
  const user     = useAuthStore((s) => s.user);
  const userOpId = MOCK_OPERATEURS.find((o) => o.acronyme === user?.operateur && o.encadreur)?.id ?? null;

  const data = useMemo(() => getAnalyticsData(userOpId), [userOpId]);

  const kpis = [
    {
      label: 'Taux de déploiement',
      value: `${data.kpi.tauxDeploiement}%`,
      sub: `${data.kpi.postesPouvus} postes sur ${data.kpi.postesTotal}`,
      icon: <MapPin size={22} />,
      color: '#24695c',
      trend: 'up' as const,
    },
    {
      label: 'Postes vacants',
      value: data.kpi.postesVacants,
      sub: `Répartis sur ${data.deploiementParSecteur.length} secteur${data.deploiementParSecteur.length > 1 ? 's' : ''}`,
      icon: <AlertTriangle size={22} />,
      color: '#dc2626',
      trend: 'down' as const,
    },
    {
      label: 'Encadreurs actifs',
      value: data.kpi.encadreursActifs,
      sub: 'Exercice en cours',
      icon: <Users size={22} />,
      color: '#2980b9',
      trend: 'up' as const,
    },
    {
      label: 'Contrats expirant',
      value: data.kpi.contratsExpirant,
      sub: 'Dans les 90 prochains jours',
      icon: <FileText size={22} />,
      color: '#d97706',
      trend: 'neutral' as const,
    },
  ];

  return (
    <div className='container-fluid p-3' style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

      <div>
        <h4 style={{ margin: '0 0 4px', fontWeight: 700 }}>Reporting</h4>
        <p style={{ margin: 0, color: '#9ca3af', fontSize: 13 }}>Indicateurs de pilotage — Exercice en cours</p>
      </div>

      <Row className='g-3'>
        {kpis.map((kpi) => (
          <Col key={kpi.label} xl='3' md='6' xs='12'>
            <KpiCard {...kpi} />
          </Col>
        ))}
      </Row>

      <Row className='g-3'>
        <Col xl='3' md='6' xs='12'>
          <DeploiementChart kpiData={data.kpi} />
        </Col>
        <Col xl='5' md='6' xs='12'>
          <RolesChart repartitionRoles={data.repartitionRoles} />
        </Col>
        <Col xl='4' md='12' xs='12'>
          <OperateursChart performanceOperateurs={data.performanceOperateurs} />
        </Col>
      </Row>

      <Row className='g-3'>
        <Col xl='8' md='12' xs='12'>
          <EvolutionChart evolutionEffectifs={data.evolutionEffectifs} />
        </Col>
        <Col xl='4' md='12' xs='12'>
          <AlertesPanel alertesContrats={data.alertesContrats} alertesSecteurs={data.alertesSecteurs} />
        </Col>
      </Row>

      <Row>
        <Col xs='12'>
          <SecteursTable deploiementParSecteur={data.deploiementParSecteur} />
        </Col>
      </Row>

    </div>
  );
};

export default AnalyticsContainer;
