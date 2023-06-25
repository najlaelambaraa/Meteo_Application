import AsyncStorage from "@react-native-async-storage/async-storage";
import { City } from "../../data/stub";
import { ADD_CITY_TO_FAVORITES_SUCCESS, ADD_FAVORIS, FETCH_FAVORITE_CITIES_SUCCESS } from "../constants"

export const addFavoriteCity = weather => ({
    
    type: ADD_FAVORIS,
    payload: weather,
   
  });
  
  export const addCityToFavoritesSuccess = (city: City) => ({
    type: ADD_CITY_TO_FAVORITES_SUCCESS,
    payload: city,
});

export const fetchFavoriteCitiesSuccessAction = () => {
  return async (dispatch: (arg0: { type: string; payload?: City[]; }) => void)=> {
      try {
          console.log("fetchFavoriteCitiesSuccessAction");
          const keys = await AsyncStorage.getAllKeys();
          console.log("fetchFavoriteCitiesSuccessAction - after getAllKeys", keys);
          const cities = await AsyncStorage.multiGet(keys);
          console.log("fetchFavoriteCitiesSuccessAction - after multiGet", cities);
          const citiesJson = cities.map((city) => {
              return JSON.parse(city[1]!);
          });
          console.log("fetchFavoriteCitiesSuccessAction - after map", citiesJson);
          //wrap to City array
          const citiesArray: City[] = [];
          citiesJson.forEach((city) => {
              citiesArray.push(city);
          });
          console.log("fetchFavoriteCitiesSuccessAction - after forEach", citiesArray);
          dispatch(fetchFavoriteCitiesSuccess(citiesArray));
      } catch (error) {
          console.log(error);
      }
  }
}
export const fetchFavoriteCitiesSuccess = (cities: City[]|null) => ({
  type: FETCH_FAVORITE_CITIES_SUCCESS,
  payload: cities,
});

export const addCityToFavoritesAction = (city: City) => {
  return async (dispatch: (arg0: { type: string; payload?: any; }) => void)=> {
      try {
          console.log("addCityToFavoritesAction");
          const jsonCity = JSON.stringify(city);
          await AsyncStorage.setItem(city.name.toString(), jsonCity);
          console.log("addCityToFavoritesAction - after setItem", jsonCity);
          dispatch(addCityToFavoritesSuccess(city));
          const key = await AsyncStorage.getAllKeys();
          console.log(key)
          const data = await AsyncStorage.multiGet(key);
          console.log("list de données ",data)
      } catch (error) {
          console.log(error);
      }
  }
}
  