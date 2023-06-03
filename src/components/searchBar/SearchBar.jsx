import { React, useState, useEffect } from 'react'
import './SearchBar.css'
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';

function SearchBar() {

  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState({});


  useEffect(() => {
    async function fetchWeatherData() {
      const apiKey = '944c94361980e1ab31ac912b9aaa3e73';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm ? searchTerm : "Rio de Janeiro"}&units=metric&appid=${apiKey}`;
  
  
      try {
        const response = await axios.get(apiUrl);
        setData(response.data)
      } catch (error) {
        console.error(error);
      }
    }
  
  }, []);
  
  async function fetchWeatherData() {
    const apiKey = '944c94361980e1ab31ac912b9aaa3e73';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm ? searchTerm : "Rio de Janeiro"}&units=metric&appid=${apiKey}`;


    try {
      const response = await axios.get(apiUrl);
      setData(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
    setSearchTerm('');
  };

  return (
    <div>
      <form className='search-bar' onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Digite sua pesquisa"
        />
        <button type="submit"><FiSearch /></button>
      </form>

      {Object.keys(data).length !== 0 && (
        <div>
          <p>{data.name}</p>
          <p>{data.main.temp}</p>
        </div>
      )}

    </div>
  )
}

export default SearchBar