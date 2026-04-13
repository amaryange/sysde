import { Card, Col } from 'reactstrap';
import StatesClassCardBody from './StatesClassCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { PearlsStepStatesClassDescription } from '@/Data/CardHeaderCommonData';

const PearlsStepStatesClass = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={'Pearls Step states '} description={PearlsStepStatesClassDescription} />
        <StatesClassCardBody />
      </Card>
    </Col>
  );
};

export default PearlsStepStatesClass;
