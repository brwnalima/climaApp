import React from 'react'
import './WeatherPage.css'
import SearchBar from '../../searchBar/searchBar'
import DailyForecast from '../../dailyForecast/DailyForecast'

function WeatherPage() {
    return (
        <div className='page-container'>
            <SearchBar/>
            <DailyForecast/>
        </div>

    )
}

export default WeatherPage