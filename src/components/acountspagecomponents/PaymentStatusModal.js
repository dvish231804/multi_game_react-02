import React from "react";
import { Link } from "react-router-dom";

const PaymentStatusModal = ({ status, mode }) => {
  return (
    <div
      className="modal fade filter-modal-popup withdrawalmodal"
      id="deposit-failed-modal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="container">
            <div className="modal-card-wrap text-center">
              <div className="icon">
                {status ? (
                  <i className="ri-check-line"></i>
                ) : (
                  <i className="ri-error-warning-line"></i>
                )}
              </div>

              {/* Conditional rendering based on the mode */}
              {mode === "withdraw" ? (
                <>
                  <h3 className="title">
                    {status ? "Withdraw Success!" : "Withdraw Failed!"}
                  </h3>
                  <p>
                    {status
                      ? "You have successfully withdrawn funds from your wallet!"
                      : "So Sorry! The system is overloaded, please try again later."}
                  </p>
                  <Link
                    className="btn btn-base w-100"
                    to={status ? "/account/wallet" : "/account/wallet/withdraw"}
                  >
                    {status ? "Got It" : "Try Again"}
                  </Link>
                </>
              ) : mode === "deposit" ? (
                <>
                  <h3 className="title">
                    {status ? "Deposit Success!" : "Deposit Failed!"}
                  </h3>
                  <p>
                    {status
                      ? "You have successfully deposited funds in your wallet!"
                      : "So Sorry! The system is overloaded, please try again later."}
                  </p>
                  <Link
                    className="btn btn-base w-100"
                    to={status ? "/account/wallet" : "/account/wallet/deposite"}
                  >
                    {status ? "Got It" : "Try Again"}
                  </Link>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatusModal;
