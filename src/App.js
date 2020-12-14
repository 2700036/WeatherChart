import React, { useState } from 'react';
import GeoForm from './GeoForm';
import WeatherChart from './WeatherChart';

import './App.css';

export default function App() {
  const [latLon, setLatLon] = useState(null)

  return (
    <div className="app">      
      <GeoForm setLatLon={setLatLon}/>      
      {latLon && <WeatherChart latLon={latLon}/>}
    </div>
  );
}
