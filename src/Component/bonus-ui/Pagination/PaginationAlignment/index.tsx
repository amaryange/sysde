import { Col, Card, CardBody } from 'reactstrap';
import Pagination1 from './Pagination1';
import Pagination2 from './Pagination2';
import Pagination3 from './Pagination3';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { PaginationAlignment } from '@/Constant';

const PaginationAlignmentClass = () => {
  return (
    <Col xl='12'>
      <Card>
        <CardHeaderCommon title={PaginationAlignment} />
        <CardBody>
          <Pagination1 />
          <Pagination2 />
          <Pagination3 />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationAlignmentClass;
