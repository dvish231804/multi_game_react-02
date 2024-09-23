import React from 'react'

export default function Card() {
    return (
        <div>

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
                                <h6 className="mt-3">Slots Machine</h6>
                                {/* <!-- <p className="card-text">Discover the original classNameics.</p> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
