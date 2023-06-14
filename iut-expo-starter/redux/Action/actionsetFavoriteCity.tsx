import { City } from '../../data/stub';
import { FETCH_CITY} from '../constants';

export const setFavoriteCity = (city: City | null) => {
  return {
    type: FETCH_CITY,
    payload: city,
  };
}