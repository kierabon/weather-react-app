import React from "react";
import axios from "axios";
import "./Weather.css";
import WeeklyForecast from "./WeeklyForecast";

export default function Weather(){
    
    const apiKey= "39a4dba5764c859c9c8cade7545d15da";
    let apiURL=`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`; 
    return(
        <div className="Weather">
            <form className="form-row align-items-center">
    <div class="col-6">
                <input type="search" placeholder="Enter a city" className="form-control" /> 
                <input type="submit" value="Search" className="btn btn-primary" />
            </div>
            </form>
            <br />
            <h1>
            New York, NY
            </h1>
            <ul id="list">
                <li> Mostly Cloudy</li>
                <li>Saturday 7:00</li>
            </ul>
            <div className="row">
            <div className="col-6" id="temp"> 
            🌫
            76℉
            </div>
            <div className="col-6">
                <ul id="details">
                    <li> Percipitation= 70%</li>
                    <li> wind </li>
                    <li> humidity</li>
                </ul>
            </div>
            </div>
            <WeeklyForecast />
        </div>
    );
}