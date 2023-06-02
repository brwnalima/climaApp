import {React, useState} from 'react'
import './SearchBar.css'
import { FiSearch } from 'react-icons/fi';


function SearchBar() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com a submissão da pesquisa
    console.log('Termo de pesquisa:', searchTerm);
    setSearchTerm('');
  };


  return (
    <form className='search-bar' onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Digite sua pesquisa"
      />
      <button type="submit"><FiSearch/></button>
    </form>
  )
}

export default SearchBar