import { Javascript } from '@/Constant';
import { subnavArr } from '@/Data/UiKitsData/Navs';
import React from 'react';

const DynamicNav = () => {
  return (
    <ul className='icon-lists border navs-icon'>
      {subnavArr.map((data, index) => (
        <li key={index}>
          <a href={Javascript}>
            {data.logo} <span> {data.tittle}</span>
          </a>
          {data?.children && (
            <ul className='simple-list'>
              {data.children.map((data, index) => (
                <li key={index} className='pl-navs-inline'>
                  <a href={Javascript}>
                    <i className='fa fa-angle-right'></i>
                    {data}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DynamicNav;
