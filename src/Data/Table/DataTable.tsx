import Image from 'next/image';
import { AssetsImagePath } from '@/Constant';
import React from 'react';

export const ZeroConfigurationSubHeading = [
  {
    text: 'DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function:',
    code: '$().DataTable();.',
  },
  {
    text: 'Searching, ordering and paging goodness will be immediately added to the table, as shown in this example.',
  },
];

export const StateSavingSubHeading = [
  {
    spanData: [{ text: 'DataTables has the option of being able to save the state of a table (its paging position, ordering state etc) so that is can be restored when the user reloads a page, or comes back to the page after visiting a sub-page. This state saving ability is enabled by the ', code: 'stateSave' }, { text: 'option' }],
  },
  {
    spanData: [
      { text: 'The built in state saving method uses the HTML5 ', code: 'localStorage , sessionStorage' },
      { text: 'APIs for efficient storage of the data. Please note that this means that the built in state saving option will not work with IE6/7 as these browsers do not support these APIs. Alternative options of using cookies or saving the state on the server through Ajax can be used through the ', code: 'stateSaveCallback , stateLoadCallback ' },
      { text: 'option.' },
    ],
  },
  {
    spanData: [{ text: 'The duration for which the saved state is valid and can be used to restore the table state can be set using the ', code: 'stateDuration' }, { text: ' initialisation parameter (2 hours by default). This parameter also controls if ', code: 'localStorage' }, { text: '(0 or greater) or sessionStorage (-1) is used to store the data.' }],
  },
  {
    spanData: [{ text: 'The example below simply shows state saving enabled in DataTables with the', code: 'stateSave' }, { text: 'option' }],
  },
];

export const ActionButtons = (
  <ul className='action d-flex'>
    <li className='edit'>
      <a href='#'>
        <i className='icon-pencil-alt' />
      </a>
    </li>
    <li className='delete'>
      <a href='#'>
        <i className='icon-trash' />
      </a>
    </li>
  </ul>
);

export const ZeroConfigurationTableData = [
  {
    id: 1,
    name: 'Airi Satou',
    position: 'Accountant',
    office: 'Tokyo',
    age: 33,
    startDate: '2008/11/28',
    salary: '$162,700',
    action: ActionButtons,
  },
  {
    id: 2,
    name: 'Ashton Cox',
    position: 'Junior Technical Author',
    office: 'San Francisco',
    age: 66,
    startDate: '2009/01/12',
    salary: '$86,000',
    action: ActionButtons,
  },
  {
    id: 3,
    name: 'Brielle Williamson',
    position: 'Integration Specialist',
    office: 'New York',
    age: 61,
    startDate: '2012/12/02',
    salary: '$372,000',
    action: ActionButtons,
  },
  {
    id: 4,
    name: 'Cedric Kelly',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    age: 22,
    startDate: '2012/03/29',
    salary: '$433,060',
    action: ActionButtons,
  },
  {
    id: 5,
    name: 'Charde Marshall',
    position: 'Regional Director',
    office: 'San Francisco',
    age: 36,
    startDate: '2008/10/16',
    salary: '$470,600',
    action: ActionButtons,
  },
  {
    id: 6,
    name: 'Colleen Hurst',
    position: 'Javascript Developer',
    office: 'San Francisco',
    age: 39,
    startDate: '2009/09/15',
    salary: '$205,500',
    action: ActionButtons,
  },
  {
    id: 7,
    name: 'Donna Snider',
    position: 'Customer Support',
    office: 'New York',
    age: 27,
    startDate: '2011/01/25',
    salary: '$112,000',
    action: ActionButtons,
  },
  {
    id: 8,
    name: 'Garrett Winters',
    position: 'Accountant',
    office: 'Tokyo',
    age: 63,
    startDate: '2011/07/25',
    salary: '$170,750',
    action: ActionButtons,
  },
  {
    id: 9,
    name: 'Herrod Chandler',
    position: 'Sales Assistant',
    office: 'San Francisco',
    age: 59,
    startDate: '2012/08/06',
    salary: '$137,500',
    action: ActionButtons,
  },
  {
    id: 10,
    name: 'Jena Gaines',
    position: 'Office Manager',
    office: 'London',
    age: 30,
    startDate: '2008/12/19',
    salary: '$90,560',
    action: ActionButtons,
  },
  {
    id: 11,
    name: 'Quinn Flynn',
    position: 'Support Lead',
    office: 'Edinburgh',
    age: 22,
    startDate: '2013/03/03',
    salary: '$342,000',
    action: ActionButtons,
  },
  {
    id: 12,
    name: 'Rhona Davidson',
    position: 'Integration Specialist',
    office: 'Tokyo',
    age: 55,
    startDate: '2010/10/14',
    salary: '$327,900',
    action: ActionButtons,
  },
  {
    id: 13,
    name: 'Sonya Frost',
    position: 'Software Engineer',
    office: 'Edinburgh',
    age: 23,
    startDate: '2008/12/13',
    salary: '$103,600',
    action: ActionButtons,
  },
  {
    id: 14,
    name: 'Tiger Nixon',
    position: 'System Architect',
    office: 'Edinburgh',
    age: 61,
    startDate: '2011/04/25',
    salary: '$320,800',
    action: ActionButtons,
  },
];

export interface zeroConfigurationTableColumnsType {
  id: number;
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: string;
  action: any;
}

export const ZeroConfigurationTableColumns = [
  {
    name: 'Name',
    selector: (row: zeroConfigurationTableColumnsType) => row['name'],
    sortable: true,
    center: false,
  },
  {
    name: 'Position',
    selector: (row: zeroConfigurationTableColumnsType) => `${row.position}`,
    sortable: true,
    center: true,
  },
  {
    name: 'Office',
    selector: (row: zeroConfigurationTableColumnsType) => `${row.office}`,
    sortable: true,
    center: true,
  },
  {
    name: 'Age',
    selector: (row: zeroConfigurationTableColumnsType) => `${row.age}`,
    sortable: true,
    center: true,
  },
  {
    name: 'Start Date',
    selector: (row: zeroConfigurationTableColumnsType) => row['startDate'],
    sortable: true,
    center: true,
  },
  {
    name: 'Salary',
    selector: (row: zeroConfigurationTableColumnsType) => `${row.salary}`,
    sortable: true,
    center: true,
  },
  {
    name: 'Action',
    selector: (row: zeroConfigurationTableColumnsType) => row['action'],
    sortable: true,
    center: true,
  },
];

export const childRowsTableColumns = [
  {
    name: 'Name',
    selector: (row: zeroConfigurationTableColumnsType) => row['name'],
    sortable: true,
    center: false,
  },
  {
    name: 'Position',
    selector: (row: zeroConfigurationTableColumnsType) => `${row.position}`,
    sortable: true,
    center: true,
  },
  {
    name: 'Office',
    selector: (row: zeroConfigurationTableColumnsType) => `${row.office}`,
    sortable: true,
    center: true,
  },

  {
    name: 'Salary',
    selector: (row: zeroConfigurationTableColumnsType) => `${row.salary}`,
    sortable: true,
    center: true,
  },
];
interface stateSavingTableDataType {
  id: number;
  name: string;
  position: string;
  color: string;
  office: string;
  age: string;
  startDate: string;
  salary: string;
  action: any;
}
export const StateSavingTableData = [
  {
    id: 1,
    name: 'Tiger Nixon',
    position: 'Accountant',
    color: 'secondary',
    office: 'Edinburgh',
    age: '61',
    startDate: '2011/04/25',
    salary: '$320,800',
    action: ActionButtons,
  },
  {
    id: 2,
    name: 'Garrett Winters',
    position: 'Accountant',
    color: 'secondary',
    office: 'Tokyo',
    age: '63',
    startDate: '2011/07/25',
    salary: '$170,750',
    action: ActionButtons,
  },
  {
    id: 3,
    name: 'Ashton Cox',
    position: 'Junior Technical Author',
    color: 'primary',
    office: 'San Francisco',
    age: '66',
    startDate: '2009/01/12',
    salary: '$86,000',
    action: ActionButtons,
  },
  {
    id: 4,
    name: 'Cedric Kelly',
    position: 'Senior Javascript Developer',
    color: 'primary',
    office: 'Edinburgh',
    age: '22',
    startDate: '2012/03/29',
    salary: '$433,060',
    action: ActionButtons,
  },
  {
    id: 5,
    name: 'Airi Satou',
    position: 'Accountant',
    color: 'secondary',
    office: 'Tokyo',
    age: '33',
    startDate: '2008/11/28',
    salary: '$162,700',
    action: ActionButtons,
  },
  {
    id: 6,
    name: 'Brielle Williamson',
    position: 'Integration Specialist',
    color: 'info',
    office: 'New York',
    age: '61',
    startDate: '2012/12/02',
    salary: '$372,000',
    action: ActionButtons,
  },
  {
    id: 7,
    name: 'Herrod Chandler',
    position: 'Sales Assistant',
    color: 'primary',
    office: 'San Francisco',
    age: '59',
    startDate: '2012/08/06',
    salary: '$137,500',
    action: ActionButtons,
  },
  {
    id: 8,
    name: 'Rhona Davidson',
    position: 'Integration Specialist',
    color: 'info',
    office: 'Tokyo',
    age: '55',
    startDate: '2010/10/14',
    salary: '$327,900',
    action: ActionButtons,
  },
  {
    id: 9,
    name: 'Colleen Hurst',
    position: 'Javascript Developer',
    color: 'danger',
    office: 'San Francisco',
    age: '39',
    startDate: '2009/09/15',
    salary: '$205,500',
    action: ActionButtons,
  },
  {
    id: 10,
    name: 'Sonya Frost',
    position: 'Software Engineer',
    color: 'success',
    office: 'Edinburgh',
    age: '23',
    startDate: '2008/12/13',
    salary: '$103,600',
    action: ActionButtons,
  },
  {
    id: 11,
    name: 'Jena Gaines',
    position: 'Office Manager',
    color: 'primary',
    office: 'London  ',
    age: '30 ',
    startDate: '2008/12/19 ',
    salary: '$90,560 ',
    action: ActionButtons,
  },
  {
    id: 12,
    name: 'Quinn Flynn',
    position: 'Support Lead',
    color: 'primary',
    office: 'Edinburgh',
    age: '22',
    startDate: '2013/03/03',
    salary: '$342,000',
    action: ActionButtons,
  },
  {
    id: 13,
    name: 'Charde Marshall',
    position: 'Regional Director',
    color: 'info',
    office: 'San Francisco',
    age: '36',
    startDate: '2008/10/16',
    salary: '$470,600',
    action: ActionButtons,
  },
  {
    id: 14,
    name: 'Haley Kennedy',
    position: 'Senior Marketing Designer',
    color: 'primary',
    office: 'London',
    age: '43',
    startDate: '2012/12/18',
    salary: '$313,500',
    action: ActionButtons,
  },
  {
    id: 15,
    name: 'Tatyana Fitzpatrick',
    position: 'Regional Director',
    color: 'info',
    office: 'London',
    age: '19',
    startDate: '2010/03/17',
    salary: '$385,750',
    action: ActionButtons,
  },
  {
    id: 16,
    name: 'Michael Silva',
    position: 'Marketing Designer',
    color: 'primary',
    office: 'London',
    age: '66',
    startDate: '2012/11/27',
    salary: '$198,500',
    action: ActionButtons,
  },
  {
    id: 17,
    name: 'Paul Byrd',
    position: 'Chief Financial Officer (CFO)',
    color: 'primary',
    office: 'New York',
    age: '64',
    startDate: '2010/06/09',
    salary: '$725,000',
    action: ActionButtons,
  },
  {
    id: 18,
    name: 'Gloria Little',
    position: 'Systems Administrator',
    color: 'primary',
    office: 'New York',
    age: '59',
    startDate: '2009/04/10',
    salary: '$237,500',
    action: ActionButtons,
  },
  {
    id: 19,
    name: 'Bradley Greer',
    position: 'Software Engineer',
    color: 'success',
    office: 'London',
    age: '41',
    startDate: '2012/10/13',
    salary: '$132,000',
    action: ActionButtons,
  },
  {
    id: 20,
    name: 'Dai Rios',
    position: 'Personnel Lead',
    color: 'primary',
    office: 'Edinburgh',
    age: '35',
    startDate: '2012/09/26',
    salary: '$217,500',
    action: ActionButtons,
  },
  {
    id: 21,
    name: 'Jenette Caldwell',
    position: 'Development Lead',
    color: 'primary',
    office: 'New York',
    age: '30',
    startDate: '2011/09/03',
    salary: '$345,000',
    action: ActionButtons,
  },
  {
    id: 22,
    name: 'Yuri Berry',
    position: 'Chief Marketing Officer (CMO)',
    color: 'primary',
    office: 'New York',
    age: '40',
    startDate: '2009/06/25',
    salary: '$675,000',
    action: ActionButtons,
  },
  {
    id: 23,
    name: 'Caesar Vance',
    position: 'Pre-Sales Support',
    color: 'primary',
    office: 'New York',
    age: '21',
    startDate: '2011/12/12',
    salary: '$106,450',
    action: ActionButtons,
  },
  {
    id: 24,
    name: 'Doris Wilder',
    position: 'Sales Assistant',
    color: 'primary',
    office: 'Sidney',
    age: '23',
    startDate: '2010/09/20',
    salary: '$85,600',
    action: ActionButtons,
  },
  {
    id: 25,
    name: 'Angelica Ramos',
    position: 'Chief Executive Officer (CEO)',
    color: 'primary',
    office: 'London',
    age: '47',
    startDate: '2009/10/09',
    salary: '$1,200,000',
    action: ActionButtons,
  },
  {
    id: 26,
    name: 'Gavin Joyce',
    position: 'Developer',
    color: 'success',
    office: 'Edinburgh',
    age: '42',
    startDate: '2010/12/22',
    salary: '$92,575',
    action: ActionButtons,
  },
  {
    id: 27,
    name: 'Jennifer Chang',
    position: 'Regional Director',
    color: 'info',
    office: 'Singapore',
    age: '28',
    startDate: '2010/11/14',
    salary: '$357,650',
    action: ActionButtons,
  },
  {
    id: 28,
    name: 'Brenden Wagner',
    position: 'Software Engineer',
    color: 'successs',
    office: 'San Francisco',
    age: '28',
    startDate: '2011/06/07',
    salary: '$206,850',
    action: ActionButtons,
  },
  {
    id: 29,
    name: 'Fiona Green',
    position: 'Chief Operating Officer (COO)',
    color: 'primary',
    office: 'San Francisco',
    age: '48',
    startDate: '2010/03/11',
    salary: '$850,000',
    action: ActionButtons,
  },
  {
    id: 30,
    name: 'Shou Itou',
    position: 'Regional Marketing',
    color: 'primary',
    office: 'Tokyo',
    age: '20',
    startDate: '2011/08/14',
    salary: '$163,000',
    action: ActionButtons,
  },
  {
    id: 31,
    name: 'Michelle House',
    position: 'Integration Specialist',
    color: 'info',
    office: 'Sidney',
    age: '37',
    startDate: '2011/06/02',
    salary: '$95,400',
    action: ActionButtons,
  },
  {
    id: 32,
    name: 'Suki Burks',
    position: 'Developer',
    color: 'success',
    office: 'London',
    age: '53',
    startDate: '2009/10/22',
    salary: '$114,500',
    action: ActionButtons,
  },
  {
    id: 33,
    name: 'Prescott Bartlett',
    position: 'Technical Author',
    color: 'primary',
    office: 'London',
    age: '27',
    startDate: '2011/05/07',
    salary: '$145,000',
    action: ActionButtons,
  },
  {
    id: 34,
    name: 'Gavin Cortez',
    position: 'Team Leader',
    color: 'primary',
    office: 'San Francisco',
    age: '22',
    startDate: '2008/10/26',
    salary: '$235,500',
    action: ActionButtons,
  },
  {
    id: 35,
    name: 'Martena Mccray',
    position: 'Post-Sales support',
    color: 'primary',
    office: 'Edinburgh',
    age: '46',
    startDate: '2011/03/09',
    salary: '$324,050',
    action: ActionButtons,
  },
  {
    id: 36,
    name: 'Unity Butler',
    position: 'Marketing Designer',
    color: 'primary',
    office: 'San Francisco',
    age: '47',
    startDate: '2009/12/09',
    salary: '$85,675',
    action: ActionButtons,
  },
  {
    id: 37,
    name: 'Howard Hatfield',
    position: 'Office Manager',
    color: 'primary',
    office: 'San Francisco',
    age: '51',
    startDate: '2008/12/16',
    salary: '$164,500',
    action: ActionButtons,
  },
  {
    id: 38,
    name: 'Hope Fuentes',
    position: 'Secretary',
    color: 'primary',
    office: 'San Francisco',
    age: '41',
    startDate: '2010/02/12',
    salary: '$109,850',
    action: ActionButtons,
  },
  {
    id: 39,
    name: 'Vivian Harrell',
    position: 'Financial Controller',
    color: 'primary',
    office: 'San Francisco',
    age: '62',
    startDate: '2009/02/14',
    salary: '$452,500',
    action: ActionButtons,
  },
  {
    id: 40,
    name: 'Timothy Mooney',
    position: 'Office Manager',
    color: 'primary',
    office: 'London',
    age: '37',
    startDate: '2008/12/11',
    salary: '$136,200',
    action: ActionButtons,
  },
  {
    id: 41,
    name: 'Jackson Bradshaw',
    position: 'Director',
    color: 'primary',
    office: 'New York',
    age: '65',
    startDate: '2008/09/26',
    salary: '$645,750',
    action: ActionButtons,
  },
  {
    id: 42,
    name: 'Olivia Liang',
    position: 'Support Engineer',
    color: 'primary',
    office: 'Singapore',
    age: '64',
    startDate: '2011/02/03',
    salary: '$234,500',
    action: ActionButtons,
  },
  {
    id: 43,
    name: 'Bruno Nash',
    position: 'Software Engineer',
    color: 'success',
    office: 'London',
    age: '38',
    startDate: '2011/05/03',
    salary: '$163,500',
    action: ActionButtons,
  },
  {
    id: 44,
    name: 'Sakura Yamamoto',
    position: 'Support Engineer',
    color: 'primary',
    office: 'Tokyo',
    age: '37',
    startDate: '2009/08/19',
    salary: '$139,575',
    action: ActionButtons,
  },
  {
    id: 45,
    name: 'Thor Walton',
    position: 'Developer',
    color: 'primary',
    office: 'New York',
    age: '61',
    startDate: '2013/08/11',
    salary: '$98,540',
    action: ActionButtons,
  },
  {
    id: 46,
    name: 'Finn Camacho',
    position: 'Support Engineer',
    color: 'primary',
    office: 'San Francisco',
    age: '<td>47</td>',
    startDate: '2009/07/07',
    salary: '$87,500',
    action: ActionButtons,
  },
  {
    id: 47,
    name: 'Serge Baldwin',
    position: 'Data Coordinator',
    color: 'primary',
    office: 'Singapore',
    age: '64',
    startDate: '2012/04/09',
    salary: '$138,575',
    action: ActionButtons,
  },
  {
    id: 48,
    name: 'Zenaida Frank',
    position: 'Software Engineer',
    color: 'success',
    office: 'New York',
    age: '63',
    startDate: '2010/01/04',
    salary: '$125,250',
    action: ActionButtons,
  },
  {
    id: 49,
    name: 'Zorita Serrano',
    position: 'Software Engineer',
    color: 'success',
    office: 'San Francisco',
    age: '56',
    startDate: '2012/06/01',
    salary: '$115,000',
    action: ActionButtons,
  },
  {
    id: 50,
    name: 'Jennifer Acosta',
    position: 'Junior Javascript Developer',
    color: 'primary',
    office: 'Edinburgh',
    age: '43',
    startDate: '2013/02/01',
    salary: '$75,650',
    action: ActionButtons,
  },
  {
    id: 51,
    name: 'Cara Stevens',
    position: 'Sales Assistant',
    color: 'primary',
    office: 'New York',
    age: '46',
    startDate: '2011/12/06',
    salary: '$145,600',
    action: ActionButtons,
  },
  {
    id: 52,
    name: 'Hermione Butler',
    position: 'Regional Director',
    color: 'info',
    office: 'London',
    age: '47',
    startDate: '2011/03/21',
    salary: '$356,250',
    action: ActionButtons,
  },
  {
    id: 53,
    name: 'Lael Greer',
    position: 'Systems Administrator',
    color: 'primary',
    office: 'London',
    age: '21',
    startDate: '2009/02/27',
    salary: '$103,500',
    action: ActionButtons,
  },
  {
    id: 54,
    name: 'Jonas Alexander',
    position: 'Developer',
    color: 'success',
    office: 'San Francisco',
    age: '30',
    startDate: '2010/07/14',
    salary: '$86,500',
    action: ActionButtons,
  },
  {
    id: 55,
    name: 'Shad Decker',
    position: 'Regional Director',
    color: 'info',
    office: 'Edinburgh',
    age: '51',
    startDate: '2008/11/13',
    salary: '$183,000',
    action: ActionButtons,
  },
  {
    id: 56,
    name: 'Michael Bruce',
    position: 'Javascript Developer',
    color: 'danger',
    office: 'Singapore',
    age: '29',
    startDate: '2011/06/27',
    salary: '$183,000',
    action: ActionButtons,
  },
  {
    id: 57,
    name: 'Donna Snider',
    position: 'Customer Support',
    color: 'primary',
    office: 'New York',
    age: '27',
    startDate: '2011/01/25',
    salary: '$112,000',
    action: ActionButtons,
  },
];

