import React from "react";
import {Image, StyleSheet} from "react-native";
const TribeHouse = ({size = 24, style}) => {
  return (
    <Image
      source={require("../assets/icons/tribe-house.png")}
      style={{width: size, height: size, ...StyleSheet.flatten(style)}}
    />
  );
};

export default TribeHouse;
