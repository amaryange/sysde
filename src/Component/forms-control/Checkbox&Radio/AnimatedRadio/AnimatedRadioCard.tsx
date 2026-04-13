import { Card, Col } from 'reactstrap';
import AnimatedRadioCardBody from './AnimatedRadioCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { AnimatedRadioButtons } from '@/Constant';

const AnimatedRadioCard = () => {
  return (
    <Col md='6'>
      <Card>
        <CardHeaderCommon title={AnimatedRadioButtons} />
        <AnimatedRadioCardBody />
      </Card>
    </Col>
  );
};

export default AnimatedRadioCard;
