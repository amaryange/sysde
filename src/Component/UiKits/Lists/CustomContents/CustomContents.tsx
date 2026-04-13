import { Card, CardBody, Col } from 'reactstrap';
import CustomContentsBody from './CustomContentsBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const CustomContents = () => {
  return (
    <Col sm='12' xl='12'>
      <Card>
        <CardHeaderCommon title='Custom Content' />
        <CardBody>
          <CustomContentsBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomContents;
