import React from "react";
import {Image, StyleSheet} from "react-native";
const Gift = ({size = 24, style}) => {
  return (
    <Image
      source={require("../assets/icons/gift.png")}
      style={{width: size, height: size, ...StyleSheet.flatten(style)}}
    />
  );
};

export default Gift;
