import React from "react";

const Pagination = ({ total, currentPage, setCurrentPage, perPage }) => {
  let pageCount = Math.ceil(total / perPage);
  const pages = [];

  for (let i = 1; i <= pageCount; i++) pages.push(i);

  return (
    <div className="flex justify-center mt-5">
      <div className="btn-group">
        {pages.map((page, idx) => {
          if (
            page === currentPage ||
            (page < currentPage && page >= currentPage - 2) ||
            (page > currentPage && page <= currentPage + 2)
          ) {
            return (
              <button
                key={idx}
                className={`btn btn-sm ${
                  currentPage === page
                    ? "btn-active btn-disabled !bg-accent"
                    : null
                } border-purple-500`}
                onClick={(_) => setCurrentPage(page)}
              >
                {page}
              </button>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Pagination;
