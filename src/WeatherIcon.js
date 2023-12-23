import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(){
    let icon = {
        "clear-sky-day": "CLEAR_DAY",
        "clear-sky-night": "CLEAR_NIGHT",
         "few-clouds-day": "PARTLY_CLOUDY_DAY",
        "few-clouds-night": "CLOUDY",
        "broken-clouds-day": "SLEET",
        "shower-rain-day": "RAIN",
        "thunderstorm-day":"WIND",
        "snow-day": "SNOW",
        "mist-day": "FOG",
     
       
    }
 return (
      <ReactAnimatedWeather
        icon= "CLEAR_DAY"
        color="white"
        size={54}
        animate={true}
      />
    );
    }
   