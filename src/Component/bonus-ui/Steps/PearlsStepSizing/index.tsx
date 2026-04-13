import { Card, Col } from 'reactstrap';
import PearlsStepSizingCardBody from './PearlsStepSizingCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { PearlsStepSizingClassDescription } from '@/Data/CardHeaderCommonData';

const PearlsStepSizingClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title='Pearls Step Sizing' description={PearlsStepSizingClassDescription} />
        <PearlsStepSizingCardBody />
      </Card>
    </Col>
  );
};

export default PearlsStepSizingClass;
