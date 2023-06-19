import React, { useState } from "react";
import { View, Text, StyleSheet, Platform, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (searchText === '') {

      return;
    }

   
    console.log(`Recherche de la ville : ${searchText}`);

    setSearchText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Rechercher une ville..."
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Ionicons name="search" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 10,
    color: '#333',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});

export default Search;
