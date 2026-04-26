import React, { useState } from 'react';
import { Container, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { useHeaderStore } from '@/Store/useHeaderStore';
import UtilisateurList from './Utilisateur/UtilisateurList';
import CollaborateurList from './Collaborateur/CollaborateurList';

const TachesContainer = () => {
  const [activeTab, setActiveTab] = useState('utilisateur');
  const isDark = useHeaderStore((s) => s.logoToggle);

  return (
    <Container fluid>
      <div className='d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4'>
        <h4 className='mb-0'>Tâches</h4>
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', maxWidth: '100%' }}>
          <Nav className='border-tab nav-secondary flex-nowrap' tabs>
            <NavItem style={{ whiteSpace: 'nowrap' }}>
              <NavLink
                className={activeTab === 'utilisateur' ? 'active' : ''}
                onClick={() => setActiveTab('utilisateur')}
                style={{ cursor: 'pointer', color: activeTab === 'utilisateur' ? undefined : isDark ? '#9ca3af' : undefined }}
              >
                Utilisateur
              </NavLink>
            </NavItem>
            <NavItem style={{ whiteSpace: 'nowrap' }}>
              <NavLink
                className={activeTab === 'collaborateur' ? 'active' : ''}
                onClick={() => setActiveTab('collaborateur')}
                style={{ cursor: 'pointer', color: activeTab === 'collaborateur' ? undefined : isDark ? '#9ca3af' : undefined }}
              >
                {"Chef de département"}
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>

      <TabContent activeTab={activeTab}>
        <TabPane tabId='utilisateur'>
          <UtilisateurList />
        </TabPane>
        <TabPane tabId='collaborateur'>
          <CollaborateurList />
        </TabPane>
      </TabContent>
    </Container>
  );
};

export default TachesContainer;
