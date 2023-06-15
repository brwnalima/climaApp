import { format } from 'date-fns';
import './DailyForecast.css'

function DailyForecast({ forecast, translateDescription, getWeatherIcon }) {


  return (
    // <div className='forecast-container'>
    //   {forecast ? (
    //     forecast.map((item) => (
    //       <div className='forecast-day' key={item.dt}>
    //         <p>Date: {format(new Date(item.dt_txt), 'dd/MM')}</p>
    //         <p>Temperature: {item.main.temp.toFixed(0)} °C</p>
    //         <p>Description: {translateDescription(item.weather[0].main)}</p>
    //       </div>
    //     ))
    //   ) : null }
    // </div>
    <div className='forecast-container'>
      {forecast ? (
        forecast.map((item) => (
          <div className='forecast-day' key={item.dt}>
            <p id='degree'>{item.main.temp.toFixed(0)}°C</p>

            <div id="img">{getWeatherIcon(item.weather[0].description.toLowerCase())}</div>
            
            {/* <p>Description: {item.weather[0].main}</p> */}
            <p id='date'>{format(new Date(item.dt_txt), 'dd/MM')}</p>
            {/* <p>Description: {translateDescription(item.weather[0].main)}</p> */}
          </div>
        ))
      ) : null}
    </div>
  );
}

export default DailyForecast;