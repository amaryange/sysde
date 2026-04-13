import { Col, Card, Pagination, PaginationItem, PaginationLink, CardBody } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Next, PaginationActiveDisabled, Previous } from '@/Constant';

const PaginationActiveDisabledClass = () => {
  return (
    <Col xl='12'>
      <Card>
        <CardHeaderCommon title={PaginationActiveDisabled} />
        <CardBody>
          <Pagination aria-label="..." className='pagination-primary'>
            <PaginationItem disabled><PaginationLink>{Previous}</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#javascript" >{'1'}</PaginationLink></PaginationItem>
            <PaginationItem active><PaginationLink href="#javascript">{'2'} <span className="sr-only">{'(current)'}</span></PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#javascript">{'3'}</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#javascript">{Next}</PaginationLink></PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationActiveDisabledClass;
