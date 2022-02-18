import React from "react";
import {Image, StyleSheet} from "react-native";
const Clown = ({size = 24, style}) => {
  return (
    <Image
      source={require("../assets/icons/clown.png")}
      style={{width: size, height: size, ...StyleSheet.flatten(style)}}
    />
  );
};

export default Clown;
