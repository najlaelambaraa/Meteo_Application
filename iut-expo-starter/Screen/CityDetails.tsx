import React, { useEffect } from "react";
import {View} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Details } from "../Components/Details";
import { Weather } from "../data/stub";
import { addCityToFavoritesAction} from "../redux/Action/FavorisAction";



export default function CityDetails({route}){
    
    const dispatch = useDispatch();
  const handleButtonPress = () => {
    
    dispatch(addCityToFavoritesAction(route.params.weather.city));
};

    
  const weather : Weather = route.params.weather;
 
    return (
        <View>           
            <Details weather={weather} handleButtonPress={handleButtonPress}  />
           
        </View>
    )
}

