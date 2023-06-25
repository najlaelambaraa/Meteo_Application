import AsyncStorage from "@react-native-async-storage/async-storage";
import { Weather } from "../data/stub";
import { setFavoriteCity } from "../redux/Action/setFavoriteCity";

export const getFavoriteCityStorage = async () => {
    try {
      const cityJson = await AsyncStorage.getItem('favorite_city')
      const data : [Weather] = cityJson != null ? JSON.parse(cityJson) : [];
     // return cityJson != null ? JSON.parse(cityJson) : null;
      dispatch(setFavoriteCity(data));

    } catch(e) {
      console.log("An error occurred", e);
    }
  }


