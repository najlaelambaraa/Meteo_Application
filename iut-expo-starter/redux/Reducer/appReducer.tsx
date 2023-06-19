import { Weather } from "../../data/stub";
import { ADD_FAVORITE_CITY, DELETE_CITY, FETCH_CITY, FETCH_FAVORITE_CITY, GET_LIST_WEATHER, GET_WEATHER_DETAIL, GET_WEATHER_LIST } from "../constants";
const initialState = {
    city: [],
    favoriteCity: [],
    weather : null,
    weathers : [],
  }
  
  export default appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE_CITY:
        // @ts-ignore
        state.favoriteCity.push(action.favoriteCity)
        return {...state};
        case FETCH_CITY:
        // @ts-ignore
        return {...state, city: action.payload};
        case GET_LIST_WEATHER:
        // @ts-ignore
        return {...state, weathers: action.payload};
        case DELETE_CITY:
        // @ts-ignore
        return {...state, city: [...state.city.filter((item) => item.name != action.payload.name)]}  
        case FETCH_FAVORITE_CITY:
            // @ts-ignore
            return {...state, city: action.payload};

         case GET_WEATHER_DETAIL:
        // @ts-ignore
          return { ...state, weather: action.payload};
        default:
        return state;
    }
  }