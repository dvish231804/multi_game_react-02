import React from "react";
import { Link } from "react-router-dom";

export default function GameHeader() {
  return (
    <div>
      <div className="title-area">
        <Link className="btn back-page-btn" to={"/"}>
          <i className="ri-arrow-left-s-line"></i>
        </Link>
        <h3 className="ms-5 ps-5">Games</h3>
        <div className="balance">
          $500{" "}
          <span>
            <img src="assets/img/icon/dollar-sign.png" alt="img" />
          </span>
        </div>
      </div>
    </div>
  );
}
