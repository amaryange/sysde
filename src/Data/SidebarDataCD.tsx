import { Home, CheckSquare, BarChart2, Map, Sliders } from 'react-feather';
import { MenuItem } from '@/Type/SideBarType';

export const MENUITEMS_CD: MenuItem[] = [
  {
    title: 'Menu',
    Items: [
      {
        title: 'Dashboard',
        icon: <Home />,
        type: 'link',
        path: '/cd/dashboard',
        active: false,
      },
      {
        title: 'Tâches',
        icon: <CheckSquare />,
        type: 'link',
        path: '/cd/taches',
        active: false,
      },
      {
        title: 'Reporting',
        icon: <BarChart2 />,
        type: 'link',
        path: '/cd/reporting',
        active: false,
      },
      {
        title: 'Carte',
        icon: <Map />,
        type: 'link',
        path: '/cd/carte',
        active: false,
      },
      {
        title: 'Compte',
        icon: <Sliders />,
        type: 'link',
        path: '/cd/compte',
        active: false,
      },
    ],
  },
];
