import React from "react";
import {Image, StyleSheet} from "react-native";
const Game = ({size = 24, style}) => {
  return (
    <Image
      source={require("../assets/icons/game.png")}
      style={{width: size, height: size, ...StyleSheet.flatten(style)}}
    />
  );
};

export default Game;
