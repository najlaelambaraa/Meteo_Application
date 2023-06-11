import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableHighlight, Image } from "react-native";
import { City, Weather } from "../data/stub";

type CityProps = {
  weather: Weather;
};

export function Details(props: CityProps) {
  const weather: Weather = props.weather;
  const city = weather.city;

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#B6D0E2",         
        height: "100%",
        width: "100%",
      }}
    >
      <Text style={styles.name}>{city.name}</Text>
      <View style={styles.place}>
        <Text style={styles.petitText}>
          {city.longitude} - {city.latitude}
        </Text>
      </View>
      <TouchableHighlight>
        <Image
          style={styles.image}
          source={
            weather?.weatherType == "Nuageux"
              ? require("../assets/Nuageux.png")
              : require("../assets/Nuageux.png")
          }
        />
      </TouchableHighlight>
      <Text style={styles.weatherType}>{weather?.weatherType}</Text>
      <View style={styles.supertruc}>
        <Image
          style={styles.petitImage}
          source={require("../assets/temperature.png")}
        />
        <View style={styles.supertrucencore}>
          <Text style={styles.temperature}>{weather?.temperature}°C</Text>
          <Text style={styles.petitTemp}>
            Ressenti {weather?.temperatureFeelsLike}°C
          </Text>
        </View>
      </View>
      <View style={styles.boxes}>
        <View style={styles.leftBox}>
          <View style={styles.imageEtTexte}>
            <Image
              style={styles.imageHumidity}
              source={require("../assets/humidity.png")}
            />
            <Text style={styles.text}>HUMIDITY</Text>
          </View>
          <Text style={styles.humidityText}>{weather?.humidity}%</Text>
        </View>
        <View style={styles.rightBox}>
          <View style={styles.imageEtTexte}>
            <Image
              style={styles.imageHumidity}
              source={require("../assets/wind.png")}
            />
            <Text style={styles.text}>WIND SPEED</Text>
          </View>
          <Text style={styles.humidityText}>{weather?.windSpeed} km/h</Text>
        </View>
      </View>
      <View style={styles.boxes}>
        <View style={styles.leftBox}>
          <View style={styles.imageEtTexte}>
            <Image
              style={styles.imageHumidity}
              source={require("../assets/pressure.png")}
            />
            <Text style={styles.text}>PRESSURE</Text>
          </View>
          <Text style={styles.humidityText}>{weather?.pressure} hPa</Text>
        </View>
        <View style={styles.rightBox}>
          <View style={styles.imageEtTexte}>
            <Image
              style={styles.imageHumidity}
              source={require("../assets/visibility.png")}
            />
            <Text style={styles.text}>VISIBILITY</Text>
          </View>
          <Text style={styles.humidityText}>{weather?.visibility} km</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    marginTop: 30,
    fontSize: 35,
    fontWeight: "bold",
  },
  place: {
    marginBottom: 20,
  },
  petitText: {
    fontSize: 15,
  },
  image: {
    height: 100,
    width: 100,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  temperature: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "600",
  },
  petitTemp: {
    fontSize: 16,
    marginBottom: 35,
  },
  weatherType: {
    fontSize: 17,
    marginBottom: 20,
  },
  button: {
    height: 30,
    width: 30,
    marginTop: 13,
    alignSelf: "flex-end",
    margin: 5,
  },
  supertruc: {
    flexDirection: "row",
  },
  supertrucencore: {
    flexDirection: "column",
  },
  petitImage: {
    height: 40,
    width: 40,
    marginRight: 7,
    marginTop: 15,
  },
  imageHumidity: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  leftBox: {
    alignSelf: "flex-start",
    margin: 25,
    marginTop: 10,
    marginBottom: 5,
    height: 90,
    width: 150,
    flexDirection: "column",
    backgroundColor: "powderblue",//carré
    borderRadius: 20,
  },
  rightBox: {
    alignSelf: "flex-start",
    marginRight: 25,
    marginTop: 10,
    marginBottom: 5,
    height: 90,
    width: 150,
    flexDirection: "column",
    backgroundColor: "powderblue",
    borderRadius: 20,
  },
  humidityText: {
    marginTop: 13,
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
  },
  text: {
    fontWeight: "normal",
    fontStyle: "italic",
    fontSize: 10,
    alignSelf: "center",
    marginLeft: 7,
  },
  imageEtTexte: {
    flexDirection: "row",
    marginTop: 13,
  },
  boxes: {
    flexDirection: "row",
  },
});
