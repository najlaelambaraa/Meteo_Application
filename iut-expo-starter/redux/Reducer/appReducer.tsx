import { ADD_FAVORITE_CITY, DELETE_CITY, FETCH_CITY, FETCH_FAVORITE_CITY, GET_WEATHER_LIST } from "../constants";
const initialState = {
    city: [],
    favoriteCity: [],
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
      case DELETE_CITY:
        // @ts-ignore
        return {...state, city: [...state.city.filter((item) => item.name != action.payload.name)]}  
        case FETCH_FAVORITE_CITY:
            // @ts-ignore
            return {...state, city: action.payload};

         case GET_WEATHER_LIST:
        // @ts-ignore
        return {...state, favoriteCity: state.favoriteCity}
      
        default:
        return state;
    }
  }