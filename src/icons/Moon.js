import React from "react";
import {Image, StyleSheet} from "react-native";
const Moon = ({size = 24, style}) => {
  return (
    <Image
      source={require("../assets/icons/moon.png")}
      style={{width: size, height: size, ...StyleSheet.flatten(style)}}
    />
  );
};

export default Moon;
