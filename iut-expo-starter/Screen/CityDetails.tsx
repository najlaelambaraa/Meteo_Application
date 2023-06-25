import React, { useEffect } from "react";
import { Button, TouchableHighlight, View} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { storeFavoriteCity } from "../asyncStorange/storeFavoriteCity";
import { Details } from "../Components/Details";
import { City, Weather } from "../data/stub";
import { addCityToFavoritesAction, addFavoriteCity } from "../redux/Action/addFavoriteCity";



export default function CityDetails({route}){
    
    const dispatch = useDispatch();
  const handleButtonPress = () => {
    console.log("NAAAAAAAAAAA FAV")
    dispatch(addCityToFavoritesAction(route.params.weather.city));
};

    
  const weather : Weather = route.params.weather;
 
    return (
        <View>           
            <Details weather={weather} handleButtonPress={handleButtonPress}  />
           
        </View>
    )
}

