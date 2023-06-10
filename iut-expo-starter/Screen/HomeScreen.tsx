import React from 'react';
import { View, Text ,StyleSheet } from 'react-native';



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <Text style={styles.title}>Mon super Home!</Text>
      </View>
      <Text>Mon super texte ...</Text>
      
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
