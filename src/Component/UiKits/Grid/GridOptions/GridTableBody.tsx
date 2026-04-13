import { ColumnOrdering, GridBehavior, GutterWidth, Nestable, Offsets } from '@/Constant';
import { ContainerWidthData, PrefixData } from '@/Data/UiKitsData/Grid/GridOptionsData';
import React from 'react';

const GridTableBody = () => {
  return (
    <tbody>
      <tr>
        <th className='text-nowrap' scope='row'>
          {GridBehavior}
        </th>
        <td>{'Horizontal at all times'}</td>
        <td colSpan={5}>{'Collapsed to start, horizontal above breakpoints'}</td>
      </tr>
      <tr>
        <th className='text-nowrap' scope='row'>
          {'Max container width'}
        </th>
        <td>{'None (auto)'}</td>
        {ContainerWidthData.map((element, index) => (
          <td key={index} className='digits'>
            {element}
          </td>
        ))}
      </tr>
      <tr>
        <th className='text-nowrap' scope='row'>
          {'className prefix'}
        </th>
        {PrefixData.map((element, index) => (
          <td key={index}>
            <code>{element}</code>
          </td>
        ))}
      </tr>
      <tr>
        <th className='text-nowrap' scope='row'>
          {'# of columns'}
        </th>
        <td colSpan={6}>{'12'}</td>
      </tr>
      <tr>
        <th className='text-nowrap' scope='row'>
          {GutterWidth}
        </th>
        <td colSpan={6}>{'30px (15px on each side of a column)'}</td>
      </tr>
      <tr>
        <th className='text-nowrap' scope='row'>
          {Nestable}
        </th>
        <td colSpan={6}>{'Yes'}</td>
      </tr>
      <tr>
        <th className='text-nowrap' scope='row'>
          {Offsets}
        </th>
        <td colSpan={6}>{'Yes'}</td>
      </tr>
      <tr>
        <th className='text-nowrap' scope='row'>
          {ColumnOrdering}
        </th>
        <td colSpan={6}>{'Yes'}</td>
      </tr>
    </tbody>
  );
};

export default GridTableBody;
