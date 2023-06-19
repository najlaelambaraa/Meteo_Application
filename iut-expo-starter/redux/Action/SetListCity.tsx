import CityListItem from '../../Components/CityList';
import { City, Weather } from '../../data/stub';
import { FETCH_CITY} from '../constants';

export const setListCity = (city: City[]| null) => {
  return {
    type: FETCH_CITY,
    payload: city,
  };
}