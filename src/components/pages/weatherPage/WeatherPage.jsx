import React from 'react'
import CurrentWeather from '../../currentWeather/CurrentWeather'
import './WeatherPage.css'

function WeatherPage() {
    return (
        <div className='page-container'>
            <CurrentWeather />
        </div>

    )
}

export default WeatherPage