const CustomBadge = ({ position, color }: customCellInterFace) => {
  return <span className={`badge rounded-pill badge-light-${color}`}>{position}</span>;
};

export const StateSavingTableColumns = [
  {
    name: 'Name',
    selector: (row: stateSavingTableDataType) => row['name'],
    sortable: true,
    center: false,
  },
  {
    name: 'Position',
    selector: (row: stateSavingTableDataType) => `${row.position}`,
    sortable: true,
    center: true,
  },
  {
    name: 'Office',
    selector: (row: stateSavingTableDataType) => `${row.office}`,
    sortable: true,
    center: true,
  },
  {
    name: 'Age',
    selector: (row: stateSavingTableDataType) => `${row.age}`,
    sortable: true,
    center: true,
  },
  {
    name: 'Start Date',
    selector: (row: stateSavingTableDataType) => row['startDate'],
    sortable: true,
    center: true,
  },
  {
    name: 'Salary',
    selector: (row: stateSavingTableDataType) => `${row.salary}`,
    sortable: true,
    center: true,
  },
  {
    name: 'action',
    selector: (row: stateSavingTableDataType) => row['action'],
    sortable: true,
    center: true,
  },
];

export const ScrollVerticalDynamicHeightSubHeading = [
  {
    spanData: [{ text: 'This example shows a vertically scrolling DataTable that makes use of the CSS3 vh unit in order to dynamically resize the viewport based on the browser window height. The vh unit is effectively a percentage of the browser window height. So the 50vh used in this example is 50% of the window height. The viewport size will update dynamically as the window is resized.' }],
  },
  {
    spanData: [{ text: 'A relatively modern browser is required for vh units to operate correctly. IE9+ supports the vh unit and all other evergreen browsers.' }],
  },
];

export const ScrollVerticalDynamicHeightData = [
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/1.jpg`} alt='userImage' unoptimized/> Zorita Serrano{' '}
      </>
    ),
    position: 'Software Engineer',
    office: 'San Francisco',
    age: '56',
    startDate: '2012/06/01',
    salary: '$115,000',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/12.png`} alt='userImage' unoptimized/> Zenaida Frank
      </>
    ),
    position: 'Software Engineer',
    office: 'New York',
    age: '63',
    startDate: '2010/01/04',
    salary: '$125,250',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <img className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.png`} alt='userImage' /> Yuri Berry
      </>
    ),
    position: 'Chief Marketing Officer (CMO)',
    office: 'New York',
    age: '40',
    startDate: '2009/06/25',
    salary: '$675,000',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <img className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.jpg`} alt='userImage' /> Vivian Harrell
      </>
    ),
    position: 'Financial Controller',
    office: 'San Francisco',
    age: '62',
    startDate: '2009/02/14',
    salary: '$452,500',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/12.png`} alt='userImage' unoptimized/>
        Unity Butler{' '}
      </>
    ),
    position: 'Marketing Designer',
    office: 'San Francisco',
    age: '47',
    startDate: '2009/12/09',
    salary: '$85,675',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/12.png`} alt='userImage' unoptimized/> Timothy Mooney
      </>
    ),
    position: 'Office Manager',
    office: 'London',
    age: '37',
    startDate: '2008/12/11',
    salary: '$136,200',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/1.jpg`} alt='userImage' unoptimized/> Tiger Nixon
      </>
    ),
    position: 'System Architect',
    office: 'Edinburgh',
    age: '61',
    startDate: '2011/04/25',
    salary: '$320,800',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/1.jpg`} alt='userImage' unoptimized/> Thor Walton
      </>
    ),
    position: 'Developer',
    office: 'New York',
    age: '61',
    startDate: '2013/08/11',
    salary: '$98,540',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <img className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.jpg`} alt='userImage' /> Tatyana Fitzpatrick
      </>
    ),
    position: 'Regional Director',
    office: 'London',
    age: '19',
    startDate: '2010/03/17',
    salary: '$385,750',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/12.png`} alt='userImage' unoptimized/> Suki Burks
      </>
    ),
    position: 'Developer',
    office: 'London',
    age: '53',
    startDate: '2009/10/22',
    salary: '$114,500',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <img className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.png`} alt='userImage' /> Sonya Frost
      </>
    ),
    position: 'Software Engineer',
    office: 'Edinburgh',
    age: '23',
    startDate: '2008/12/13',
    salary: '$103,600',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <img className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.png`} alt='userImage' /> Shou Itou
      </>
    ),
    position: 'Regional Marketing',
    office: 'Tokyo',
    age: '20',
    startDate: '2011/08/14',
    salary: '$163,000',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <img className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.jpg`} alt='userImage' /> Shad Decker
      </>
    ),
    position: 'Regional Director',
    office: 'Edinburgh',
    age: '51',
    startDate: '2008/11/13',
    salary: '$183,000',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <img className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.jpg`} alt='userImage' />
        Serge Baldwin{' '}
      </>
    ),
    position: 'Data Coordinator',
    office: 'Singapore',
    age: '64',
    startDate: '2012/04/09',
    salary: '$138,575',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/12.png`} alt='userImage' unoptimized/> Sakura Yamamoto
      </>
    ),
    position: 'Support Engineer',
    office: 'Tokyo',
    age: '37',
    startDate: '2009/08/19',
    salary: '$139,575',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/12.png`} alt='userImage' unoptimized/> Rhona Davidson
      </>
    ),
    position: 'Integration Specialist',
    office: 'Tokyo',
    age: '55',
    startDate: '2010/10/14',
    salary: '$327,900',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/12.png`} alt='userImage' unoptimized/> Quinn Flynn
      </>
    ),
    position: 'Support Lead',
    office: 'Edinburgh',
    age: '22',
    startDate: '2013/03/03',
    salary: '$342,000',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/1.jpg`} alt='userImage' unoptimized/> Prescott Bartlett
      </>
    ),
    position: 'Technical Author',
    office: 'London',
    age: '27',
    startDate: '2011/05/07',
    salary: '$145,000',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/1.jpg`} alt='userImage' unoptimized/>
        Paul Byrd{' '}
      </>
    ),
    position: 'Chief Financial Officer (CFO)',
    office: 'New York',
    age: '64',
    startDate: '2010/06/09',
    salary: '$725,000',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <img className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.jpg`} alt='userImage' /> Olivia Liang
      </>
    ),
    position: 'Support Engineer',
    office: 'Singapore',
    age: '64',
    startDate: '2011/02/03',
    salary: '$234,500',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <img className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.jpg`} alt='userImage' /> Michelle House
      </>
    ),
    position: 'Integration Specialist',
    office: 'Sidney',
    age: '37',
    startDate: '2011/06/02',
    salary: '$95,400',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/12.png`} alt='userImage' unoptimized/> Michael Silva
      </>
    ),
    position: 'Marketing Designer',
    office: 'London',
    age: '66',
    startDate: '2012/11/27',
    salary: '$198,500',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/12.png`} alt='userImage' unoptimized/>
        Michael Bruce{' '}
      </>
    ),
    position: 'Javascript Developer',
    office: 'Singapore',
    age: '29',
    startDate: '2011/06/27',
    salary: '$183,000',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <img className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.jpg`} alt='userImage' /> Martena Mccray
      </>
    ),
    position: 'Post-Sales support',
    office: 'Edinburgh',
    age: '46',
    startDate: '2011/03/09',
    salary: '$324,050',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/1.jpg`} alt='userImage' unoptimized/> Lael Greer
      </>
    ),
    position: 'Systems Administrator',
    office: 'London',
    age: '21',
    startDate: '2009/02/27',
    salary: '$103,500',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <img className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.png`} alt='userImage' /> Jonas Alexander
      </>
    ),
    position: 'Developer',
    office: 'San Francisco',
    age: '30',
    startDate: '2010/07/14',
    salary: '$86,500',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <img className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.jpg`} alt='userImage' /> Jennifer Chang
      </>
    ),
    position: 'Regional Director',
    office: 'Singapore',
    age: '28',
    startDate: '2010/11/14',
    salary: '$357,650',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.png`} alt='userImage' unoptimized/> Jennifer Acosta
      </>
    ),
    position: 'Junior Javascript Developer',
    office: 'Edinburgh',
    age: '43',
    startDate: '2013/02/01',
    salary: '$75,650',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <img className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.jpg`} alt='userImage' /> Jenette Caldwell
      </>
    ),
    position: 'Development Lead',
    office: 'New York',
    age: '30',
    startDate: '2011/09/03',
    salary: '$345,000',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <img className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.jpg`} alt='userImage' /> Jena Gaines
      </>
    ),
    position: 'Office Manager',
    office: 'London',
    age: '30',
    startDate: '2008/12/19',
    salary: '$90,560',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/1.jpg`} alt='userImage' unoptimized/> Jackson Bradshaw
      </>
    ),
    position: 'Director',
    office: 'New York',
    age: '65',
    startDate: '2008/09/26',
    salary: '$645,750',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/1.jpg`} alt='userImage' unoptimized/> Howard Hatfield
      </>
    ),
    position: 'Office Manager',
    office: 'San Francisco',
    age: '51',
    startDate: '2008/12/16',
    salary: '$164,500',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.png`} alt='userImage' unoptimized/> Hope Fuentes
      </>
    ),
    position: 'Secretary',
    office: 'San Francisco',
    age: '41',
    startDate: '2010/02/12',
    salary: '$109,850',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.png`} alt='userImage' unoptimized/>
        Herrod Chandler{' '}
      </>
    ),
    position: 'Sales Assistant',
    office: 'San Francisco',
    age: '59',
    startDate: '2012/08/06',
    salary: '$137,500',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/12.png`} alt='userImage' unoptimized/> Hermione Butler
      </>
    ),
    position: 'Regional Director',
    office: 'London',
    age: '47',
    startDate: '2011/03/21',
    salary: '$356,250',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.png`} alt='userImage' unoptimized/> Haley Kennedy
      </>
    ),
    position: 'Senior Marketing Designer',
    office: 'London',
    age: '43',
    startDate: '2012/12/18',
    salary: '$313,500',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.png`} alt='userImage' unoptimized/> Gloria Little
      </>
    ),
    position: 'Systems Administrator',
    office: 'New York',
    age: '59',
    startDate: '2009/04/10',
    salary: '$237,500',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.png`} alt='userImage' unoptimized/> Gavin Joyce
      </>
    ),
    position: 'Developer',
    office: 'Edinburgh',
    age: '42',
    startDate: '2010/12/22',
    salary: '$92,575',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.png`} alt='userImage' unoptimized/> Gavin Cortez
      </>
    ),
    position: 'Team Leader',
    office: 'San Francisco',
    age: '22',
    startDate: '2008/10/26',
    salary: '$235,500',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.png`} alt='userImage' unoptimized/> Garrett Winters
      </>
    ),
    position: 'Accountant',
    office: 'Tokyo',
    age: '63',
    startDate: '2011/07/25',
    salary: '$170,750',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/1.jpg`} alt='userImage' unoptimized/>
        Fiona Green{' '}
      </>
    ),
    position: 'Chief Operating Officer (COO)',
    office: 'San Francisco',
    age: '48',
    startDate: '2010/03/11',
    salary: '$850,000',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.png`} alt='userImage' unoptimized/> Finn Camacho
      </>
    ),
    position: 'Support Engineer',
    office: 'San Francisco',
    age: '47',
    startDate: '2009/07/07',
    salary: '$87,500',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/1.jpg`} alt='userImage' unoptimized/>
        Doris Wilder{' '}
      </>
    ),
    position: 'Sales Assistant',
    office: 'Sidney',
    age: '23',
    startDate: '2010/09/20',
    salary: '$85,600',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.png`} alt='userImage' unoptimized/> Donna Snider
      </>
    ),
    position: 'Customer Support',
    office: 'New York',
    age: '27',
    startDate: '2011/01/25',
    salary: '$112,000',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/12.png`} alt='userImage' unoptimized/> Dai Rios
      </>
    ),
    position: 'Personnel Lead',
    office: 'Edinburgh',
    age: '35',
    startDate: '2012/09/26',
    salary: '$217,500',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/1.jpg`} alt='userImage' unoptimized/> Colleen Hurst
      </>
    ),
    position: 'Javascript Developer',
    office: 'San Francisco',
    age: '39',
    startDate: '2009/09/15',
    salary: '$205,500',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/1.jpg`} alt='userImage' unoptimized/> Charde Marshall
      </>
    ),
    position: 'Regional Director',
    office: 'San Francisco',
    age: '36',
    startDate: '2008/10/16',
    salary: '$470,600',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/12.png`} alt='userImage' unoptimized/> Cedric Kelly
      </>
    ),
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    age: '22',
    startDate: '2012/03/29',
    salary: '$433,060',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <img className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.jpg`} alt='userImage' /> Cara Stevens
      </>
    ),
    position: 'Sales Assistant',
    office: 'New York',
    age: '46',
    startDate: '2011/12/06',
    salary: '$145,600',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/12.png`} alt='userImage' unoptimized/> Caesar Vance
      </>
    ),
    position: 'Pre-Sales Support',
    office: 'New York',
    age: '21',
    startDate: '2011/12/12',
    salary: '$106,450',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.png`} alt='userImage' unoptimized/>
        Bruno Nash{' '}
      </>
    ),
    position: 'Software Engineer',
    office: 'London',
    age: '38',
    startDate: '2011/05/03',
    salary: '$163,500',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <img className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.jpg`} alt='userImage' /> Brielle Williamson
      </>
    ),
    position: 'Integration Specialist',
    office: 'New York',
    age: '61',
    startDate: '2012/12/02',
    salary: '$372,000',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/12.png`} alt='userImage' unoptimized/>
        Brenden Wagner{' '}
      </>
    ),
    position: 'Software Engineer',
    office: 'San Francisco',
    age: '28',
    startDate: '2011/06/07',
    salary: '$206,850',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <img className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.jpg`} alt='userImage' /> Bradley Greer
      </>
    ),
    position: 'Software Engineer',
    office: 'London',
    age: '41',
    startDate: '2012/10/13',
    salary: '$132,000',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <img className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.jpg`} alt='userImage' /> Ashton Cox
      </>
    ),
    position: 'Junior Technical Author',
    office: 'San Francisco',
    age: '66',
    startDate: '2009/01/12',
    salary: '$86,000',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/2.png`} alt='userImage' unoptimized/> Angelica Ramos
      </>
    ),
    position: 'Chief Executive Officer (CEO)',
    office: 'London',
    age: '47',
    startDate: '2009/10/09',
    salary: '$1,200,000',
    action: ActionButtons,
  },
  {
    name: (
      <>
        <Image width={32} height={32} className=' me-2 img-fluid table-avtar' src={`${AssetsImagePath}/user/1.jpg`} alt='userImage' unoptimized/>
        Airi Satou{' '}
      </>
    ),
    position: 'Accountant',
    office: 'Tokyo',
    age: '33',
    startDate: '2008/11/28',
    salary: '$162,700',
    action: ActionButtons,
  },
];
interface scrollVerticalType {
  name: any;
  position: string;
  office: string;
  age: string;
  startDate: string;
  salary: string;
  action: any;
}

