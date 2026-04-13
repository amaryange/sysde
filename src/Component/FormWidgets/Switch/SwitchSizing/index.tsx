import { Col, Card } from 'reactstrap';
import SwitchSizing from './SwitchSizing';
import { SwitchSizingHeading } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
const SwitchSizingCard = () => {
  return (
    <Col sm='12' xl='4'>
      <Card>
        <CardHeaderCommon title={SwitchSizingHeading} />
        <SwitchSizing />
      </Card>
    </Col>
  );
};

export default SwitchSizingCard;
