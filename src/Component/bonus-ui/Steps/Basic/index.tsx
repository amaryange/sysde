import { Card, CardBody, Col, Row } from 'reactstrap';
import DynamicSteps from './DynamincSteps';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Shopping } from '@/Constant';

const BasicClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title='Default Step' />
        <CardBody>
          <Row className='u-steps'>
            <Col sm='4' className='u-step '>
              <span className='u-step-number'>1</span>
              <div className='u-step-desc'>
                <span className='u-step-title'>{Shopping}</span>
                <p>Choose what you want</p>
              </div>
            </Col>
            <DynamicSteps />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicClass;
