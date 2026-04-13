import React from 'react';
import { CardBody, Col, Form, Row } from 'reactstrap';
import VerticalStyles2 from '../../VerticalStyles2';
import { DeliveryOption } from '@/Constant';
import VerticalStyleCOD from './COD';
import VerTicalStyleFast from './Fast';
import VerticalStyleStandard from './Standard';
import VerticalStyleLocal from './Local';

const VerticalStyleCardBody = () => {
  return (
    <CardBody>
      <Form className='mega-vertical'>
        <Row>
          <Col sm='12'>
            <p className='mega-title mb-2'>{DeliveryOption}</p>
          </Col>
          <VerticalStyleCOD />
          <VerTicalStyleFast />
          <VerticalStyleStandard />
          <VerticalStyleLocal />
          <VerticalStyles2 />
        </Row>
      </Form>
    </CardBody>
  );
};

export default VerticalStyleCardBody;
