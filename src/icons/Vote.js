import React from "react";
import {Image, StyleSheet} from "react-native";
const Vote = ({size = 24, style}) => {
  return (
    <Image
      source={require("../assets/icons/vote.png")}
      style={{width: size, height: size, ...StyleSheet.flatten(style)}}
    />
  );
};

export default Vote;
