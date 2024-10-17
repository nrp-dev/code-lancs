import React, { createContext, useState, useEffect } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState('London, GB');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  

  const fetchWeatherData = async (city) => {
    try {
      const apiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

            
      );

      if ( city === '' || !response.ok) {
        throw new Error('Please enter a valid city');
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null);
    }catch (err) {
      
      setError(err.message); //**That is then available in the rending of WeatherDataCard
      setWeatherData(null);
    
    }

   
  };

  useEffect(() => {
    
    fetchWeatherData(city);
  }, [city]);

  return (
    <WeatherContext.Provider value={{ city, setCity, weatherData, error, fetchWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;