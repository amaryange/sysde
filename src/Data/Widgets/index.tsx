import { Cancel, Done, Follower, Following, Month, New, Pending, Sale, Today, TotalPost, Week, Year } from '@/Constant';
import React from 'react';
import { Database, ShoppingBag, MessageCircle, UserPlus, ArrowDown, ArrowUp, Layers, ShoppingCart, DollarSign } from 'react-feather';
// import { CloudDrizzleIcon, CloudIcon, RainCloudIcon } from '../SvgIcons';
import { Badge, Progress } from 'reactstrap';

export const EmployeeStatusData = [
  {
    id: 1,
    img: '/user/4.jpg',
    name: 'John Deo',
    status: '(14+ Online)',
    skill: 'Designer',
    exp: '2 Year',
    processbar: <Progress color='primary' style={{ height: '8px' }} value={30} />,
  },
  {
    id: 2,
    img: '/user/1.jpg',
    name: 'Holio Mako',
    status: '(250+ Online)',
    skill: 'Developer',
    exp: '3 Year',
    processbar: <Progress color='secondary' value={70} style={{ height: '8px' }} />,
  },
  {
    id: 3,
    img: '/user/5.jpg',
    name: 'Mohsib lara',
    status: '(99+ Online)',
    skill: 'Tester',
    exp: '5 Year',
    processbar: <Progress color='primary' value={60} style={{ height: '8px' }}/>,
  },
  {
    id: 4,
    img: '/user/6.jpg',
    name: 'Hileri Soli',
    status: '(150+ Online)',
    skill: 'Designer',
    exp: '3 Year',
    processbar: <Progress color='secondary' value={30} style={{ height: '8px' }}/>,
  },
  {
    id: 5,
    img: '/user/7.jpg',
    name: 'Pusiz bia',
    status: '(14+ Online)',
    skill: 'Designer',
    exp: '5 Year',
    processbar: <Progress color='primary' value={90} style={{ height: '8px' }}/>,
  },
];

export const WidgetsProductData = [
  {
    id: 1,
    details: 'Simply dummy text of the printing',
    quantity: 1,
    status: 'pending',
    badge: (
      <Badge className='badge rounded-pill pill-badge-secondary' color='secondary'>
        6523
      </Badge>
    ),
  },
  {
    id: 2,
    details: 'Long established',
    quantity: 5,
    status: 'Cancle',
    badge: (
      <Badge className='badge rounded-pill pill-badge-success' color='success'>
        6523
      </Badge>
    ),
  },
  {
    id: 3,
    details: 'sometimes by accident',
    quantity: 10,
    status: 'Cancle',
    badge: (
      <Badge className='badge rounded-pill pill-badge-warning' color='warning'>
        6523
      </Badge>
    ),
  },
  {
    id: 4,
    details: 'Classical Latin literature',
    quantity: 9,
    status: 'Return',
    badge: (
      <Badge className='badge rounded-pill pill-badge-primary' color='primary'>
        6523
      </Badge>
    ),
  },
  {
    id: 5,
    details: 'keep the site on the Internet',
    quantity: 8,
    status: 'Pending',
    badge: (
      <Badge className='badge rounded-pill pill-badge-danger' color='danger'>
        6523
      </Badge>
    ),
  },
  {
    id: 6,
    details: 'Molestiae consequatur',
    quantity: 3,
    status: 'Cancle',
    badge: (
      <Badge className='badge rounded-pill pill-badge-info' color='info'>
        6523
      </Badge>
    ),
  },
  {
    id: 7,
    details: 'Pain can procure',
    quantity: 4,
    status: 'Return',
    badge: (
      <Badge className='badge rounded-pill pill-badge-secondary' color='primary'>
        6523
      </Badge>
    ),
  },
];

export const BrowserData = [
  {
    id: 1,
    img: '/dashboard/chrome.png',
  },
  {
    id: 2,
    img: '/dashboard/firefox.png',
  },
  {
    id: 3,
    img: '/dashboard/safari.png',
  },
];

export const SocialData = [
  {
    id: 1,
    icon: 'fa fa-facebook',
    socialName: 'Facebook',
    count1: 6589,
    count2: 75269,
    title: 'Like',
  },
  {
    id: 2,
    icon: 'fa fa-twitter',
    socialName: 'Twitter',
    count1: 6589,
    count2: 75269,
    title: 'Follower',
  },
  {
    id: 3,
    icon: 'fa fa-linkedin',
    socialName: 'Linkedin',
    count1: 1234,
    count2: 4369,
    title: 'Linkedin',
  },
  {
    id: 4,
    icon: 'fa fa-google-plus',
    socialName: 'Google +',
    count1: 6589,
    count2: 75269,
    title: 'Like',
  },
];

