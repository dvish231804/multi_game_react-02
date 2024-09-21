import React from "react";

const PaymentMethod = () => {
  return (
    <div className="payment-method-card">
      <h6>Select Payment Method</h6>
      <div className="payment-method-select">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            <img src="/assets/img/card/2.png" alt="img" />
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            <img src="/assets/img/card/3.png" alt="img" />
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="option3"
          />
          <label className="form-check-label" htmlFor="inlineRadio3">
            <img src="/assets/img/card/4.png" alt="img" />
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio4"
            value="option4"
          />
          <label className="form-check-label" htmlFor="inlineRadio4">
            <img src="/assets/img/card/5.png" alt="img" />
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio5"
            value="option5"
          />
          <label className="form-check-label" htmlFor="inlineRadio5">
            <img src="/assets/img/card/6.png" alt="img" />
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio6"
            value="option6"
          />
          <label className="form-check-label" htmlFor="inlineRadio6">
            <img src="/assets/img/card/7.png" alt="img" />
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio7"
            value="option7"
          />
          <label className="form-check-label" htmlFor="inlineRadio7">
            <img src="/assets/img/card/8.png" alt="img" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
