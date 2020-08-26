const getBackground = () => {
  var currentTime = new Date().getHours();
  if (0 <= currentTime && currentTime < 5) {
    return require("../../assets/images/BG_night.jpg");
  } else if (5 <= currentTime && currentTime < 12) {
    return require("../../assets/images/BG_morning.jpg");
  } else if (12 <= currentTime && currentTime < 19) {
    return require("../../assets/images/BG_day.jpg");
  } else if (19 <= currentTime && currentTime < 22) {
    return require("../../assets/images/BG_evening.jpg");
  } else if (22 <= currentTime && currentTime < 24) {
    return require("../../assets/images/BG_night.jpg");
  }
};

export default getBackground;
