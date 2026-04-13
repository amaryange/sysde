import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

interface AppPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const AppPagination = ({ currentPage, totalPages, onPageChange }: AppPaginationProps) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className='d-flex justify-content-end mt-3'>
      <Pagination className='pagination-primary mb-0'>
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink previous onClick={() => onPageChange(currentPage - 1)} />
        </PaginationItem>
        {pages.map((p) => (
          <PaginationItem key={p} active={p === currentPage}>
            <PaginationLink onClick={() => onPageChange(p)}>{p}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={currentPage === totalPages}>
          <PaginationLink next onClick={() => onPageChange(currentPage + 1)} />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default AppPagination;
