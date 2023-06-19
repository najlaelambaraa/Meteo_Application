
import { useSelector } from "react-redux";
import { City, Weather } from "../../data/stub";
import { GetListWeather } from "./GetListWeather";
import { SetCityDetailAction } from "./SetCityDetailAction";
import { setDetailCity } from "./SetWeatherDetail";

 
export const GetWeatherDetail = (city : City) => {
    return async (dispatch: () => void) => {
      try {     
            
            let weatherDetail: Weather[] = [];  
            const cityList = useSelector(state => state.appReducer.city);
            dispatch(GetListWeather());
            
          
          for (let index = 0; index < cityList.length; index++) {
        
         
          let promise = await fetch('https://iut-weather-api.azurewebsites.net/weather/city/name/' + cityList[index].name);
          const weatherDetailJson = await promise.json();
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
             
          

              dispatch (SetCityDetailAction(weatherDetail));
              console.log(weatherDetail)

      } catch (error) {
        console.log('Error---------', error);
    
      }
    }
  }