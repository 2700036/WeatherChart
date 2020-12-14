import React, { useEffect, useState } from 'react';
import { Bar, defaults } from 'react-chartjs-2';
import openWeatherApi from './services/OpenWeatherApi';

defaults.global.legend.display = false;

const days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const labels = [...Array(7)].map((_, i)=>{
  const date = new Date();
  date.setDate(date.getDate() + i);  
  return days[date.getDay()];
});

export default function WeatherChart({latLon}) {
  const [datasets, setDatasets] = useState({
    heights: [],
    lows: []
  });

  useEffect(()=>{
    openWeatherApi.getWeather(latLon)
    .then(({daily})=>{
      const heights = daily.map(el=>el.temp.max);
      const lows = daily.map(el=>el.temp.min);      
      setDatasets({heights, lows})
    })
    .catch(err => console.log(err))
  }, [latLon])

  return (
    <Bar className='chart'    
    options={{      
      tooltips: {mode: 'index', intersect: false},
      scales: {
        xAxes: [{
          gridLines: false,
          ticks: { fontColor: '#F680BC', fontSize: 10, padding: 20 }
        }],
        yAxes: [{
          gridLines: false,
          ticks: { fontColor: '#F680BC', fontSize: 10, padding: 20 }
        }]
      }
    }}
    data={{
      labels,
      datasets: [
        {
          label: 'Макс',
          backgroundColor: '#EC9CAC',
          borderColor: '#EC9CAC',
          data: datasets.heights
        },
        {
          label: 'Мин',
          backgroundColor: '#9CCAF6',
          borderColor: '#9CCAF6',
          data: datasets.lows
        }
      ]
    }}
    />
  )
}
