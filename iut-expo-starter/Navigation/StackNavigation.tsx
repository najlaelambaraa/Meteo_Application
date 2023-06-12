import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CityListItem from "../Components/CityList";
import { Details } from "../Components/Details";
import FavorisScreen from "../Screen/FavorisScreen";
import HomeScreen from "../Screen/HomeScreen";

export default function CityNavigator() {
    const Stack = createStackNavigator();
    return (
    
        <Stack.Navigator initialRouteName="CityList">
        <Stack.Screen name="CityList" component={HomeScreen}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="Details" component={FavorisScreen}/>
      </Stack.Navigator>
        
      
    )
  }