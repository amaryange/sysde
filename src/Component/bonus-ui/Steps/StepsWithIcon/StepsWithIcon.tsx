import { Fragment } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import DynamicSteps from './DynamicSteps';
import { Shopping } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const StepsWithIcon = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title='Steps with icon' />
        <CardBody>
          <Row className='u-steps'>
            <Col md='4' className='u-step'>
              <span className='u-step-icon icon-shopping-cart-full'></span>
              <div className='u-step-desc'>
                <span className='u-step-title'>{Shopping}</span>
              </div>
            </Col>
            <DynamicSteps />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StepsWithIcon;
