import { UnOrderListConst } from '@/Constant';
import { ULtypography } from '@/Data/UiKitsData/Typography/ListCardData';
import React from 'react';
import { Col } from 'reactstrap';

const UnOrderList = () => {
  return (
    <Col sm='12' xl='4'>
      <h6 className='sub-title'>{UnOrderListConst}</h6>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        {ULtypography.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </Col>
  );
};

export default UnOrderList;
