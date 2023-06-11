import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
 
export function Search() {
 
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "powderblue",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 12,
      }}
    >
      <Text style={[TopBarStyle.title, styles.meteoText]}>Météo</Text>
    </View>
  );
}
const TopBarStyle = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#B6D0E2",
  },
});
const styles = StyleSheet.create({
  meteoText: {
    color: "black",
    fontWeight: "bold",
  },
});
