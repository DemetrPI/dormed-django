import React from "react";
import "../../static/css/custom.css";
import "../../static/css/news.css";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Paginator = ({ currentPage, totalPages, handlePageChange }) => {
  return (
<div className="d-flex justify-content-center">
      <Pagination size="sm">
        <PaginationItem>
          <PaginationLink first onClick={() => handlePageChange(1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            previous
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                onClick={() => handlePageChange(pageNumber)}
                active= {String(currentPage === pageNumber)}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem>
          <PaginationLink
            next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last onClick={() => handlePageChange(totalPages)} />
        </PaginationItem>
      </Pagination>
      </div>
  );
};
export default Paginator;


