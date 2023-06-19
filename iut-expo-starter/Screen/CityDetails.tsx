import React, { useEffect } from "react";
import { View} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { Details } from "../Components/Details";

import { City, Weather } from "../data/stub";
import { GetWeatherDetail } from "../redux/Action/GetWeatherDetail";

export default function CityDetails({route}){
    
   /* const statusBarHeight = insets.top;
    const city: City = route.params.city;
    //console.log(city)

    const weather : Weather = useSelector(state => state.appReducer.weather);
    */
   

    /*useEffect(() => {
        
    const loadCity = async () => {
      await dispatch(GetWeatherDetail(city)); };
      const insets = useSafeAreaInsets();
    const statusBarHeight = insets.top;
*/
const dispatch = useDispatch();

 
    const weather: Weather =route.params.weather;
    console.log(weather);
    
   /* loadCity();
    
  }, );*/
    return (
        <View>
            
            <Details weather={weather} />
        </View>
    )
}

