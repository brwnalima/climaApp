import axios from 'axios';
import { React, useEffect, useState } from 'react';
import './SearchBar.css'

import { GiFluffyCloud } from 'react-icons/gi';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import CurrentWeather from '../currentWeather/CurrentWeather';




function SearchBar() {

  const [editIsClicked, setEditIsClicked] = useState(false);

  const handleEdit = () => {
    setEditIsClicked(!editIsClicked)
    setCity('')
  }

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [translatedDescription, setTranslatedDescription] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setEditIsClicked(!editIsClicked)
    fetchWeatherData();
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
        translateDescription(response.data.weather[0].description);
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

  useEffect(() => {
    fetchWeatherData();
  }, []);

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

    <div className="search-container">
      <form onSubmit={handleFormSubmit} className={editIsClicked ? 'search-form show' : 'search-form hide'}>
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
            translatedDescription={translatedDescription}
            handleEdit={handleEdit}
          />
        ) : null}

      </div>

    </div>
  );
}

export default SearchBar