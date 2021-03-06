import React ,{ useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";



export default function Weather(props){
    const [weatherData, setWeatherData]= useState({ready:false});
    const [city, setCity]= useState(props.city);
    const apiKey= "39a4dba5764c859c9c8cade7545d15da";

   const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [status, setStatus] = useState(null);

const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition( (position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      }) }  currentLocation() }
    
  
    function handleResponse(response){ 
        setWeatherData({
            ready:true,
             coordinates: response.data.coord,
            cityName:response.data.name,
            temperature:response.data.main.temp,
            wind:response.data.wind.speed,
            description:response.data.weather[0].description,
            humidity:response.data.main.humidity,
            iconUrl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            country:response.data.sys.country,
            date: new Date(response.data.dt*1000),
            percipitation:response.data.main.daily,
            
        });
    }

    function search(){
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather/?q=${city}&appid=${apiKey}&units=metric`; 
    axios.get(apiUrl).then(handleResponse); 
    }

 function handleSubmit(event){
        event.preventDefault();
        search();
    }   
    function handleCityChange(event){
        setCity(event.target.value);
    }
function currentLocation() {

let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
         axios.get(url).then(handleResponse);}



    if(weatherData.ready){
    return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <input 
                type="search" 
                placeholder="Enter a city" 
                className="form-control" 
                id="city" 
                onChange={handleCityChange} />    
                <input type="submit" value="Search" className="btn btn-primary" id="sub" />
                
                  <input 
                type="submit" 
                value="Current Location" 
                className="btn btn-outline-primary" 
                id="location"
                onClick={getLocation} />
                {status}
            </form>
            <br />
            <WeatherInfo data={weatherData} />
             <WeatherForecast data={weatherData} />
        </div>
    );}
    else{
        
    search ();
    return "Loading..." }
}