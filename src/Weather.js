import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h2>Midrand</h2>
        <ul>
          <li>Wensday 19:57 </li>
          <li> Partly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src="#" alt="partly cloudly" />
            <span className="temp"> 27 °C</span>
          </div>
          <div className="col-6">
            <ul>
              <li className="humid">Humidity: 80%</li>
              <li id="wind">Wind: 1 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
