import { ICOIconListConst } from '@/Constant';
import { IconList } from '@/Data/UiKitsData/Typography/ListCardData';
import React from 'react';
import { Col } from 'reactstrap';

const IcoIconList = () => {
  return (
    <Col sm='12' xl='4'>
      <h6 className='sub-title'>{ICOIconListConst}</h6>
      <ul>
        <li>
          <i className='fa fa-caret-right txt-secondary me-2'></i>
          Lorem ipsum dolor sit amet
        </li>
        {IconList.map((element, index) => (
          <li key={index}>
            <i className='fa fa-caret-right txt-secondary me-2'></i>
            {element}
          </li>
        ))}
      </ul>
    </Col>
  );
};

export default IcoIconList;
