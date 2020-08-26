import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../Screens/CityForecast/CityForecastStyles";

const CityForecastListItem = ({ item }) => {
  const celsius = item.main.temp - 273.15;
  const url = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

  return (
    <TouchableOpacity>
      <View style={[styles.listItemView]}>
        <View style={styles.listDesc}>
          <Text style={styles.listDescText}>{item.dt_txt.slice(5, 16)}</Text>

          <Text style={styles.listDescText}>
            {"   |   " +
              (item.weather[0].description == "debesuota su pragiedruliais"
                ? "Pragiedruliai"
                : item.weather[0].description.charAt(0).toUpperCase() +
                  item.weather[0].description.slice(1))}
          </Text>
        </View>

        <View style={styles.listDesc}>
          <Image style={styles.weatherImage} source={{ uri: url }} />

          <Text style={styles.listDescText}>{celsius.toFixed(1)}°C</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CityForecastListItem;
