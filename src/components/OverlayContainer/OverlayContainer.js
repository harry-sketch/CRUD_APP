import React from "react";

// Styles
import "./OverlayContainer.css";

const OverlayContainer = ({ children, onClick }) => {
  return (
    <div className="overlayContainer" onClick={onClick}>
      {children}
    </div>
  );
};

export default OverlayContainer;
