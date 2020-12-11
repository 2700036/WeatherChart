

class OpenWeatherApi {
  constructor (APIkey){
    this._APIkey = APIkey;
  }
  getWeather = ({lat, lon}) => {           
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${this._APIkey}&lang=ru`)
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))    
    .then(({ current, daily, hourly, timezone_offset }) => {       
      current = { ...current, ...current.weather[0] };
      current.temp = Math.round(+current.temp);
      current.feels_like = Math.round(+current.feels_like);
      delete current.weather;
      daily.forEach((el, i) => {            
        daily[i] = { ...daily[i], ...daily[i].weather[0] };
        delete daily[i].weather;
      });
      return { current, daily, hourly, timezone_offset };
    })
    .catch(err => {
      console.log(err)
    throw err
    })
  }
}

const openWeatherApi = new OpenWeatherApi('5453b4e68730d486b305e6d640dec3da')

export default openWeatherApi;






// getWeather({lat, lon}){
//   console.log(`https://api.weather.yandex.ru/v2/informers?lat=${lat}&lon=${lon}`)
//   return fetch(`https://api.weather.yandex.ru/v2/informers?lat=${lat}&lon=${lon}`, {
     
//     headers: {
//       'X-Yandex-API-Key': this._APIkey
//     }
//   })
//   .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
//   .catch(err => console.log(err))
// }