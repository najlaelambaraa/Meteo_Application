import {FETCH_CITY, SET_FAVORITE_CITY, GET_LIST_WEATHER, GET_WEATHER_DETAIL,ADD_FAVORIS, ADD_CITY_TO_FAVORITES_SUCCESS, FETCH_FAVORITE_CITIES_SUCCESS, FAVORITE_CITIES_ERROR, WEATHER_ERROR } from "../constants";
const initialState = {
    city: [],
    weather : null,
    weathers : [],
    favoris : [],
    error : "",
  }
  
  export default appReducer = (state = initialState, action) => {

    switch (action.type) {
       
        case FETCH_CITY:
          return {...state, city: action.payload};
        case GET_LIST_WEATHER:
          return {...state, weathers: action.payload};

        case ADD_FAVORIS:
            return {  ...state,favoris: [...state.favoris, action.payload],};

        case SET_FAVORITE_CITY:
            return {...state, favoris: action.payload};

         case GET_WEATHER_DETAIL:
            return { ...state, weather: action.payload};
          
          case ADD_CITY_TO_FAVORITES_SUCCESS :
            return { ...state, favoris:[...state.favoris,action.payload]}

          case FETCH_FAVORITE_CITIES_SUCCESS:
          return { ...state, favoris: action.payload}
          case FAVORITE_CITIES_ERROR:
            return { ...state, error: action.payload}

          case WEATHER_ERROR:
            return { ...state, error: action.payload}

        default:
        return state;
    }
  }