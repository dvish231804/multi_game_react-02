import React from "react";
import { Link } from "react-router-dom";

const MyProfile = () => {
  return (
    <div class="single-page-area">
      <div class="title-area">
        <Link class="btn back-page-btn" to={"/account"}>
          <i class="ri-arrow-left-s-line"></i>
        </Link>
        <h3 class="ps-4">My Profile</h3>
      </div>
      <div class="container">
        <div class="my-profile-wrap">
          <div class="media">
            <img
              class="thumb"
              src="/assets/img/comment/my-profile.png"
              alt="img"
            />
            <div class="media-body">
              <h6 class="profile-name">Devon Lane</h6>
              <p class="profile-mail">devon@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="my-profile-detail">
          <h6 class="title">User Information</h6>
          <ul class="my-profile-list-inner">
            <li>
              <span>Full Name</span>
              <h6>Devon Lane</h6>
            </li>
            <li>
              <span>Email</span>
              <h6>devon@gmail.com</h6>
            </li>
            <li>
              <span>Refer Code (Optional)</span>
              <h6>No refer</h6>
            </li>
          </ul>
          <Link
            class="btn btn-base w-100 mt-5"
            to={"/account/my-profile/edit-profile"}
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
