import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import { CITIES_DATA, City, WEATHER_DATA } from '../data/stub';
import CityListItem from '../Components/CityList';
import {useSelector} from 'react-redux';
import Search from '../Components/Search';

export default function MyList({route,navigation}) {
  const cityList = useSelector(state => state.appReducer.city);

  return (
    <View>
  <Search/>
  <View>
    <FlatList data={WEATHER_DATA} renderItem={({item}) =>
      <TouchableHighlight onPress={() => navigation.navigate("CityDetail", {"weather" : item})}>
        <CityListItem item={item}/>
      </TouchableHighlight>
      } keyExtractor={(item: City) => item.name}/>
      </View>
    </View>
    
  );
}

export default MyList;
