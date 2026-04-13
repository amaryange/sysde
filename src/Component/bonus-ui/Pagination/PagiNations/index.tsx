import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import PagiNationsCardBody from './PagiNationsCardBody';
import { Card, Col } from 'reactstrap';
import { Pagi_Nations } from '@/Constant';

const PagiNations = () => {
  return (
    <Col xl='6'>
      <Card>
        <CardHeaderCommon title={Pagi_Nations} />
        <PagiNationsCardBody />
      </Card>
    </Col>
  );
};

export default PagiNations;
