import React, { useState, useEffect } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import getBackground from "../../Utilities/BackgroundSwitcher";
import { getLaterWeather } from "../../API/WeatherService";
import LoadingScreen from "../Loading/LoadingScreen";
import styles from "./CityForecastStyles";
import CityForecastListItem from "../../Utilities/CityForecastListItem";

const CityForecastScreen = ({ route }) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const city = route.params;
  const celsius = city.main.temp - 273.15;
  const statusUrl = `https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;

  useEffect(() => {
    getLaterWeather(city.id)
      .then((value) => {
        setData(value.data);
        setLoading(false);
      })
      .catch((e) => console.log(e.message));
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ImageBackground style={styles.bgImage} source={getBackground()}>
      <View style={styles.mainView}>
        <View style={styles.headView}>
          <Text style={styles.tempText}>{celsius.toFixed(0)}°C</Text>

          <Text style={styles.headText}>{city.name}</Text>

          <Image style={styles.weatherImage} source={{ uri: statusUrl }} />

          <Text style={styles.listDescText}>
            {city.weather[0].description.charAt(0).toUpperCase() +
              city.weather[0].description.slice(1)}
          </Text>
        </View>

        <View style={styles.listView}>
          <FlatList
            data={data.list}
            renderItem={CityForecastListItem}
            keyExtractor={(item) => item.dt.toString()}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default CityForecastScreen;
