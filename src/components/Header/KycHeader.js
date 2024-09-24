import React from 'react'
import { Link } from 'react-router-dom'

export default function KycHeader() {
    return (
        <>

            <div className="title-area">
                <Link className="btn back-page-btn" to={'/account'}>
                    <i className="ri-arrow-left-s-line">
                    </i>
                </Link>
                <h3 className="ps-4">Kyc</h3>
            </div>
        </>
    )
}
