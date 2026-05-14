'use client';

import { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import SecteurList           from './SecteurList';
import AttributionSecteurList from './AttributionSecteurList';

const TABS = [
  { id: 'secteurs',     label: 'Secteurs'     },
  { id: 'attributions', label: 'Attributions' },
];

const SecteurContainer = () => {
  const [active, setActive] = useState('secteurs');

  return (
    <div>
      <Nav tabs className='border-tab nav-secondary mb-4'>
        {TABS.map((t) => (
          <NavItem key={t.id}>
            <NavLink
              className={active === t.id ? 'active' : ''}
              onClick={() => setActive(t.id)}
              style={{ cursor: 'pointer' }}
            >
              {t.label}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='secteurs'>     <SecteurList            /></TabPane>
        <TabPane tabId='attributions'> <AttributionSecteurList /></TabPane>
      </TabContent>
    </div>
  );
};

export default SecteurContainer;
