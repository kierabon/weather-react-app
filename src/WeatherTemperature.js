import React, {useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit]= useState("fahrenheit");
    function showCelcius(event){
        event.preventDefault();
        setUnit("celcius");
    }
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function fahrenheit(){
      return  (props.temperature * 9/5)+32;
    }

if (unit === "fahrenheit"){
    return(
        <div className="WeatherTemperature" >
     {Math.round(fahrenheit())}{" "}
              <sup> <span className="units">
                  ℉| <a href="/" onClick={showCelcius}>℃</a>
              </span> </sup>
              </div>);
} else{
    return(
 <div className="WeatherTemperature" >
     {Math.round(props.temperature)}{" "}
              <sup> <span className="units">
                  <a href="/" onClick={showFahrenheit}>℉</a> | ℃
                </span> </sup>
              </div>
    );}
    
}