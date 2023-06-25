import { City, FAVORITE_CITY_DATA, WEATHER_DATA } from '../data/stub';
import { setFavoriteCity } from '../redux/Action/setFavoriteCity';
import { setWeather } from '../redux/Action/setWeather';
import { describe, expect, it } from '@jest/globals';




describe("Actions tests", () => {
    it('should create an action with FETCH_FAVORITE_CITY type', () => {
        const expectation = {
            type : 'FETCH_FAVORITE_CITY',
            payload : FAVORITE_CITY_DATA
        }
        expect(setFavoriteCity(FAVORITE_CITY_DATA)).toEqual(expectation);
    })
    it('should create an action with FETCH_WEATHER type', () => {
        const expectation = {
            type : 'FETCH_WEATHER',
            payload : WEATHER_DATA
        }
        expect(setWeather(WEATHER_DATA)).toEqual(expectation);
    })
})



