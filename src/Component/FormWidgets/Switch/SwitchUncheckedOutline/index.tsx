import { Card, Col } from 'reactstrap';
import CommonSwitchOutline from '../common/CommonSwitchOutline';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { SwitchUncheckedOutline } from '@/Constant';

const SwitchUncheckedOutlineCard = () => {
  return (
    <Col sm='12' xl='6' lg='12' md='6'>
      <Card>
        <CardHeaderCommon title={SwitchUncheckedOutline} />
        <CommonSwitchOutline />
      </Card>
    </Col>
  );
};

export default SwitchUncheckedOutlineCard;
