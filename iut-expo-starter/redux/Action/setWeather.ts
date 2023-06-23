import { Weather } from "../../data/stub";
import { FETCH_WEATER } from "../constants";

export const setWeather = (weather: Weather | null) => {
    return {
      type: FETCH_WEATER,
      payload: weather,
    };
  }