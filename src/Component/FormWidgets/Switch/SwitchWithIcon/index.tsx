import { Col } from 'react-bootstrap';
import { Card } from 'reactstrap';
import SwitchIcon from './SwitchIcon';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { SwitchWithIcon } from '@/Constant';

const SwitchWithIconCard = () => {
  return (
    <Col sm='12' xl='4'>
      <Card>
        <CardHeaderCommon title={SwitchWithIcon} />
        <SwitchIcon />
      </Card>
    </Col>
  );
};

export default SwitchWithIconCard;
