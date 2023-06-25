import { describe, expect, it } from "@jest/globals";
import { FAVORITE_CITY_DATA, WEATHER_DATA } from "../data/stub";
import appReducer from "../redux/Reducer/appReducer";


describe('test reducer', () => {
    let initialState = {
        weatherListSearched : [],
        favoriteWeather : null,
        favoriteCity : null,
        weatherList : []
    }
    it('should return initial state', () => {
        expect(appReducer(undefined, {})).toEqual(initialState);
    })

    it('should handle favorite city', () => {
        expect(appReducer(initialState, {type : 'SET_FAVORITE_CITY', FAVORITE_CITY_DATA})).toEqual({weatherList : [], favoriteCity : FAVORITE_CITY_DATA})
    })

    it('should handle weather', () => {
        expect(appReducer(initialState, {type : 'FETCH_WEATHER', WEATHER_DATA})).toEqual({weatherList : [WEATHER_DATA], favoriteCity : null})
    })
})