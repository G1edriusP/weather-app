import React, { useState } from "react";
import { AppLoading } from "expo";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ForecastsScreen from "./app/src/Screens/Forecasts/ForecastsScreen";
import CityForecastScreen from "./app/src/Screens/CityForecast/CityForecastScreen";
import getFonts from "./app/src/Utilities/FontsLoader";

const Stack = createStackNavigator();

export default App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Forecasts">
          <Stack.Screen
            name="Forecasts"
            component={ForecastsScreen}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "transparent",
              },
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="CityForecast"
            component={CityForecastScreen}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "transparent",
              },
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
};
