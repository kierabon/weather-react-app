import React from "react";
import "./styles.css";
import Time from "./Time";

export default function WeatherColumn() {
  return (
    <div className="container boader-4 w-50 p-2 gx-5" id="card">
      <h1 id="city-check">Houston</h1>
      <h5 className="date" id="date">
        <Time />
      </h5>
      <ul id="details">
        <li id="humidity">Humidity : 14%</li>
        <li id="wind-speed">Wind: 8 km/s</li>
        <li id="description">Cloudy</li>
      </ul>
      <span className="temperature" id="temperature">
        🌤 27
      </span>
      <span className="units" id="units">
        ℃ | ℉
      </span>
    </div>
  );
}
