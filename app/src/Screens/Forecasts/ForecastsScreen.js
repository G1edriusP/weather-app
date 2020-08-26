import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  RefreshControl,
} from "react-native";

import { getWeather } from "../../API/WeatherService";
import LoadingScreen from "../Loading/LoadingScreen";
import styles from "./ForecastsStyles";
import ForecastsListItem from "../../Utilities/ForecastsListItem";

const ForecastsScreen = ({ navigation }) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      getWeather()
        .then((value) => {
          setData(value.data);
        })
        .catch((e) => console.log(e.message));
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  }, [refreshing]);

  useEffect(() => {
    getWeather()
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
    <ImageBackground
      style={styles.bgImage}
      source={require("../../../assets/images/BG_1.jpg")}
    >
      <View style={styles.mainView}>
        <Text style={styles.topText}>Orų prognozė:</Text>

        <FlatList
          data={data.list}
          renderItem={({ item }) => ForecastsListItem(navigation, item)}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </ImageBackground>
  );
};

export default ForecastsScreen;
