import { Javascript, Next, Previous } from '@/Constant';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationColorClass5 = () => {
  return (
    <Pagination className='m-b-30'>
      <ul className='flex-row pagination pagination-warning'>
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

export default PaginationColorClass5;
