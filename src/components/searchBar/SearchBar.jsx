import axios from 'axios';
import { React, useEffect, useState } from 'react';
import './SearchBar.css'

import { GiFluffyCloud } from 'react-icons/gi';

import CurrentWeather from '../currentWeather/CurrentWeather';

function SearchBar() {

  const [editIsClicked, setEditIsClicked] = useState(false);

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setEditIsClicked(!editIsClicked)
    fetchWeatherData();
    setCity('')
  };

  async function fetchWeatherData() {
    const apiKey = '944c94361980e1ab31ac912b9aaa3e73';

    try {
      setIsLoading(true);

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city === "" ? "Rio de Janeiro" : city}&appid=${apiKey}&units=metric`
      );

      if (response.status === 200) {
        setWeatherData(response.data);
        console.log(response.data);
      } else {
        console.log('Não foi possível obter o clima.');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function getWeatherIcon(description) {
    switch (description) {
      case 'clear sky':
        return <img src='https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-sunny-sun-6263771-5122307.png?f=webp'/>; 
      case 'few clouds':
        return <img src='https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-day-8323005-6634090.png'/>;
      case 'scattered clouds':
        return <img src='https://static.vecteezy.com/system/resources/previews/019/061/827/original/cloud-3d-icon-png.png'/>; 
      case 'broken clouds':
        return <img src='https://cdn3d.iconscout.com/3d/premium/thumb/cloud-7082891-5740866.png'/>; 
      case 'overcast clouds':
        return <img src='https://cdn3d.iconscout.com/3d/premium/thumb/clouds-4599465-3803105.png?f=webp'/>;  
      case 'light rain':
        return <img src='https://cdn3d.iconscout.com/3d/premium/thumb/raining-cloud-6372435-5272553.png?f=webp'/>; 
      case 'moderate rain':
        return <img src='https://cdn3d.iconscout.com/3d/premium/thumb/rain-5344468-5529275.png?f=webp'/>; 
      case 'heavy rain':
        return <img src='https://static.vecteezy.com/system/resources/previews/008/854/791/original/thunderstorm-rain-icon-weather-forecast-meteorological-sign-3d-render-png.png'/>; 
      case 'light snow':
        return <img src='https://cdn3d.iconscout.com/3d/premium/thumb/clouds-with-snowflakes-6372437-5272555.png?f=webp'/>; 
      case 'moderate snow':
        return <img src='https://cdn3d.iconscout.com/3d/premium/thumb/clouds-with-snowflakes-6372437-5272555.png?f=webp'/>; 
      case 'heavy snow':
        return <img src='https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-snow-rain-6624403-5526277.png'/>; 
      case 'thunderstorm':
        return <img src='https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-snow-rain-6624403-5526277.png'/>; 
      case 'mist':
        return <img src='https://cdn3d.iconscout.com/3d/premium/thumb/foggy-4713694-3918074.png'/>; 
      case 'fog':
        return <img src='https://cdn3d.iconscout.com/3d/premium/thumb/windy-snow-day-7812731-6267489.png'/>;  
      case 'haze':
        return <img src='https://cdn3d.iconscout.com/3d/premium/thumb/windy-lightining-snow-day-7812725-6267483.png?f=webp'/>; 
      default:
        return 'unknown-icon'; 
    }
  }

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (

    <div className="search-container">
      <form onSubmit={handleFormSubmit} className='search-form show'>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Digite o nome da cidade"
        />
        <button type="submit">Buscar</button>
      </form>

      <div className="search-response">
        {isLoading ? (
          <p className='loading'><GiFluffyCloud size={30} /></p>
        ) : weatherData ? (
          <CurrentWeather
            weatherData={weatherData}
            getWeatherIcon={getWeatherIcon}
          />
        ) : null}

      </div>

    </div>
  );
}

export default SearchBar