import React from "react";


export default function WeatherForecastDay(props){
    function temperatureMax(){
        let temperature = Math.round(props.data.temp.max);
        return`${temperature}°`
     }
     function temperatureMin(){
        let temperature = Math.round(props.data.temp.max);
        return`${temperature}°`
     }
    function day(){
        let date = new Date(props.data.dt);
        let day= date.getDay();
        let days= ["Sun","Mon", "Tues", "Wed","Thurs","Fri","Sat"]
        return days[day];
    }
    function showIcon(){
        let iconUrl=`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`,
    return `${iconUrl};
    }
    return(

        <div className="row">
                <div className="col">
                  <div className="day">  {day()} </div>
                <img src={showIcon()} alt={props.data.weather[0].description} className="icon" size={2} ></img>
                   <div className="dayTemp">
                     <span className="dayTemp-max">{temperatureMax()}</span> 
                     <span className="dayTemp-min">{temperatureMin()}</span>
                   </div>
                </div>
            </div>
    );
}