import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import { CITIES_DATA, City, Weather, WEATHER_DATA } from '../data/stub';
import CityListItem from '../Components/CityList';
import {useDispatch, useSelector} from 'react-redux';
import Search from '../Components/Search';
import { GetListWeather } from '../redux/Action/GetListWeather';


export default function MyList({route,navigation}) {
  const weathersList = useSelector(state => state.appReducer.weathers);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCity = async () => {
      await dispatch(GetListWeather());
    };
    loadCity();
  }, [dispatch]);

  return (
    <View>
  <Search/>
  <View>
    <FlatList data={weathersList} renderItem={({item}) =>
      <TouchableHighlight onPress={() => navigation.navigate("CityDetail", {"weather" : item})}>

        <CityListItem item={item.city} city={item.city}/>
      </TouchableHighlight>
      } keyExtractor={(item: Weather) => item.city.name}/>
      </View>
    </View>
    
  );
}

;
