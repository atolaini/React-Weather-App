import React, { Component } from "react";
import axios from "axios";
import WeatherWidget from "../../component/WeatherWidget/WeatherWidget";
import { Link } from "react-router-dom";

class CurrentWeather extends Component {
  state = {
    fiveDayWeather: []
  };

  FiveDayWeatherHandler = e => {
    const APIkey = "2eaa5710cf343ec2dac7eb8e1a1106fb";
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&mode=json&appid=${APIkey}`
      )
      .then(res => {
        let newData = [];
        for (let i = 0; i < res.data.list.length; i += 8) {
          newData.push(res.data.list[i]);
        }
        this.setState({ fiveDayWeather: newData });
      })
      .catch(err => {
        alert("Unknow city or country code");
      });

    e.preventDefault();
  };

  render() {
    const info = this.state.fiveDayWeather.map(el => {
      return (
        <WeatherWidget
          day={el.dt_txt.slice(0, 10)}
          img={`https://openweathermap.org/img/w/${el.weather[0].icon}.png`}
          temp={el.main.temp}
          desc={el.weather[0].description}
          key={el.dt}
        />
      );
    });
    return (
      <div>
        <h1 className="homeHeading">5 Day Forecast</h1>
        <form
          onSubmit={this.FiveDayWeatherHandler}
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
