import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

function DailyForecast() {
  const [search, setSearch] = useState('');
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState('');

  useEffect(() => {
    fetchWeatherForecast();
  }, []);

  const fetchWeatherForecast = async () => {
    try {
      const apiKey = '944c94361980e1ab31ac912b9aaa3e73';
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${apiKey}&units=metric`;

      const response = await fetch(url);
      const data = await response.json();

      // Group forecast by day
      const dailyForecast = {};
      data.list.forEach((item) => {
        const date = item.dt_txt.split(' ')[0];
        if (!dailyForecast[date]) {
          dailyForecast[date] = item;
        } else {
          if (item.dt_txt.split(' ')[1] === '12:00:00') {
            dailyForecast[date] = item;
          }
        }
      });

      setForecast(Object.values(dailyForecast));
      setCity(data.city.name);
    } catch (error) {
      console.error('Error fetching weather forecast:', error);
    }
  };

  const translateDescription = (description) => {
    const translationMap = {
      Clear: 'Céu Limpo',
      Clouds: 'Nublado',
      Rain: 'Chuva',
      Drizzle: 'Garoa',
      Thunderstorm: 'Tempestade',
      Snow: 'Neve',
      Mist: 'Neblina',
      Smoke: 'Fumaça',
      Haze: 'Nevoeiro',
      Dust: 'Poeira',
      Fog: 'Névoa',
      Sand: 'Areia',
      Ash: 'Cinzas',
      Squall: 'Squall',
      Tornado: 'Tornado',
    };

    return translationMap[description] || description;
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    fetchWeatherForecast();
  };

  return (
    <div>
      <input type="text" value={search} onChange={handleInputChange} placeholder="Enter city name" />
      <button onClick={handleSearch}>Search</button>


      {forecast.map((item) => (
        <div key={item.dt}>
          <p>Date: {format(new Date(item.dt_txt), 'dd/MM')}</p>
          <p>Temperature: {item.main.temp.toFixed(0)} °C</p>
          <p>Description: {translateDescription(item.weather[0].main)}</p>
        </div>
      ))}
    </div>
  );
}

export default DailyForecast;
