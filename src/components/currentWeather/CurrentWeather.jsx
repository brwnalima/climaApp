import React, { useEffect } from 'react'
import axios from 'axios';



function CurrentWeather() {

    // async function fetchWeatherData() {
    //     const apiKey = '944c94361980e1ab31ac912b9aaa3e73';
    //     const city = 'São Paulo';

    //     try {
    //         const response = await axios.get(
    //             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    //         );

    //         console.log(response.data);
    //         // Aqui você pode tratar os dados da resposta como desejar
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(() => {
    //     fetchWeatherData();
    // }, []);

    return (
        <div>CurrentWeather</div>
    )
}

export default CurrentWeather