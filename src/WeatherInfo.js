import React from "react";
import FormattedDate from "./FormattedDate"
import "./WeatherInfo.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
 return (
     <div className="WeatherInfo">
         <h1>
            {props.data.cityName}, {props.data.country}
         </h1>
            <ul id="list">
                <li className="text-capitalize"> {props.data.description}</li>
                <li><FormattedDate date={props.data.date} /></li>
            </ul>
     <div className="row">
         <div className="col-9" id="temperature"> 
          
            <img src={props.data.iconUrl} alt={props.data.description}></img> 
           
            <WeatherTemperature temperature={props.data.temperature}/>
         </div>
            <div className="col-3">
                <ul id="details">
                    <li> Wind={props.data.wind}km/h</li>
                    <li> Humidity={props.data.humidity}%</li>
                </ul>
            </div>
        </div>
     </div>
 );
}