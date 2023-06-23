import { City } from '../../data/stub';
import {ADD_FAVORITE_CITY, FETCH_FAVORITE_CITY} from '../constants';

export const setFavoriteCity = (city: City | null) => {
  return {
    type: FETCH_FAVORITE_CITY,
    payload: city,
  };
}