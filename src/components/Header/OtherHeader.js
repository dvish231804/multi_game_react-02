import React from "react";
import { Link } from "react-router-dom";

const OtherHeader = ({ route, heading }) => {
  return (
    <div className="title-area">
      <Link className="btn back-page-btn" to={route}>
        <i className="ri-arrow-left-s-line"></i>
      </Link>
      <h3 className="ps-4">{heading?.obj}</h3>
    </div>
  );
};

export default OtherHeader;
