import React from "react";

const ProfileSummary = () => {
  return (
    <>
      <div className="container">
        <div className="my-profile-wrap">
          <div className="media">
            <img
              className="thumb"
              src="assets/img/comment/my-profile.png"
              alt="img"
            />
            <div className="media-body">
              <h6 className="profile-name">Devon Lane</h6>
              <p className="profile-mail">devon@gmail.com</p>
            </div>
            <img className="star star1" src="assets/img/icon/star.png" alt="img" />
            <img className="star star2" src="assets/img/icon/star.png" alt="img" />
          </div>
        </div>
      </div>
      <div
        className="profile-details"
        style={{ backgroundImage: "url(assets/img/other/profile-bg.png)" }}
      >
        <ul>
          <li>
            <h6>06</h6>
            <span>Total Game </span>
          </li>
          <li>
            <h6>20</h6>
            <span>Total Wins </span>
          </li>
          <li>
            <h6>15</h6>
            <span>Total Loses </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileSummary;
