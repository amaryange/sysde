import { Col, Card, CardBody } from 'reactstrap';
import FullColored from './FullColored';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { FullColoredVariant } from '@/Constant';
const FullColerdCard = () => {
  return (
    <Col md='6'>
      <Card>
        <CardHeaderCommon title={FullColoredVariant} />
        <CardBody>
          <FullColored />
        </CardBody>
      </Card>
    </Col>
  );
};

export default FullColerdCard;
