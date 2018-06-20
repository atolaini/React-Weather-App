import React, { Component } from "react";
import "./styling/css/main.css";
import CurrentWeather from "./Container/CurrentWeather/CurrentWeather";
import FiveDayWeather from "./Container/FiveDayWeather/FiveDayWeather";
import Home from "./component/Home/Home";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container flex">
          <Route exact path="/" component={Home} />
          <Route path="/CurrentWeather" component={CurrentWeather} />
          <Route path="/FiveDayWeather" component={FiveDayWeather} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
