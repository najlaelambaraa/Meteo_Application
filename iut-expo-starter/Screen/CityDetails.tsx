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
        dispatch(storeFavoriteCity(route.params.weather));
    };
 
    return (
        <View>           
            <Details weather={route.params.weather} handleButtonPress={handleButtonPress}  />
            <View>
                
          
            </View>
           
        </View>
    )
}

