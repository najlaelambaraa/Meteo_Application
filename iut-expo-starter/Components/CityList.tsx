import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { City, Weather } from '../data/stub';

type CityListItemProps = {
  item: City;
  city: City | null
}

export default function CityListItem(props: CityListItemProps,{navigation}) {
    const { item } = props;
    const getImagePath = (name: string) => {
        switch (name) {
          case 'Paris':
            return require('../assets/paris.jpg');
          case 'Clermont-Ferrand':
            return require('../assets/clermont.jpg');
          case 'Lyon':
            return require('../assets/lyon.jpg');
          case 'Marseille':
            return require('../assets/marseille.jpg');
          case 'Bruxelles':
            return require('../assets/bruxelles.jpg');
          default:
            return require('../assets/paris.jpg');
        }
      };
  return (
    <View>
      <View style={styles.item}>
        <View style={styles.iconContainer}>
          <Image source={getImagePath(item.name)} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.type}>{props.item.name}</Text>
          <Text>{props.item.latitude} </Text>
          <Text>{props.item.longitude} </Text>
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    width: 50,
    height: 40,
  },
  textContainer: {
    flex: 1,
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  separator: {
    marginVertical: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    height: 1,
    width: '90%',
  },
});
