'use client';

import { Container, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { useHeaderStore } from '@/Store/useHeaderStore';
import { useState } from 'react';
import ChefSecteurList from './ChefSecteur/ChefSecteurList';

const ParametresContainerCD = () => {
  const [activeTab, setActiveTab] = useState('chef-secteur');
  const isDark = useHeaderStore((s) => s.logoToggle);

  return (
    <Container fluid className='p-4'>
      <div className='mb-4'>
        <h4 className='mb-3'>Paramètres</h4>
        <Nav className='border-tab nav-secondary' tabs>
          <NavItem>
            <NavLink
              className={activeTab === 'chef-secteur' ? 'active' : ''}
              onClick={() => setActiveTab('chef-secteur')}
              style={{ cursor: 'pointer', color: activeTab === 'chef-secteur' ? undefined : isDark ? '#9ca3af' : undefined }}
            >
              Chef Secteur
            </NavLink>
          </NavItem>
        </Nav>
      </div>

      <TabContent activeTab={activeTab}>
        <TabPane tabId='chef-secteur'>
          <ChefSecteurList />
        </TabPane>
      </TabContent>
    </Container>
  );
};

export default ParametresContainerCD;
