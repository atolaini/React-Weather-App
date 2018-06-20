import React, { Component } from "react";
import axios from "axios";
import WeatherWidget from "../../component/WeatherWidget/WeatherWidget";
import { Link } from "react-router-dom";

class CurrentWeather extends Component {
  state = {
    todaysWeather: []
  };

  currentWeatherHandler = e => {
    const APIkey = "2eaa5710cf343ec2dac7eb8e1a1106fb";
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${APIkey}`
      )
      .then(res => {
        this.setState({ todaysWeather: [res.data] });
        console.log(this.state);
      });

    e.preventDefault();
  };

  render() {
    const info = this.state.todaysWeather.map(el => {
      return (
        <WeatherWidget
          day="Today"
          img={`http://openweathermap.org/img/w/${el.weather[0].icon}.png`}
          temp={el.main.temp}
          desc={el.weather[0].description}
          key={el.id}
        />
      );
    });

    return (
      <div>
        <h1 className="homeHeading">Current Forecast</h1>
        <form
          onSubmit={this.currentWeatherHandler}
          className="currentContainer"
        >
          <input type="text" placeholder="city..." name="city" />
          <input type="text" placeholder="country..." name="country" />
          <div className="btnContainer">
            <button className="btn">Get Weather</button>
            <Link to="/">
              <button className="btn">Back</button>
            </Link>
          </div>
        </form>
        {info}
      </div>
    );
  }
}
export default CurrentWeather;
