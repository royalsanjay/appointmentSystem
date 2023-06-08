import React from "react";
// import { Link } from "react-router-dom";
import ABC from "../public/ABC.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";

const Landing = () => {
  return (
    <div>
      <div className="landingPage">
        <img width={300} src={ABC} alt="logo" />
        <h1 className="fw-bold fs-1 textColor">
          Welcome to Nepal
          <br />
          <span>Hawk Ridge Animal Hospital</span>
        </h1>
        <br />
        <br />
        <br />
        {/* <button className="buttonProperty">
          <Link to="/home">Click to enter</Link>
        </button> */}
        <div className="spinnerProp">
          <span> Loading...</span>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
