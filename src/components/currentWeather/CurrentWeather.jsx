import './CurrentWeather.css'
import { VscActivateBreakpoints } from 'react-icons/vsc';
import { TiLocation } from 'react-icons/ti';
import { FaEllipsisV } from 'react-icons/fa';
import { LuWind } from 'react-icons/lu';
import { BsFillDropletFill, BsClouds } from 'react-icons/bs';

function CurrentWeather({ weatherData, getWeatherIcon, handleEdit, editIsClicked, setEditIsClicked }) {

  const weatherIcon = weatherData.weather[0].description.toLowerCase();

  return (

    <div className="wrapper">
      <div className={!editIsClicked ? "currentCity-show" : "currentCity-hide"}>
        <div className="icon">
          <span><VscActivateBreakpoints /></span>
        </div>
        <h3>{weatherData.name}, <span>{weatherData.sys.country}</span></h3>
        <div className='icon'>
          <button onClick={handleEdit}>
            <FaEllipsisV />
          </button>
        </div>
      </div>

      <div className='current-cotainer'>
        {getWeatherIcon(weatherIcon)}
        <div className="location">
          <h3>Hoje</h3>
          <h2>{weatherData.main.temp.toFixed(0)}°C</h2>
        </div>
      </div>

      <div className="informations">
        <p><BsFillDropletFill /> {weatherData.main.humidity}%</p>
        <p><LuWind /> {weatherData.wind.speed}Km/H</p>
        <p><BsClouds /> {weatherData.clouds.all} un.</p>
      </div>

    </div>
  );
}

export default CurrentWeather;
