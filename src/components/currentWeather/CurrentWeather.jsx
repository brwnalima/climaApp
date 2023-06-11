// import { LuWind } from 'react-icons/lu';
// import { BsFillDropletFill, BsClouds } from 'react-icons/bs';
// import { BiEdit } from 'react-icons/bi';
import './CurrentWeather.css'
import { TiLocation } from 'react-icons/ti';


function CurrentWeather({ weatherData, getWeatherIcon }) {

  const weatherIcon = weatherData.weather[0].description.toLowerCase();

  return (

    <div className='current-cotainer'>

      {getWeatherIcon(weatherIcon)}
      
      <div className="location">
        <h2>{weatherData.main.temp.toFixed(0)}°C</h2>

        <h3><span><TiLocation /></span> {weatherData.name}, <span>{weatherData.sys.country}</span></h3>
      </div>
    </div>
  );
}

export default CurrentWeather;
