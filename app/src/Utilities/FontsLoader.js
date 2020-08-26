import * as Font from "expo-font";

const getFonts = () =>
  Font.loadAsync({
    "roboto-regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "roboto-light": require("../../assets/fonts/Roboto-Light.ttf"),
  });

export default getFonts;
