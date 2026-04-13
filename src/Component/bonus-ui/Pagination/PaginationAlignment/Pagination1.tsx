import { Javascript, Next, Previous } from '@/Constant';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Pagination1 = () => {
  return (
    <nav className='m-b-30'>
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
    </nav>
  );
};

export default Pagination1;
