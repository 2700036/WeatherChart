
class GeoYandexApi {
  constructor(APIkey) {
    this._APIkey = APIkey;
    
  }

  getCoords = (searchString) => {    
    return fetch(
      `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${this._APIkey}&geocode=${searchString}`
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)))
      .then((res) => {
        if(!res.response.GeoObjectCollection.featureMember.length){
          throw new Error('Локация не найдена');          
        }              
        const {
          name,
          description,
          Point: { pos },
        } = res.response.GeoObjectCollection.featureMember[0].GeoObject;
        const [lng, lat] = pos.split(' ');
        return {lat, lng}
        })
        
        
      
  }
}

export const geoApi = new GeoYandexApi('957a067b-e592-4d17-8392-b70e6f96eb76');
