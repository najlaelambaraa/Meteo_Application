
import { City, Weather } from "../../data/stub";
import { setListCity } from "./actionsetFavoriteCity";
 
export const GetListWeather = () => {
    return async dispatch => {
      try {     
            const promise = await fetch('https://iut-weather-api.azurewebsites.net/cities');
            const weatherListJson = await promise.json();   
            console.log(weatherListJson )
            const weatherList: City[] = weatherListJson.map(elt =>  new City(elt["name"], elt["latitude"], elt["longitude"]));    
            
         
            dispatch (setListCity(weatherList));

      } catch (error) {
        console.log('Error---------', error);
    
      }
    }
  }