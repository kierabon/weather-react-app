import React ,{ useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeeklyForecast from "./WeeklyForecast";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props){
    const [weatherData, setWeatherData]= useState({ready:false});
    const [city, setCity]= useState(props.city);
    const [lat, setLat] = useState(null);
    const [lon, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    function handleSubmit(event){
        event.preventDefault();
        search();
    }   
    function handleCityChange(event){
        setCity(event.target.value);
    }

    const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition( (position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      })
       const apiKey= "39a4dba5764c859c9c8cade7545d15da";
         let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
         axios.get(url).then(handleResponse);
    }
   }
  
    function search(){
        const apiKey= "39a4dba5764c859c9c8cade7545d15da";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather/?q=${city}&exclude=hourly,daily&appid=${apiKey}&units=imperial`; 
    axios.get(apiUrl).then(handleResponse); 
    }
    function handleResponse(response){
        console.log(response.data);
           
        setWeatherData({
            ready:true,
            cityName:response.data.name,
            temperature:response.data.main.temp,
            wind:response.data.wind.speed,
            description:response.data.weather[0].description,
            humidity:response.data.main.humidity,
            iconUrl:"//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            country:response.data.sys.country,
            date: new Date(response.data.dt*1000),
            percipitation:response.data.main.daily,
            lat:response.data.coord.lat,
            lon:response.data.coord.lon,
        });
    }
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
                onClick={getLocation} /> {status}
            </form>
            <br />
            
            
            
            
            
            <WeatherInfo data={weatherData} />
            <WeeklyForecast latitude={weatherData.lat} longitude={weatherData.lon} />
        </div>
    );}
    else{
    search ();
    return "Loading..." }
}