import React, { useEffect } from "react";
import { Button, TouchableHighlight, View} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { storeFavoriteCity } from "../asyncStorange/storeFavoriteCity";
import { Details } from "../Components/Details";
import { City, Weather } from "../data/stub";



export default function CityDetails({route}){
    
    const dispatch = useDispatch();
  const handleButtonPress = () => {
    console.log("NAAAAAAAAAAA FAV")
    dispatch(storeFavoriteCity(route.params.weather));
};

    
  const weather : Weather = route.params.weather;
 
    return (
        <View>           
            <Details weather={weather} handleButtonPress={handleButtonPress}  />
           
        </View>
    )
}

