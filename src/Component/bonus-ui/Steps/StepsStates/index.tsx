import { Card, CardBody, Col, Row } from 'reactstrap';
import DynamincSteps from './DynamincSteps';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { StepsStatesClassDescription } from '@/Data/CardHeaderCommonData';
import { Getting } from '@/Constant';

const StepsStatesClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={'Steps States'} description={StepsStatesClassDescription} />
        <CardBody>
          <Row className='row-lg'>
            <Col xl='3' lg='6'>
              <div className='u-step done bg-primary'>
                <span className='u-step-number txt-primary'>1</span>
                <div className='u-step-desc'>
                  <span className='u-step-title'>{Getting}</span>
                  <p>Waiting for the goods</p>
                </div>
              </div>
            </Col>
            <DynamincSteps />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StepsStatesClass;
