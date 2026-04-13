import { GridOptionHeaderData } from '@/Data/UiKitsData/Grid/GridOptionsData';
import React from 'react';

const GridTableHead = () => {
  return (
    <thead>
      <tr>
        <th>
          <br />
          <small className='digits'></small>
        </th>
        {GridOptionHeaderData.map((element, index) => (
          <th key={index} className='text-center'>
            {element?.text}
            <br />
            <small className='digits'>{element?.size}</small>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default GridTableHead;
