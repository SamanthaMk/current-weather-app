import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay.js";
import axios from "axios";

export default function WeatherForecast(props) {
   let [loaded, setLoaded] = useState(false);
   let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
    if (loaded){
  return (
    <div className="weatherforecast">
      <div className="row">
        {forecast.map(function(dailyForecast, index) {
          if (index < 5){
          return (
            <div className="col" key={index} >
              <WeatherForecastDay data={dailyForecast} />
            </div>
          );
          }
        })}
      </div>
    </div>
  );
    } else {
    let apiKey = "b19t9a07a57a44df163do01147f91d11";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return null;
    }
}
