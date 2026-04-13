import { Javascript, Next, Previous } from '@/Constant';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Pagination2 = () => {
  return (
    <nav className='m-b-30' aria-label='Page navigation example'>
      <Pagination className='d-flex justify-content-center pagination-primary' aria-label='Page navigation example'>
        <PaginationItem>
          <PaginationLink href={Javascript}>{Previous}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={Javascript}>{2}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={Javascript}>{1}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={Javascript}>{3}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={Javascript}>{Next}</PaginationLink>
        </PaginationItem>
      </Pagination>
    </nav>
  );
};

export default Pagination2;