export const ScrollVerticalDynamicHeightColumns = [
  {
    name: 'Name',
    selector: (row: scrollVerticalType) => row['name'],
    sortable: true,
    center: false,
  },
  {
    name: 'Position',
    selector: (row: scrollVerticalType) => `${row.position}`,
    sortable: true,
    center: true,
  },
  {
    name: 'Office',
    selector: (row: scrollVerticalType) => `${row.office}`,
    sortable: true,
    center: true,
  },
  {
    name: 'Age',
    selector: (row: scrollVerticalType) => `${row.age}`,
    sortable: true,
    center: true,
  },
  {
    name: 'Start Date',
    selector: (row: scrollVerticalType) => row['startDate'],
    sortable: true,
    center: true,
  },
  {
    name: 'Salary',
    selector: (row: scrollVerticalType) => `${row.salary}`,
    sortable: true,
    center: true,
  },
  {
    name: 'action',
    selector: (row: scrollVerticalType) => row['action'],
    sortable: true,
    center: true,
  },
];

//=========Basic Data Tables Ends=============//

import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { rowCreateCallBackData } from '@/Type/SideBarType';
import { Badge } from 'reactstrap';

const DynamicChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const areaSpaLine: ApexOptions = {
  series: [
    {
      name: 'series1',
      data: [2.57, 2.54, 2.54, 2.56, 2.57, 2.58, 2.59],
    },
  ],
  chart: {
    height: 85,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  yaxis: {
    show: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false, //or just here to disable only x axis grids
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },

    type: 'datetime',
    categories: ['2023-09-19T00:00:00.000Z', '2023-09-19T01:30:00.000Z', '2023-09-19T02:30:00.000Z', '2023-09-19T03:30:00.000Z', '2023-09-19T04:30:00.000Z', '2023-09-19T05:30:00.000Z', '2023-09-19T06:30:00.000Z'],
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          offsetX: -10,
          offsetY: 10,
        },
      },
    },
  ],
  colors: ['#26695c', '#fd2e64'],
};

const areaSpaLine2: ApexOptions = {
  series: [
    {
      name: 'series1',
      data: [1.12, 1.11, 1.08, 1.08, 1.09, 1.11, 1.08],
    },
  ],
  chart: {
    height: 85,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  yaxis: {
    show: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false, //or just here to disable only x axis grids
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },

    type: 'datetime',
    categories: ['2023-09-19T00:00:00.000Z', '2023-09-19T01:30:00.000Z', '2023-09-19T02:30:00.000Z', '2023-09-19T03:30:00.000Z', '2023-09-19T04:30:00.000Z', '2023-09-19T05:30:00.000Z', '2023-09-19T06:30:00.000Z'],
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          offsetX: -10,
          offsetY: 10,
        },
      },
    },
  ],
  colors: ['#26695c', '#fd2e64'],
};

const areaSpaLine3: ApexOptions = {
  series: [
    {
      name: 'series1',
      data: [3.4, 3.39, 3.46, 3.51, 3.5, 3.48, 3.49],
    },
  ],
  chart: {
    height: 85,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  yaxis: {
    show: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false, //or just here to disable only x axis grids
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },

    type: 'datetime',
    categories: ['2023-09-19T00:00:00.000Z', '2023-09-19T01:30:00.000Z', '2023-09-19T02:30:00.000Z', '2023-09-19T03:30:00.000Z', '2023-09-19T04:30:00.000Z', '2023-09-19T05:30:00.000Z', '2023-09-19T06:30:00.000Z'],
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          offsetX: -10,
          offsetY: 10,
        },
      },
    },
  ],
  colors: ['#26695c', '#fd2e64'],
};

const areaSpaLine4: ApexOptions = {
  series: [
    {
      name: 'series1',
      data: [16.2, 16.4, 16.36, 16.35, 16.61, 16.46, 16.19],
    },
  ],
  chart: {
    height: 85,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  yaxis: {
    show: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false, //or just here to disable only x axis grids
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },

    type: 'datetime',
    categories: ['2023-09-19T00:00:00.000Z', '2023-09-19T01:30:00.000Z', '2023-09-19T02:30:00.000Z', '2023-09-19T03:30:00.000Z', '2023-09-19T04:30:00.000Z', '2023-09-19T05:30:00.000Z', '2023-09-19T06:30:00.000Z'],
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          offsetX: -10,
          offsetY: 10,
        },
      },
    },
  ],
  colors: ['#26695c', '#fd2e64'],
};

const areaSpaLine5: ApexOptions = {
  series: [
    {
      name: 'series1',
      data: [82.51, 83.47, 83.4, 83.68, 83.81, 83.29, 83.72],
    },
  ],
  chart: {
    height: 85,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  yaxis: {
    show: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false, //or just here to disable only x axis grids
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },

    type: 'datetime',
    categories: ['2023-09-19T00:00:00.000Z', '2023-09-19T01:30:00.000Z', '2023-09-19T02:30:00.000Z', '2023-09-19T03:30:00.000Z', '2023-09-19T04:30:00.000Z', '2023-09-19T05:30:00.000Z', '2023-09-19T06:30:00.000Z'],
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          offsetX: -10,
          offsetY: 10,
        },
      },
    },
  ],
  colors: ['#26695c', '#fd2e64'],
};

export const StockResultTableData = [
  {
    name: 'ACME Gadgets',
    symbol: 'AGDTS',
    price: '2.57',
    difference: <span style={{ color: 'green' }}>0.02</span>,
    last: <DynamicChart options={areaSpaLine} series={areaSpaLine.series} height='85' type='area' />,
  },
  {
    name: 'Sole Goodman',
    symbol: 'SGMAN',
    price: '16.61',
    difference: <span style={{ color: 'green' }}>0.26</span>,
    last: <DynamicChart options={areaSpaLine2} series={areaSpaLine2.series} height='85' type='area' />,
  },
  {
    name: 'Spry Media Productions',
    symbol: 'SPMP',
    price: '1.09',
    difference: <span style={{ color: 'green' }}>0.01</span>,
    last: <DynamicChart options={areaSpaLine3} series={areaSpaLine3.series} height='85' type='area' />,
  },
  {
    name: 'Stanler Bits and Bobs',
    symbol: 'SBIBO',
    price: '83.81',
    difference: <span style={{ color: 'green' }}>0.13</span>,
    last: <DynamicChart options={areaSpaLine4} series={areaSpaLine4.series} height='85' type='area' />,
  },
  {
    name: 'Widget Emporium',
    symbol: 'WDEMP',
    price: '3.50',
    difference: <span style={{ color: 'red' }}>-0.01</span>,
    last: <DynamicChart options={areaSpaLine5} series={areaSpaLine5.series} height='85' type='area' />,
  },
];

interface stockResultTableData {
  name: string;
  symbol: string;
  price: string;
  difference: any;
  last: any;
}

export const StockResultTableColumns = [
  {
    name: 'Name',
    selector: (row: stockResultTableData) => row['name'],
    sortable: true,
    center: false,
  },
  {
    name: 'Symbol',
    selector: (row: stockResultTableData) => `${row.symbol}`,
    sortable: true,
    center: true,
  },
  {
    name: 'Price',
    selector: (row: stockResultTableData) => `${row.price}`,
    sortable: true,
    center: true,
  },
  {
    name: 'Difference',
    cell: (row: stockResultTableData) => row.difference,
    sortable: true,
    center: true,
  },
  {
    name: 'Last',
    cell: (row: stockResultTableData) => row.last,
    sortable: true,
    center: true,
  },
];

export const RowCreateCallbackSubHeading = [
  {
    spanData: [
      {
        text: 'The following example shows how a callback function can be used to format a particular row at draw time. For each row that is generated for display, thecreatedRow:option function is called once and once only. It is passed the create row node which can then be modified.',
      },
    ],
  },
  {
    spanData: [{ text: "In this case a trivial example of making the 'salary' column blue and bold by adding a CSS class to the container cell if the salary is greater than $150,000. Note that columns.createdCell could also be used to create exactly the same effect." }],
  },
];

export const RowCreateCallBackTableData: rowCreateCallBackData[] = [
  {
    name: 'Angelica Ramos',
    email: 'Angelica@gmail.com',
    experience: '4 Month',
    sex: 'Female',
    contactNumber: '+91 8745963210',
    salary: 1200000,
  },
  {
    name: 'Bradley Greer',
    email: 'Bradley@gmail.com',
    experience: '6 Year',
    sex: 'Male',
    contactNumber: '+91 8794561230',
    salary: 132000,
  },
  {
    name: 'Brenden Wagner',
    email: 'Brenden@gmail.com',
    experience: '2 Year',
    sex: 'Female',
    contactNumber: '+91 6589742301',
    salary: 132000,
  },
  {
    name: 'Caesar Vance',
    email: 'Vance@yahoo.com',
    experience: '1 Year',
    sex: 'Male',
    contactNumber: '+91 8596741230',
    salary: 206850,
  },
  {
    name: 'Dai Rios',
    email: 'Rios@gmail.com',
    experience: '1 Year',
    sex: 'Male',
    contactNumber: '+91 7418529630',
    salary: 217500,
  },
  {
    name: 'Doris Wilder',
    email: 'Wilder@gmail.com',
    experience: '6 Month',
    sex: 'Male',
    contactNumber: '+91 6541239870',
    salary: 85600,
  },
  {
    name: 'Elana Robbert	',
    email: 'ElanaRob@gmail.com	',
    experience: '1 Year	',
    sex: 'Male	',
    contactNumber: '+91 9789887777',
    salary: 28000,
  },
  {
    name: 'Fiona Green',
    email: 'Fiona@yahoo.com',
    experience: '3 Month',
    sex: 'Female',
    contactNumber: '+91 6985321470',
    salary: 850000,
  },
  {
    name: 'Gavin Cortez',
    email: 'Gavin@gmail.com',
    experience: '9 Year',
    sex: 'Male',
    contactNumber: '+91 748521369',
    salary: 232500,
  },
  {
    name: 'Gavin Joyce',
    email: 'Gavin@yahoo.com',
    experience: '8 Month',
    sex: 'Male',
    contactNumber: '+91 8596741230',
    salary: 235500,
  },
  {
    name: 'Genelia Ottre	',
    email: 'Genelia@gmail.com',
    experience: '2 Days',
    sex: 'Male',
    contactNumber: '+91 8794562135',
    salary: 92575,
  },
  {
    name: 'Gloria Little',
    email: 'Gloria@yahoo.com',
    experience: '4 Year',
    sex: 'Male',
    contactNumber: '+91 9876541230',
    salary: 24120,
  },
  {
    name: 'Jenette Caldwell',
    email: 'Jenette@yahoo.com',
    experience: '2 Year',
    sex: 'Female',
    contactNumber: '+91 4569871230',
    salary: 237500,
  },
  {
    email: 'Michael@yahoo.com',
    experience: '3 Year',
    sex: 'Female',
    contactNumber: '+91 1234567891',
    salary: 357650,
  },
  {
    name: 'Michelle House',
    email: 'Michelle@gmail.com',
    experience: '1 Year',
    sex: 'Male',
    contactNumber: '+91 8745961235',
    salary: 198500,
  },
  {
    name: 'Paul Byrd',
    email: 'Paul@gmail.com',
    experience: '2 Day',
    sex: 'Male',
    contactNumber: '+91 3124567894',
    salary: 95400,
  },
  {
    name: 'Prescott Bartlett',
    email: 'Prescott@gmail.com',
    experience: '8 Year',
    sex: 'Male',
    contactNumber: '+91 4578961231',
    salary: 725000,
  },
  {
    name: 'Shou Itou',
    email: 'Shou@gmail.com',
    experience: '2 Year',
    sex: 'Female',
    contactNumber: '+91 3256897414',
    salary: 145000,
  },
  {
    name: 'Stiphen Deo',
    email: 'Stiphen@yahoo.com',
    experience: '6 Month',
    sex: 'Female',
    contactNumber: '+91 9874563210',
    salary: 163000,
  },
  {
    name: 'Suki Burks',
    email: 'Burks@gmail.com',
    experience: '3 Year',
    sex: 'Female',
    contactNumber: '+91 4785961230',
    salary: 22000,
  },
  {
    name: 'Yuri Berry',
    email: 'Berry@gmail.com',
    experience: '3 Year',
    sex: 'Female',
    contactNumber: '+91 7894561230',
    salary: 114500,
  },
];

