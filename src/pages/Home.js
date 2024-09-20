import React from "react";
import HomeHeader from "../components/Header/HomeHeader";
import Colors from "../components/color";

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

          <div className="container mt-4" >
            <div className="row justify-content-center">
              {/* <!-- Fishing Card --> */}
              <div className="col-6">
                <div className="card text-center bg-transparent border-0">
                  <div className="card-body p-4">
                    <img
                      src="assets/img/banner/tic.jpg"
                      className="img-fluid"
                      alt="Fishing Image"
                    />
                    <h6 className="mt-3">Tic-Tac-toe</h6>
                    {/* <!-- <p className="card-text">Explore the world of fishing.</p> --> */}
                  </div>
                </div>
              </div>

              {/* <!-- Original Card --> */}
              <div className="col-6">
                <div className="card text-center bg-transparent border-0">
                  <div className="card-body p-4">
                    <img
                      src="assets/img/banner/slots.jpeg"
                      className="img-fluid"
                      alt="Original Image"
                    />
                    <h6 className="mt-3">Slots</h6>
                    {/* <!-- <p className="card-text">Discover the original classNameics.</p> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-4">
            <div className="row justify-content-center">
              {/* <!-- Fishing Card --> */}
              <div className="col-6">
                <div className="card text-center bg-transparent border-0">
                  <div className="card-body p-4">
                    <img
                      src="assets/img/banner/tic.jpg"
                      className="img-fluid"
                      alt="Fishing Image"
                    />
                    <h6 className="mt-3">Fishing</h6>
                    {/* <!-- <p className="card-text">Explore the world of fishing.</p> --> */}
                  </div>
                </div>
              </div>

              {/* <!-- Original Card --> */}
              <div className="col-6">
                <div className="card text-center bg-transparent border-0">
                  <div className="card-body p-4">
                    <img
                      src="assets/img/banner/pilot.jpg"
                      className="img-fluid"
                      alt="Original Image"
                    />
                    <h6 className="mt-3">Original</h6>
                    {/* <!-- <p className="card-text">Discover the original classNameics.</p> --> */}
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
