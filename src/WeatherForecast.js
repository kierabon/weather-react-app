import React from "react";
import "./WeatherForecast.css"

export default function WeatherForcast(props){

    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                  <div className="day">  Monday </div>
                <img src={props.data.iconUrl} alt={props.data.description} className="icon" size={2} ></img>
                   <div className="dayTemp">
                     <span className="dayTemp-max">74F</span> 
                     <span className="dayTemp-min">62F</span>
                   </div>
                </div>
            </div>

        </div>
    );
}