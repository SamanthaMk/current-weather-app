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
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-success" />
          </div>
        </div>
      </form>
      <h2>Midrand</h2>
      <ul>
        <li>Wensday 19:57 </li>
        <li> Partly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="#" alt="partly cloudly" />
          27 °C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 80%</li>
            <li>Wind: 1 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
