import React from "react";
import { Link } from "react-router-dom";

const AccountHeader = () => {
  return (
    <div class="title-area justify-content-between">
      <Link class="btn back-page-btn" to={"/"}>
        <i class="ri-arrow-left-s-line"></i>
      </Link>
      <h3 class="ps-4">Account</h3>
      <div class="balance">
        $500
        <span>
          <img src="assets/img/icon/dollar-sign.png" alt="img" />
        </span>
      </div>
    </div>
  );
};

export default AccountHeader;
