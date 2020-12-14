import React, { useEffect, useState } from 'react'
import { geoApi } from './services/GeoYandexApi'


export default function GeoForm({setLatLng}) {
  const [value, setValue] = useState('Псков');

  useEffect(()=>{
    getLatLng()
  },[])
  const getLatLng = () => {
    geoApi.getCoords(value)
    .then(res=>setLatLng(res))
    .catch(err => console.log(err))
  }
  const handleSubmit = (e) => {
    e.preventDefault(); 
    getLatLng();   
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={ e => setValue(e.target.value)}/>      
    </form>
  )
}
