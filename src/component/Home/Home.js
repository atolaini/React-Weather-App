import React from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div className="homeContainer">
      <h1 className="homeHeading">Get Your Weather</h1>
      <div className="btnContainer">
        <Link to="/CurrentWeather">
          <button className="btn">Current Weather</button>
        </Link>
        <Link to="/FiveDayWeather">
          <button className="btn">5 Day Weather</button>
        </Link>
      </div>
    </div>
  );
};

export default home;
