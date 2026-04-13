import { Col, Card, CardBody, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { Next, PaginationWithIcons, Previous } from '@/Constant';

const PaginationWithIconsClass = () => {
  return (
    <Col xl='6'>
      <Card>
        <CardHeaderCommon title={PaginationWithIcons} />
        <CardBody>
          <Pagination aria-label="Page navigation example" className="pagination-primary" >
            <PaginationItem><PaginationLink href="#javascript"><span aria-hidden="true">«</span><span className="sr-only">{Previous}</span></PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#javascript">{"1"}</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#javascript">{"2"}</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#javascript">{"3"}</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#javascript"><span aria-hidden="true">»</span><span className="sr-only">{Next}</span></PaginationLink></PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationWithIconsClass;
