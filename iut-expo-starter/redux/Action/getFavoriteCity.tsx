import { getFavoriteCityStorage } from "../../asyncStorange/getFavoriteCityStorage";
import { City } from "../../data/stub";
import { GetListWeather } from "./GetListWeather";
import { setFavoriteCity } from "./setFavoriteCity";
import { setWeather } from "./setWeather";

export const getFavoriteCity = () => {
  console.log("get fav")
    return async dispatch => {
      try {
            const json = await getFavoriteCityStorage()
            if (json!=null){
                const city = new City(json["_name"], json["_latitude"], json["_longitude"])
                dispatch(setFavoriteCity(city))
                dispatch(GetListWeather(city))
            }
            else{
                dispatch(setFavoriteCity(null))
                dispatch(setWeather(null))
            }
      } catch (error) {
        console.log('Error---------', error);
                
      }
    }
  }