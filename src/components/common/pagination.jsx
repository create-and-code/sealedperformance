import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Paginaton = ({ productsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(productsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(page)}
              href="#"
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Paginaton.propTypes = {
  productsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Paginaton;
