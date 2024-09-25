import React, { useState } from "react";
import "./BetAmountModal.css"; // Create a separate CSS file for styling

const BetAmountModal = ({ isOpen, onClose, onSubmit }) => {
  const [betAmount, setBetAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    const amount = parseFloat(betAmount);
    if (isNaN(amount) || amount <= 0) {
      setErrorMessage("Please enter a valid bet amount greater than 0");
    } else {
      onSubmit(amount); // Pass the bet amount to the parent component
      setErrorMessage("");
      setBetAmount(""); // Reset input after submission
      onClose(); // Close the modal
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Enter Bet Amount</h2>
        <input
          type="number"
          value={betAmount}
          onChange={(e) => setBetAmount(e.target.value)}
          placeholder="Enter amount"
          className="bet-input"
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="modal-actions">
          <button className="btn-submit" onClick={handleSubmit}>
            Submit
          </button>
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BetAmountModal;
