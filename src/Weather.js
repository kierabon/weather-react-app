import React ,{ useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeeklyForecast from "./WeeklyForecast";

export default function Weather(){
    const [weatherData, setWeatherData]= useState({ready:false});
    
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready:true,
            cityName:response.data.name,
            temperature:response.data.main.temp,
            wind:response.data.wind.speed,
            description:response.data.weather[0].description,
            humidity:response.data.main.humidity,
            iconUrl:"//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            country:response.data.sys.country,
            date: "Saturday 7:00"});
    }
    if(weatherData.ready){
    return(
        <div className="Weather">
            <form>
                <input type="search" placeholder="Enter a city" className="form-control" id="city" />     
                <input type="submit" value="Search" className="btn btn-primary" id="sub" />
                <input type="submit" value="Current Location" className="btn btn-outline-info" id="location" />
            </form>
            <br />
            
            
            <h1>
            {weatherData.cityName}, {weatherData.country}
            </h1>
            <ul id="list">
                <li className="text-capitalize"> {weatherData.description}</li>
                <li>{weatherData.date}</li>
            </ul>
            <div className="row">
            <div className="col-6" id="temperature"> 
            <img src={weatherData.iconUrl} alt={weatherData.description}></img>
            {Math.round(weatherData.temperature)}℉
            </div>
            <div className="col-6">
                <ul id="details">
                    <li> Percipitation= 70%</li>
                    <li> Wind={weatherData.wind}km/h</li>
                    <li> Humidity={weatherData.humidity}%</li>
                </ul>
            </div>
            </div>
            <WeeklyForecast />
        </div>
    );}
    else{
        let cityName= "London";
    const apiKey= "39a4dba5764c859c9c8cade7545d15da";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${cityName},uk&appid=${apiKey}&units=imperial`; 
    axios.get(apiUrl).then(handleResponse); 
    
    return "Loading..." }
}