import React from 'react';
import { WeatherProvider } from './components/WeatherContext';
import CitySearch from './components/CitySearch';
import WeatherDataCard from './components/WeatherDataCard';
import '../src/style.css';


function App() {
  return (

    <div className='app-container'>
    <WeatherProvider>
      <div>
        <h1>Weather App</h1>
        <CitySearch />
        <WeatherDataCard />
      </div>
    </WeatherProvider>
    </div>
  );
}

export default App;
