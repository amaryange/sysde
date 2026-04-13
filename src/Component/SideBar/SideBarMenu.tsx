'use client';
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'react-feather';
import SidebarMenuList from './SidebarMenuList';
import { Back, MarginLeft } from '@/Constant';
import LogOutClass from '../Header/RightHeader/LogOutClass';

const SideBarMenu = () => {
  const [arrowStyle, setArrowStyle] = useState<number>(0);
  const scrollToRight = () => {
    setArrowStyle(arrowStyle - 700);
  };

  const scrollToLeft = () => {
    setArrowStyle(arrowStyle + 700);
  };
  return (
    <nav style={{ position: 'relative', height: '100%' }}>
      <div className='main-navbar'>
        <div className={`left-arrow ${arrowStyle == 0 ? 'd-none' : 'd-block'}`} id='left-arrow' onClick={scrollToLeft}>
          <ArrowLeft />
        </div>
        <div id='sidebar-menu' style={{ marginLeft: `${arrowStyle}px` }}>
          <ul className='nav-menu custom-scrollbar'>
            <li className='back-btn'>
              <div className='mobile-back text-end'>
                <span>{Back}</span>
                <i className='fa fa-angle-right ps-2' />
              </div>
            </li>
            <SidebarMenuList />
          </ul>
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: '24px', left: '16px', width: '258px' }}>
        <LogOutClass />
      </div>
    </nav>
  );
};
export default SideBarMenu;
