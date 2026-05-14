import { Home, CheckSquare, BarChart2, Map, User } from 'react-feather';
import { MenuItem } from '@/Type/SideBarType';

export const MENUITEMS_CS: MenuItem[] = [
  {
    title: 'Menu',
    Items: [
      {
        title: 'Dashboard',
        icon: <Home />,
        type: 'link',
        path: '/cs/dashboard',
        active: false,
      },
      {
        title: 'Tâches',
        icon: <CheckSquare />,
        type: 'link',
        path: '/cs/taches',
        active: false,
      },
      {
        title: 'Reporting',
        icon: <BarChart2 />,
        type: 'link',
        path: '/cs/reporting',
        active: false,
      },
      {
        title: 'Carte',
        icon: <Map />,
        type: 'link',
        path: '/cs/carte',
        active: false,
      },
      {
        title: 'Compte',
        icon: <User />,
        type: 'link',
        path: '/cs/compte',
        active: false,
      },
    ],
  },
];
