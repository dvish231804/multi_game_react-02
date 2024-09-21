import React from "react";
import OtherHeader from "../components/Header/OtherHeader";
import PaymentMethod from "../components/acountspagecomponents/PaymentMethod";
import AmountInputBox from "../components/acountspagecomponents/AmountInputBox";
import PaymentStatusModal from "../components/acountspagecomponents/PaymentStatusModal";

const Deposite = () => {
  return (
    <>
      <div className="single-page-area">
        <OtherHeader route={"/account/wallet"} heading={{ obj: "Deposit" }} />
        <div className="container">
          <PaymentMethod />
          <AmountInputBox
            heading={"Amount To Deposit"}
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

        <PaymentStatusModal status={true} mode={"deposit"} />
      </div>
    </>
  );
};

export default Deposite;
