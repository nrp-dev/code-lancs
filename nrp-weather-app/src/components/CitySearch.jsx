import React, { useContext, useState } from 'react';
import { WeatherContext } from './WeatherContext'

function CitySearch() {
  const { setCity } = useContext(WeatherContext);
  const [inputCity, setInputCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      setCity(inputCity);
      setInputCity('');
    }
  };

  return (
    <form className="weather-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        placeholder="Enter City"
        size={50}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default CitySearch;
