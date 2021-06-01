import React from "react";


export default function WeatherForecastDay(props){
    const iconUrl=`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`
    function temperatureMax(){
        let temperature = Math.round(props.data.temp.max);
        return`${temperature}°`
     }
     function temperatureMin(){
        let temperature = Math.round(props.data.temp.min);
        return`${temperature}°`
     }
    function day(){
        let date = new Date(props.data.dt);
        let day= date.getDay();
        let days= ["Mon", "Tues", "Wed","Thurs","Fri","Sat","Sun",]
        return days[day];
    }
  
    return(
        <div className="WeatherForecastDay">
        <div className="row">
                <div className="col">
                  <div className="day">{day()}</div>
                <img src={iconUrl} alt={props.data.weather[0].description}></img>
                   {props.data.weather[0].description}
                   <div className="dayTemp">
                     <span className="dayTemp-max">{temperatureMax()}</span> 
                     <span className="dayTemp-min">{temperatureMin()}</span>
                   </div>
                </div>
            </div>
    </div>);
}