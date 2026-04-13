import { Card, Col } from 'reactstrap';
import PearlCardBody from './PearlCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const PearlsStepsClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title='Pearls Steps with icon' />
        <PearlCardBody />
      </Card>
    </Col>
  );
};

export default PearlsStepsClass;
