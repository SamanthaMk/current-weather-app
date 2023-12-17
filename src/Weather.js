import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      description: response.data.condition.description,
      icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png",
      index: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter your City..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" />
            </div>
          </div>
        </form>
        <div className="middle">
          <h2>{weatherData.city}</h2>
          <ul>
            <li><FormattedDate date={weatherData.date}/> </li>
            <li> {weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <img src={weatherData.icon} alt={weatherData.index} />
              <span className="temp">
                {Math.round(weatherData.temperature)}°C
              </span>
            </div>
            <div className="col-6">
              <ul>
                <li className="humid">Humidity:{weatherData.humidity} %</li>
                <li id="wind">Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b19t9a07a57a44df163do01147f91d11";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading forecast..";
  }
}
