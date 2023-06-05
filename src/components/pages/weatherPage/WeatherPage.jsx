import React from 'react'
import CurrentWeather from '../../currentWeather/CurrentWeather'
import './WeatherPage.css'
import SearchBar from '../../searchBar/searchBar'

function WeatherPage() {
    return (
        <div className='page-container'>
            <SearchBar/>
        </div>

    )
}

export default WeatherPage