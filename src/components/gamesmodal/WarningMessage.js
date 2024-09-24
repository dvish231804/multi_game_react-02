import React from "react";
import "./WarningMessage.css";

const WarningMessage = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="warning-popup">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <div className="warning-message mt-3">{message}</div>
      </div>
    </div>
  );
};

export default WarningMessage;
