import Axios from "axios";

export const getWeather = () => {
  return Axios.get(
    "https://api.openweathermap.org/data/2.5/find?lang=lt&lat=55.283523&lon=23.965058&cnt=50&appid=0c6694a9b23da06a0ae43d44f79f2386"
  );
};

export const getLaterWeather = (cityId) => {
  return Axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lang=lt&id=${cityId}&appid=0c6694a9b23da06a0ae43d44f79f2386`
  );
};
