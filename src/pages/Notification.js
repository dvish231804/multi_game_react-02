import React from 'react'
import NotificationHeader from '../components/Header/NotificationHeader'
import List from '../components/notification/List'

export default function Notification() {
    return (
        <>

            <div className="single-page-area">
                <NotificationHeader/>
                <List/>
            </div>


        </>
    )
}
