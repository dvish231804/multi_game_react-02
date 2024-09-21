import React from "react";
import OtherHeader from "../components/Header/OtherHeader";
import AmountInputBox from "../components/acountspagecomponents/AmountInputBox";
import PaymentMethod from "../components/acountspagecomponents/PaymentMethod";
import PaymentStatusModal from "../components/acountspagecomponents/PaymentStatusModal";

const Withdraw = () => {
  return (
    <>
      <div className="single-page-area">
        <OtherHeader
          route={"/account/wallet"}
          heading={{ obj: "Withdrawal" }}
        />
        <div className="container">
          <PaymentMethod />
          <AmountInputBox
            heading={"Amount To Withdrawal"}
            placeholderAmountRanger={"$500 - 10,000"}
          />
          <button
            className="btn btn-base w-100"
            data-bs-toggle="modal"
            data-bs-target="#deposit-failed-modal"
          >
            Continue
          </button>
        </div>
      </div>
      <PaymentStatusModal />
    </>
  );
};

export default Withdraw;
