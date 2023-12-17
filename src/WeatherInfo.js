import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <div className="middle">
          <h2>{props.data.city}</h2>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />{" "}
            </li>
            <li> {props.data.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <img src={props.data.icon} alt={props.data.index} />
              <span className="temp">
                {Math.round(props.data.temperature)}°C
              </span>
            </div>
            <div className="col-6">
              <ul>
                <li className="humid">Humidity:{props.data.humidity} %</li>
                <li id="wind">Wind: {props.data.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}