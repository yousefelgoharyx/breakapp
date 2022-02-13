import React from "react";
import {Image, StyleSheet} from "react-native";
const Coin = ({size = 24, style}) => {
  return (
    <Image
      source={require("../assets/icons/coin.png")}
      style={{width: size, height: size, ...StyleSheet.flatten(style)}}
    />
  );
};

export default Coin;
