import React from "react";
import { HiX } from "react-icons/hi";
import { useAppContext } from "../../../Context/AppContext";

const ToastBox = ({ type, text, id }) => {
  const { deleteToast } = useAppContext();
  return (
    <div
      className={`toast ${type === "success" ? "toastSuccess" : ""} ${
        type === "warning" ? "toastWarning" : ""
      }`}
    >
      <div>{text}</div>
      <div className="toastClose" onClick={() => deleteToast(id)}>
        <HiX />
      </div>
    </div>
  );
};

export default ToastBox;
