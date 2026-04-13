import { Col, Card, CardBody } from 'reactstrap';

import PaginationColorClass1 from './PaginationColorClass1';
import PaginationColorClass2 from './PaginationColorClass2';
import PaginationColorClass3 from './PaginationColorClass3';
import PaginationColorClass4 from './PaginationColorClass4';
import PaginationColorClass5 from './PaginationColorClass5';
import PaginationColorClass6 from './PaginationColorClass6';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { PaginationColor } from '@/Constant';

const PaginationColorClass = () => {
  return (
    <Col xl='12'>
      <Card>
        <CardHeaderCommon title={PaginationColor} />
        <CardBody>
          <PaginationColorClass1 />
          <PaginationColorClass2 />
          <PaginationColorClass3 />
          <PaginationColorClass4 />
          <PaginationColorClass5 />
          <PaginationColorClass6 />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationColorClass;
