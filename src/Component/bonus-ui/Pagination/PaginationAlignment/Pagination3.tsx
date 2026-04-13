import { Javascript, Next, Previous } from '@/Constant';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Pagination3 = () => {
  return (
    <nav aria-label='Page navigation example'>
      <Pagination className='d-flex justify-content-end pagination-primary'>
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
    </nav>
  );
};

export default Pagination3;
