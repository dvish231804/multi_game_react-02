import React from "react";
import { Link } from "react-router-dom";
// import notification from "../../pages/Notification";

const HomeHeader = () => {
  return (
    <>
      <div class="">
        <div class="profile-area">
          <div class="media">
            <Link to={'/account'} class="thumb">
              <img src="assets/img/profile.png" alt="img" />
            </Link>
            <div class="media-body">
              <span class="profile-name">Hello, Devon Lane</span>
              <div class="balance">
                $500
                <span>
                  <img src="assets/img/icon/dollar-sign.png" alt="img" />
                </span>
              </div>
            </div>
          </div>
          <div class="btn-wrap">
            <Link class="icon-btn" to={'/notifications'}>
              <i class="ri-notification-3-line"></i>
              <span class="badge">2</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
