import { Card, Col } from 'reactstrap';
import WithImageBody from './WithImageBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const WithImage = () => {
  return (
    <Col sm='12' xl='12'>
      <Card>
        <CardHeaderCommon title='With Images' />
        <WithImageBody />
      </Card>
    </Col>
  );
};

export default WithImage;
