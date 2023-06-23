import AsyncStorage from "@react-native-async-storage/async-storage";
export const getFavoriteCityStorage = async () => {
    try {
      const cityJson = await AsyncStorage.getItem('favorite_city')
      return cityJson != null ? JSON.parse(cityJson) : null;
    } catch(e) {
      console.log("An error occurred", e);
    }
  }