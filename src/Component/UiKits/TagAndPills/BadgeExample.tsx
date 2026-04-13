import React from 'react';
import { Badge, Card, CardBody, Col } from 'reactstrap';
import { BadgesExample, New } from '../../../Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const BadgeExample = () => {
  return (
    <Col sm='12' xl='6'>
      <Card className='height-equal'>
        <CardHeaderCommon title={BadgesExample} />
        <CardBody>
          <h1>
            {'heading'} <Badge color='primary'>{New}</Badge>
          </h1>
          <h2>
            {'heading'} <Badge color='primary'>{New}</Badge>
          </h2>
          <h3>
            {'heading'} <Badge color='primary'>{New}</Badge>
          </h3>
          <h4>
            {'heading'} <Badge color='primary'>{New}</Badge>
          </h4>
          <h5>
            {'heading'} <Badge color='primary'>{New}</Badge>
          </h5>
          <h6>
            {'heading'} <Badge color='primary'>{New}</Badge>
          </h6>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgeExample;
