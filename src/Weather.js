import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
            <h1>
            New York, NY
            </h1>
            <ul>
                <li> Mostly Cloudy</li>
                <li>Saturday 7:00</li>
            </ul>
            <div className="row">
            <div className="col-6"> 
            
            76F
            </div>
            <div className="col-6">
                <ul>
                    <li> Percipitation= 70%</li>
                    <li> wind </li>
                    <li> humidity</li>
                </ul>
            </div>
            </div>
        </div>
    );
}