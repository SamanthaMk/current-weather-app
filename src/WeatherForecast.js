import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) 
  {
    console.log(response.data)
  }
  console.log(props);

  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl =
    `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=b19t9a07a57a44df163do01147f91d11&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);
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
