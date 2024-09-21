import React from "react";

const ActivityCard = () => {
  return (
    <div className="mybet-single-card">
      <div className="card-title">
        <h6>Tic-tac-toe</h6>
        <span>Wed 25 Oct - 12:25:18</span>
      </div>
      <ul className="bet-details">
        <li>
          <span>Match Result:</span>
          <span>Draw</span>
        </li>
      </ul>
      <ul className="bet-status">
        <li className="status-title">
          <span>Stake</span>
          <span>Return</span>
          <span>Status</span>
        </li>
        <li className="price">
          <span>$500</span>
          <span>$600</span>
          <span className="status-lose">Lose</span> 
          {/* classes - >
          1 - status-win - for win
          2 - status-pending - for pending
           */}
        </li>
      </ul>
    </div>
  );
};

export default ActivityCard;
