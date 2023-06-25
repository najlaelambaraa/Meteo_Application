import { ADD_FAVORIS } from "../constants"

export const addFavoriteCity = weather => ({
    
    type: ADD_FAVORIS,
    payload: weather,
   
  });