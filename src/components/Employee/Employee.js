import React, { useState } from "react";
import { useAppContext } from "../../Context/AppContext";
import EmployeeHeader from "../EmployeeHeader/EmployeeHeader";
import EmployeeList from "../EmployeeList/EmployeeList";
import Pagination from "../Pagination/Pagination";

// Styles
import "./Employee.css";

const Employee = () => {
  const { sortedEmployees } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [employeePerPage] = useState(3);

  const lastIndex = employeePerPage * currentPage;
  const firstIndex = lastIndex - employeePerPage;
  const currentEmployeeInPage = sortedEmployees.slice(firstIndex, lastIndex);
  const pages = Math.ceil(sortedEmployees.length / employeePerPage);

  return (
    <div className="employee">
      <EmployeeHeader />
      {sortedEmployees.length > 0 ? (
        currentEmployeeInPage.map((sortedEmployee) => (
          <EmployeeList
            key={sortedEmployee.id}
            sortedEmployee={sortedEmployee}
          />
        ))
      ) : (
        <div className="noEmployee">no Employees Found !</div>
      )}

      {sortedEmployees.length > 0 && (
        <Pagination
          pages={pages}
          setCurrentPage={setCurrentPage}
          sortedEmployees={sortedEmployees}
          currentEmployeeInPage={currentEmployeeInPage}
        />
      )}
    </div>
  );
};

export default Employee;
