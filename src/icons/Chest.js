import React from "react";
import {Image, StyleSheet} from "react-native";
const Chest = ({size = 24, style}) => {
  return (
    <Image
      source={require("../assets/icons/chest.png")}
      style={{width: size, height: size, ...StyleSheet.flatten(style)}}
    />
  );
};

export default Chest;
