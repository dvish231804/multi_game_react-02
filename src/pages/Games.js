import React from 'react'
import GameHeader from '../components/Header/GameHeader';
import { Link } from 'react-router-dom';
import Gamecard1 from '../components/cards/Gamecard1';
import GameCard2 from '../components/cards/GameCard2';



export default function Games() {
  return (
    <>
      <div className="Sc5">

        <div class="single-page-area">
          <GameHeader />


          <div class="sports-page-wrap">

            <Gamecard1 />
            <GameCard2/>
          </div>
          <div className="main-footer-bottom d-block text-center">
            <ul>
              <li>
                <Link className="nav-item" to={'/'}>
                  <img src="assets/img/icon/svg/home.svg" alt="icon" />
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-item" to={'/game'}>
                  <img src="assets/img/icon/svg/sports.svg" alt="img" />
                  Games
                </Link>
              </li>
              <li>
                <Link className="nav-item" to={'/activities'}>
                  <img src="assets/img/icon/svg/ticket.svg" alt="img" />
                  Activities
                </Link>
              </li>

              <li>
                <Link className="nav-item" to={'/account'}>
                  <img src="assets/img/icon/svg/profile.svg" alt="img" />
                  Account
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </>
  )
}
