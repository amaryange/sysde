'use client';

import { useState } from 'react';
import { Container, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { useHeaderStore } from '@/Store/useHeaderStore';
import OperateurList from './Operateur/OperateurList';
import PosteList     from './Poste/PosteList';
import ContratList   from './Contrat/ContratList';
import ExerciceList  from './Exercice/ExerciceList';
import LotList       from './Lot/LotList';
import LogsList      from './Logs/LogsList';

const TABS = [
  { id: 'operateur', label: 'Opérateur' },
  { id: 'poste',     label: 'Poste'     },
  { id: 'contrat',   label: 'Contrat'   },
  { id: 'exercice',  label: 'Exercice'  },
  { id: 'lot',       label: 'Lot'       },
];

const ParametresContainer = () => {
  const [activeTab, setActiveTab] = useState('operateur');
  const isDark = useHeaderStore((s) => s.logoToggle);

  return (
    <Container fluid className='p-4'>
      <div className='mb-4'>
        <h4 className='mb-3'>Paramètres</h4>
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <Nav className='border-tab nav-secondary flex-nowrap' tabs style={{ minWidth: 'max-content' }}>
            {TABS.map((t) => (
              <NavItem key={t.id}>
                <NavLink
                  className={activeTab === t.id ? 'active' : ''}
                  onClick={() => setActiveTab(t.id)}
                  style={{ cursor: 'pointer', whiteSpace: 'nowrap', color: activeTab === t.id ? undefined : isDark ? '#9ca3af' : undefined }}
                >
                  {t.label}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
      </div>

      <TabContent activeTab={activeTab}>
        <TabPane tabId='operateur'><OperateurList /></TabPane>
        <TabPane tabId='poste'>    <PosteList     /></TabPane>
        <TabPane tabId='contrat'>  <ContratList   /></TabPane>
        <TabPane tabId='exercice'> <ExerciceList  /></TabPane>
        <TabPane tabId='lot'>      <LotList       /></TabPane>
        <TabPane tabId='logs'>     <LogsList      /></TabPane>
      </TabContent>
    </Container>
  );
};

export default ParametresContainer;
