import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon() {
  return (
    <ReactAnimatedWeather
      icon="RAIN"
      color="white"
      size={45}
      animate={true}
    />
  );
}
