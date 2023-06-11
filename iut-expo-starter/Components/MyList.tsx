import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { CITIES_DATA, City } from '../data/stub';
import CityListItem from './CityList';


const MyList = () => {
  return (
    <View>
      <FlatList data={CITIES_DATA} renderItem={CityListItem}
                keyExtractor={(item: City) => item.name}/>
      
    </View>
    
  );
}

export default MyList;
