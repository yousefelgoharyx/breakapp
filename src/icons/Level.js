import React from "react";
import {Image, StyleSheet} from "react-native";
const Level = ({size = 24, style}) => {
  return (
    <Image
      source={require("../assets/icons/level.png")}
      style={{width: size, height: size, ...StyleSheet.flatten(style)}}
    />
  );
};

export default Level;
