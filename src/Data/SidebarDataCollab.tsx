'use client';

import { Home, Map, User, CheckSquare, BarChart2 } from 'react-feather';
import { MenuItem } from '@/Type/SideBarType';

// CF, CO, FS, MO — Dashboard + Carte + Compte
export const MENUITEMS_COLLAB_BASE: MenuItem[] = [
  {
    title: 'Menu',
    Items: [
      { title: 'Dashboard', icon: <Home />,       type: 'link', path: '/collab/dashboard', active: false },
      { title: 'Carte',     icon: <Map />,        type: 'link', path: '/collab/carte',     active: false },
      { title: 'Compte',    icon: <User />,       type: 'link', path: '/collab/compte',    active: false },
    ],
  },
];

// SE — Dashboard + Carte + Tâches + Compte
export const MENUITEMS_COLLAB_SE: MenuItem[] = [
  {
    title: 'Menu',
    Items: [
      { title: 'Dashboard', icon: <Home />,        type: 'link', path: '/collab/dashboard', active: false },
      { title: 'Carte',     icon: <Map />,         type: 'link', path: '/collab/carte',     active: false },
      { title: 'Tâches',    icon: <CheckSquare />, type: 'link', path: '/collab/taches',    active: false },
      { title: 'Compte',    icon: <User />,        type: 'link', path: '/collab/compte',    active: false },
    ],
  },
];

// SU, DI — Dashboard + Reporting + Carte + Compte
export const MENUITEMS_COLLAB_SU_DI: MenuItem[] = [
  {
    title: 'Menu',
    Items: [
      { title: 'Dashboard', icon: <Home />,      type: 'link', path: '/collab/dashboard', active: false },
      { title: 'Reporting', icon: <BarChart2 />, type: 'link', path: '/collab/reporting', active: false },
      { title: 'Carte',     icon: <Map />,       type: 'link', path: '/collab/carte',     active: false },
      { title: 'Compte',    icon: <User />,      type: 'link', path: '/collab/compte',    active: false },
    ],
  },
];

// Alias générique (rétrocompatibilité avec l'ancien rôle 'collaborateur')
export const MENUITEMS_COLLAB = MENUITEMS_COLLAB_BASE;
