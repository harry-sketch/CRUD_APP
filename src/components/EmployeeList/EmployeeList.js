import React, { useState } from "react";

// Assets
import { HiPencilAlt } from "react-icons/hi";
import { HiTrash } from "react-icons/hi";
import { useAppContext } from "../../Context/AppContext";
import EditModal from "../EditModal/EditModal";
import OverlayContainer from "../OverlayContainer/OverlayContainer";

// Styles
import "./EmployeeList.css";

const EmployeeList = ({ sortedEmployee }) => {
  const [isEditMOodalOpen, setIsEditMOodalOpen] = useState(false);
  const { deleteEmployee, addToast } = useAppContext();
  const { id, name, email, country, phone } = sortedEmployee;

  return (
    <div className="employeeList">
      <div className="employeeList__table">{name}</div>
      <div className="employeeList__table">{email}</div>
      <div className="employeeList__table">{country}</div>
      <div className="employeeList__table">{phone}</div>
      <div className="employeeList__action">
        <div
          className="employeeList__deleteBtn"
          onClick={() => setIsEditMOodalOpen(true)}
        >
          <HiPencilAlt />
        </div>
        <div
          className="employeeList__deleteBtn"
          onClick={() => {
            deleteEmployee(id);
            addToast("warning", "employee deleted successfully !!");
          }}
        >
          <HiTrash />
        </div>
      </div>
      {isEditMOodalOpen && (
        <OverlayContainer onClick={() => setIsEditMOodalOpen(false)}>
          <EditModal
            title="Edit"
            onClick={() => setIsEditMOodalOpen(false)}
            sortedEmployee={sortedEmployee}
          />
        </OverlayContainer>
      )}
    </div>
  );
};

export default EmployeeList;
