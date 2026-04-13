import { Activity, CheckCircle, FileText, UserCheck } from 'react-feather';

export const notificationData = [
  {
    status: 'Delivery processing',
    time: '10 minutes ago',
    name: 'primary',
    icon: <Activity />,
  },
  {
    status: 'Order Complete',
    time: '1 hour ago',
    name: 'secondary',
    icon: <CheckCircle />,
  },
  {
    status: 'Tickets Generated',
    time: '3 hour ago',
    name: 'success',
    icon: <FileText />,
  },
  {
    status: 'Delivery Complete',
    time: '6 hour ago',
    name: 'danger',
    icon: <UserCheck />,
  },
];

