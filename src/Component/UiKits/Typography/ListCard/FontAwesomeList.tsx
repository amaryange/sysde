import { FontAwesomeListConst } from '@/Constant';
import { FontAwesomeListData } from '@/Data/UiKitsData/Typography/ListCardData';
import React from 'react';
import { Col } from 'reactstrap';

const FontAwesomeList = () => {
  return (
    <Col sm='12' xl='4'>
      <h6 className='sub-title'>{FontAwesomeListConst}</h6>
      <ul>
        <li>
          <i className='fa fa-angle-double-right txt-primary me-2'></i>
          Lorem ipsum dolor sit amet
        </li>
        {FontAwesomeListData.map((element, index) => (
          <li key={index}>
            <i className='fa fa-angle-double-right txt-primary me-2'></i>
            {element}
          </li>
        ))}
      </ul>
    </Col>
  );
};

export default FontAwesomeList;
