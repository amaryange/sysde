import React, { useState } from 'react';
import { Container, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { useHeaderStore } from '@/Store/useHeaderStore';
import ChefSecteurList from './Utilisateur/ChefSecteurList';
import CollaborateurList from './Collaborateur/CollaborateurList';

const TachesContainer = () => {
  const [activeTab, setActiveTab] = useState('utilisateur');
  const isDark = useHeaderStore((s) => s.logoToggle);

  return (
    <Container fluid>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h4 className='mb-0'>Tâches</h4>
        <Nav className='border-tab nav-secondary' tabs>
          <NavItem>
            <NavLink
              className={activeTab === 'utilisateur' ? 'active' : ''}
              onClick={() => setActiveTab('utilisateur')}
              style={{ cursor: 'pointer', color: activeTab === 'utilisateur' ? undefined : isDark ? '#9ca3af' : undefined }}
            >
              Utilisateur
            </NavLink>
          </NavItem>
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
        <TabPane tabId='utilisateur'>
          <ChefSecteurList />
        </TabPane>
        <TabPane tabId='collaborateur'>
          <CollaborateurList />
        </TabPane>
      </TabContent>
    </Container>
  );
};

export default TachesContainer;
