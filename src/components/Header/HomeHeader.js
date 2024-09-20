import React from "react";


const HomeHeader = () => {
  return (
    <>
      <div class="main-home-area">
        <div class="profile-area">
          <div class="media">
            <a href="profile.html" class="thumb">
              <img src="assets/img/profile.png" alt="img" />
            </a>
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
            <a class="icon-btn" href="notification.html">
              <i class="ri-notification-3-line"></i>
              <span class="badge">2</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
