import { Settings, Sliders } from 'react-feather';
import { MenuItem } from '@/Type/SideBarType';

export const MENUITEMS_CD: MenuItem[] = [
  {
    title: 'Menu',
    Items: [
      {
        title: 'Paramétrage',
        icon: <Settings />,
        type: 'link',
        path: '/cd/parametres',
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
