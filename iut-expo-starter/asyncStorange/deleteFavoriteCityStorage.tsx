import AsyncStorage from "@react-native-async-storage/async-storage";

export const deleteFavoriteCity = async () => {
    try {
      await AsyncStorage.removeItem('favorite_city')
    } catch(e) {
      console.log("An error occurred", e);
    }
  }