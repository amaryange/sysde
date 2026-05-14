'use client';

import { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import LotList           from './LotList';
import AttributionLotList from './AttributionLotList';

const TABS = [
  { id: 'lots',         label: 'Lots'         },
  { id: 'attributions', label: 'Attributions' },
];

const LotContainer = () => {
  const [active, setActive] = useState('lots');

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
        <TabPane tabId='lots'>         <LotList            /></TabPane>
        <TabPane tabId='attributions'> <AttributionLotList /></TabPane>
      </TabContent>
    </div>
  );
};

export default LotContainer;
