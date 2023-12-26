import React from "react";

export default function WeatherForecastDay(props){
   
    return (
      <div>
     <div className="daily">{props.data.time}</div>
  <img src={props.data.condition.icon_url} alt="sunny day" />
        <div className="forecast-temp">
          <span className="temp-max">15°</span>
          <span className="temp-min">
            | 10 °
          </span>
        </div>
      </div>
    );
}