import { Card, CardBody, Col } from 'reactstrap';
import WithImageRoundBody from './WithImageRoundBody';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const WithImageRound = () => {
  return (
    <Col sm='12' xl='12'>
      <Card>
        <CardHeaderCommon title={'With Images Rounded'} />
        <CardBody>
          <WithImageRoundBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithImageRound;
