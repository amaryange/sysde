import { Card, Col } from 'reactstrap';
import VerticalStepCardBody from './VerticalStepCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const VerticalStepClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title='Vertical Step' />
        <VerticalStepCardBody />
      </Card>
    </Col>
  );
};

export default VerticalStepClass;
