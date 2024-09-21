import React from 'react'

export default function Card2() {
    return (
        <div>

            <div class="container mt-4">
                <div class="row justify-content-center">
                    {/* <!-- Fishing Card --> */}
                    <div class="col-6">
                        <div class="card text-center bg-transparent border-0">
                            <div class="card-body p-4">
                                <img src="assets/img/banner/tic.jpg" class="img-fluid" alt="Fishing Image" />
                                <h6 class="mt-3">Guess the Number</h6>
                                {/* <!-- <p class="card-text">Explore the world of fishing.</p> --> */}
                            </div>
                        </div>
                    </div>

                    {/* <!-- Original Card --> */}
                    <div class="col-6">
                        <div class="card text-center bg-transparent border-0">
                            <div class="card-body p-4">
                                <img src="assets/img/banner/pilot.jpg" class="img-fluid" alt="Original Image" />
                                <h6 class="mt-3">Burst the Balloon</h6>
                                {/* <!-- <p class="card-text">Discover the original classics.</p> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}