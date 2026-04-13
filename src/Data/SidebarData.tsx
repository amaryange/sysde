import { MenuItem } from '@/Type/SideBarType';
import { Home, CheckSquare, Map, Settings, Sliders, BarChart2 } from 'react-feather';

export const MENUITEMS: MenuItem[] = [
  {
    title: 'Menu',
    Items: [
      {
        title: 'Dashboard',
        icon: <Home />,
        type: 'link',
        path: `/dashboard`,
        active: false,
      },
      {
        title: 'Tâches',
        icon: <CheckSquare />,
        type: 'link',
        path: `/taches`,
        active: false,
      },
      {
        title: 'Carte',
        icon: <Map />,
        type: 'link',
        path: `/carte`,
        active: false,
      },
      {
        title: 'Analytics',
        icon: <BarChart2 />,
        type: 'link',
        path: `/analytics`,
        active: false,
      },
      {
        title: 'Paramétrage',
        icon: <Settings />,
        type: 'link',
        path: `/parametres`,
        active: false,
      },
      {
        title: 'Réglages',
        icon: <Sliders />,
        type: 'link',
        path: `/reglages`,
        active: false,
      },
    ],
  },
];
