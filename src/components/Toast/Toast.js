import React from "react";
import { useAppContext } from "../../Context/AppContext";

// Styles
import "./Toast.css";
import ToastBox from "./ToastBox/ToastBox";

const Toast = () => {
  const { toasts } = useAppContext();
  console.log(toasts);

  return (
    <div>
      {toasts.map((toast) => (
        <ToastBox
          key={toast.id}
          text={toast.text}
          type={toast.type}
          id={toast.id}
        />
      ))}
    </div>
  );
};

export default Toast;
