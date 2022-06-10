import React, { useState } from "react";

// Assets
import { HiPlus } from "react-icons/hi";
import Modal from "../Modal/Modal";
import OverlayContainer from "../OverlayContainer/OverlayContainer";

// Styles
import "./Header.css";

const Header = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Func
  const modalClose = () => setIsAddModalOpen(false);

  return (
    <div className="header">
      <div className="headerTitle">
        Manage <span>Employees</span>
      </div>
      <div
        className="addBtn"
        role="presentation"
        onClick={() => {
          setIsAddModalOpen(true);
        }}
      >
        <HiPlus />
        <span> Add New Employee</span>
      </div>
      {isAddModalOpen && (
        <OverlayContainer onClick={modalClose}>
          <Modal onClick={modalClose} title="Add Employee" />
        </OverlayContainer>
      )}
    </div>
  );
};

export default Header;
