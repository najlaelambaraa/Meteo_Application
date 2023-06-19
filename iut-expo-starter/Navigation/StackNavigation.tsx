import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CityListItem from "../Components/CityList";
import { Details } from "../Components/Details";
import CityDetails from "../Screen/CityDetails";
import FavorisScreen from "../Screen/FavorisScreen";
import HomeScreen from "../Screen/HomeScreen";
import MyList from "../Screen/MyList";

export default function CityNavigator() {
    const Stack = createStackNavigator();
    return (
    
        <Stack.Navigator initialRouteName="CityDetails">
     
        <Stack.Screen name="CityDetails" component={CityDetails}/>
        <Stack.Screen name="ListCity" component={MyList}/>
      
      </Stack.Navigator>
        
      
    )
  }