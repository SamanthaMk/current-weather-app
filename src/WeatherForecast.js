import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";


export default function WeatherForecast() {
  return (
    <div className="weatherforecast">
      <div className="row">
        <div className="col">
          <div className="daily">Sun</div>
          <WeatherIcon />
          <div className="forecast-temp">
            <span className="temp-max">15 °</span>
            <span className="temp-min">| 10 °</span>
          </div>
        </div>
      </div>
    </div>
  );
}
