import { AlertCircle, Clock, Folder, Home, Star, Trash2 } from 'react-feather';

export const SideButtons = [
  {
    id: 1,
    className: 'primary',
    icon: <Home />,
    title: 'Home',
  },
  {
    id: 2,
    className: 'light',
    icon: <Folder />,
    title: 'All',
  },
  {
    id: 3,
    className: 'light',
    icon: <Clock />,
    title: 'Recent',
  },
  {
    id: 4,
    className: 'light',
    icon: <Star />,
    title: 'Starred',
  },
  {
    id: 5,
    className: 'light',
    icon: <AlertCircle />,
    title: 'Recovery',
  },
  {
    id: 6,
    className: 'light',
    icon: <Trash2 />,
    title: 'Deleted',
  },
];

export const FilesList = [
  {
    id: 1,
    name: 'Logo.psd',
    size: '2.0 MB',
    modify: '1 hour ago',
    icon: 'fa fa-file-image-o txt-primary',
    folderClass: 'fa fa-file-archive-o f-36 txt-warning',
    title: 'Endless Admin',
    folderSize: '204 files, 50mb',
  },
  {
    id: 2,
    name: 'Project.zip',
    size: '1.90 GB',
    modify: '1 hour ago',
    icon: 'fa fa-file-archive-o txt-secondary',
    folderClass: 'fa fa-folder f-36 txt-warning',
    title: 'Endless Admin',
    folderSize: '101 files, 10mb',
  },
  {
    id: 3,
    name: 'Backend.xls',
    size: '2.00 GB',
    modify: '1 hour ago',
    icon: 'fa fa-file-excel-o txt-success',
    folderClass: 'fa fa-file-archive-o f-36 txt-warning',
    title: 'Endless Admin',
    folderSize: '25 files, 2mb',
  },
  {
    id: 4,
    name: 'requirements.txt',
    size: '0.90 KB',
    modify: '1 hour ago',
    icon: 'fa fa-file-text-o txt-info',
    folderClass: 'fa fa-folder f-36 txt-warning',
    title: 'Endless Admin',
    folderSize: '108 files, 5mb',
  },
];
