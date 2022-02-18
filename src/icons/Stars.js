import React from "react";
import {Image, StyleSheet} from "react-native";
const Stars = ({size = 24, style}) => {
  return (
    <Image
      source={require("../assets/icons/stars.png")}
      style={{width: size, height: size, ...StyleSheet.flatten(style)}}
    />
  );
};

export default Stars;
