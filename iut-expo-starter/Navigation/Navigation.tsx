import React from 'react';
import FavorisScreen from "../Screen/FavorisScreen";
import HomeScreen from "../Screen/HomeScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Details } from '../Components/Details';
import { createStackNavigator } from '@react-navigation/stack';
export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    const Stack = createStackNavigator()
    return (
        //@ts-ignore
        <NavigationContainer>
           
            <BottomTabNavigator.Navigator initialRouteName="Home">
            <BottomTabNavigator.Screen name="Home" component={HomeScreen}
                           options={{
                               title: 'Home',
                               tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
                           }}/>
               <BottomTabNavigator.Screen name="Favoris" component={FavorisScreen}
                           options={{
                               title: 'Favoris',
                               tabBarIcon: ({color}) => <TabBarIcon name="heart" color="red"/>,
                           }}/>
                                                  <Stack.Screen name="Details"  component={Details}
                                                  
                           options={{
                            
                               title: 'Details',
                            }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
    function TabBarIcon(props: {
        name: React.ComponentProps<typeof FontAwesome>['name'];
        color: string;
    }) {
        return <FontAwesome size={30} {...props} />;
    }
}