export const EarningData = [
  {
    id: 1,
    classCompo: 'bg-primary',
    icon: <Database />,
    title: 'Earnings',
    count: '9856',
    iconWithClass: <Database className='icon-bg' />,
  },
  {
    id: 2,
    classCompo: 'bg-secondary',
    icon: <ShoppingBag />,
    title: 'Products',
    count: '9856',
    iconWithClass: <ShoppingBag className='icon-bg' />,
  },
  {
    id: 3,
    classCompo: 'bg-primary',
    icon: <MessageCircle />,
    title: 'Messages',
    count: '893',
    iconWithClass: <MessageCircle className='icon-bg' />,
  },
  {
    id: 4,
    classCompo: 'bg-primary',
    icon: <UserPlus />,
    title: 'New User',
    count: '4531',
    iconWithClass: <UserPlus className='icon-bg' />,
  },
];

export const RecentActivityData = [
  {
    id: 1,
    title: 'A',
    subtitle: 'Any desktop publishing.',
    date: '25 July 2023',
    time: '20 hours ago',
  },
  {
    id: 2,
    title: 'C',
    subtitle: 'Contrary to popular belief.',
    date: '25 July 2023',
    time: '20 hours ago',
  },
  {
    id: 3,
    title: 'E',
    subtitle: 'Established fact that a reader.',
    date: '25 July 2023',
    time: '20 hours ago',
  },
  {
    id: 4,
    title: 'H',
    subtitle: 'H-Code - A premium portfolio.',
    date: '25 July 2023',
    time: '20 hours ago',
  },
  {
    id: 5,
    title: 'T',
    subtitle: 'There isnt any hidden.',
    date: '25 July 2023',
    time: '20 hours ago',
  },
];

export const WeatherData = [
  {
    id: 1,
    // icon: <CloudIcon />,
    temp: '25°C',
    place: 'Newyork',
  },
  {
    id: 2,
    // icon: <RainCloudIcon />,
    temp: '95°C',
    place: 'Peris',
  },
  {
    id: 3,
    // icon: <CloudDrizzleIcon />,
    temp: '50°C',
    place: 'India',
  },
];

export const TotalSaleData = [
  {
    colClass: 'pe-0',
    divClass: 'd-flex border-after-xs',
    tittle: Sale,
    subTittle: Today,
    icon: <ArrowDown className='font-primary' />,
    amount: 25698,
    subAmount: '-$2658(36%)',
  },
  {
    colClass: 'ps-0',
    divClass: 'd-flex ',
    tittle: Sale,
    subTittle: Month,
    icon: <ArrowUp className='font-primary' />,
    amount: 6954,
    subAmount: '+$369(15%)',
  },
  {
    colClass: 'pe-0',
    divClass: 'd-flex border-after-xs',
    tittle: Sale,
    subTittle: Week,
    icon: <ArrowUp className='font-primary' />,
    amount: 63147,
    subAmount: '+$69(65%)',
  },
  {
    colClass: 'ps-0',
    divClass: 'd-flex ',
    tittle: Sale,
    subTittle: Year,
    icon: <ArrowUp className='font-primary' />,
    secondDiv: 'ps-3',
    amount: 963198,
    subAmount: '+$3654(90%)',
  },
];

export let TotalSaleRowData = [
  {
    colClass: 'pe-0',
    divClass: 'd-flex border-after-xs',
    number: 68,
    NumberIcon: <i className='fa fa-angle-up ms-2' />,
    tittle: New,
    icon: <ShoppingBag className='font-primary float-start ms-2' />,
    amount: 6981,
  },
  {
    colClass: 'ps-0',
    divClass: 'd-flex ',
    number: 12,
    NumberIcon: <i className='fa fa-angle-down ms-2' />,
    tittle: Pending,
    icon: <Layers className='font-primary float-start ms-3' />,
    amount: 783,
  },
  {
    colClass: 'pe-0',
    divClass: 'd-flex border-after-xs',
    number: 68,
    NumberIcon: <i className='fa fa-angle-up ms-2' />,
    tittle: Done,
    icon: <ShoppingCart className='font-primary float-start ms-2' />,
    amount: 3674,
    SecondDiv: 'pt-0',
  },
  {
    colClass: 'ps-0',
    divClass: 'd-flex ',
    number: 68,
    NumberIcon: <i className='fa fa-angle-up ms-2' />,
    tittle: Cancel,
    icon: <DollarSign className='font-primary float-start ms-2' />,
    amount: 69,
    SecondDiv: 'pt-0',
  },
];

export let Socialdata = [
  {
    href: 'https://www.facebook.com/login/',
    icon: <i className='fa fa-facebook' />,
  },
  {
    href: 'https://www.google.co.in/',
    icon: <i className='fa fa-google-plus' />,
  },
  {
    href: 'https://twitter.com/i/flow/login',
    icon: <i className='fa fa-twitter' />,
  },
  {
    href: 'https://www.instagram.com/accounts/login/',
    icon: <i className='fa fa-instagram' />,
  },
  {
    href: 'https://rss.app/signin',
    icon: <i className='fa fa-rss' />,
  },
];

export const SocialBottomData = [
    { heading: Follower, amount: 9564 },
    { heading: Following, amount: 49 },
    { heading: TotalPost, amount: 96 },
  ];