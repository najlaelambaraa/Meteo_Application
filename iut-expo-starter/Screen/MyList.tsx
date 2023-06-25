import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Weather} from '../data/stub';
import CityListItem from '../Components/CityList';
import {useDispatch, useSelector} from 'react-redux';
import { GetListWeather } from '../redux/Action/GetListWeather';
import { SearchBar } from 'react-native-elements';


export default function MyList({route,navigation}) {
  const weathersList = useSelector(state => state.appReducer.weathers);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  useEffect(() => {
    const loadCity = async () => {
      await dispatch(GetListWeather());
    };
    loadCity();
  }, [dispatch]);

  return (
    <View>
  <SearchBar 
   placeholder="Rechercher..."
   onChangeText={(text) => setSearch(text)}
   value={search}

   style={{
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  }}
  
  />
  <View>
    <FlatList  
    data={weathersList.filter((item: { city: { name: string; }; }) => item.city.name.toLowerCase().includes(search.toLowerCase()))}
     renderItem={({item}) =>
    
      <TouchableHighlight onPress={() => navigation.push("CityDetail", {"weather" : item})}>

        <CityListItem item={item.city} city={item.city}/>
      </TouchableHighlight>
      } keyExtractor={(item: Weather) => item.city.name}/>
      </View>
    </View>
    
  );
}


