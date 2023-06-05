import { LuWind } from 'react-icons/lu';
import { BsFillDropletFill, BsClouds } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';

function CurrentWeather({ weatherData, translatedDescription, handleEdit }) {

  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const currentDate = new Date().toLocaleDateString('pt-BR', options);

  return (
    <div className="search-description">
      <div className="location">
        <h3> {weatherData.name}, {weatherData.sys.country}</h3>
        <button onClick={handleEdit}><BiEdit /></button>
      </div>
      <p id='date'>{currentDate}</p>
      <p id='desc'>{translatedDescription}</p>
      <h1>{weatherData.main.temp.toFixed(0)}°C</h1>
      <p id='status'>Sensação térmica de: {weatherData.main.feels_like.toFixed(0)}°C. </p>
      <div className="informations">
        <p><BsFillDropletFill /> {weatherData.main.humidity}%</p>
        <p><LuWind /> {weatherData.wind.speed}Km/H</p>
        <p><BsClouds /> {weatherData.clouds.all} un.</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
