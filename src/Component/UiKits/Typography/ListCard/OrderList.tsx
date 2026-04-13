import { OrderListConst } from '@/Constant';
import { Order } from '@/Data/UiKitsData/Typography/ListCardData';
import React from 'react';
import { Col } from 'reactstrap';

const OrderList = () => {
  return (
    <Col sm='12' xl='4'>
      <h6 className='sub-title'>{OrderListConst}</h6>
      <ol className='d-block '>
        <li>Lorem ipsum dolor sit amet</li>
        {Order.map((element, index) => (
          <>
            {typeof element == 'object' ? (
              <li key={index}>
                <ol className='d-block'>
                  {element.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </li>
            ) : (
              <li>{element}</li>
            )}
          </>
        ))}
      </ol>
    </Col>
  );
};

export default OrderList;
