import React from 'react';
import SideBarProfile from './SideBarProfile';
import SideBarMenu from './SideBarMenu';

const SideBarSection = () => {
  return (
    <header className='main-nav' id='page-main-nav'>
      <SideBarProfile />
      <SideBarMenu />
    </header>
  );
};

export default SideBarSection;
