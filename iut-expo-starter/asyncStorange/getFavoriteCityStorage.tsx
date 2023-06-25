import AsyncStorage from "@react-native-async-storage/async-storage";
import { Weather } from "../data/stub";
import { setFavoriteCity } from "../redux/Action/setFavoriteCity";

export const getFavoriteCityStorage =  () => {
  return async(
    dispatch 
  )=> {
    try {
      console.log("try")
      
      const cityJson = await AsyncStorage.getItem('favorite_city')
      console.log(cityJson)
      const data : [Weather] = cityJson != null ? JSON.parse(cityJson) : [];
     console.log(data)
      dispatch(setFavoriteCity(data));

    } catch(e) {
      console.log("An error occurred", e);
    }
  }
    
  }


