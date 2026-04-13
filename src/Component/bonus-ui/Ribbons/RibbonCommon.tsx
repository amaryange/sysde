import { Fragment } from 'react';
import { Col, Card, CardBody } from 'reactstrap';

import DynamicRibbon from './DynamicRibbon';
import { Ribbon } from '@/Constant';

const RibbonComponent = () => {
  return (
    <Fragment>
      <Col sm='14' md='6' lg='4'>
        <Card className='ribbon-wrapper'>
          <CardBody>
            <div className='ribbon ribbon-primary'>{Ribbon}</div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text</p>
          </CardBody>
        </Card>
      </Col>
      <DynamicRibbon />
    </Fragment>
  );
};

export default RibbonComponent;
