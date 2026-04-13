import { Col, Card, CardBody } from 'reactstrap';
import PaginationSizing1 from './PaginationSizing1';
import PaginationSizing2 from './PaginationSizing2';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { PaginationSizing } from '@/Constant';

const PaginationSizingClass = () => {
  return (
    <Col xl='12'>
      <Card>
        <CardHeaderCommon title={PaginationSizing} />
        <CardBody>
          <PaginationSizing1 />
          <PaginationSizing2 />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationSizingClass;
