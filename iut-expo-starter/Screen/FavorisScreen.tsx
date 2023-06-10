import React from 'react';
import { View, Text ,StyleSheet } from 'react-native';



export default function FavorisScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <Text style={styles.title}>Mes super Favoris !</Text>
      </View>
      <Text>Favoris</Text>
      
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darksalmon",
  },
  centered: {
    alignItems: "center"
  },
  title: {
    fontSize: 20
  }
});