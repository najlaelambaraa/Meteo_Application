import {FETCH_CITY, SET_FAVORITE_CITY, GET_LIST_WEATHER, GET_WEATHER_DETAIL,ADD_FAVORIS } from "../constants";
const initialState = {
    city: [],
    weather : null,
    weathers : [],
    favoris : [],
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

        default:
        return state;
    }
  }