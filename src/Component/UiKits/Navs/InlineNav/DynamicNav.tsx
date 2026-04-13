import { Javascript } from '@/Constant';
import { Fragment } from 'react';

const DynamicNav = () => {
  let tittle = ['State Color', 'Typography', 'Grid', 'Tags & Pills', 'Progress', 'Model', 'Alert'];

  return tittle.map((data, index) => (
    <li key={index} className='pl-navs-inline'>
      <a href={Javascript}>
        <i className='fa fa-angle-right'></i>
        <span> {data}</span>
      </a>
    </li>
  ));
};

export default DynamicNav;
