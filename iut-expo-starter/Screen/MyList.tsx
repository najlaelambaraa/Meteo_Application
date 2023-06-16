import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import { CITIES_DATA, City, WEATHER_DATA } from '../data/stub';
import CityListItem from '../Components/CityList';
import {useDispatch, useSelector} from 'react-redux';
import Search from '../Components/Search';
import { GetListWeather } from '../redux/Action/GetList_Weater';

export default function MyList({route,navigation}) {
  const cityList = useSelector(state => state.appReducer.city);
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
    <FlatList data={cityList} renderItem={({item}) =>
      <TouchableHighlight onPress={() => navigation.navigate("CityDetail", {"weather" : item})}>

        <CityListItem item={item}/>
      </TouchableHighlight>
      } keyExtractor={(item: City) => item.name}/>
      </View>
    </View>
    
  );
}

;
