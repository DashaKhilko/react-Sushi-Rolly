import React from 'react';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  );
};

