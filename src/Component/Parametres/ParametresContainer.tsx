'use client';

import { useState } from 'react';
import { Container, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { useHeaderStore } from '@/Store/useHeaderStore';
import OperateurList   from './Operateur/OperateurList';
import PosteList       from './Poste/PosteList';
import ContratList     from './Contrat/ContratList';
import ExerciceList    from './Exercice/ExerciceList';
import LotList         from './Lot/LotList';
import UtilisateurList  from './Utilisateur/UtilisateurList';
import AffectationList  from './Affectations/AffectationList';
import LogsList         from './Logs/LogsList';

const TABS = [
  { id: 'operateur',    label: 'Opérateur'    },
  { id: 'poste',        label: 'Poste'         },
  { id: 'contrat',      label: 'Contrat'       },
  { id: 'exercice',     label: 'Exercice'      },
  { id: 'lot',          label: 'Lot'           },
  { id: 'utilisateur',  label: 'Utilisateur'   },
  { id: 'affectations', label: 'Affectations'  },
  { id: 'logs',         label: 'Journal'       },
];

const ParametresContainer = () => {
  const [activeTab, setActiveTab] = useState('operateur');
  const isDark = useHeaderStore((s) => s.logoToggle);

  return (
    <Container fluid className='p-4'>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h4 className='mb-0'>Paramètres</h4>
        <Nav className='border-tab nav-secondary' tabs>
          {TABS.map((t) => (
            <NavItem key={t.id}>
              <NavLink
                className={activeTab === t.id ? 'active' : ''}
                onClick={() => setActiveTab(t.id)}
                style={{ cursor: 'pointer', color: activeTab === t.id ? undefined : isDark ? '#9ca3af' : undefined }}
              >
                {t.label}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </div>

      <TabContent activeTab={activeTab}>
        <TabPane tabId='operateur'>   <OperateurList   /></TabPane>
        <TabPane tabId='poste'>       <PosteList       /></TabPane>
        <TabPane tabId='contrat'>     <ContratList     /></TabPane>
        <TabPane tabId='exercice'>    <ExerciceList    /></TabPane>
        <TabPane tabId='lot'>         <LotList         /></TabPane>
        <TabPane tabId='utilisateur'>  <UtilisateurList  /></TabPane>
        <TabPane tabId='affectations'> <AffectationList  /></TabPane>
        <TabPane tabId='logs'>         <LogsList         /></TabPane>
      </TabContent>
    </Container>
  );
};

export default ParametresContainer;
