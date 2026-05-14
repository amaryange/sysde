import { Settings, Sliders } from 'react-feather';
import { MenuItem } from '@/Type/SideBarType';

export const MENUITEMS_CS: MenuItem[] = [
  {
    title: 'Menu',
    Items: [
      {
        title: 'Paramétrage',
        icon: <Settings />,
        type: 'link',
        path: '/cs/parametres',
        active: false,
      },
      {
        title: 'Compte',
        icon: <Sliders />,
        type: 'link',
        path: '/cs/compte',
        active: false,
      },
    ],
  },
];
