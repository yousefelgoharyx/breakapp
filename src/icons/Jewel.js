import React from "react";
import {Image, StyleSheet} from "react-native";
const Jewel = ({size = 24, style}) => {
  return (
    <Image
      source={require("../assets/icons/jewels.png")}
      style={{width: size, height: size, ...StyleSheet.flatten(style)}}
    />
  );
};

export default Jewel;
