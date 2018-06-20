import React from "react";

const weatherWidget = props => {
  return (
    <div className="weatherWidget">
      <p>Day</p>
      <p>{props.day}</p>
      <img src={props.img} alt="" className="weatherWidget__img" />
      <p>Temp</p>
      <p>{props.temp}c</p>
      <p>Weather</p>
      <p>{props.desc}</p>
    </div>
  );
};

export default weatherWidget;
