import React from 'react'

export default function Gamecard1() {
    return (
        <>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    {/* <!-- Fishing Card --> */}
                    <div className="col-6">
                        <div className="card text-center bg-transparent border-0">
                            <div className="card-body p-4">
                                <img src="assets/img/banner/tic.jpg" className="img-fluid" alt="Fishing Image" />
                                <h5 className="card-title mt-3">Tic-Tac-toe</h5>
                                <button className="sport_button ">PLAY NOW</button>
                                {/* <!-- <p className="card-text">Explore the world of fishing.</p> --> */}
                            </div>

                        </div>
                    </div>

                    {/* <!-- Original Card --> */}
                    <div className="col-6">
                        <div className="card text-center bg-transparent border-0">
                            <div className="card-body p-4">
                                <img src="assets/img/banner/slots.jpeg" className="img-fluid" alt="Original Image" />
                                <h5 className="card-title mt-3">Slots</h5>
                                <button className="sport_button">PLAY NOW</button>
                                {/* <!-- <p className="card-text">Discover the original classics.</p> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
