import axios from "axios";
import React, {useState} from "react";
import WeatherForecastDay from "./WeatherForcastDay";
import "./WeatherForecast.css"

export default function WeatherForcast(props){
let [loaded, setLoaded]=useState(false);
let [forecast, setForecast]=useState(null);
     const apiKey= "39a4dba5764c859c9c8cade7545d15da";
     function handleResponse(response){
         console.log(response.data);
         setForecast(response.data.daily,);
         setLoaded(true);
         
     }
     
     if(loaded){
         return(
          <div className="WeatherForecast">
            <WeatherForecastDay data={forecast[0]} />

        </div>
      );   
     } else {
                 let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.lat}&lon=${props.data.lon}&exclude=hourly&appid=${apiKey}&units=imperial`;
                 axios.get(apiUrl).then(handleResponse);
        return null;
     }


}