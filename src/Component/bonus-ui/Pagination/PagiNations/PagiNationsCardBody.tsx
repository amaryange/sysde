import { Javascript, Next, Previous } from '@/Constant';
import { CardBody, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PagiNationsCardBody = () => {
  return (
    <CardBody>
      <Pagination className='pagination-primary'>
        <PaginationItem>
          <PaginationLink href={Javascript}>{Previous}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={Javascript}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={Javascript}>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={Javascript}>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={Javascript}>{Next}</PaginationLink>
        </PaginationItem>
      </Pagination>
    </CardBody>
  );
};

export default PagiNationsCardBody;
