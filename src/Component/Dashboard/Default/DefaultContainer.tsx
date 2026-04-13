import React from 'react';
import { Col, Row } from 'reactstrap';
import IncomeCard from './IncomeCard';
import EffectifsCard from '../Sysde/EffectifsCard';
import RepartitionCard from '../Sysde/RepartitionCard';
import ContratsCard from '../Sysde/ContratsCard';
import ExerciceCard from '../Sysde/ExerciceCard';
import { FileText, Briefcase, UserCheck, MapPin } from 'react-feather';

const kpis = [
  { icon: <Briefcase size={28} />, amount: '4',   title: 'Opérateurs encadreurs', percent: 'Actifs'       },
  { icon: <FileText   size={28} />, amount: '3',   title: 'Contrats en cours',     percent: 'Actifs'       },
  { icon: <MapPin     size={28} />, amount: '200', title: 'Postes actifs',          percent: '91.7%'        },
  { icon: <UserCheck  size={28} />, amount: '318', title: 'Effectif total',         percent: '+12 ce mois'  },
];

const DefaultContainer = () => {
  return (
    <Row>
      {/* KPI */}
      {kpis.map((kpi, i) => (
        <Col key={i} xl='3' md='6' sm='6' className='box-col-6 rate-sec'>
          <IncomeCard iconClass={kpi.icon} amount={kpi.amount} title={kpi.title} percent={kpi.percent} />
        </Col>
      ))}

      {/* Graphiques */}
      <Col xl='8' className='box-col-12'>
        <EffectifsCard />
      </Col>
      <Col xl='4' className='box-col-12'>
        <RepartitionCard />
      </Col>

      {/* Contrats + Exercice */}
      <Col xl='8' className='box-col-12'>
        <ContratsCard />
      </Col>
      <Col xl='4' className='box-col-12'>
        <ExerciceCard />
      </Col>
    </Row>
  );
};

export default DefaultContainer;
