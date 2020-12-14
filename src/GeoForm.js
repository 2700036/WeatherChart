import React, { useEffect, useState } from 'react'
import { geoApi } from './services/GeoYandexApi'


export default function GeoForm({setLatLon}) {
  const [value, setValue] = useState('Псков');

  useEffect(()=>{
    getLatLon()
  },[])
  const getLatLon = () => {
    geoApi.getCoords(value)
    .then(res=>setLatLon(res))
    .catch(err => console.log(err))
  }
  const handleSubmit = (e) => {
    e.preventDefault(); 
    getLatLon();   
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={ e => setValue(e.target.value)}/>      
    </form>
  )
}
