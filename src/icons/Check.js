import React from "react";
import {Image, StyleSheet} from "react-native";
const Check = ({size = 24, style}) => {
  return (
    <Image
      source={require("../assets/icons/check.png")}
      style={{width: size, height: size, ...StyleSheet.flatten(style)}}
    />
  );
};

export default Check;
