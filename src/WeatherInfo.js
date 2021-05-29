import React from "react";
import FormattedDate from "./FormattedDate"
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
 return (
     <div className="WeatherInfo">
         <h1>
            {props.data.cityName}, {props.data.country}
         </h1>
            <ul id="list">
                <li className="text-capitalize"> {props.data.description}</li>
                <li><FormattedDate  /></li>
            </ul>
            <div className="row">
            <div className="col-6" id="temperature"> 
            <img src={props.data.iconUrl} alt={props.data.description}></img>
            {Math.round(props.data.temperature)}{" "}
              <sup> <span className="units"><a href="/">℉</a> | <a href="/">℃</a></span> </sup>
            </div>
            <div className="col-6">
                <ul id="details">
                    <li> Wind={props.data.wind}km/h</li>
                    <li> Humidity={props.data.humidity}%</li>
                </ul>
            </div>
        </div>
     </div>
 );
}