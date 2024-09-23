import React from 'react'
import { Link } from 'react-router-dom'

export default function NotificationHeader() {
    return (
        <>
            <div class="title-area">
                <Link className="btn back-page-btn" to={'/'}><i class="ri-arrow-left-s-line"></i></Link>
                <h3 className="ps-4">Notifications  </h3>
                <Link className="ms-auto" href="#"><i class="fas fa-ellipsis-v"></i></Link>
            </div>

        </>
    )
}
