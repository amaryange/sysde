import React from 'react';
import { Container, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { useHeaderStore } from '@/Store/useHeaderStore';
import { useTabStore }    from '@/Store/useTabStore';
import UtilisateurList   from './Utilisateur/UtilisateurList';
import CollaborateurList from './Collaborateur/CollaborateurList';

const TABS = [
  { id: 'utilisateur',   label: 'Utilisateur'       },
  { id: 'collaborateur', label: 'Chef de département' },
];

const TachesContainer = () => {
  const activeTab    = useTabStore((s) => s.tachesTab);
  const setActiveTab = useTabStore((s) => s.setTachesTab);
  const isDark       = useHeaderStore((s) => s.logoToggle);

  return (
    <Container fluid className='p-4'>
      <div className='mb-4'>
        <h4 className='mb-3'>Tâches</h4>
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
