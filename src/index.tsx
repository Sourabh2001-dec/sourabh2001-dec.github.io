import AOS from "aos";
import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import { BrowserRouter as Router } from "react-router-dom";
import "../node_modules/aos/dist/aos.css";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const TRACKING_ID: string = process.env.REACT_APP_TRACKING_ID as string; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

AOS.init({
  duration: 600,
  offset: -150,
  once: true,
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
