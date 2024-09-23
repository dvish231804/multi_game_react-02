import React from "react";
import { Link } from "react-router-dom";
// import notification from "../../pages/Notification";

const HomeHeader = () => {
  return (
    <>
      <div className="">
        <div className="profile-area">
          <div className="media">
            <Link to={'/account'} className="thumb">
              <img src="assets/img/profile.png" alt="img" />
            </Link>
            <div className="media-body">
              <span className="profile-name">Hello, Devon Lane</span>
              <div className="balance">
                $500
                <span>
                  <img src="assets/img/icon/dollar-sign.png" alt="img" />
                </span>
              </div>
            </div>
          </div>
          <div className="btn-wrap">
            <Link className="icon-btn" to={'/notifications'}>
              <i className="ri-notification-3-line"></i>
              <span className="badge">2</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
