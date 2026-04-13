import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Javascript, Next, Previous } from '@/Constant';

const PaginationColorClass3 = () => {
  return (
    <Pagination className='m-b-30'>
      <ul className='flex-row pagination pagination-success'>
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

export default PaginationColorClass3;
