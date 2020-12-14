import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';
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



export default function WeatherChart() {
  return (
    <Bar 
    
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
          label: 'Heights',
          backgroundColor: '#EC9CAC',
          borderColor: '#EC9CAC',
          data: [100, 200, 300]
        },
        {
          label: 'Lows',
          backgroundColor: '#9CCAF6',
          borderColor: '#9CCAF6',
          data: [40, 20, 60]
        }
      ]
    }}
    />
  )
}
