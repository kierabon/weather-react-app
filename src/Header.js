import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Header() {
  function showWeather(response) {
    let temperatureNow = document.querySelector("#temperature");
    let tempNow = Math.round(response.data.main.temp);
    let city = response.data.name;
    let cityNow = document.querySelector("#city-check");
    let humid = document.querySelector("#humidity");
    let humidity = response.data.main.humidity;
    let wind = document.querySelector("#wind-speed");
    let windSpeed = response.data.wind.speed;
    let description = document.querySelector("#description");
    let weatherDescription = response.data.weather[0].description;

    description.innerHTML = `${weatherDescription}`;
    wind.innerHTML = `Wind Speed: ${windSpeed}m/s`;
    humid.innerHTML = `Humidity: ${humidity}%`;
    cityNow.innerHTML = `${city}`;
    temperatureNow.innerHTML = `${tempNow}`;
  }

  function weatherLocation(position) {
    let apiKey = "39a4dba5764c859c9c8cade7545d15da";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeather);
  }

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(weatherLocation);
  }
  function getCitySearch(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
    let city = document.querySelector("#city-check");
    let citySearch = searchInput.value;
    let apiKey = "39a4dba5764c859c9c8cade7545d15da";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&appid=${apiKey}`;
    city.innerHTML = `${citySearch}`;
    axios.get(url).then(showWeather);
  }

  return (
    <div>
      <h2>Today In...</h2>

      <form id="search-form" onSubmit={getCitySearch}>
        <input
          type="text"
          placeholder="Search for a city"
          id="search-text-input"
        />
        <input type="submit" value="search" />
      </form>
      <br />
      <Button id="location-button" onClick={getCurrentPosition}>
        Current Location
      </Button>
    </div>
  );
}
