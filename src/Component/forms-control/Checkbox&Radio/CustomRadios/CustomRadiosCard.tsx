import { Card, Col } from 'reactstrap';
import CustomRadiosCardBody from './CustomRadiosCardBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { CustomRadio } from '@/Constant';

const CustomRadiosCard = () => {
  return (
    <Col md='6'>
      <Card>
        <CardHeaderCommon title={CustomRadio} />
        <CustomRadiosCardBody />
      </Card>
    </Col>
  );
};

export default CustomRadiosCard;
