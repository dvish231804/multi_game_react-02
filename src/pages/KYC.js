import React from 'react'
import KycHeader from '../components/Header/KycHeader'

export default function KYC() {
    return (
        < >
            <div className='single-page-area'>
                <KycHeader />

                {/* <!-- Phone Verification --> */}
                <div className="kyc-sub-block profile-list-inner single-profile-wrap container">
                    <div className="row">
                        <div className="d-flex col-12 ps-1">
                            <div
                                className="fs-4 col-1 d-flex justify-content-center align-items-start"
                            >
                                <i className="bi bi-phone-fill"></i>
                            </div>
                            <span
                                className="fs-5 col-7 ps-1 d-flex justify-content-start align-items-start"
                            >Mobile Number</span
                            >
                            <div className="col-4 d-flex justify-content-end align-items-center">
                                <button
                                    className="btn kyc-verify-buttons"
                                    onclick="openModal('phone')"
                                >
                                    Verify
                                </button>
                            </div>
                        </div>
                        <div className="p-block">For a more relevant experience.</div>
                    </div>
                </div>

                {/* <!-- Email Verification --> */}
                <div
                    className="kyc-sub-block mt-3 profile-list-inner single-profile-wrap container"
                >
                    <div className="row">
                        <div className="d-flex col-12 ps-1">
                            <div
                                className="fs-4 col-1 d-flex justify-content-center align-items-start"
                            >
                                <i className="bi bi-envelope-fill"></i>
                            </div>
                            <span
                                className="fs-5 col-7 ps-1 d-flex justify-content-start align-items-start"
                            >Email Address</span
                            >
                            <div className="col-4 d-flex justify-content-end align-items-center">
                                <button
                                    className="btn kyc-verify"
                                    onclick="openModal('email')"
                                >
                                    Verify
                                </button>
                            </div>
                        </div>
                        <div className="p-block">For a more relevant experience.</div>
                    </div>
                </div>

                {/* <!-- PAN Card Verification --> */}
                <div
                    class="kyc-sub-block profile-list-inner single-profile-wrap container"
                >
                    <div className="row">
                        <div className="d-flex col-12 ps-1">
                            <div
                                className="fs-4 col-1 d-flex justify-content-center align-items-start"
                            >
                                <i className="bi bi-person-vcard-fill"></i>
                            </div>
                            <span
                                className="fs-5 col-7 ps-1 d-flex justify-content-start align-items-start"
                            >PAN Card</span
                            >
                            <div className="col-4 d-flex justify-content-end align-items-center">
                                <button
                                    className=""
                                    onclick="openModal('pan')"
                                >
                                    Verify
                                </button>
                            </div>
                        </div>
                        <div className="p-block">
                            For safety and security of all transactions.
                        </div>
                    </div>
                </div>

            </div>





        </>
    )
}
