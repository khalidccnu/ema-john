import React from "react";

const Pagination = ({ total, currentPage, setCurrentPage, perPage }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) pages.push(i);

  return (
    <div className="flex justify-center mt-5">
      <div className="btn-group">
        {pages.map((page, idx) => {
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
        })}
      </div>
    </div>
  );
};

export default Pagination;
