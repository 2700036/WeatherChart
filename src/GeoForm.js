import React from 'react'
import { geoApi } from './services/GeoYandexApi'


export default function GeoForm() {
  geoApi.getCoords('Псков')
  .then(res=>{
    console.log(res)
  })
  return (
    <div>
      
    </div>
  )
}
