import React from "react";
import { Link } from "react-router-dom";

const Wallet = () => {
  return (
    <>
      <div className="single-page-area">
        <div className="title-area">
          <a className="btn back-page-btn" href="profile.html">
            <i className="ri-arrow-left-s-line"></i>
          </a>
          <h3 className="ps-4">My Wallet</h3>
        </div>
        <div className="container">
          <div className="wallet-ballance-card">
            <ul>
              <li>
                <span>Deposit Balance</span>
                <h5>$700.00</h5>
              </li>
              <li>
                <span>Current Balance</span>
                <h5>$550.00</h5>
              </li>
            </ul>
          </div>
          <div className="wallet-btn-wrap btn-wrap mt-4">
            <Link className="btn btn-base" to="/account/wallet/deposite">
              Deposit
            </Link>
            <Link className="btn btn-border" to={"/account/wallet/withdraw"}>
              Withdraw
            </Link>
          </div>
        </div>
        <div className="transaction-wrap">
          <div className="header-wrap">
            <div className="container">
              <div className="media">
                <h5>Transactions</h5>
                <select className="single-select">
                  <option>All</option>
                  <option>Deposit</option>
                  <option>Withdrawal</option>
                  <option>Referral </option>
                </select>
              </div>
            </div>
          </div>
          <ul className="transaction-list">
            <li>
              <button
                className="icon"
                data-bs-toggle="modal"
                data-bs-target="#deposit-modal"
              >
                <i className="ri-arrow-right-up-line"></i>
              </button>
              <div className="details">
                <h6>Deposit</h6>
                <span>T. ID: 25365451</span>
              </div>
              <div className="amount-details">
                <h6>$3,000.00</h6>
                <span>06 Jun 2024</span>
              </div>
            </li>
            <li className="withdraw">
              <button
                className="icon"
                data-bs-toggle="modal"
                data-bs-target="#withdraw-modal"
              >
                <i className="ri-arrow-left-down-line"></i>
              </button>
              <div className="details">
                <h6>Withdrawal</h6>
                <span>T. ID: 25365451</span>
              </div>
              <div className="amount-details">
                <h6>$500.00</h6>
                <span>06 Jun 2024</span>
              </div>
            </li>
            <li>
              <button
                className="icon"
                data-bs-toggle="modal"
                data-bs-target="#bonus-modal"
              >
                <i className="ri-arrow-right-up-line"></i>
              </button>
              <div className="details">
                <h6>Referral Bonus </h6>
                <span>T. ID: 25365451</span>
              </div>
              <div className="amount-details">
                <h6>$30.00</h6>
                <span>06 Jun 2024</span>
              </div>
            </li>
            <li>
              <button
                className="icon"
                data-bs-toggle="modal"
                data-bs-target="#deposit-modal"
              >
                <i className="ri-arrow-right-up-line"></i>
              </button>
              <div className="details">
                <h6>Deposit</h6>
                <span>T. ID: 25365451</span>
              </div>
              <div className="amount-details">
                <h6>$3,000.00</h6>
                <span>06 Jun 2024</span>
              </div>
            </li>
            <li className="withdraw">
              <button
                className="icon"
                data-bs-toggle="modal"
                data-bs-target="#withdraw-modal"
              >
                <i className="ri-arrow-left-down-line"></i>
              </button>
              <div className="details">
                <h6>Withdrawal</h6>
                <span>T. ID: 25365451</span>
              </div>
              <div className="amount-details">
                <h6>$500.00</h6>
                <span>06 Jun 2024</span>
              </div>
            </li>
            <li>
              <button
                className="icon"
                data-bs-toggle="modal"
                data-bs-target="#bonus-modal"
              >
                <i className="ri-arrow-right-up-line"></i>
              </button>
              <div className="details">
                <h6>Referral Bonus </h6>
                <span>T. ID: 25365451</span>
              </div>
              <div className="amount-details">
                <h6>$30.00</h6>
                <span>06 Jun 2024</span>
              </div>
            </li>
            <li>
              <button
                className="icon"
                data-bs-toggle="modal"
                data-bs-target="#deposit-modal"
              >
                <i className="ri-arrow-right-up-line"></i>
              </button>
              <div className="details">
                <h6>Deposit</h6>
                <span>T. ID: 25365451</span>
              </div>
              <div className="amount-details">
                <h6>$3,000.00</h6>
                <span>06 Jun 2024</span>
              </div>
            </li>
            <li className="withdraw">
              <button
                className="icon"
                data-bs-toggle="modal"
                data-bs-target="#withdraw-modal"
              >
                <i className="ri-arrow-left-down-line"></i>
              </button>
              <div className="details">
                <h6>Withdrawal</h6>
                <span>T. ID: 25365451</span>
              </div>
              <div className="amount-details">
                <h6>$500.00</h6>
                <span>06 Jun 2024</span>
              </div>
            </li>
            <li>
              <button
                className="icon"
                data-bs-toggle="modal"
                data-bs-target="#bonus-modal"
              >
                <i className="ri-arrow-right-up-line"></i>
              </button>
              <div className="details">
                <h6>Referral Bonus </h6>
                <span>T. ID: 25365451</span>
              </div>
              <div className="amount-details">
                <h6>$30.00</h6>
                <span>06 Jun 2024</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade filter-modal-popup"
        id="deposit-modal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="container">
              <div className="modal-card-wrap deposit-modal-wrap">
                <h3 className="title">Deposit</h3>
                <ul>
                  <li>
                    Transaction ID <span>:</span>
                    <span> 25365451</span>
                  </li>
                  <li>
                    Amount <span>:</span>
                    <span> $3,000.00</span>
                  </li>
                  <li>
                    Payment Method <span>:</span>
                    <span> PayPal</span>
                  </li>
                  <li>
                    Date <span>:</span>
                    <span> 06 jun 2024</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade filter-modal-popup"
        id="withdraw-modal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="container">
              <div className="modal-card-wrap deposit-modal-wrap">
                <h3 className="title">Withdraw</h3>
                <ul>
                  <li>
                    Transaction ID <span>:</span>
                    <span> 25365451</span>
                  </li>
                  <li>
                    Amount <span>:</span>
                    <span> $500.00</span>
                  </li>
                  <li>
                    Payment Method <span>:</span>
                    <span> PayPal</span>
                  </li>
                  <li>
                    Date <span>:</span>
                    <span> 06 jun 2024</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade filter-modal-popup"
        id="bonus-modal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="container">
              <div className="modal-card-wrap deposit-modal-wrap">
                <h3 className="title">Referral Bonus</h3>
                <ul>
                  <li>
                    Transaction ID <span>:</span>
                    <span> 25365451</span>
                  </li>
                  <li>
                    Amount <span>:</span>
                    <span> $30.00</span>
                  </li>
                  <li>
                    Payment Method <span>:</span>
                    <span> PayPal</span>
                  </li>
                  <li>
                    Date <span>:</span>
                    <span> 06 jun 2024</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
