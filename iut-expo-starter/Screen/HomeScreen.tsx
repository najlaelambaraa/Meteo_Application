import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import CityListItem from '../Components/CityList';
import MyList from '../Components/MyList';
import { Search } from '../Components/Search';
import { City } from '../data/stub';


export default function HomeScreen() {
  return (
    <View >
      <View style={styles.centered}>
      
      </View>
      
      <MyList/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  centered: {
    alignItems: "center"
  },
  title: {
    fontSize: 20
  }
});
