
import axios from "axios";
import React, {useState, useEffect} from "react";
import WeatherForecastDay from "./WeatherForcastDay";
import "./WeatherForecast.css"

export default function WeatherForcast(props){
let [loaded, setLoaded]=useState(false);
let [forecast, setForecast]=useState(null);

   const apiKey= "39a4dba5764c859c9c8cade7545d15da";
    
   useEffect(() => {
     setLoaded(false);
   }, [props.data.coordinates]
   );

     function handleResponse(response){
         setForecast(response.data.daily,);
         setLoaded(true);
         
     }
     
     if(loaded){
         return(
            <div className="WeatherForecast">
              <div className="row">
           {forecast.map(function(dailyForecast, index){
             if(index < 7){
             return( 
               <div className="col g-0" key={index} >
                 <WeatherForecastDay data={dailyForecast} />
               </div>);} else{ return null;}
           })
          }   </div>
      </div>
      );
     } else {
                 let latitude= props.data.coordinates.lat;
     let longitude= props.data.coordinates.lon;
     let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse); 
        return null;
     }
    }