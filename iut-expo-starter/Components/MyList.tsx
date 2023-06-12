import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import { CITIES_DATA, City } from '../data/stub';
import CityListItem from './CityList';


const MyList = () => {
  const navigation = useNavigation();
  return (
    <View>

    <FlatList data={CITIES_DATA} renderItem={({item}) =>
      <TouchableHighlight onPress={() => navigation.navigate("Details", {"city": item})}>
        <CityListItem item={item}/>
      </TouchableHighlight>
      } keyExtractor={(item: City) => item.name}/>
      
    </View>
    
  );
}

export default MyList;
