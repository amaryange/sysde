import { Col, Card, CardBody } from 'reactstrap';
import SelectForm from './SelectForm';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Select2 } from '@/Constant';

const Select2Card = () => {
  return (
    <Col md='12'>
      <Card>
        <CardHeaderCommon title={Select2} />
        <CardBody>
          <SelectForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Select2Card;
