import {SET_FAVORITE_CITY} from '../constants';

export const setFavoriteCity = favoris=> {
  return {
    type: SET_FAVORITE_CITY,
    payload: favoris,
  };
}