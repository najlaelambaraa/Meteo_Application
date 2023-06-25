import { createStackNavigator } from "@react-navigation/stack";
import CityDetails from "../Screen/CityDetails";


import MyList from "../Screen/MyList";

export default function CityNavigator() {
    const Stack = createStackNavigator();
    return (
    
        <Stack.Navigator initialRouteName="ListCity">
     
        <Stack.Screen name="CityDetail" component={CityDetails}/>
        <Stack.Screen name="ListCity" options={{title : "Meteo City"} } component={MyList}/>
      
      </Stack.Navigator>
        
      
    )
  }