import { Messages, Notification } from '@/Constant';
import { Mail, Bell, Settings, Music, AlertTriangle, AlertCircle } from 'react-feather';

export const ButtonPartData = [
  {
    color: 'primary',
    text: Messages,
    icon: <Mail />,
  },
  {
    color: 'secondary',
    text: Notification,
    icon: <Bell />,
  },
  {
    color: 'success',
    text: 'Update available',
    icon: <Settings />,
  },
  {
    color: 'info',
    text: 'Playing Now',
    icon: <Music />,
  },
  {
    color: 'warning',
    text: '1.2 GB Used',
    icon: <AlertTriangle />,
  },
  {
    color: 'danger',
    text: 'Alert',
    icon: <AlertCircle />,
  },
];
