import { Javascript, Next, Previous } from '@/Constant';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationSizing1 = () => {
  return (
    <Pagination className='m-b-30' aria-label='Page navigation example'>
      <ul className='simple-list flex-row pagination pagination-lg pagination-primary'>
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
      </ul>
    </Pagination>
  );
};

export default PaginationSizing1;
