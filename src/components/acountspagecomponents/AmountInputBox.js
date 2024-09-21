import React from "react";

const AmountInputBox = ({heading,placeholderAmountRanger}) => {
  return (
    <div className="amount-wrap">
      <div className="title-wrap">
        <h6>{heading}</h6>
        <span>{placeholderAmountRanger}</span>
      </div>
      <div className="single-input-wrap">
        <input type="text" className="form-control" placeholder="$ 500" />
      </div>
    </div>
  );
};

export default AmountInputBox;
