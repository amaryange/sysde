import { OrderListConst } from '@/Constant';
import { OLtypography } from '@/Data/UiKitsData/Typography/ListCardData';
import React from 'react';
import { Col } from 'reactstrap';

const OrderListBold = () => {
  return (
    <Col sm='12' xl='4'>
      <h6 className='sub-title'>{OrderListConst}</h6>
      <ul className=' mb-3'>
        <li>
          <dt>Lorem ipsum dolor sit amet</dt>
          <dd>ipsum dolor sit amet</dd>
        </li>
        {OLtypography.map((element, index) => (
          <li key={index}>
            <dt>{element[0]}</dt>
            <dd>-{element[1]}</dd>
          </li>
        ))}
      </ul>
    </Col>
  );
};

export default OrderListBold;
