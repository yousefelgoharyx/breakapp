import React from "react";
import {Image, StyleSheet} from "react-native";
const Coins = ({size = 24, style}) => {
  return (
    <Image
      source={require("../assets/icons/coins.png")}
      style={{width: size, height: size, ...StyleSheet.flatten(style)}}
    />
  );
};

export default Coins;
