import { Col, Card } from 'reactstrap';
import SwitchwithColor from './SwitchwithColor';
import { SwitchWithColor } from '@/Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const SwitchWithColorCard = () => {
  return (
    <Col sm='12' xl='4'>
      <Card>
        <CardHeaderCommon title={SwitchWithColor} />
        <SwitchwithColor />
      </Card>
    </Col>
  );
};

export default SwitchWithColorCard;
