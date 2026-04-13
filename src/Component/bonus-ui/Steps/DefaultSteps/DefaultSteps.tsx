import { Card, Col } from 'reactstrap';
import DefaultStepsCardBody from './DefaultStepsCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const DefaultSteps = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title='Default Pearls Steps' />
        <DefaultStepsCardBody />
      </Card>
    </Col>
  );
};

export default DefaultSteps;