export const RowCreateCallBackTableColumns = [
  {
    name: 'Name',
    selector: (row: rowCreateCallBackData) => `${row.name}`,
    sortable: true,
    center: false,
  },
  {
    name: 'Symbol',
    selector: (row: rowCreateCallBackData) => `${row.email}`,
    sortable: true,
    center: true,
  },
  {
    name: 'Price',
    selector: (row: rowCreateCallBackData) => `${row.experience}`,
    sortable: true,
    center: true,
  },
  {
    name: 'Sex',
    cell: (row: rowCreateCallBackData) => row.sex,
    sortable: true,
    center: true,
  },
  {
    name: 'Contact Number',
    cell: (row: rowCreateCallBackData) => row.contactNumber,
    sortable: true,
    center: true,
  },
  {
    name: 'Salary',
    cell: (row: rowCreateCallBackData) => <CustomCell value={row.salary} position={''} color={''} />,
    sortable: true,
    center: true,
  },
];

interface customCellInterFace {
  value: number;
}
const CustomCell = ({ value }: customCellInterFace) => {
  return <div className={value > 150000 ? 'highlight' : value < 40000 ? 'danger' : ''}>${value}</div>;
};

//=====================AdvanceInIt Ends======================//

export const AddRowsSubHeading = [
  {
    spanData: [
      { text: 'New rows can be added to a DataTable using the', code: 'row.add()' },
      { text: ' API method. Simply call the API function with the data for the new row (be it an array or object). Multiple rows can be added using the', code: 'rows.add()' },
      { text: ' method (note the plural). Data can likewise be updated with the ', code: 'row().data() , row().remove()' },
      { text: ' methods.' },
    ],
  },
  {
    spanData: [{ text: 'Note that in order to see the new row in the table you must call the', code: 'draw()' }, { text: ' method, which is easily done through the chaining that the DataTables API employs.' }],
  },
];

interface addRowsTable {
  column1: number;
  column2: number;
  column3: number;
  column4: number;
  column5: number;
}

export const AddRowsTableData = [
  {
    column1: 101,
    column2: 10.2,
    column3: 10.3,
    column4: 10.4,
    column5: 10.5,
  },
  {
    column1: 111,
    column2: 11.2,
    column3: 11.3,
    column4: 11.4,
    column5: 11.5,
  },
  {
    column1: 121,
    column2: 12.2,
    column3: 12.3,
    column4: 12.4,
    column5: 12.5,
  },
];

export const AddRowsTableColumns = [
  {
    name: 'Column1',
    selector: (row: addRowsTable) => row.column1,
    sortable: true,
    center: false,
  },
  {
    name: 'Column2',
    selector: (row: addRowsTable) => row.column2,
    sortable: true,
    center: true,
  },
  {
    name: 'Column3',
    selector: (row: addRowsTable) => row.column3,
    sortable: true,
    center: true,
  },
  {
    name: 'Column4',
    cell: (row: addRowsTable) => row.column4,
    sortable: true,
    center: true,
  },
  {
    name: 'Column5',
    cell: (row: addRowsTable) => row.column5,
    sortable: true,
    center: true,
  },
];

export const ChildRowsSubHeading = [{ spanData: [{ text: 'The DataTables API has a number of methods for attaching child rows to a parent row in the DataTable. This can be used to show additional information about a row, useful for cases where you wish to convey more information about a row than there is space for in the host table.' }] }];

export const RowsSelectionAndDeletionSubHeading = [
  {
    spanData: [
      { text: 'It can be useful to provide the user with the option to select rows in a DataTable. This can be done by using a click event to add / remove a class on the table rows. The', code: 'rows().data() ' },
      { text: 'method can then be used to get the data for the selected rows. In this case it is simply counting the number of selected rows, but much more complex interactions can easily be developed.' },
    ],
  },
];

export const DeleteRowData = [
  {
    name: 'Airi Satou',
    id: 1,
    job: 'Accountant',
    companyName: 'Google Inc.',
    invoiceNumber: '#TY33',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.5%1</i>,
    date: '2008/11/28',
    priority: <Badge  className='badge-light-danger'>Urgent</Badge>,
    budget: '$162.700,00',
  },
  {
    name: 'Angelica Ramos',
    id: 2,
    job: 'Chief Executive Officer (CEO)',
    companyName: 'Tata Co.',
    invoiceNumber: '#VC47',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.8%</i>,
    date: '2009/10/09',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$1.200.000,00',
  },
  {
    name: 'Bradley Greer',
    id: 3,
    job: 'Software Engineer',
    companyName: 'Tata Co.',
    invoiceNumber: '#JH41',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>9.8%</i>,
    date: '2012/10/13',
    priority: <Badge  className='badge-light-primary'>High</Badge>,
    budget: '$132.000,00',
  },
  {
    name: 'Bruno Nash',
    id: 4,
    job: 'Software Engineer',
    companyName: 'Tata Co.',
    invoiceNumber: '#UY38',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>1.4%</i>,
    date: '2011/05/03',
    priority: <Badge  className='badge-light-warning'>Medium</Badge>,
    budget: '$163.500,00',
  },
  {
    name: 'Caesar Vance',
    id: 5,
    job: 'Pre-Sales Support',
    companyName: 'New York',
    invoiceNumber: '#CV21',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.8%</i>,
    date: '2011/12/12',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$106.450,00',
  },
  {
    name: 'Cara Stevens',
    id: 6,
    job: 'Sales Assistant',
    companyName: 'New York',
    invoiceNumber: '#TY46',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.5%</i>,
    date: '2011/12/06',
    priority: <Badge  className='badge-light-primary'>High</Badge>,
    budget: '$145.600,00',
  },

  {
    name: 'Cedric Kelly',
    id: 7,
    job: 'Senior Javascript Developer',
    companyName: 'Edinburgh',
    invoiceNumber: '#UH22',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>1.4%</i>,
    date: '2012/03/29',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$433.060,00',
  },

  {
    name: 'Charde Marshall',
    id: 8,
    job: 'Regional Director',
    companyName: 'Google Co.',
    invoiceNumber: '#FV36',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>1.4%</i>,
    date: '2008/10/16',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$470.600,00',
  },

  {
    name: 'Colleen Hurst',
    id: 9,
    job: 'Javascript Developer',
    companyName: 'Google Co.',
    invoiceNumber: '#NB39',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>2.8%</i>,
    date: '2009/09/15',
    priority: <Badge  className='badge-light-warning'>Medium</Badge>,
    budget: '$205.500,00',
  },

  {
    name: 'Dai Rios',
    id: 10,
    job: 'Personnel Lead',
    companyName: 'Edinburgh',
    invoiceNumber: '#YT35',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.8%</i>,
    date: '2012/09/26',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$217.500,00',
  },

  {
    name: 'Donna Snider',
    id: 11,
    job: 'Customer Support',
    companyName: 'New York',
    invoiceNumber: '#GD27',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.5%</i>,
    date: '2011/01/25',
    priority: <Badge  className='badge-light-primary'>High</Badge>,
    budget: '$112.000,00',
  },

  {
    name: 'Doris Wilder',
    id: 12,
    job: 'Sales Assistant',
    companyName: 'Sidney',
    invoiceNumber: '#BH23',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>5.6%</i>,
    date: '2010/09/20',
    priority: <Badge  className='badge-light-primary'>High</Badge>,
    budget: '$85.600,00',
  },

  {
    name: 'Finn Camacho',
    id: 13,
    job: 'Support Engineer',
    companyName: 'Google Co.',
    invoiceNumber: '#YU47',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>1.4%</i>,
    date: '2009/07/07',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$87.500,00',
  },

  {
    name: 'Fiona Green',
    id: 14,
    job: 'Chief Operating Officer (COO)',
    companyName: 'Infosys Ltd.',
    invoiceNumber: '#GF48',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>9.8%</i>,
    date: '2010/03/11',
    priority: <Badge  className='badge-light-primary'>High</Badge>,
    budget: '$850.000,00',
  },

  {
    name: 'Garrett Winters',
    id: 15,
    job: 'Accountant',
    companyName: 'Edinburgh',
    invoiceNumber: '#FG63',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>1.4%</i>,
    date: '2011/07/25',
    priority: <Badge  className='badge-light-danger'>Urgent</Badge>,
    budget: '$170.750,00',
  },

  {
    name: 'Gavin Cortez',
    id: 16,
    job: 'Team Leader',
    companyName: 'Google Co.',
    invoiceNumber: '#SW22',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>5.6%</i>,
    date: '2008/10/26',
    priority: <Badge  className='badge-light-danger'>Urgent</Badge>,
    budget: '$235.500,00',
  },

  {
    name: 'Gavin Joyce',
    id: 17,
    job: 'Developer',
    companyName: 'Edinburgh',
    invoiceNumber: '#TH42',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>9.8%</i>,
    date: '2010/12/22',
    priority: <Badge  className='badge-light-danger'>Urgent</Badge>,
    budget: '$92.575,00',
  },
  {
    name: 'Airi Satou',
    id: 18,
    job: 'Accountant',
    companyName: 'Google Inc.',
    invoiceNumber: '#TY33',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.5%1</i>,
    date: '2008/11/28',
    priority: <Badge  className='badge-light-danger'>Urgent</Badge>,
    budget: '$162.700,00',
  },
  {
    name: 'Bruno Nash',
    id: 19,
    job: 'Software Engineer',
    companyName: 'Tata Co.',
    invoiceNumber: '#UY38',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>1.4%</i>,
    date: '2011/05/03',
    priority: <Badge  className='badge-light-warning'>Medium</Badge>,
    budget: '$163.500,00',
  },
  {
    name: 'Gavin Cortez',
    id: 20,
    job: 'Team Leader',
    companyName: 'Google Co.',
    invoiceNumber: '#SW22',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>5.6%</i>,
    date: '2008/10/26',
    priority: <Badge  className='badge-light-danger'>Urgent</Badge>,
    budget: '$235.500,00',
  },
  {
    name: 'Finn Camacho',
    id: 21,
    job: 'Support Engineer',
    companyName: 'Google Co.',
    invoiceNumber: '#YU47',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>1.4%</i>,
    date: '2009/07/07',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$87.500,00',
  },
  {
    name: 'Doris Wilder',
    id: 22,
    job: 'Sales Assistant',
    companyName: 'Sidney',
    invoiceNumber: '#BH23',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>5.6%</i>,
    date: '2010/09/20',
    priority: <Badge  className='badge-light-primary'>High</Badge>,
    budget: '$85.600,00',
  },
  {
    name: 'Airi Satou',
    id: 23,
    job: 'Accountant',
    companyName: 'Google Inc.',
    invoiceNumber: '#TY33',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.5%1</i>,
    date: '2008/11/28',
    priority: <Badge  className='badge-light-danger'>Urgent</Badge>,
    budget: '$162.700,00',
  },
  {
    name: 'Charde Marshall',
    id: 24,
    job: 'Regional Director',
    companyName: 'Google Co.',
    invoiceNumber: '#FV36',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>1.4%</i>,
    date: '2008/10/16',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$470.600,00',
  },
  {
    name: 'Airi Satou',
    id: 25,
    job: 'Accountant',
    companyName: 'Google Inc.',
    invoiceNumber: '#TY33',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.5%1</i>,
    date: '2008/11/28',
    priority: <Badge  className='badge-light-danger'>Urgent</Badge>,
    budget: '$162.700,00',
  },
  {
    name: 'Angelica Ramos',
    id: 26,
    job: 'Chief Executive Officer (CEO)',
    companyName: 'Tata Co.',
    invoiceNumber: '#VC47',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.8%</i>,
    date: '2009/10/09',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$1.200.000,00',
  },
  {
    name: 'Bradley Greer',
    id: 27,
    job: 'Software Engineer',
    companyName: 'Tata Co.',
    invoiceNumber: '#JH41',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>9.8%</i>,
    date: '2012/10/13',
    priority: <Badge  className='badge-light-primary'>High</Badge>,
    budget: '$132.000,00',
  },
  {
    name: 'Bruno Nash',
    id: 28,
    job: 'Software Engineer',
    companyName: 'Tata Co.',
    invoiceNumber: '#UY38',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>1.4%</i>,
    date: '2011/05/03',
    priority: <Badge  className='badge-light-warning'>Medium</Badge>,
    budget: '$163.500,00',
  },
  {
    name: 'Caesar Vance',
    id: 29,
    job: 'Pre-Sales Support',
    companyName: 'New York',
    invoiceNumber: '#CV21',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.8%</i>,
    date: '2011/12/12',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$106.450,00',
  },
  {
    name: 'Cara Stevens',
    id: 30,
    job: 'Sales Assistant',
    companyName: 'New York',
    invoiceNumber: '#TY46',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.5%</i>,
    date: '2011/12/06',
    priority: <Badge  className='badge-light-primary'>High</Badge>,
    budget: '$145.600,00',
  },

  {
    name: 'Cedric Kelly',
    id: 31,
    job: 'Senior Javascript Developer',
    companyName: 'Edinburgh',
    invoiceNumber: '#UH22',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>1.4%</i>,
    date: '2012/03/29',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$433.060,00',
  },

  {
    name: 'Charde Marshall',
    id: 32,
    job: 'Regional Director',
    companyName: 'Google Co.',
    invoiceNumber: '#FV36',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>1.4%</i>,
    date: '2008/10/16',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$470.600,00',
  },

  {
    name: 'Colleen Hurst',
    id: 33,
    job: 'Javascript Developer',
    companyName: 'Google Co.',
    invoiceNumber: '#NB39',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>2.8%</i>,
    date: '2009/09/15',
    priority: <Badge  className='badge-light-warning'>Medium</Badge>,
    budget: '$205.500,00',
  },

  {
    name: 'Dai Rios',
    id: 34,
    job: 'Personnel Lead',
    companyName: 'Edinburgh',
    invoiceNumber: '#YT35',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.8%</i>,
    date: '2012/09/26',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$217.500,00',
  },

  {
    name: 'Donna Snider',
    id: 35,
    job: 'Customer Support',
    companyName: 'New York',
    invoiceNumber: '#GD27',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.5%</i>,
    date: '2011/01/25',
    priority: <Badge  className='badge-light-primary'>High</Badge>,
    budget: '$112.000,00',
  },

  {
    name: 'Doris Wilder',
    id: 36,
    job: 'Sales Assistant',
    companyName: 'Sidney',
    invoiceNumber: '#BH23',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>5.6%</i>,
    date: '2010/09/20',
    priority: <Badge  className='badge-light-primary'>High</Badge>,
    budget: '$85.600,00',
  },

  {
    name: 'Finn Camacho',
    id: 37,
    job: 'Support Engineer',
    companyName: 'Google Co.',
    invoiceNumber: '#YU47',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>1.4%</i>,
    date: '2009/07/07',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$87.500,00',
  },

  {
    name: 'Fiona Green',
    id: 38,
    job: 'Chief Operating Officer (COO)',
    companyName: 'Infosys Ltd.',
    invoiceNumber: '#GF48',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>9.8%</i>,
    date: '2010/03/11',
    priority: <Badge  className='badge-light-primary'>High</Badge>,
    budget: '$850.000,00',
  },

  {
    name: 'Garrett Winters',
    id: 39,
    job: 'Accountant',
    companyName: 'Edinburgh',
    invoiceNumber: '#FG63',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>1.4%</i>,
    date: '2011/07/25',
    priority: <Badge  className='badge-light-danger'>Urgent</Badge>,
    budget: '$170.750,00',
  },

  {
    name: 'Gavin Cortez',
    id: 40,
    job: 'Team Leader',
    companyName: 'Google Co.',
    invoiceNumber: '#SW22',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>5.6%</i>,
    date: '2008/10/26',
    priority: <Badge  className='badge-light-danger'>Urgent</Badge>,
    budget: '$235.500,00',
  },

  {
    name: 'Gavin Joyce',
    id: 41,
    job: 'Developer',
    companyName: 'Edinburgh',
    invoiceNumber: '#TH42',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>9.8%</i>,
    date: '2010/12/22',
    priority: <Badge  className='badge-light-danger'>Urgent</Badge>,
    budget: '$92.575,00',
  },
  {
    name: 'Airi Satou',
    id: 42,
    job: 'Accountant',
    companyName: 'Google Inc.',
    invoiceNumber: '#TY33',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.5%1</i>,
    date: '2008/11/28',
    priority: <Badge  className='badge-light-danger'>Urgent</Badge>,
    budget: '$162.700,00',
  },
  {
    name: 'Bruno Nash',
    id: 43,
    job: 'Software Engineer',
    companyName: 'Tata Co.',
    invoiceNumber: '#UY38',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>1.4%</i>,
    date: '2011/05/03',
    priority: <Badge  className='badge-light-warning'>Medium</Badge>,
    budget: '$163.500,00',
  },
  {
    name: 'Gavin Cortez',
    id: 44,
    job: 'Team Leader',
    companyName: 'Google Co.',
    invoiceNumber: '#SW22',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>5.6%</i>,
    date: '2008/10/26',
    priority: <Badge  className='badge-light-danger'>Urgent</Badge>,
    budget: '$235.500,00',
  },
  {
    name: 'Finn Camacho',
    id: 45,
    job: 'Support Engineer',
    companyName: 'Google Co.',
    invoiceNumber: '#YU47',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>1.4%</i>,
    date: '2009/07/07',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$87.500,00',
  },
  {
    name: 'Doris Wilder',
    id: 46,
    job: 'Sales Assistant',
    companyName: 'Sidney',
    invoiceNumber: '#BH23',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>5.6%</i>,
    date: '2010/09/20',
    priority: <Badge  className='badge-light-primary'>High</Badge>,
    budget: '$85.600,00',
  },
  {
    name: 'Airi Satou',
    id: 47,
    job: 'Accountant',
    companyName: 'Google Inc.',
    invoiceNumber: '#TY33',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.5%1</i>,
    date: '2008/11/28',
    priority: <Badge  className='badge-light-danger'>Urgent</Badge>,
    budget: '$162.700,00',
  },
  {
    name: 'Charde Marshall',
    id: 48,
    job: 'Regional Director',
    companyName: 'Google Co.',
    invoiceNumber: '#FV36',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>1.4%</i>,
    date: '2008/10/16',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$470.600,00',
  },
  {
    name: 'Colleen Hurst',
    id: 49,
    job: 'Javascript Developer',
    companyName: 'Google Co.',
    invoiceNumber: '#NB39',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>2.8%</i>,
    date: '2009/09/15',
    priority: <Badge  className='badge-light-warning'>Medium</Badge>,
    budget: '$205.500,00',
  },

  {
    name: 'Dai Rios',
    id: 50,
    job: 'Personnel Lead',
    companyName: 'Edinburgh',
    invoiceNumber: '#YT35',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.8%</i>,
    date: '2012/09/26',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$217.500,00',
  },
  {
    name: 'Gavin Cortez',
    id: 51,
    job: 'Team Leader',
    companyName: 'Google Co.',
    invoiceNumber: '#SW22',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>5.6%</i>,
    date: '2008/10/26',
    priority: <Badge  className='badge-light-danger'>Urgent</Badge>,
    budget: '$235.500,00',
  },
  {
    name: 'Finn Camacho',
    id: 52,
    job: 'Support Engineer',
    companyName: 'Google Co.',
    invoiceNumber: '#YU47',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>1.4%</i>,
    date: '2009/07/07',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$87.500,00',
  },
  {
    name: 'Doris Wilder',
    id: 53,
    job: 'Sales Assistant',
    companyName: 'Sidney',
    invoiceNumber: '#BH23',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>5.6%</i>,
    date: '2010/09/20',
    priority: <Badge  className='badge-light-primary'>High</Badge>,
    budget: '$85.600,00',
  },
  {
    name: 'Airi Satou',
    id: 54,
    job: 'Accountant',
    companyName: 'Google Inc.',
    invoiceNumber: '#TY33',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.5%1</i>,
    date: '2008/11/28',
    priority: <Badge  className='badge-light-danger'>Urgent</Badge>,
    budget: '$162.700,00',
  },
  {
    name: 'Charde Marshall',
    id: 55,
    job: 'Regional Director',
    companyName: 'Google Co.',
    invoiceNumber: '#FV36',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>1.4%</i>,
    date: '2008/10/16',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$470.600,00',
  },
  {
    name: 'Colleen Hurst',
    id: 56,
    job: 'Javascript Developer',
    companyName: 'Google Co.',
    invoiceNumber: '#NB39',
    credit: <i className='icofont icofont-arrow-up me-1 text-success'>2.8%</i>,
    date: '2009/09/15',
    priority: <Badge  className='badge-light-warning'>Medium</Badge>,
    budget: '$205.500,00',
  },

  {
    name: 'Dai Rios',
    id: 57,
    job: 'Personnel Lead',
    companyName: 'Edinburgh',
    invoiceNumber: '#YT35',
    credit: <i className='icofont icofont-arrow-down me-1 text-danger'>2.8%</i>,
    date: '2012/09/26',
    priority: <Badge  className='badge-light-success'>Low</Badge>,
    budget: '$217.500,00',
  },
];
export interface deleteRowData {
  name: string;
  id: number;
  job: string;
  companyName: string;
  invoiceNumber: string;
  credit: any;
  date: string;
  priority: any;
  budget: string;
}
export const DeleteDataTableColumns = [
  {
    name: 'Employee Name',
    selector: (row: deleteRowData) => row['name'],
    sortable: true,
    center: false,
  },
  {
    name: 'Job Designation',
    selector: (row: deleteRowData) => row['job'],
    sortable: true,
    center: false,
  },
  {
    name: 'Company Name',
    selector: (row: deleteRowData) => row['companyName'],
    sortable: true,
    center: false,
  },
  {
    name: 'Credit/Debit',
    selector: (row: deleteRowData) => row['credit'],
    sortable: true,
    center: false,
  },
  {
    name: 'Date',
    selector: (row: deleteRowData) => row['date'],
    sortable: true,
    center: false,
  },
  {
    name: 'Priority',
    selector: (row: deleteRowData) => row['priority'],
    sortable: true,
    center: false,
  },
  {
    name: 'Budget',
    selector: (row: deleteRowData) => row['budget'],
    sortable: true,
    center: false,
  },
];

