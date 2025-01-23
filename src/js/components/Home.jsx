import React from "react";
import SecondsCounter from "./SecondsCounter";

const Home = ({ seconds, stop, resume, reset }) => {
    return (
        <div className="container text-center my-5">
            <SecondsCounter seconds={seconds} />
            {/* Control Buttons */}
            <div className="mt-4">
                <button className="btn btn-danger mx-2" onClick={stop}>
                    Stop
                </button>
                <button className="btn btn-success mx-2" onClick={resume}>
                    Resume
                </button>
                <button className="btn btn-primary mx-2" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Home;
