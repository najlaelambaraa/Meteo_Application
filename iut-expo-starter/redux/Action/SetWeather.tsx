import { Weather } from '../../data/stub';
import { GET_LIST_WEATHER, GET_WEATHER_DETAIL} from '../constants';

export const setDetailCity = (city: Weather| null) => {

  return {
    type: GET_WEATHER_DETAIL,
    payload: city,
  };
}
export const setListWeather = (weathers : [Weather]| null) => {
  return {
    type: GET_LIST_WEATHER,
    payload: weathers,
  };
}