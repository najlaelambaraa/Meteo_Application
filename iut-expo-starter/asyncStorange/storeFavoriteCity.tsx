import AsyncStorage from "@react-native-async-storage/async-storage";
import { setFavoriteCity } from "../redux/Action/setFavoriteCity";
import { getFavoriteCityStorage } from "./getFavoriteCityStorage";

export const storeFavoriteCity = (favoris) => {
  console.log("ici return")
  return async (dispatch, getState) => {
    console.log("ici j'entre")
    try {
    
      const {favoris} = getState().appReducer;
      console.log("ici json")
        dispatch(getFavoriteCityStorage())
     
        
        const updatedFavorites = [...favoris, favoris ];
       
          await storeFavoriteToJSON(updatedFavorites);
          
        dispatch(setFavoriteCity(updatedFavorites));
    
    } catch (e) {
      console.log("An error occurred", e);
    }
  };
};

const storeFavoriteToJSON = async (weathers) =>{
  try {
    const weatherJson = JSON.stringify(weathers)
    await AsyncStorage.setItem('favorite_city', weatherJson);
    
  } catch (error) {
    console.log("An error occurred", error);
  }
}
