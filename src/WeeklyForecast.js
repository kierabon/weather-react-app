import React from "react";
import "./WeeklyForecast.css"

export default function WeeklyForecast(){
    return(
        <div className="container m-4 float-left" id="forecast">
            <div className="row d-flex">
                <div className="col btn">
                    <div className="row day">Monday</div>
                    <div className="row">img</div>
                    <div className="row d-inline">
                        <span className="temp">78</span>
                        <span className="units">F</span>
                    </div>
                </div>
                <div className="col btn">
                    <div className="row day">Tuesday</div>
                    <div className="row"> img </div>
                    <div className="row d-inline">
                        <span className="temp">78</span>
                        <span className="units">F</span>
                    </div>
                </div>
                <div className="col btn">
                    <div className="row day">Wednesday</div>
                    <div className="row"> img </div>
                    <div className="row d-inline">
                        <span className="temp">78</span>
                        <span className="units">F</span>
                    </div>
                </div>
                <div className="col btn">
                    <div className="row day">Thursday</div>
                    <div className="row"> img </div> 
                    <div className="row d-inline">
                        <span className="temp">78</span>
                        <span className="units">F</span>
                    </div>
                </div>
                <div className="col btn">
                    <div className="row day">Friday</div> 
                    <div className="row img"> <img src="//ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png" alt="scatter clouds"></img> </div>
                    <div className="row d-inline">
                       <span className="temp">78</span>
                        <span className="units">F</span> 
                    </div>
                </div>
                <div className="col btn">
                    <div className="row day">Saturday</div>
                    <div className="row">img</div>
                    <div className="row d-inline">
                        <span className="temp">78</span>
                        <span className="units">F</span>
                        </div>
                </div>
                <div className="col btn">
                    <div className="row day">Sunday</div>
                    <div className="row">img</div>
                    <div className="row d-inline">
                        <span className="temp">78</span>
                        <span className="units">F</span>
                    </div>
                </div>
            </div>
        </div>
    );
}