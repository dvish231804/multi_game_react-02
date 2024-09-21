import React from "react";
import HomeHeader from "../components/Header/HomeHeader";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import PlayerList from "../components/Homelist/PlayerList";
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
            <div class="row justify-content-center">
              <div class="col-12 col-md-8">
                <h4 class="mb-4 mt-4 text-center">Top-3 Winners</h4>
                <div id="topPlayersList">
                  <div class="players-wrapper">
                    <div class="player-card">
                      <div class="rank-badge">#3</div>
                      <img src="https://via.placeholder.com/100" alt="Player 3" class="profile-image" />
                      <div class="card-content">
                        <div class="player-name">Player 3</div>
                        <div class="player-winnings">$ 8000 </div>
                        <div class="stars">⭐⭐⭐</div>
                      </div>
                    </div>
                    <div class="player-card top-player">
                      <div class="rank-badge">#1</div>
                      <img src="https://via.placeholder.com/100" alt="Player 1" class="profile-image" />
                      <div class="card-content">
                        <div class="player-name">Player 1</div>
                        <div class="player-winnings">$ 50,000 </div>
                        <div class="stars">⭐⭐⭐⭐⭐</div>
                      </div>
                    </div>
                    <div class="player-card">
                      <div class="rank-badge">#2</div>
                      <img src="https://via.placeholder.com/100" alt="Player 2" class="profile-image" />
                      <div class="card-content">
                        <div class="player-name">Player 2</div>
                        <div class="player-winnings">$ 20,000 </div>
                        <div class="stars">⭐⭐⭐⭐</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




        </div>
      </div>
    </>
  );
}
