import CityListItem from '../../Components/CityList';
import { City, Weather } from '../../data/stub';
import { GET_WEATHER_DETAIL } from '../constants';


export const SetCityDetailAction = (weather: Weather | null) => {
  return {
    type: GET_WEATHER_DETAIL,
    payload: weather,
  };
}
