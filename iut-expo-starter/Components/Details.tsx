import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableHighlight, Image, Button } from "react-native";
import { City, Weather } from "../data/stub";

type CityProps = {
  weather: Weather;
  
};
async function changeFavoriteCity(city: City | null, already: boolean) {
  if (already){
    city = null
  }
  dispatch(addFavoriteCity(city))
}
const handleButtonPress = () => {
  
};

export function Details(props: CityProps) {
  
  return (

<View
      style={{
        alignItems: "center",
        backgroundColor: "#B6D0E2",         
        height: "100%",
        width: "100%",
      }}
    >
           <TouchableHighlight onPress={ handleButtonPress} 
            style={{
            backgroundColor: 'white',
            padding: 5,
            borderRadius: 5,
            alignItems: 'center',
            
            }}>
              
               <Button title={"Add to favorite"} />
              </TouchableHighlight>

      <Text style={styles.name}>{props.weather.city.name}</Text>
      <View style={styles.place}>
        <Text style={styles.petitText}>
          {props.weather.city.longitude} - {props.weather.city.latitude}
        </Text>
      </View>
      <TouchableHighlight>
        <Image
          style={styles.image}
          source={
            props.weather?.weatherType == "Nuageux"
              ? require("../assets/Nuageux.png")
              : require("../assets/Nuageux.png")
          }
        />
      </TouchableHighlight>
      <Text style={styles.weatherType}>{props.weather?.weatherType}</Text>
      <View style={styles.supertruc}>
        <Image
          style={styles.petitImage}
          source={require("../assets/icon.png")}
        />
        {/* <Button  onPress={} >

        </Button> */}

        <View style={styles.supertrucencore}>
          <Text style={styles.temperature}>{props.weather?.temperature}°C</Text>
          <Text style={styles.petitTemp}>
            Ressenti {props.weather?.temperatureFeelsLike}°C
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
          <Text style={styles.humidityText}>{props.weather?.humidity}%</Text>
        </View>
        <View style={styles.rightBox}>
          <View style={styles.imageEtTexte}>
            <Image
              style={styles.imageHumidity}
              source={require("../assets/icon.png")}
            />
            <Text style={styles.text}>WIND SPEED</Text>
          </View>
          <Text style={styles.humidityText}>{props.weather?.windSpeed} km/h</Text>
        </View>
      </View>
      <View style={styles.boxes}>
        <View style={styles.leftBox}>
          <View style={styles.imageEtTexte}>
            <Image
              style={styles.imageHumidity}
              source={require("../assets/icon.png")}
            />
            <Text style={styles.text}>PRESSURE</Text>
          </View>
          <Text style={styles.humidityText}>{props.weather?.pressure} hPa</Text>
        </View>
        <View style={styles.rightBox}>
          <View style={styles.imageEtTexte}>
            <Image
              style={styles.imageHumidity}
              source={require("../assets/icon.png")}
            />
            <Text style={styles.text}>VISIBILITY</Text>
          </View>
          <Text style={styles.humidityText}>{props.weather?.visibility} km</Text>
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
