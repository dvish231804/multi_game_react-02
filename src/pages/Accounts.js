import React from "react";
import AccountHeader from "../components/Header/AccountHeader";
import ProfileSummary from "../components/acountspagecomponents/ProfileSummary";
import { Link } from "react-router-dom";

export default function Accounts() {
  return (
    <div>
      {/* <body className="sc5"> */}
      {/* <!-- preloader area start --> */}
      <div className="preloader" id="preloader"></div>
      {/* <!-- preloader area end --> */}
      <div className="body-overlay" id="body-overlay"></div>

      <div className="single-page-area">
        <AccountHeader />

        {/* Summary of Profile  */}
        <ProfileSummary />

        {/* Accounts Sub Links  */}

        <div className="container">
          <ul className="profile-list-inner">
            <li>
              <Link className="single-profile-wrap" to={"/account/my-profile"}>
                <i className="fa fa-user"></i> My Profile
                <i className="ri-arrow-right-s-line"></i>
              </Link>
            </li>
            <li>
              <Link className="single-profile-wrap" to={"/account/wallet"}>
                <i className="fa fa-wallet"></i> Wallet
                <i className="ri-arrow-right-s-line"></i>
              </Link>
            </li>
            <li>
              <Link className="single-profile-wrap" to={'/kyc'}>
                <i className="fa fa-cubes"></i> Kyc
                <i className="ri-arrow-right-s-line"></i>
              </Link>
            </li>
            <li>
              <div className="single-profile-wrap">
                <i className="fas fa-cloud-moon"></i>
                Dark/Light Mode
                <div className="dark-area">
                  <label className="change-mode switch">
                    <input type="checkbox" data-active="true" />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <Link className="single-profile-wrap" href="invite.html">
                <i className="fas fa-users"></i> Invite
                <i className="ri-arrow-right-s-line"></i>
              </Link>
            </li>
            <li>
              <Link className="single-profile-wrap" href="change-pass.html">
                <i className="fas fa-lock"></i> Change Password
                <i className="ri-arrow-right-s-line"></i>
              </Link>
            </li>
            <li>
              <Link className="single-profile-wrap" href="term-condition.html">
                <i className="fas fa-exclamation-triangle"></i>Terms &
                Conditions
                <i className="ri-arrow-right-s-line"></i>
              </Link>
            </li>
            <li>
              <Link className="single-profile-wrap" href="login.html">
                <i className="fas fa-sign-out-alt"></i>Log Out
                <i className="ri-arrow-right-s-line"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
