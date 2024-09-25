import React from 'react'
import { Link } from 'react-router-dom'

export default function Gamecard1() {
    return (
        <>
            <div class="container mt-4">
                <div class="row justify-content-center">
                    {/* <!-- Fishing Card --> */}
                    <div class="col-6">
                        <div class="card text-center bg-transparent border-0">
                            <div class="card-body p-4">
                                <img src="assets/img/banner/tic.jpg" class="img-fluid" alt="Fishing Image" />
                                <h5 class="card-title mt-3">Tic-Tac-toe</h5>
                                <Link to={'/tic'}>
                                    <button class="sport_button " >PLAY NOW</button>
                                </Link>
                                {/* <!-- <p class="card-text">Explore the world of fishing.</p> --> */}
                            </div>

                        </div>
                    </div>

                    {/* <!-- Original Card --> */}
                    <div class="col-6">
                        <div class="card text-center bg-transparent border-0">
                            <div class="card-body p-4">
                                <img src="assets/img/banner/slots.jpeg" class="img-fluid" alt="Original Image" />
                                <h5 class="card-title mt-3">Slots</h5>
                                <button class="sport_button">PLAY NOW</button>
                                {/* <!-- <p class="card-text">Discover the original classics.</p> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
