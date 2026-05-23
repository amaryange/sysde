'use client';

import { useMemo } from 'react';
import { Col, Row } from 'reactstrap';
import { Users, MapPin, AlertTriangle, Calendar } from 'react-feather';
import KpiCard          from '@/Component/Analytics/KpiCard';
import DeploiementChart from '@/Component/Analytics/DeploiementChart';
import RolesChart       from '@/Component/Analytics/RolesChart';
import EvolutionChart   from '@/Component/Analytics/EvolutionChart';
import AlertesPanel     from '@/Component/Analytics/AlertesPanel';
import SecteursTable    from '@/Component/Analytics/SecteursTable';
import ContratInfoCard  from './ContratInfoCard';
import { getAnalyticsData } from '@/Data/analyticsMock';
import { useAuthStore }     from '@/Store/useAuthStore';
import { MOCK_OPERATEURS, MOCK_CONTRATS, MOCK_EXERCICES } from '@/Data/mockData';

const CDDashboardContainer = () => {
  const user      = useAuthStore((s) => s.user);
  const operateur = MOCK_OPERATEURS.find((o) => o.acronyme === user?.operateur && o.encadreur) ?? null;
  const opId      = operateur?.id ?? null;

  const data = useMemo(() => getAnalyticsData(opId), [opId]);

  const contrat  = useMemo(
    () => opId ? (MOCK_CONTRATS.find((c) => c.id_operateur === opId && c.statut) ?? null) : null,
    [opId],
  );
  const exercice = useMemo(
    () => contrat ? (MOCK_EXERCICES.find((e) => e.id_contrat === contrat.id && e.statut) ?? null) : null,
    [contrat],
  );

  const joursContrat = contrat
    ? Math.ceil((new Date(contrat.fin).getTime() - Date.now()) / 86_400_000)
    : null;

  const kpis = [
    {
      label: 'Taux de déploiement',
      value: `${data.kpi.tauxDeploiement}%`,
      sub:   `${data.kpi.postesPouvus} postes sur ${data.kpi.postesTotal}`,
      icon:  <MapPin size={22} />,
      color: '#24695c',
      trend: 'up' as const,
    },
    {
      label: 'Postes vacants',
      value: data.kpi.postesVacants,
      sub:   `${data.deploiementParSecteur.length} secteur${data.deploiementParSecteur.length > 1 ? 's' : ''}`,
      icon:  <AlertTriangle size={22} />,
      color: '#dc2626',
      trend: 'down' as const,
    },
    {
      label: 'Encadreurs actifs',
      value: data.kpi.encadreursActifs,
      sub:   exercice?.lib ?? 'Exercice en cours',
      icon:  <Users size={22} />,
      color: '#2980b9',
      trend: 'up' as const,
    },
    {
      label: 'Contrat — jours restants',
      value: joursContrat !== null ? `${joursContrat}j` : '—',
      sub: joursContrat !== null && joursContrat <= 90
        ? 'Renouvellement urgent !'
        : contrat
        ? `Expire le ${new Date(contrat.fin).toLocaleDateString('fr-FR')}`
        : 'Aucun contrat actif',
      icon:  <Calendar size={22} />,
      color: joursContrat !== null && joursContrat <= 90 ? '#dc2626' : '#d97706',
      trend: joursContrat !== null && joursContrat <= 90 ? 'down' as const : 'neutral' as const,
    },
  ];

  return (
    <div className='container-fluid p-3' style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

      <div>
        <h4 style={{ margin: '0 0 4px', fontWeight: 700 }}>
          Dashboard{operateur ? ` — ${operateur.acronyme}` : ''}
        </h4>
        <p style={{ margin: 0, color: '#9ca3af', fontSize: 13 }}>
          Indicateurs de pilotage — {exercice?.lib ?? 'Exercice en cours'}
        </p>
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
          <ContratInfoCard contrat={contrat} exercice={exercice} />
        </Col>
      </Row>

      <Row className='g-3'>
        <Col xl='8' md='12' xs='12'>
          <EvolutionChart evolutionEffectifs={data.evolutionEffectifs} />
        </Col>
        <Col xl='4' md='12' xs='12'>
          <AlertesPanel
            alertesContrats={data.alertesContrats}
            alertesSecteurs={data.alertesSecteurs}
          />
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

export default CDDashboardContainer;
