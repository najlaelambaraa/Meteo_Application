import AsyncStorage from "@react-native-async-storage/async-storage";
import { City } from "../data/stub";

export const storeFavoriteCity = async (city: City | null) => {
    try {
      const cityJson = JSON.stringify(city)
      await AsyncStorage.setItem('favorite_city', cityJson);
    } catch (e) {
      console.log("An error occurred", e);
    }
}