import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { Weather } from "../data/stub";
import { setFavoriteCity } from "../redux/Action/setFavoriteCity";

export const getFavoriteCityStorage = async () => {
  return async(
    dispatch 
  )=> {
    try {
      console.log("try")
      
      const cityJson = await AsyncStorage.getItem('favorite_city')
      const data : [Weather] = cityJson != null ? JSON.parse(cityJson) : [];
     console.log(data)
      dispatch(setFavoriteCity(data));

    } catch(e) {
      console.log("An error occurred", e);
    }
  }
    
  }


