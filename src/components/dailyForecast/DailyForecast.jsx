import { format } from 'date-fns';

function DailyForecast({ forecast, translateDescription }) {

  return (
    <div>
      {forecast ? (
        forecast.map((item) => (
          <div key={item.dt}>
            <p>Date: {format(new Date(item.dt_txt), 'dd/MM')}</p>
            <p>Temperature: {item.main.temp.toFixed(0)} °C</p>
            <p>Description: {translateDescription(item.weather[0].main)}</p>
          </div>
        ))
      ) : null }
    </div>
  );
}

export default DailyForecast;