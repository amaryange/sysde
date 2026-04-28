'use client';
import React from 'react';
import SideBarProfile from './SideBarProfile';
import SideBarMenu from './SideBarMenu';
import { ChevronLeft } from 'react-feather';
import { useHeaderStore } from '../../Store/useHeaderStore';

const SideBarSection = () => {
  const toggleSidebar = useHeaderStore((s) => s.toggleSidebar);

  return (
    <>
      <header className='main-nav' id='page-main-nav'>
        <SideBarProfile />
        <SideBarMenu />
      </header>
      <button
        className='sidebar-toggle-tab'
        onClick={toggleSidebar}
        title='Réduire / Agrandir la barre latérale'
        aria-label='Basculer la barre latérale'
      >
        <ChevronLeft size={12} />
      </button>
    </>
  );
};

export default SideBarSection;
