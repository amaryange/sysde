import { Col, Card, CardBody } from 'reactstrap';
import OutlineColor from './OutlineColor';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { OutlineColorVariant } from '@/Constant';

const OutlineColorCard = () => {
  return (
    <Col md='6'>
      <Card>
        <CardHeaderCommon title={OutlineColorVariant} />
        <CardBody>
          <OutlineColor />
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineColorCard;
