
import { City, Weather } from "../../data/stub";
import { setWether } from "./actionsetwether";
 
export const getWeather = (city: City) => {
    return async dispatch => {
      try {     
            const promise = await fetch('https://iut-weather-api.azurewebsites.net/weather/city/name/'+city.name);
            const weatherJson = await promise.json();   
            const weather = new Weather(weatherJson["at"], weatherJson["visibility"], weatherJson["weatherType"], weatherJson["weatherDescription"], weatherJson["temperature"], weatherJson["temperatureFeelsLike"], weatherJson["humidity"], weatherJson["windSpeed"], weatherJson["pressure"], new City(weatherJson["city"]["name"], weatherJson["city"]["latitude"], weatherJson["city"]["longitude"]));    
            console.log(weather)
         
            dispatch ( setWether(weather));

      } catch (error) {
        console.log('Error---------', error);
    
      }
    }
  }