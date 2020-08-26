import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../Screens/Forecasts/ForecastsStyles";

const ForecastsListItem = (navigation, item) => {
  const celsius = item.main.temp - 273.15;
  const url = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("CityForecast", item);
      }}
    >
      <View style={styles.viewItem}>
        <Text style={styles.itemName}>{item.name}</Text>

        <View style={styles.itemInside}>
          <Image
            style={styles.itemImage}
            source={{
              uri: url,
            }}
          />

          <Text style={styles.itemText}>{celsius.toFixed(1)}°C</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ForecastsListItem;
