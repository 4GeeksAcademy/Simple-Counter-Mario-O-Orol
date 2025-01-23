import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let seconds = 0; // Track the time
let isRunning = true; // Control whether the timer is running

const stop = () => { isRunning = false; };
const resume = () => { isRunning = true; };
const reset = () => {
    seconds = 0;
    isRunning = false;
};

// Function to render the app
const renderApp = () => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Home seconds={seconds} stop={stop} resume={resume} reset={reset} />);
};

// Start the timer
setInterval(() => {
    if (isRunning) {
        seconds++;
    }
    renderApp();
}, 1000);

// Initial render
renderApp();