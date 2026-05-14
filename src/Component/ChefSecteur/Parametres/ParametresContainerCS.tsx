'use client';

import { Container, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { useHeaderStore } from '@/Store/useHeaderStore';
import { useState } from 'react';
import CollaborateurList from './Collaborateur/CollaborateurList';

const ParametresContainerCS = () => {
  const [activeTab, setActiveTab] = useState('collaborateur');
  const isDark = useHeaderStore((s) => s.logoToggle);

  return (
    <Container fluid className='p-4'>
      <div className='mb-4'>
        <h4 className='mb-3'>Paramètres</h4>
        <Nav className='border-tab nav-secondary' tabs>
          <NavItem>
            <NavLink
              className={activeTab === 'collaborateur' ? 'active' : ''}
              onClick={() => setActiveTab('collaborateur')}
              style={{ cursor: 'pointer', color: activeTab === 'collaborateur' ? undefined : isDark ? '#9ca3af' : undefined }}
            >
              Collaborateur
            </NavLink>
          </NavItem>
        </Nav>
      </div>

      <TabContent activeTab={activeTab}>
        <TabPane tabId='collaborateur'>
          <CollaborateurList />
        </TabPane>
      </TabContent>
    </Container>
  );
};

export default ParametresContainerCS;
