import './CurrentWeather.css'
import { VscActivateBreakpoints } from 'react-icons/vsc';
import { TiLocation } from 'react-icons/ti';
import { FaEllipsisV } from 'react-icons/fa';


function CurrentWeather({ weatherData, getWeatherIcon }) {

  const weatherIcon = weatherData.weather[0].description.toLowerCase();

  return (

    <div className="wrapper">
      <div className="currentCity">
          <div className="icon">
            <span><VscActivateBreakpoints /></span>
          </div>
          <h3><span><TiLocation /></span> {weatherData.name}, <span>{weatherData.sys.country}</span></h3>
          <div className='icon'>
            <button>
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
    </div>
  );
}

export default CurrentWeather;
