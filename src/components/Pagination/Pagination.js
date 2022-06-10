import React, { useEffect, useState } from "react";

// Styles
import "./Pagination.css";

const Pagination = ({
  setCurrentPage,
  pages,
  sortedEmployees,
  currentEmployeeInPage,
}) => {
  const [currentBtn, setCurrentBtn] = useState(1);

  const numOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  useEffect(() => {
    setCurrentPage(currentBtn);
  }, [currentBtn, setCurrentPage]);

  return (
    <div className="pagination">
      <div>
        showing <span>{currentEmployeeInPage.length}</span> out of{" "}
        <span>{sortedEmployees.length}</span> entries
      </div>
      <div
        className="paginationPage"
        onClick={() => setCurrentBtn((prev) => (prev === 1 ? prev : prev - 1))}
      >
        <div>Prev</div>
        {numOfPages.map((page, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentBtn(page)}
            className={`${page === currentBtn && "pageActive"}`}
          >
            {page}
          </div>
        ))}
        <div
          onClick={() =>
            setCurrentBtn((next) =>
              next === numOfPages.length ? next : next + 1
            )
          }
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default Pagination;
