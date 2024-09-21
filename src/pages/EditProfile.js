import React from "react";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <div className="single-page-area">
      <div className="title-area">
        <Link className="btn back-page-btn" to={"/account/my-profile"}>
          <i className="ri-arrow-left-s-line"></i>
        </Link>
        <h3 className="ps-4">Edit Profile</h3>
      </div>
      <div className="container">
        <div className="my-profile-wrap">
          <div className="media">
            <div className="thumb">
              <img src="/assets/img/comment/my-profile.png" alt="img" />
              <div className="icon">
                <input type="file" id="inputGroupFile01" />
                <label className="input-group-text" htmlFor="inputGroupFile01">
                  <i className="fa fa-camera"></i>
                </label>
              </div>
            </div>
            <div className="media-body">
              <h6 className="profile-name">Devon Lane</h6>
              <p className="profile-mail">devon@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="my-profile-detail">
          <h6 className="title">User Information</h6>
          <form className="edit-form-wrap">
            <div className="single-input-wrap">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Devon Lane"
              />
            </div>
            <div className="single-input-wrap">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="devon@gmail.com"
              />
            </div>
            <div className="single-input-wrap">
              <label>Refer Code (Optional)</label>
              <input
                type="text"
                className="form-control"
                placeholder="586425"
              />
            </div>
            <Link
              className="btn btn-base w-100 mt-4"
              to={"/account/my-profile"}
            >
              Update
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
