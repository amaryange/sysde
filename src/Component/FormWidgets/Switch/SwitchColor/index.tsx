import { Card, Col } from 'reactstrap';
import SwitchColorCardBody from './SwitchColorCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { SwitchColor } from '@/Constant';

const BasicColor = () => {
  return (
    <Col sm='12' xl='6' lg='12' md='6'>
      <Card>
        <CardHeaderCommon title={SwitchColor} />
        <SwitchColorCardBody />
      </Card>
    </Col>
  );
};
export default BasicColor;
