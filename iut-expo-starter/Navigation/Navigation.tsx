import React from 'react';
import FavorisScreen from "../Screen/FavorisScreen";
import HomeScreen from "../Screen/HomeScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import CityDetails from '../Screen/CityDetails';
import MyList from '../Screen/MyList';
import CityNavigator from './StackNavigation';


 export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    const Stack = createStackNavigator()
    return (
        //@ts-ignore
        <NavigationContainer>           
            <BottomTabNavigator.Navigator initialRouteName="Home">
            <BottomTabNavigator.Screen name="Home" component={CityNavigator}
                           options={{
                               title: 'Home',
                               headerShown : false,
                               tabBarIcon: ({color}) => <TabBarIcon name="home" color={'black'}/>,
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
