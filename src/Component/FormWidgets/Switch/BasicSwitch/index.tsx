import { Card, Col } from 'reactstrap';
import BasicSwitchCardBody from './BasicSwitchCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BasicSwitchHeading } from '@/Constant';
const BasicSwitch = () => {
  return (
    <Col sm='12' xl='6' lg='12' md='6'>
      <Card>
        <CardHeaderCommon title={BasicSwitchHeading} />
        <BasicSwitchCardBody />
      </Card>
    </Col>
  );
};
export default BasicSwitch;
