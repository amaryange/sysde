import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Previous, Next, Javascript } from '@/Constant';
const CardsPagination = () => {
  return (
    <div className='job-pagination'>
      <Pagination className='pagination-primary'>
        <PaginationItem>
          <PaginationLink href={Javascript}>{Previous}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={Javascript}>{'1'}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={Javascript}>{'2'}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={Javascript}>{'3'}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={Javascript}>{Next}</PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default CardsPagination;
