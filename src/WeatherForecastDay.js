import React from "react";

export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }
        function minTemperature() {
          let temperature = Math.round(props.data.temperature.minimum);
          return `${temperature}°`;
        }
        
        function day(){
          let date = new Date(props.data.time * 1000);
          let day = date.getDay();

          let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
          
          return days[day];
        }
    return (
      <div>
        <div className="daily">{props[0].time}</div>
        <img src={props[0].condition.icon_url} alt="sunny day" />
        <div className="forecast-temp">
          <span className="temp-max">{maxTemperature()}°</span>
          <span className="temp-min">
            | {minTemperature()} °
          </span>
        </div>
      </div>
    );
}