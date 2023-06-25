import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteCityStorage } from '../asyncStorange/getFavoriteCityStorage';
import { City, FAVORITE_CITY_DATA, Weather } from '../data/stub';

type CityFavProps = {
  item: City;
}

const CityFavoriteItem = (props: CityFavProps) => {
  const { item } = props;

  return (
    <View style={styles.favoriteItem}>
      <Text style={styles.cityName}>{item.name}</Text>
      <View style={styles.coordinatesContainer}>
        <View style={styles.coordinateItem}>
          <Text style={styles.coordinateLabel}>Latitude</Text>
          <Text style={styles.coordinateValue}>{item.latitude}</Text>
        </View>
        <View style={styles.coordinateItem}>
          <Text style={styles.coordinateLabel}>Longitude</Text>
          <Text style={styles.coordinateValue}>{item.longitude}</Text>
        </View>
      </View>
    </View>
  );
};
  export default function FavoritesScreen() {

  const [newFavorite,setNewFavorite] = useState('');
  const favorites : [Weather] = useSelector(state => state.appReducer.favoris);
  const dispatch = useDispatch();
  useEffect(() => {
    const loadWeathers = async () => {
      
        dispatch(getFavoriteCityStorage());
       console.log("le total est : "+ favorites[0]["_city"]["_name"])
    };
    loadWeathers();
     
  }, [dispatch]);
  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes Favoris</Text>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <CityFavoriteItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );

  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'red'
  },
  favoriteItem: {
    marginBottom: 20
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333'
  },
  coordinatesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  coordinateItem: {
    alignItems: 'center'
  },
  coordinateLabel: {
    fontSize: 16,
    color: '#666666'
  },
  coordinateValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333'
  },
  separator: {
    height: 1,
    backgroundColor: '#cccccc',
    marginVertical: 10
  }
});
