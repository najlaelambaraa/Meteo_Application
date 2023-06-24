import { deleteFavoriteCity } from "../../asyncStorange/deleteFavoriteCityStorage";
import { storeFavoriteCity } from "../../asyncStorange/storeFavoriteCity";
import { City } from "../../data/stub";
import { GetListWeather } from "./GetListWeather";

import { setFavoriteCity } from "./setFavoriteCity";
import { setWeather } from "./setWeather";

export const addFavoriteCity = (city : City | null) => {
    return async dispatch => {
        try {
            await deleteFavoriteCity()
            await storeFavoriteCity(city)
            dispatch(setFavoriteCity(city))
            if (city != null){
                dispatch(GetListWeather())
            }
            else{
                dispatch(setWeather(null))
            }
        } catch (error) {
            console.log('Error---------', error);
           
        }
    }
  }