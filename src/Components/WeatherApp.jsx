import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from '../Assets/search.png'
import moderate from '../Assets/moderate.png'
import rain from '../Assets/rain.png'
import cloudy from '../Assets/cloudy.png'
import snow from '../Assets/snow.png'
import sunny from '../Assets/sunny.png'
import wind from '../Assets/wind.png'
import humidity from '../Assets/humidity.png'

const WeatheApp = () => {

  let api_key = "7c04935742b20bbcb6fa835331452785"

  const [wicon,setWicon] = useState(cloudy);
  
  const search = async () => {
      const element = document.getElementsByClassName("cityInput");
      if(element[0].value==="")
      {
        return 0;
      }
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

      let response = await  fetch(url);
      let data = await response.json();
      const humidity = document.getElementsByClassName("humidity-percentage");
      const wind = document.getElementsByClassName("wind-rate");
      const temperature = document.getElementsByClassName("weather-temp");
      const location = document.getElementsByClassName("weather-location");

      humidity[0].innerHTML = data.main.humidity+" %";
      wind[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
      temperature[0].innerHTML = Math.floor(data.main.temp)+" °c";
      location[0].innerHTML = data.name;

      if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
      {
        setWicon(sunny);
      }
      else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
      {
        setWicon(cloudy)
      }
      else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
      {
        setWicon(moderate)
      }
      else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
      {
        setWicon(moderate)
      }
      else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
      {
        setWicon(rain)
      }
      else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
      {
        setWicon(rain)
      }
      else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
      {
        setWicon(snow)
      }
      else{
        setWicon(moderate)
      }
  }

  return (
    <div className='container'>
        <div className='top-bar'>
           <input type="text" className='cityInput' placeholder='Search'/>
           <div className='search-icon' onClick={()=>(search())}>
            <img src={search_icon} alt="" />
           </div>
        </div>
        <div className='weather-image'>
           <img src={wicon} alt="" />
        </div>
        <div className='weather-temp'>24°c</div>
        <div className='weather-location'>London</div>
        <div className='data-container'>
           <div className="element">
            <img src={humidity} alt="" className='icon'/>
            <div className="data">
              <div className="humidity-percentage">64%</div>
              <div className="text">Humidity</div>
            </div>
           </div>
           <div className="element">
            <img src={wind} alt="" className='icon'/>
            <div className="data">
              <div className="wind-rate">18 km/h</div>
              <div className="text">Wind Speed</div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default WeatheApp
