import { City, Weather } from "../../data/stub";
import { setListWeather } from "./SetWeather";


export const GetListWeather = () => {
    return async dispatch => {
      try {     
            const promise = await fetch('https://iut-weather-api.azurewebsites.net/cities');
            const cityListJson = await promise.json();   
            console.log(cityListJson )
            const cityList: City[] = cityListJson.map(elt =>  new City(elt["name"], elt["latitude"], elt["longitude"]));          
            let weatherDetail: Weather[] = [];      
          for (let index = 0; index < cityList.length; index++) {
        
         
          let promise = await fetch('https://iut-weather-api.azurewebsites.net/weather/city/name/' + cityList[index].name);
          let weatherDetailJson = await promise.json();
          console.log(weatherDetailJson)
           let weatherData =  new Weather(
              weatherDetailJson.at,
              weatherDetailJson.visibility,
              weatherDetailJson.weatherType,
              weatherDetailJson.weatherDescription,
              weatherDetailJson.temperature,
              weatherDetailJson.temperatureFeelsLike,
              weatherDetailJson.humidity,
              weatherDetailJson.windSpeed,
              weatherDetailJson.pressure,
              cityList[index]
              );
              weatherDetail.push(weatherData)
           }
           dispatch(setListWeather(weatherDetail));
      } catch (error) {
        console.log(weatherfailler(error) );
    
      }
    }
  }

  export const weatherfailler = (error : string) => ({
    
    type: WEATHER_ERROR,
    payload: error,
   
  });