import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { AssetsImagePath } from '@/Constant';
import Image from 'next/image';

const NavAuth = ({ callbackNav, selected }: any) => {
  return (
    <Nav className='border-tab flex-column'>
      <NavItem>
        <NavLink className={selected === 'simpleLogin' ? 'active' : ''} onClick={() => callbackNav('simpleLogin')}>
          <h4>Simple Login</h4>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavAuth;
