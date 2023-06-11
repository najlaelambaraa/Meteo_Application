import React from 'react';
import FavorisScreen from "../Screen/FavorisScreen";
import HomeScreen from "../Screen/HomeScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
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
