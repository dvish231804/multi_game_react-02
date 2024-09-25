import React from 'react'

export default function Card2() {
    return (
        <div>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    {/* <!-- Fishing Card --> */}
                    <div className="col-6">
                        <div className="card text-center bg-transparent border-0">
                            <div className="card-body p-4">
                                <img src="assets/img/banner/tic.jpg" className="img-fluid" alt="Fishing Image" />
                                <h6 className="mt-3">Guess the Number</h6>
                                {/* <!-- <p className="card-text">Explore the world of fishing.</p> --> */}
                            </div>
                        </div>
                    </div>

                    {/* <!-- Original Card --> */}
                    <div className="col-6">
                        <div className="card text-center bg-transparent border-0">
                            <div className="card-body p-4">
                                <img src="assets/img/banner/pilot.jpg" className="img-fluid" alt="Original Image" />
                                <h6 className="mt-3">Burst the Balloon</h6>
                                {/* <!-- <p className="card-text">Discover the original classics.</p> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}