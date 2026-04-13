import { CommonHeaderClassType } from '@/Type/SideBarType';
import React, { ReactNode } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';

const CommonHeaderClass = (props: CommonHeaderClassType) => {
  return (
    <Col xl='6' lg='12' md='6'>
      <Card>
        <CardHeader className='pb-0'>
          <h5>{props.title}</h5>
        </CardHeader>
        <CardBody>
          <pre className='helper-classes'>{props.children}</pre>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CommonHeaderClass;
