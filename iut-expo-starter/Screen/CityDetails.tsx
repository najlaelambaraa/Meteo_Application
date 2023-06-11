import React from "react";
import { View} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Details } from "../components/Details";

import { City, Weather } from "../data/stub";

export default function CityDetails({route}){
    const insets = useSafeAreaInsets();
    const statusBarHeight = insets.top;

    const weather: Weather =route.params.weather;

    return (
        <View>           
            <Details weather={weather}/>
        </View>
    )
}

