import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
            <form className="form-inline">
            <div className="row">
                <div className="col-9">
            
                <input type="search" placeholder="Enter a city" autoComplete="off"className="form-control" /> 
                </div>
                <div className="col">
                <input type="submit" value="Search" className="btn btn-primary search" />
           
            </div> </div>  </form>
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
        </div>
    );
}