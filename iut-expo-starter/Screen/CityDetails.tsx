import React, { useEffect } from "react";
import { View} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { Details } from "../Components/Details";
import { City, Weather } from "../data/stub";

export default function CityDetails({route}){
const dispatch = useDispatch();
   const weather: Weather =route.params.weather;
    console.log(weather);
    return (
        <View>           
            <Details weather={weather} />
        </View>
    )
}

