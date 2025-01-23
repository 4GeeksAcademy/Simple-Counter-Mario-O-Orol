import React from "react";

const SecondsCounter = ({ seconds }) => {
    const digits = String(seconds).padStart(6, "0").split("");

    return (
        <div className="container text-center my-5">
            <div className="p-3 bg-dark">
                <div className="row justify-content-center align-items-center">
                    {/* Clock Icon */}
                    <div className="col-auto">
                        <div
                            className="bg-secondary text-white rounded d-flex justify-content-center align-items-center"
                            style={{ width: "80px", height: "100px" }}
                        >
                            <i className="fa-solid fa-clock fa-3x"></i>
                        </div>
                    </div>
                    {/* Timer Digits */}
                    {digits.map((digit, index) => (
                        <div className="col-auto" key={index}>
                            <div
                                className="bg-secondary text-white rounded d-flex justify-content-center align-items-center fs-1"
                                style={{ width: "80px", height: "100px" }}
                            >
                                {digit}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SecondsCounter;
