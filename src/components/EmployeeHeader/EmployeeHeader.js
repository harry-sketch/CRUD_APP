import React from "react";

// Styles
import "./EmployeeHeader.css";

const EmployeeHeader = () => {
  return (
    <div className="employeeHeader">
      <div className="employeeHeader__Data">Name</div>
      <div className="employeeHeader__Data">Email</div>
      <div className="employeeHeader__Data">Country</div>
      <div className="employeeHeader__Data">Phone</div>
      <div className="employeeHeader__Data">Actions</div>
    </div>
  );
};

export default EmployeeHeader;
