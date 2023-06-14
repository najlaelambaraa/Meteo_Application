import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './Navigation/Navigation';
import store from './redux/Store';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <>
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <Navigation></Navigation>
      <StatusBar style="auto" />
      </SafeAreaView>
    
    </Provider>
     
    </>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