export const filterDataTableData = [
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/9.jpg`} alt='user image' unoptimized/>
        Airi Satou
      </>
    ),
    position: 'Accountant',
    office: 'Tokyo',
    age: 33,
    startDate: '2008/11/28',
    salary: '$162,700',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/11.png`} alt='user image' unoptimized/>
        Ashton Cox
      </>
    ),
    position: 'Chief Executive Officer (CEO)',
    office: 'London',
    age: 47,
    startDate: '2009/10/09',
    salary: '$1,200,000',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Bradley Greer
      </>
    ),
    position: 'Junior Technical Author',
    office: 'San Francisco',
    age: 66,
    startDate: '2009/01/12',
    salary: '$86,000',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Brenden Wagner
      </>
    ),
    position: 'Software Engineer',
    office: 'London',
    age: 41,
    startDate: '2012/10/13',
    salary: '$132,000',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Brielle Williamson
      </>
    ),
    position: 'Software Engineer',
    office: 'San Francisco',
    age: 28,
    startDate: '2011/06/07',
    salary: '$206,850',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Bruno Nash
      </>
    ),
    position: 'Integration Specialist',
    office: 'New York',
    age: 61,
    startDate: '2012/12/02',
    salary: '$372,000',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Caesar Vance
      </>
    ),
    position: 'Software Engineer',
    office: 'London',
    age: 38,
    startDate: '2011/05/03',
    salary: '$163,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Cara Stevens
      </>
    ),
    position: 'Pre-Sales Support',
    office: 'New York',
    age: 21,
    startDate: '2011/12/12',
    salary: '$106,450',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/3.png`} alt='user image' unoptimized/>
        Cedric Kelly
      </>
    ),
    position: 'Sales Assistant',
    office: 'New York',
    age: 46,
    startDate: '2011/12/06',
    salary: '$145,600',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Cedric Kelly
      </>
    ),
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    age: 22,
    startDate: '2012/03/29',
    salary: '$433,060',
  },

  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Charde Marshall
      </>
    ),
    position: 'Regional Director',
    office: 'San Francisco',
    age: 36,
    startDate: '2008/10/16',
    salary: '$470,600',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Colleen Hurst
      </>
    ),
    position: 'Javascript Developer',
    office: 'San Francisco',
    age: 39,
    startDate: '2009/09/15',
    salary: '$205,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Dai Rios
      </>
    ),
    position: 'Personnel Lead',
    office: 'Edinburgh',
    age: 35,
    startDate: '2012/09/26',
    salary: '$217,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Donna Snider
      </>
    ),
    position: 'Customer Support',
    office: 'New York',
    age: 27,
    startDate: '2011/01/25',
    salary: '$112,000',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Doris Wilder
      </>
    ),
    position: 'Sales Assistant',
    office: 'Sidney',
    age: 23,
    startDate: '2010/09/20',
    salary: '$85,600',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Finn Camacho
      </>
    ),
    position: 'Support Engineer',
    office: 'San Francisco',
    age: 47,
    startDate: '2009/07/07',
    salary: '$87,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Fiona Green
      </>
    ),
    position: 'Chief Operating Officer (COO)',
    office: 'San Francisco',
    age: 48,
    startDate: '2010/03/11',
    salary: '$850,000',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Garrett Winters
      </>
    ),
    position: 'Accountant',
    office: 'Tokyo',
    age: 63,
    startDate: '2011/07/25',
    salary: '$170,750',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Gavin Cortez
      </>
    ),
    position: 'Team Leader',
    office: 'San Francisco',
    age: 22,
    startDate: '2008/10/26',
    salary: '$235,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Gavin Joyce
      </>
    ),
    position: 'Developer',
    office: 'Edinburgh',
    age: 42,
    startDate: '2010/12/22',
    salary: '$92,575',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Gloria Little
      </>
    ),
    position: 'Systems Administrator',
    office: 'New York',
    age: 59,
    startDate: '2009/04/10',
    salary: '$237,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Haley Kennedy
      </>
    ),
    position: 'Senior Marketing Designer',
    office: 'London',
    age: 43,
    startDate: '2012/12/18',
    salary: '$313,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Hermione Butler
      </>
    ),
    position: 'Regional Director',
    office: 'London',
    age: 47,
    startDate: '2011/03/21',
    salary: '$356,250',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Herrod Chandler
      </>
    ),
    position: 'Sales Assistant',
    office: 'San Francisco',
    age: 59,
    startDate: '2012/08/06',
    salary: '$137,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Hope Fuentes
      </>
    ),
    position: 'Secretary',
    office: 'San Francisco',
    age: 41,
    startDate: '2010/02/12',
    salary: '$109,850',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Howard Hatfield
      </>
    ),
    position: 'Office Manager',
    office: 'San Francisco',
    age: 51,
    startDate: '2008/12/16',
    salary: '$164,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Jackson Bradshaw
      </>
    ),
    position: 'Director',
    office: 'New York',
    age: 65,
    startDate: '2008/09/26',
    salary: '$645,750',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Jena Gaines
      </>
    ),
    position: 'Office Manager',
    office: 'London',
    age: 30,
    startDate: '2008/12/19',
    salary: '$90,560',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Jenette Caldwell
      </>
    ),
    position: 'Development Lead',
    office: 'New York',
    age: 30,
    startDate: '2011/09/03',
    salary: '$345,000',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Doris Wilder
      </>
    ),
    position: 'Sales Assistant',
    office: 'Sidney',
    age: 23,
    startDate: '2010/09/20',
    salary: '$85,600',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Finn Camacho
      </>
    ),
    position: 'Support Engineer',
    office: 'San Francisco',
    age: 47,
    startDate: '2009/07/07',
    salary: '$87,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Fiona Green
      </>
    ),
    position: 'Chief Operating Officer (COO)',
    office: 'San Francisco',
    age: 48,
    startDate: '2010/03/11',
    salary: '$850,000',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Garrett Winters
      </>
    ),
    position: 'Accountant',
    office: 'Tokyo',
    age: 63,
    startDate: '2011/07/25',
    salary: '$170,750',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Gavin Cortez
      </>
    ),
    position: 'Team Leader',
    office: 'San Francisco',
    age: 22,
    startDate: '2008/10/26',
    salary: '$235,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Gavin Joyce
      </>
    ),
    position: 'Developer',
    office: 'Edinburgh',
    age: 42,
    startDate: '2010/12/22',
    salary: '$92,575',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Gloria Little
      </>
    ),
    position: 'Systems Administrator',
    office: 'New York',
    age: 59,
    startDate: '2009/04/10',
    salary: '$237,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Haley Kennedy
      </>
    ),
    position: 'Senior Marketing Designer',
    office: 'London',
    age: 43,
    startDate: '2012/12/18',
    salary: '$313,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Hermione Butler
      </>
    ),
    position: 'Regional Director',
    office: 'London',
    age: 47,
    startDate: '2011/03/21',
    salary: '$356,250',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Herrod Chandler
      </>
    ),
    position: 'Sales Assistant',
    office: 'San Francisco',
    age: 59,
    startDate: '2012/08/06',
    salary: '$137,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Hope Fuentes
      </>
    ),
    position: 'Secretary',
    office: 'San Francisco',
    age: 41,
    startDate: '2010/02/12',
    salary: '$109,850',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Howard Hatfield
      </>
    ),
    position: 'Office Manager',
    office: 'San Francisco',
    age: 51,
    startDate: '2008/12/16',
    salary: '$164,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Jackson Bradshaw
      </>
    ),
    position: 'Director',
    office: 'New York',
    age: 65,
    startDate: '2008/09/26',
    salary: '$645,750',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Jena Gaines
      </>
    ),
    position: 'Office Manager',
    office: 'London',
    age: 30,
    startDate: '2008/12/19',
    salary: '$90,560',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Jenette Caldwell
      </>
    ),
    position: 'Development Lead',
    office: 'New York',
    age: 30,
    startDate: '2011/09/03',
    salary: '$345,000',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Doris Wilder
      </>
    ),
    position: 'Sales Assistant',
    office: 'Sidney',
    age: 23,
    startDate: '2010/09/20',
    salary: '$85,600',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Finn Camacho
      </>
    ),
    position: 'Support Engineer',
    office: 'San Francisco',
    age: 47,
    startDate: '2009/07/07',
    salary: '$87,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Fiona Green
      </>
    ),
    position: 'Chief Operating Officer (COO)',
    office: 'San Francisco',
    age: 48,
    startDate: '2010/03/11',
    salary: '$850,000',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Garrett Winters
      </>
    ),
    position: 'Accountant',
    office: 'Tokyo',
    age: 63,
    startDate: '2011/07/25',
    salary: '$170,750',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Gavin Cortez
      </>
    ),
    position: 'Team Leader',
    office: 'San Francisco',
    age: 22,
    startDate: '2008/10/26',
    salary: '$235,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Gavin Joyce
      </>
    ),
    position: 'Developer',
    office: 'Edinburgh',
    age: 42,
    startDate: '2010/12/22',
    salary: '$92,575',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Tiger Nixon
      </>
    ),
    position: 'Systems Administrator',
    office: 'New York',
    age: 59,
    startDate: '2009/04/10',
    salary: '$237,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/main.jpg`} alt='user image' unoptimized/>
        Timothy Mooney
      </>
    ),
    position: 'Senior Marketing Designer',
    office: 'London',
    age: 43,
    startDate: '2012/12/18',
    salary: '$313,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/7.jpg`} alt='user image' unoptimized/>
        Unity Butler
      </>
    ),
    position: 'Regional Director',
    office: 'London',
    age: 47,
    startDate: '2011/03/21',
    salary: '$356,250',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/4.jpg`} alt='user image' unoptimized/>
        Vivian Harrell
      </>
    ),
    position: 'Sales Assistant',
    office: 'San Francisco',
    age: 59,
    startDate: '2012/08/06',
    salary: '$137,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/3.jpg`} alt='user image' unoptimized/>
        Yuri Berry
      </>
    ),
    position: 'Secretary',
    office: 'San Francisco',
    age: 41,
    startDate: '2010/02/12',
    salary: '$109,850',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/2.png`} alt='user image' unoptimized/>
        Zenaida Frank
      </>
    ),
    position: 'Office Manager',
    office: 'San Francisco',
    age: 51,
    startDate: '2008/12/16',
    salary: '$164,500',
  },
  {
    name: (
      <>
        <Image className='img-fluid table-avtar me-2' width={32} height={32} src={`${AssetsImagePath}/user/1.jpg`} alt='user image' unoptimized/>
        Zorita Serrano
      </>
    ),
    position: 'Junior Javascript Developer',
    office: 'Edinburgh',
    age: 43,
    startDate: '2013/02/01',
    salary: '$75,650',
  },
];
export interface FilterData {
  name: any;
  position: string;
  office: string;
  age: number;
  startDate: any;
  salary: string;
}
export const FilterDataTableColumns = [
  {
    name: 'Employee Name',
    selector: (row: FilterData) => row['name'],
    sortable: true,
    center: false,
  },
  {
    name: 'position',
    selector: (row: FilterData) => row['position'],
    sortable: true,
    center: false,
  },
  {
    name: 'office',
    selector: (row: FilterData) => row['office'],
    sortable: true,
    center: false,
  },
  {
    name: 'age',
    selector: (row: FilterData) => row['age'],
    sortable: true,
    center: false,
  },
  {
    name: 'Start Date',
    selector: (row: FilterData) => row['startDate'],
    sortable: true,
    center: false,
  },
  {
    name: 'salary',
    selector: (row: FilterData) => row['salary'],
    sortable: true,
    center: false,
  },
];

export const AjaxSourcedDataSubHeading = [{ spanData: [{ text: 'DataTables has the ability to read data from virtually any JSON data source that can be obtained by Ajax. This can be done, in its most simple form, by setting the ajax:option option to the address of the JSON data source.' }] }];

export const HtmlSourcedSubHeading = [{ spanData: [{ text: 'The foundation for DataTables is progressive enhancement, so it is very adept at reading table information directly from the DOM. This example shows how easy it is to add searching, ordering and paging to your HTML table by simply running DataTables on it.' }] }];

export const JavaScriptSourcedDataSubHeading = [
  {
    spanData: [
      { text: 'At times you will wish to be able to create a table from dynamic information passed directly to DataTables, rather than having it read from the document. This is achieved using the ', code: 'data' },
      { text: ' option in the initialisation object, passing in an array of data to be used (like all other DataTables handled data, this can be arrays or objects using the', code: 'columns.data' },
      { text: 'option' },
    ],
  },
  { spanData: [{ text: 'A', code: 'table' }, { text: 'must be available on the page for DataTables to use. This examples shows an empty table element being initialising as a DataTable with a set of data from a Javascript array. The columns in the table are dynamically created based on the ', code: 'columns.title' }, { text: 'configuration option.' }] },
];

export const ServerSideProcessingSubHeading = [
  {
    spanData: [
      {
        text: "There are many ways to get your data into DataTables, and if you are working with seriously large databases, you might want to consider using the server-side options that DataTables provides. With server-side processing enabled, all paging, searching, ordering actions that DataTables performs are handed off to a server where an SQL engine (or similar) can perform these actions on the large data set (after all, that's what the database engine is designed for!). As such, each draw of the table will result in a new Ajax request being made to get the required data.",
      },
    ],
  },
  { spanData: [{ text: 'Server-side processing is enabled by setting the', code: 'serverSide:option' }, { text: ' option to ', code: 'true' }, { text: 'and providing an Ajax data source through the ', code: 'ajax:option' }, { text: 'option' }] },
];
interface htmlColumnsInterface {
  name: string;
  position: string;
  salary: string;
  office: string;
  email: any;
  color: string;
  badge: string;
  id: number;
}
interface ajaxSourcedColumnsInterface {
  name: string;
  position: string;
  office: string;
  date: string;
  extends: string;
  salary: string;
}
interface serverSideProcessingColumnsInterface {
  name: string;
  position: string;
  office: string;
  lastName: string;
  date: string;
  salary: string;
}

interface customCellInterFace {
  position: string;
  color: string;
}

export const htmlColumns = [
  {
    name: 'Name',
    selector: (row: htmlColumnsInterface) => row.name,
    sortable: true,
    center: false,
  },
  {
    name: 'Position',
    selector: (row: htmlColumnsInterface) => row.position,
    sortable: true,
    center: false,
  },
  {
    name: 'Salary',
    selector: (row: htmlColumnsInterface) => row.salary,
    sortable: true,
    center: false,
  },
  {
    name: 'Office',
    selector: (row: htmlColumnsInterface) => row.office,
    sortable: true,
    center: false,
  },

  {
    name: 'Status',
    selector: (row: htmlColumnsInterface) => <CustomBadge color={row.color} position={row.badge} value={0} />,
    sortable: true,
    center: false,
  },
  {
    name: 'Email',
    selector: (row: htmlColumnsInterface) => row.email,
    sortable: true,
    center: false,
  },
];

export const ajaxSourcedColumns = [
  {
    name: 'Name',
    selector: (row: ajaxSourcedColumnsInterface) => row.name,
    sortable: true,
    center: false,
  },
  {
    name: 'Position',
    selector: (row: ajaxSourcedColumnsInterface) => row.position,
    sortable: true,
    center: false,
  },
  {
    name: 'Office',
    selector: (row: ajaxSourcedColumnsInterface) => row.office,
    sortable: true,
    center: false,
  },
  {
    name: 'Extn.',
    selector: (row: ajaxSourcedColumnsInterface) => row.extends,
    sortable: true,
    center: false,
  },
  {
    name: 'Start Date',
    selector: (row: ajaxSourcedColumnsInterface) => row.date,
    sortable: true,
    center: false,
  },
  {
    name: 'Salary',
    selector: (row: ajaxSourcedColumnsInterface) => row.salary,
    sortable: true,
    center: false,
  },
];

export const ajaxSourcedData = [
  {
    name: 'Angelica Ramos',
    position: 'Chief Executive Officer (CEO)',
    office: 'London',
    extends: '5797',
    date: '2009/10/09',
    salary: '$1,200,000',
  },
  {
    name: 'Archana Desai',
    position: 'Accountant',
    office: 'Tokyo',
    extends: '5407',
    date: '2008/11/28',
    salary: '$162,700',
  },
  {
    name: 'Ashton Cox',
    position: 'Junior Technical Author',
    office: 'San Francisco',
    extends: '1562',
    date: '2009/01/12',
    salary: '$86,000',
  },
  {
    name: 'Bradley Greer',
    position: 'Software Engineer',
    office: 'London',
    extends: '2558',
    date: '2012/10/13',
    salary: '$132,000',
  },
  {
    name: 'Brenden Wagner',
    position: 'Software Engineer',
    office: 'San Francisco',
    extends: '1314',
    date: '2011/06/07',
    salary: '$206,850',
  },
  {
    name: 'Bruno Nash',
    position: 'Software Engineer',
    office: 'London',
    extends: '6222',
    date: '2011/05/03',
    salary: '$163,500',
  },
  {
    name: 'Caesar Vance',
    position: 'Pre-Sales Support',
    office: 'New York',
    extends: '8330',
    date: '2011/12/12',
    salary: '$106,450',
  },
  {
    name: 'Cara Stevens',
    position: 'Sales Assistant',
    office: 'New York',
    extends: '3990',
    date: '2011/12/06',
    salary: '$145,600',
  },
  {
    name: 'Cedric Kelly',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    extends: '6224',
    date: '2012/03/29',
    salary: '$433,060',
  },
  {
    name: 'Charde Marshall',
    position: 'Regional Director',
    office: 'San Francisco',
    extends: '6741',
    date: '2008/10/16',
    salary: '$470,600',
  },
  {
    name: 'Dai Rios',
    position: 'Personnel Lead',
    office: 'Edinburgh',
    extends: '2290',
    date: '2012/09/26',
    salary: '$217,500',
  },
  {
    name: 'Doris Wilder',
    position: 'Sales Assistant',
    office: 'Sidney',
    extends: '3023',
    date: '2010/09/20',
    salary: '$85,600',
  },
  {
    name: 'Fiona Green',
    position: 'Chief Executive Officer (CEO)',
    office: 'San Francisco',
    extends: '2947',
    date: '2010/03/11',
    salary: '$850,000',
  },
  {
    name: 'Garrett Winters',
    position: 'Accountant',
    office: 'Tokyo',
    extends: '8422',
    date: '2011/07/25',
    salary: '$170,750',
  },
  {
    name: 'Gavin Cortez',
    position: 'Team Leader',
    office: 'San Francisco',
    extends: '2860',
    date: '2008/10/26',
    salary: '$235,500',
  },
  {
    name: 'Gavin Joyce',
    position: 'Developer',
    office: 'Edinburgh',
    extends: '8822',
    date: '2010/12/22',
    salary: '$92,575',
  },
  {
    name: 'Gloria Little',
    position: 'Systems Administrator',
    office: 'New York',
    extends: '1721',
    date: '2009/04/10',
    salary: '$237,500',
  },
  {
    name: 'Haley Kennedy',
    position: 'Senior Marketing Designer',
    office: 'London',
    extends: '3597',
    date: '2012/12/18',
    salary: '$313,500',
  },
  {
    name: 'Herrod Chandler',
    position: 'Sales Assistant',
    office: 'San Francisco',
    extends: '9608',
    date: '2012/08/06',
    salary: '$137,500',
  },
  {
    name: 'Jena Gaines',
    position: 'Office Manager',
    office: 'London',
    extends: '3814',
    date: '2008/12/19',
    salary: '$90,560',
  },
  {
    name: 'Gloria Little',
    position: 'Systems Administrator',
    office: 'New York',
    extends: '1721',
    date: '2009/04/10',
    salary: '$237,500',
  },
  {
    name: 'Haley Kennedy',
    position: 'Senior Marketing Designer',
    office: 'London',
    extends: '3597',
    date: '2012/12/18',
    salary: '$313,500',
  },
  {
    name: 'Hermione Butler',
    position: 'Regional Director',
    office: 'London',
    extends: '1016',
    date: '2011/03/21',
    salary: '$356,250',
  },
  {
    name: 'Herrod Chandler',
    position: 'Sales Assistant',
    office: 'San Francisco',
    extends: '9608',
    date: '2012/08/06',
    salary: '$137,500',
  },

  {
    name: 'Hope Fuentes',
    position: 'Secretary',
    office: 'San Francisco',
    extends: '6318',
    date: '2010/02/12',
    salary: '$109,850',
  },
  {
    name: 'Howard Hatfield',
    position: 'Office Manager',
    office: 'San Francisco',
    extends: '7031',
    date: '2008/12/16',
    salary: '$164,500',
  },
  {
    name: 'Jackson Bradshaw',
    position: 'Director',
    office: 'New York',
    extends: '1042',
    date: '2008/09/26',
    salary: '$645,750',
  },
  {
    name: 'Jena Gaines',
    position: 'Office Manager',
    office: 'London',
    extends: '3814',
    date: '2008/12/19',
    salary: '$90,560',
  },
  {
    name: 'Jenette Caldwell',
    position: 'Development Lead',
    office: 'New York',
    extends: '1937',
    date: '2011/09/03',
    salary: '$345,000',
  },
  {
    name: 'Jennifer Acosta',
    position: 'Junior Javascript Developer',
    office: 'Edinburgh',
    extends: '3431',
    date: '2013/02/01',
    salary: '$75,650',
  },
  {
    name: 'Bruno Nash',
    position: 'Software Engineer',
    office: 'London',
    extends: '6222',
    date: '2011/05/03',
    salary: '$163,500',
  },
  {
    name: 'Caesar Vance',
    position: 'Pre-Sales Support',
    office: 'New York',
    extends: '8330',
    date: '2011/12/12',
    salary: '$106,450',
  },
  {
    name: 'Cara Stevens',
    position: 'Sales Assistant',
    office: 'New York',
    extends: '3990',
    date: '2011/12/06',
    salary: '$145,600',
  },
  {
    name: 'Cedric Kelly',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    extends: '6224',
    date: '2012/03/29',
    salary: '$433,060',
  },
  {
    name: 'Charde Marshall',
    position: 'Regional Director',
    office: 'San Francisco',
    extends: '6741',
    date: '2008/10/16',
    salary: '$470,600',
  },
  {
    name: 'Archana Desai',
    position: 'Accountant',
    office: 'Tokyo',
    extends: '5407',
    date: '2008/11/28',
    salary: '$162,700',
  },
  {
    name: 'Ashton Cox',
    position: 'Junior Technical Author',
    office: 'San Francisco',
    extends: '1562',
    date: '2009/01/12',
    salary: '$86,000',
  },
  {
    name: 'Bradley Greer',
    position: 'Software Engineer',
    office: 'London',
    extends: '2558',
    date: '2012/10/13',
    salary: '$132,000',
  },
  {
    name: 'Brenden Wagner',
    position: 'Software Engineer',
    office: 'San Francisco',
    extends: '1314',
    date: '2011/06/07',
    salary: '$206,850',
  },
  {
    name: 'Bruno Nash',
    position: 'Software Engineer',
    office: 'London',
    extends: '6222',
    date: '2011/05/03',
    salary: '$163,500',
  },
  {
    name: 'Herrod Chandler',
    position: 'Sales Assistant',
    office: 'San Francisco',
    extends: '9608',
    date: '2012/08/06',
    salary: '$137,500',
  },
  {
    name: 'Jena Gaines',
    position: 'Office Manager',
    office: 'London',
    extends: '3814',
    date: '2008/12/19',
    salary: '$90,560',
  },
  {
    name: 'Gloria Little',
    position: 'Systems Administrator',
    office: 'New York',
    extends: '1721',
    date: '2009/04/10',
    salary: '$237,500',
  },
  {
    name: 'Haley Kennedy',
    position: 'Senior Marketing Designer',
    office: 'London',
    extends: '3597',
    date: '2012/12/18',
    salary: '$313,500',
  },
  {
    name: 'Hermione Butler',
    position: 'Regional Director',
    office: 'London',
    extends: '1016',
    date: '2011/03/21',
    salary: '$356,250',
  },
  {
    name: 'Cedric Kelly',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    extends: '6224',
    date: '2012/03/29',
    salary: '$433,060',
  },
  {
    name: 'Charde Marshall',
    position: 'Regional Director',
    office: 'San Francisco',
    extends: '6741',
    date: '2008/10/16',
    salary: '$470,600',
  },
  {
    name: 'Dai Rios',
    position: 'Personnel Lead',
    office: 'Edinburgh',
    extends: '2290',
    date: '2012/09/26',
    salary: '$217,500',
  },
  {
    name: 'Doris Wilder',
    position: 'Sales Assistant',
    office: 'Sidney',
    extends: '3023',
    date: '2010/09/20',
    salary: '$85,600',
  },
  {
    name: 'Fiona Green',
    position: 'Chief Executive Officer (CEO)',
    office: 'San Francisco',
    extends: '2947',
    date: '2010/03/11',
    salary: '$850,000',
  },
  {
    name: 'Jennifer Acosta',
    position: 'Junior Javascript Developer',
    office: 'Edinburgh',
    extends: '3431',
    date: '2013/02/01',
    salary: '$75,650',
  },
  {
    name: 'Bruno Nash',
    position: 'Software Engineer',
    office: 'London',
    extends: '6222',
    date: '2011/05/03',
    salary: '$163,500',
  },
  {
    name: 'Caesar Vance',
    position: 'Pre-Sales Support',
    office: 'New York',
    extends: '8330',
    date: '2011/12/12',
    salary: '$106,450',
  },
  {
    name: 'Cara Stevens',
    position: 'Sales Assistant',
    office: 'New York',
    extends: '3990',
    date: '2011/12/06',
    salary: '$145,600',
  },
  {
    name: 'Cedric Kelly',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    extends: '6224',
    date: '2012/03/29',
    salary: '$433,060',
  },
  {
    name: 'Charde Marshall',
    position: 'Regional Director',
    office: 'San Francisco',
    extends: '6741',
    date: '2008/10/16',
    salary: '$470,600',
  },
  {
    name: 'Archana Desai',
    position: 'Accountant',
    office: 'Tokyo',
    extends: '5407',
    date: '2008/11/28',
    salary: '$162,700',
  },
];

export const htmlColumnsTableData = [
  {
    id: 1,
    name: 'Airi Satou',
    position: 'Accountant',
    office: 'Tokyo',
    badge: 'hired',
    email: 't.nixon@datatables.net',
    color: 'success',
    salary: '$162,700',
  },
  {
    id: 2,
    name: 'Ashton Cox',
    position: 'Junior Technical Author',
    office: 'San Francisco',
    badge: 'hired',
    color: 'warning',
    email: 'a.cox@datatables.net',
    salary: '$86,000',
  },
  {
    id: 3,

    name: 'Brielle Williamson',
    position: 'Integration Specialist',
    office: 'New York',
    badge: 'Pending',
    color: 'danger',
    email: 'b.williamson@datatables.net',
    salary: '$372,000',
  },
  {
    id: 4,

    name: 'Cedric Kelly',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    badge: 'in process',
    color: 'warning',
    email: 'c.kelly@datatables.net',
    salary: '$433,060',
  },
  {
    id: 5,

    name: 'Charde Marshall',
    position: 'Regional Director',
    office: 'San Francisco',
    badge: 'in process',
    color: 'warning',
    email: 'c.marshall@datatables.net',
    salary: '$470,600',
  },
  {
    id: 6,

    name: 'Colleen Hurst',
    position: 'Javascript Developer',
    office: 'San Francisco',
    badge: 'Pending',
    color: 'danger',
    email: 'c.hurst@datatables.net',
    salary: '$205,500',
  },
  {
    id: 7,

    name: 'Donna Snider',
    position: 'Customer Support',
    office: 'New York',
    badge: 'hired',
    color: 'success',
    email: 'd.snider@datatables.net',
    salary: '$112,000',
  },
  {
    id: 8,

    name: 'Garrett Winters',
    position: 'Accountant',
    office: 'Tokyo',
    badge: 'Pending',
    color: 'danger',
    email: 'g.winters@datatables.net',
    salary: '$170,750',
  },
  {
    id: 9,

    name: 'Herrod Chandler',
    position: 'Sales Assistant',
    office: 'San Francisco',
    badge: 'in process',
    color: 'warning',
    email: 'h.chandler@datatables.net',
    salary: '$137,500',
  },
  {
    id: 10,

    name: 'Jena Gaines',
    position: 'Office Manager',
    office: 'London',
    badge: 'hired',
    color: 'success',
    email: 'j.gaines@datatables.net',
    salary: '$90,560',
  },
  {
    id: 11,

    name: 'Quinn Flynn',
    position: 'Support Lead',
    office: 'Edinburgh',
    badge: 'in process',
    color: 'warning',
    email: 'q.flynn@datatables.net',
    salary: '$342,000',
  },
  {
    id: 12,

    name: 'Rhona Davidson',
    position: 'Integration Specialist',
    office: 'Tokyo',
    badge: 'hired',
    color: 'success',
    email: 'r.davidson@datatables.net',
    salary: '$327,900',
  },
  {
    id: 13,

    name: 'Sonya Frost',
    position: 'Software Engineer',
    office: 'Edinburgh',
    badge: 'warning',
    color: 'in process',
    email: 's.frost@datatables.net',
    salary: '$103,600',
  },
  {
    id: 14,

    name: 'Tiger Nixon',
    position: 'System Architect',
    office: 'Edinburgh',
    badge: 'hired',
    color: 'success',
    email: 'j.gaines@datatables.net',
    salary: '$320,800',
  },
  {
    id: 15,

    name: 'Airi Satou',
    position: 'Accountant',
    office: 'Tokyo',
    badge: 'hired',
    email: 't.nixon@datatables.net',
    color: 'success',
    salary: '$162,700',
  },
  {
    id: 16,

    name: 'Ashton Cox',
    position: 'Junior Technical Author',
    office: 'San Francisco',
    badge: 'hired',
    color: 'warning',
    email: 'a.cox@datatables.net',
    salary: '$86,000',
  },
  {
    id: 17,

    name: 'Brielle Williamson',
    position: 'Integration Specialist',
    office: 'New York',
    badge: 'Pending',
    color: 'danger',
    email: 'b.williamson@datatables.net',
    salary: '$372,000',
  },
  {
    id: 18,

    name: 'Cedric Kelly',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    badge: 'in process',
    color: 'warning',
    email: 'c.kelly@datatables.net',
    salary: '$433,060',
  },
  {
    id: 19,

    name: 'Charde Marshall',
    position: 'Regional Director',
    office: 'San Francisco',
    badge: 'in process',
    color: 'warning',
    email: 'c.marshall@datatables.net',
    salary: '$470,600',
  },
  {
    id: 20,

    name: 'Colleen Hurst',
    position: 'Javascript Developer',
    office: 'San Francisco',
    badge: 'Pending',
    color: 'danger',
    email: 'c.hurst@datatables.net',
    salary: '$205,500',
  },
  {
    id: 21,

    name: 'Donna Snider',
    position: 'Customer Support',
    office: 'New York',
    badge: 'hired',
    color: 'success',
    email: 'd.snider@datatables.net',
    salary: '$112,000',
  },
  {
    id: 22,

    name: 'Garrett Winters',
    position: 'Accountant',
    office: 'Tokyo',
    badge: 'Pending',
    color: 'danger',
    email: 'g.winters@datatables.net',
    salary: '$170,750',
  },
  {
    id: 23,

    name: 'Herrod Chandler',
    position: 'Sales Assistant',
    office: 'San Francisco',
    badge: 'in process',
    color: 'warning',
    email: 'h.chandler@datatables.net',
    salary: '$137,500',
  },
  {
    id: 24,

    name: 'Jena Gaines',
    position: 'Office Manager',
    office: 'London',
    badge: 'hired',
    color: 'success',
    email: 'j.gaines@datatables.net',
    salary: '$90,560',
  },
  {
    id: 25,

    name: 'Quinn Flynn',
    position: 'Support Lead',
    office: 'Edinburgh',
    badge: 'in process',
    color: 'warning',
    email: 'q.flynn@datatables.net',
    salary: '$342,000',
  },
  {
    id: 26,

    name: 'Rhona Davidson',
    position: 'Integration Specialist',
    office: 'Tokyo',
    badge: 'hired',
    color: 'success',
    email: 'r.davidson@datatables.net',
    salary: '$327,900',
  },
  {
    id: 27,

    name: 'Sonya Frost',
    position: 'Software Engineer',
    office: 'Edinburgh',
    badge: 'warning',
    color: 'in process',
    email: 's.frost@datatables.net',
    salary: '$103,600',
  },
  {
    id: 28,

    name: 'Tiger Nixon',
    position: 'System Architect',
    office: 'Edinburgh',
    badge: 'hired',
    color: 'success',
    email: 'j.gaines@datatables.net',
    salary: '$320,800',
  },
  {
    id: 29,

    name: 'Donna Snider',
    position: 'Customer Support',
    office: 'New York',
    badge: 'hired',
    color: 'success',
    email: 'd.snider@datatables.net',
    salary: '$112,000',
  },
  {
    id: 30,

    name: 'Garrett Winters',
    position: 'Accountant',
    office: 'Tokyo',
    badge: 'Pending',
    color: 'danger',
    email: 'g.winters@datatables.net',
    salary: '$170,750',
  },
  {
    id: 31,

    name: 'Herrod Chandler',
    position: 'Sales Assistant',
    office: 'San Francisco',
    badge: 'in process',
    color: 'warning',
    email: 'h.chandler@datatables.net',
    salary: '$137,500',
  },
  {
    id: 32,

    name: 'Jena Gaines',
    position: 'Office Manager',
    office: 'London',
    badge: 'hired',
    color: 'success',
    email: 'j.gaines@datatables.net',
    salary: '$90,560',
  },
  {
    id: 33,

    name: 'Quinn Flynn',
    position: 'Support Lead',
    office: 'Edinburgh',
    badge: 'in process',
    color: 'warning',
    email: 'q.flynn@datatables.net',
    salary: '$342,000',
  },
  {
    id: 34,

    name: 'Rhona Davidson',
    position: 'Integration Specialist',
    office: 'Tokyo',
    badge: 'hired',
    color: 'success',
    email: 'r.davidson@datatables.net',
    salary: '$327,900',
  },
  {
    id: 35,

    name: 'Sonya Frost',
    position: 'Software Engineer',
    office: 'Edinburgh',
    badge: 'warning',
    color: 'in process',
    email: 's.frost@datatables.net',
    salary: '$103,600',
  },
  {
    id: 36,

    name: 'Tiger Nixon',
    position: 'System Architect',
    office: 'Edinburgh',
    badge: 'hired',
    color: 'success',
    email: 'j.gaines@datatables.net',
    salary: '$320,800',
  },
  {
    id: 37,

    name: 'Airi Satou',
    position: 'Accountant',
    office: 'Tokyo',
    badge: 'hired',
    email: 't.nixon@datatables.net',
    color: 'success',
    salary: '$162,700',
  },
  {
    id: 38,

    name: 'Ashton Cox',
    position: 'Junior Technical Author',
    office: 'San Francisco',
    badge: 'hired',
    color: 'warning',
    email: 'a.cox@datatables.net',
    salary: '$86,000',
  },
  {
    id: 39,

    name: 'Brielle Williamson',
    position: 'Integration Specialist',
    office: 'New York',
    badge: 'Pending',
    color: 'danger',
    email: 'b.williamson@datatables.net',
    salary: '$372,000',
  },
  {
    id: 40,

    name: 'Cedric Kelly',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    badge: 'in process',
    color: 'warning',
    email: 'c.kelly@datatables.net',
    salary: '$433,060',
  },
  {
    id: 41,

    name: 'Jena Gaines',
    position: 'Office Manager',
    office: 'London',
    badge: 'hired',
    color: 'success',
    email: 'j.gaines@datatables.net',
    salary: '$90,560',
  },
  {
    id: 42,

    name: 'Quinn Flynn',
    position: 'Support Lead',
    office: 'Edinburgh',
    badge: 'in process',
    color: 'warning',
    email: 'q.flynn@datatables.net',
    salary: '$342,000',
  },
  {
    id: 43,

    name: 'Rhona Davidson',
    position: 'Integration Specialist',
    office: 'Tokyo',
    badge: 'hired',
    color: 'success',
    email: 'r.davidson@datatables.net',
    salary: '$327,900',
  },
  {
    id: 44,

    name: 'Sonya Frost',
    position: 'Software Engineer',
    office: 'Edinburgh',
    badge: 'warning',
    color: 'in process',
    email: 's.frost@datatables.net',
    salary: '$103,600',
  },
  {
    id: 45,

    name: 'Tiger Nixon',
    position: 'System Architect',
    office: 'Edinburgh',
    badge: 'hired',
    color: 'success',
    email: 'j.gaines@datatables.net',
    salary: '$320,800',
  },
  {
    id: 46,

    name: 'Donna Snider',
    position: 'Customer Support',
    office: 'New York',
    badge: 'hired',
    color: 'success',
    email: 'd.snider@datatables.net',
    salary: '$112,000',
  },
  {
    id: 47,

    name: 'Garrett Winters',
    position: 'Accountant',
    office: 'Tokyo',
    badge: 'Pending',
    color: 'danger',
    email: 'g.winters@datatables.net',
    salary: '$170,750',
  },
  {
    id: 48,

    name: 'Herrod Chandler',
    position: 'Sales Assistant',
    office: 'San Francisco',
    badge: 'in process',
    color: 'warning',
    email: 'h.chandler@datatables.net',
    salary: '$137,500',
  },
  {
    id: 49,

    name: 'Jena Gaines',
    position: 'Office Manager',
    office: 'London',
    badge: 'hired',
    color: 'success',
    email: 'j.gaines@datatables.net',
    salary: '$90,560',
  },
  {
    id: 50,

    name: 'Quinn Flynn',
    position: 'Support Lead',
    office: 'Edinburgh',
    badge: 'in process',
    color: 'warning',
    email: 'q.flynn@datatables.net',
    salary: '$342,000',
  },
  {
    id: 51,

    name: 'Airi Satou',
    position: 'Accountant',
    office: 'Tokyo',
    badge: 'hired',
    email: 't.nixon@datatables.net',
    color: 'success',
    salary: '$162,700',
  },
  {
    id: 52,

    name: 'Ashton Cox',
    position: 'Junior Technical Author',
    office: 'San Francisco',
    badge: 'hired',
    color: 'warning',
    email: 'a.cox@datatables.net',
    salary: '$86,000',
  },
  {
    id: 53,

    name: 'Brielle Williamson',
    position: 'Integration Specialist',
    office: 'New York',
    badge: 'Pending',
    color: 'danger',
    email: 'b.williamson@datatables.net',
    salary: '$372,000',
  },
  {
    id: 54,

    name: 'Cedric Kelly',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    badge: 'in process',
    color: 'warning',
    email: 'c.kelly@datatables.net',
    salary: '$433,060',
  },
  {
    id: 55,

    name: 'Charde Marshall',
    position: 'Regional Director',
    office: 'San Francisco',
    badge: 'in process',
    color: 'warning',
    email: 'c.marshall@datatables.net',
    salary: '$470,600',
  },
  {
    id: 56,

    name: 'Colleen Hurst',
    position: 'Javascript Developer',
    office: 'San Francisco',
    badge: 'Pending',
    color: 'danger',
    email: 'c.hurst@datatables.net',
    salary: '$205,500',
  },
  {
    id: 57,

    name: 'Donna Snider',
    position: 'Customer Support',
    office: 'New York',
    badge: 'hired',
    color: 'success',
    email: 'd.snider@datatables.net',
    salary: '$112,000',
  },
];

export const javascriptSourcedData = [
  {
    name: 'Angelica Ramos',
    position: 'Chief Executive Officer (CEO)',
    office: 'London',
    extends: '5797',
    date: '2009/10/09',
    salary: '$1,200,000',
  },
  {
    name: 'Archana Desai',
    position: 'Accountant',
    office: 'Tokyo',
    extends: '5407',
    date: '2008/11/28',
    salary: '$162,700',
  },
  {
    name: 'Ashton Cox',
    position: 'Junior Technical Author',
    office: 'San Francisco',
    extends: '1562',
    date: '2009/01/12',
    salary: '$86,000',
  },
  {
    name: 'Bradley Greer',
    position: 'Software Engineer',
    office: 'London',
    extends: '2558',
    date: '2012/10/13',
    salary: '$132,000',
  },
  {
    name: 'Brenden Wagner',
    position: 'Software Engineer',
    office: 'San Francisco',
    extends: '1314',
    date: '2011/06/07',
    salary: '$206,850',
  },
  {
    name: 'Bruno Nash',
    position: 'Software Engineer',
    office: 'London',
    extends: '6222',
    date: '2011/05/03',
    salary: '$163,500',
  },
  {
    name: 'Caesar Vance',
    position: 'Pre-Sales Support',
    office: 'New York',
    extends: '8330',
    date: '2011/12/12',
    salary: '$106,450',
  },
  {
    name: 'Cara Stevens',
    position: 'Sales Assistant',
    office: 'New York',
    extends: '3990',
    date: '2011/12/06',
    salary: '$145,600',
  },
  {
    name: 'Cedric Kelly',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    extends: '6224',
    date: '2012/03/29',
    salary: '$433,060',
  },
  {
    name: 'Charde Marshall',
    position: 'Regional Director',
    office: 'San Francisco',
    extends: '6741',
    date: '2008/10/16',
    salary: '$470,600',
  },
  {
    name: 'Dai Rios',
    position: 'Personnel Lead',
    office: 'Edinburgh',
    extends: '2290',
    date: '2012/09/26',
    salary: '$217,500',
  },
  {
    name: 'Doris Wilder',
    position: 'Sales Assistant',
    office: 'Sidney',
    extends: '3023',
    date: '2010/09/20',
    salary: '$85,600',
  },
  {
    name: 'Fiona Green',
    position: 'Chief Executive Officer (CEO)',
    office: 'San Francisco',
    extends: '2947',
    date: '2010/03/11',
    salary: '$850,000',
  },
  {
    name: 'Garrett Winters',
    position: 'Accountant',
    office: 'Tokyo',
    extends: '8422',
    date: '2011/07/25',
    salary: '$170,750',
  },
  {
    name: 'Gavin Cortez',
    position: 'Team Leader',
    office: 'San Francisco',
    extends: '2860',
    date: '2008/10/26',
    salary: '$235,500',
  },
  {
    name: 'Gavin Joyce',
    position: 'Developer',
    office: 'Edinburgh',
    extends: '8822',
    date: '2010/12/22',
    salary: '$92,575',
  },
  {
    name: 'Gloria Little',
    position: 'Systems Administrator',
    office: 'New York',
    extends: '1721',
    date: '2009/04/10',
    salary: '$237,500',
  },
  {
    name: 'Haley Kennedy',
    position: 'Senior Marketing Designer',
    office: 'London',
    extends: '3597',
    date: '2012/12/18',
    salary: '$313,500',
  },
  {
    name: 'Herrod Chandler',
    position: 'Sales Assistant',
    office: 'San Francisco',
    extends: '9608',
    date: '2012/08/06',
    salary: '$137,500',
  },
  {
    name: 'Jena Gaines',
    position: 'Office Manager',
    office: 'London',
    extends: '3814',
    date: '2008/12/19',
    salary: '$90,560',
  },
  {
    name: 'Gloria Little',
    position: 'Systems Administrator',
    office: 'New York',
    extends: '1721',
    date: '2009/04/10',
    salary: '$237,500',
  },
  {
    name: 'Haley Kennedy',
    position: 'Senior Marketing Designer',
    office: 'London',
    extends: '3597',
    date: '2012/12/18',
    salary: '$313,500',
  },
  {
    name: 'Hermione Butler',
    position: 'Regional Director',
    office: 'London',
    extends: '1016',
    date: '2011/03/21',
    salary: '$356,250',
  },
  {
    name: 'Herrod Chandler',
    position: 'Sales Assistant',
    office: 'San Francisco',
    extends: '9608',
    date: '2012/08/06',
    salary: '$137,500',
  },

  {
    name: 'Hope Fuentes',
    position: 'Secretary',
    office: 'San Francisco',
    extends: '6318',
    date: '2010/02/12',
    salary: '$109,850',
  },
  {
    name: 'Howard Hatfield',
    position: 'Office Manager',
    office: 'San Francisco',
    extends: '7031',
    date: '2008/12/16',
    salary: '$164,500',
  },
  {
    name: 'Jackson Bradshaw',
    position: 'Director',
    office: 'New York',
    extends: '1042',
    date: '2008/09/26',
    salary: '$645,750',
  },
  {
    name: 'Jena Gaines',
    position: 'Office Manager',
    office: 'London',
    extends: '3814',
    date: '2008/12/19',
    salary: '$90,560',
  },
  {
    name: 'Jenette Caldwell',
    position: 'Development Lead',
    office: 'New York',
    extends: '1937',
    date: '2011/09/03',
    salary: '$345,000',
  },
  {
    name: 'Jennifer Acosta',
    position: 'Junior Javascript Developer',
    office: 'Edinburgh',
    extends: '3431',
    date: '2013/02/01',
    salary: '$75,650',
  },
  {
    name: 'Bruno Nash',
    position: 'Software Engineer',
    office: 'London',
    extends: '6222',
    date: '2011/05/03',
    salary: '$163,500',
  },
  {
    name: 'Caesar Vance',
    position: 'Pre-Sales Support',
    office: 'New York',
    extends: '8330',
    date: '2011/12/12',
    salary: '$106,450',
  },
  {
    name: 'Cara Stevens',
    position: 'Sales Assistant',
    office: 'New York',
    extends: '3990',
    date: '2011/12/06',
    salary: '$145,600',
  },
  {
    name: 'Cedric Kelly',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    extends: '6224',
    date: '2012/03/29',
    salary: '$433,060',
  },
  {
    name: 'Charde Marshall',
    position: 'Regional Director',
    office: 'San Francisco',
    extends: '6741',
    date: '2008/10/16',
    salary: '$470,600',
  },
  {
    name: 'Archana Desai',
    position: 'Accountant',
    office: 'Tokyo',
    extends: '5407',
    date: '2008/11/28',
    salary: '$162,700',
  },
];

export const serverSideProcessingColumns = [
  {
    name: 'First Name',
    selector: (row: serverSideProcessingColumnsInterface) => row.name,
    sortable: true,
    center: false,
  },
  {
    name: 'Last Name',
    selector: (row: serverSideProcessingColumnsInterface) => row.lastName,
    sortable: true,
    center: false,
  },
  {
    name: 'position',
    selector: (row: serverSideProcessingColumnsInterface) => row.position,
    sortable: true,
    center: false,
  },
  {
    name: 'office',
    selector: (row: serverSideProcessingColumnsInterface) => row.office,
    sortable: true,
    center: false,
  },
  {
    name: 'Start Date',
    selector: (row: serverSideProcessingColumnsInterface) => row.date,
    sortable: true,
    center: false,
  },
  {
    name: 'Salary',
    selector: (row: serverSideProcessingColumnsInterface) => row.salary,
    sortable: true,
    center: false,
  },
];

export const serverSideData = [
  {
    name: 'Angelica',
    position: 'Chief Executive Officer (CEO)',
    office: 'London',
    lastName: 'Ramos',
    date: '2009/10/09',
    salary: '$1,200,000',
  },
  {
    name: 'Archana',
    position: 'Accountant',
    office: 'Tokyo',
    lastName: 'Desai',
    date: '2008/11/28',
    salary: '$162,700',
  },
  {
    name: 'Ashton',
    position: 'Junior Technical Author',
    office: 'San Francisco',
    lastName: 'Cox',
    date: '2009/01/12',
    salary: '$86,000',
  },
  {
    name: 'Bradley',
    position: 'Software Engineer',
    office: 'London',
    lastName: 'Greer',
    date: '2012/10/13',
    salary: '$132,000',
  },
  {
    name: 'Brenden',
    position: 'Software Engineer',
    office: 'San Francisco',
    lastName: 'Wagner',
    date: '2011/06/07',
    salary: '$206,850',
  },
  {
    name: 'Bruno',
    position: 'Software Engineer',
    office: 'London',
    lastName: 'Nash',
    date: '2011/05/03',
    salary: '$163,500',
  },
  {
    name: 'Caesar',
    position: 'Pre-Sales Support',
    office: 'New York',
    lastName: 'Vance',
    date: '2011/12/12',
    salary: '$106,450',
  },
  {
    name: 'Cara',
    position: 'Sales Assistant',
    office: 'New York',
    lastName: 'Stevens',
    date: '2011/12/06',
    salary: '$145,600',
  },
  {
    name: 'Cedric',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    lastName: 'Kelly',
    date: '2012/03/29',
    salary: '$433,060',
  },
  {
    name: 'Charde',
    position: 'Regional Director',
    office: 'San Francisco',
    lastName: 'Marshall',
    date: '2008/10/16',
    salary: '$470,600',
  },
  {
    name: 'Dai',
    position: 'Personnel Lead',
    office: 'Edinburgh',
    lastName: 'Rios',
    date: '2012/09/26',
    salary: '$217,500',
  },
  {
    name: 'Doris',
    position: 'Sales Assistant',
    office: 'Sidney',
    lastName: 'Wilder',
    date: '2010/09/20',
    salary: '$85,600',
  },
  {
    name: 'Fiona',
    position: 'Chief Executive Officer (CEO)',
    office: 'San Francisco',
    lastName: 'Green',
    date: '2010/03/11',
    salary: '$850,000',
  },
  {
    name: 'Garrett',
    position: 'Accountant',
    office: 'Tokyo',
    lastName: 'Winters',
    date: '2011/07/25',
    salary: '$170,750',
  },
  {
    name: 'Gavin',
    position: 'Team Leader',
    office: 'San Francisco',
    lastName: 'Cortez',
    date: '2008/10/26',
    salary: '$235,500',
  },
  {
    name: 'Gavin',
    position: 'Developer',
    office: 'Edinburgh',
    lastName: 'Joyce',
    date: '2010/12/22',
    salary: '$92,575',
  },
  {
    name: 'Gloria',
    position: 'Systems Administrator',
    office: 'New York',
    lastName: 'Little',
    date: '2009/04/10',
    salary: '$237,500',
  },
  {
    name: 'Haley',
    position: 'Senior Marketing Designer',
    office: 'London',
    lastName: 'Kennedy',
    date: '2012/12/18',
    salary: '$313,500',
  },
  {
    name: 'Herrod',
    position: 'Sales Assistant',
    office: 'San Francisco',
    lastName: 'Chandler',
    date: '2012/08/06',
    salary: '$137,500',
  },
  {
    name: 'Jena',
    position: 'Office Manager',
    office: 'London',
    lastName: 'Gaines',
    date: '2008/12/19',
    salary: '$90,560',
  },
  {
    name: 'Gloria',
    position: 'Systems Administrator',
    office: 'New York',
    lastName: 'Little',
    date: '2009/04/10',
    salary: '$237,500',
  },
  {
    name: 'Haley',
    position: 'Senior Marketing Designer',
    office: 'London',
    lastName: 'Kennedy',
    date: '2012/12/18',
    salary: '$313,500',
  },
  {
    name: 'Hermione',
    position: 'Regional Director',
    office: 'London',
    lastName: 'Butler',
    date: '2011/03/21',
    salary: '$356,250',
  },
  {
    name: 'Herrod',
    position: 'Sales Assistant',
    office: 'San Francisco',
    lastName: 'Chandler',
    date: '2012/08/06',
    salary: '$137,500',
  },

  {
    name: 'Hope',
    position: 'Secretary',
    office: 'San Francisco',
    lastName: 'Fuentes',
    date: '2010/02/12',
    salary: '$109,850',
  },
  {
    name: 'Howard',
    position: 'Office Manager',
    office: 'San Francisco',
    lastName: 'Hatfield',
    date: '2008/12/16',
    salary: '$164,500',
  },
  {
    name: 'Jackson',
    position: 'Director',
    office: 'New York',
    lastName: 'Bradshaw',
    date: '2008/09/26',
    salary: '$645,750',
  },
  {
    name: 'Jena',
    position: 'Office Manager',
    office: 'London',
    lastName: 'Gaines',
    date: '2008/12/19',
    salary: '$90,560',
  },
  {
    name: 'Jenette',
    position: 'Development Lead',
    office: 'New York',
    lastName: 'Caldwell',
    date: '2011/09/03',
    salary: '$345,000',
  },
  {
    name: 'Jennifer',
    position: 'Junior Javascript Developer',
    office: 'Edinburgh',
    lastName: 'Acosta',
    date: '2013/02/01',
    salary: '$75,650',
  },
  {
    name: 'Bruno',
    position: 'Software Engineer',
    office: 'London',
    lastName: 'Nash',
    date: '2011/05/03',
    salary: '$163,500',
  },
  {
    name: 'Caesar',
    position: 'Pre-Sales Support',
    office: 'New York',
    lastName: 'Vance',
    date: '2011/12/12',
    salary: '$106,450',
  },
  {
    name: 'Cara',
    position: 'Sales Assistant',
    office: 'New York',
    lastName: 'Stevens',
    date: '2011/12/06',
    salary: '$145,600',
  },
  {
    name: 'Cedric',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    lastName: 'Kelly',
    date: '2012/03/29',
    salary: '$433,060',
  },
  {
    name: 'Charde',
    position: 'Regional Director',
    office: 'San Francisco',
    lastName: 'Marshall',
    date: '2008/10/16',
    salary: '$470,600',
  },
  {
    name: 'Archana',
    position: 'Accountant',
    office: 'Tokyo',
    lastName: 'Desai',
    date: '2008/11/28',
    salary: '$162,700',
  },
  {
    name: 'Ashton',
    position: 'Junior Technical Author',
    office: 'San Francisco',
    lastName: 'Cox',
    date: '2009/01/12',
    salary: '$86,000',
  },
  {
    name: 'Bradley',
    position: 'Software Engineer',
    office: 'London',
    lastName: 'Greer',
    date: '2012/10/13',
    salary: '$132,000',
  },
  {
    name: 'Brenden',
    position: 'Software Engineer',
    office: 'San Francisco',
    lastName: 'Wagner',
    date: '2011/06/07',
    salary: '$206,850',
  },
  {
    name: 'Bruno',
    position: 'Software Engineer',
    office: 'London',
    lastName: 'Nash',
    date: '2011/05/03',
    salary: '$163,500',
  },
  {
    name: 'Herrod',
    position: 'Sales Assistant',
    office: 'San Francisco',
    lastName: 'Chandler',
    date: '2012/08/06',
    salary: '$137,500',
  },
  {
    name: 'Jena',
    position: 'Office Manager',
    office: 'London',
    lastName: 'Gaines',
    date: '2008/12/19',
    salary: '$90,560',
  },
  {
    name: 'Gloria',
    position: 'Systems Administrator',
    office: 'New York',
    lastName: 'Little',
    date: '2009/04/10',
    salary: '$237,500',
  },
  {
    name: 'Haley',
    position: 'Senior Marketing Designer',
    office: 'London',
    lastName: 'Kennedy',
    date: '2012/12/18',
    salary: '$313,500',
  },
  {
    name: 'Hermione',
    position: 'Regional Director',
    office: 'London',
    lastName: 'Butler',
    date: '2011/03/21',
    salary: '$356,250',
  },
  {
    name: 'Cedric',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    lastName: 'Kelly',
    date: '2012/03/29',
    salary: '$433,060',
  },
  {
    name: 'Charde',
    position: 'Regional Director',
    office: 'San Francisco',
    lastName: 'Marshall',
    date: '2008/10/16',
    salary: '$470,600',
  },
  {
    name: 'Dai',
    position: 'Personnel Lead',
    office: 'Edinburgh',
    lastName: 'Rios',
    date: '2012/09/26',
    salary: '$217,500',
  },
  {
    name: 'Doris',
    position: 'Sales Assistant',
    office: 'Sidney',
    lastName: 'Wilder',
    date: '2010/09/20',
    salary: '$85,600',
  },
  {
    name: 'Fiona',
    position: 'Chief Executive Officer (CEO)',
    office: 'San Francisco',
    lastName: 'Green',
    date: '2010/03/11',
    salary: '$850,000',
  },
  {
    name: 'Jennifer',
    position: 'Junior Javascript Developer',
    office: 'Edinburgh',
    lastName: 'Acosta',
    date: '2013/02/01',
    salary: '$75,650',
  },
  {
    name: 'Bruno',
    position: 'Software Engineer',
    office: 'London',
    lastName: 'Nash',
    date: '2011/05/03',
    salary: '$163,500',
  },
  {
    name: 'Caesar',
    position: 'Pre-Sales Support',
    office: 'New York',
    lastName: 'Vance',
    date: '2011/12/12',
    salary: '$106,450',
  },
  {
    name: 'Cara',
    position: 'Sales Assistant',
    office: 'New York',
    lastName: 'Stevens',
    date: '2011/12/06',
    salary: '$145,600',
  },
  {
    name: 'Cedric',
    position: 'Senior Javascript Developer',
    office: 'Edinburgh',
    lastName: 'Kelly',
    date: '2012/03/29',
    salary: '$433,060',
  },
  {
    name: 'Charde',
    position: 'Regional Director',
    office: 'San Francisco',
    lastName: '6741',
    date: '2008/10/16',
    salary: '$470,600',
  },
  {
    name: 'Archana',
    position: 'Accountant',
    office: 'Tokyo',
    lastName: 'Desai',
    date: '2008/11/28',
    salary: '$162,700',
  },
];
