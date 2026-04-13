import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Javascript, Next, Previous } from '@/Constant';

const PaginationSizing2 = () => {
  return (
    <Pagination aria-label='Page navigation example'>
      <ul className='flex-row pagination pagination-sm pagination-primary'>
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

export default PaginationSizing2;
