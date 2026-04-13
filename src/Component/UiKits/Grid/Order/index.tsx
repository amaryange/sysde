import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Order } from '@/Constant';
import { OrderData } from '@/Data/UiKitsData/Grid/OrderData';

const OrderCard = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={Order} />
        <CardBody className='grid-showcase'>
          <p>
            {'Use'} <code>{'.order-'}</code> {'classNamees for controlling the'} <strong>{'visual order'}</strong> {'of your content. These classNamees are responsive, so you can set the'} <code>{'order'}</code> {'by breakpoint (e.g.,'} <code>{'.order-1.order-md-2'}</code>
            {'). Includes support for'} <code>{'1'}</code> {'through'} <code>{'12'}</code> {'across all five grid tiers.'}
          </p>
          {OrderData.map((element, index) => (
            <Row key={index}>
              {element.data.map((item, index) => (
                <Col key={index} className={`${item.name ? item.name : ''}`}>
                  <span>{item.text}</span>
                </Col>
              ))}
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderCard;
