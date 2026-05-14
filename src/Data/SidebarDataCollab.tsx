import { Calendar, Sliders } from 'react-feather';
import { MenuItem } from '@/Type/SideBarType';

export const MENUITEMS_COLLAB: MenuItem[] = [
  {
    title: 'Menu',
    Items: [
      {
        title: 'Plannings',
        icon: <Calendar />,
        type: 'link',
        path: '/collab/plannings',
        active: false,
      },
      {
        title: 'Compte',
        icon: <Sliders />,
        type: 'link',
        path: '/collab/compte',
        active: false,
      },
    ],
  },
];
