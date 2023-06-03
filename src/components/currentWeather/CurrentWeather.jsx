import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CurrentWeather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [translatedDescription, setTranslatedDescription] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  async function fetchWeatherData() {
    const apiKey = '944c94361980e1ab31ac912b9aaa3e73';

    try {
      setIsLoading(true);

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (response.status === 200) {
        setWeatherData(response.data);
        translateDescription(response.data.weather[0].description);
      } else {
        console.log('Não foi possível obter o clima.');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function translateDescription(description) {
    try {
      const response = await axios.get(
        'https://translate.googleapis.com/translate_a/single',
        {
          params: {
            client: 'gtx',
            sl: 'en',
            tl: 'pt',
            dt: 't',
            q: description,
          },
        }
      );

      const translatedText = response.data[0][0][0];
      setTranslatedDescription(translatedText);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Digite o nome da cidade"
        />
        <button type="submit">Buscar</button>
      </form>

      {isLoading ? (
        <p>Carregando...</p>
      ) : weatherData ? (
        <div>
          <h1> {weatherData.name}</h1>
          <p>Descrição: {translatedDescription}</p>
          <p>Temperatura: {weatherData.main.temp.toFixed(0)}°C</p>
          <p>Umidade: {weatherData.main.humidity}%</p>
        </div>
      ) : null}
    </div>
  );
}

export default CurrentWeather;
