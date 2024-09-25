import React from "react";
import HomeHeader from "../components/Header/HomeHeader";
import Card from "../components/cards/Card";
import Card2 from "../components/cards/Card2";
import PlayerList from "../components/Homelist/PlayerList";
// import { Link } from "react-router-dom";
// import Colors from "../components/color";

export default function Home() {
  return (
    <>
      {/* <!-- preloader area start --> */}
      {/* <div className="preloader" id="preloader">
        <div className="preloader-inner">
          <div id="wave1"></div>
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        </div>
      </div> */}
      {/* <!-- preloader area end --> */}
      <div className="sc5">

        <div className="container" >
          <div className="main-home-area">
            <HomeHeader />

            <div
              id="carouselExampleIndicators"
              className="carousel slide pd-top-110 mb-4"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="assets/img/banner/cal1.jpg"
                    className="d-block w-100"
                    alt="Slide 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="assets/img/banner/cal1.jpg"
                    className="d-block w-100"
                    alt="Slide 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="assets/img/banner/cal1.jpg"
                    className="d-block w-100"
                    alt="Slide 3"
                  />
                </div>
              </div>
            </div>
            <Card />
            <Card2 />
            <PlayerList />
            <div class="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                  <h4 className="mb-4 mt-4 text-center">Top-3 Winners</h4>
                  <div id="topPlayersList">
                    <div className="players-wrapper">
                      <div className="player-card">
                        <div className="rank-badge">#3</div>
                        <img src="https://via.placeholder.com/100" alt="Player 3" className="profile-image" />
                        <div className="card-content">
                          <div className="player-name">Player 3</div>
                          <div className="player-winnings">$ 8000 </div>
                          <div className="stars">⭐⭐⭐</div>
                        </div>
                      </div>
                      <div className="player-card top-player">
                        <div className="rank-badge">#1</div>
                        <img src="https://via.placeholder.com/100" alt="Player 1" className="profile-image" />
                        <div className="card-content">
                          <div className="player-name">Player 1</div>
                          <div className="player-winnings">$ 50,000 </div>
                          <div className="stars">⭐⭐⭐⭐⭐</div>
                        </div>
                      </div>
                      <div className="player-card">
                        <div className="rank-badge">#2</div>
                        <img src="https://via.placeholder.com/100" alt="Player 2" className="profile-image" />
                        <div className="card-content">
                          <div className="player-name">Player 2</div>
                          <div className="player-winnings">$ 20,000 </div>
                          <div className="stars">⭐⭐⭐⭐</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="main-footer-bottom d-block text-center">
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
                  <Link className="" to={'/activities'}>
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
            </div> */}



          </div>
        </div>
      </div>

    </>
  );
}
