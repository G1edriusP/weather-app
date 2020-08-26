import React from "react";
import { ActivityIndicator } from "react-native";

import styles from "./LoadingStyles";

const LoadingScreen = () => {
  return (
    <ActivityIndicator style={styles.center} size="large" color="#3a3846" />
  );
};

export default LoadingScreen;
