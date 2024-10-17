import React, { useContext } from 'react';
import { WeatherContext } from './WeatherContext';
import '../style.css'


function WeatherDataCard() {
  const { weatherData, error } = useContext(WeatherContext);

  if (error) {
    return <div className='error'>{error}</div>; //#** erro message from context
  }

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  const { name, main, weather, wind } = weatherData;

  return (
    <div className='weather-card'>
      <h2>{name}</h2>
      <img className='weather-icon'
        src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
        alt={weather[0].description}

      />

      <div className="weather-description">{weather[0].description}</div>

      <div class="weather-variable temp">Temperature: {Math.round(main.temp)}°C</div>
      <div className='weather-variable humidity'>Humidity: {main.humidity}%</div>
      <div className="weather-variable wind-speed">Wind Speed: {wind.speed} m/s</div>
    </div>
  );
}

export default WeatherDataCard;
