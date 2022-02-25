import React from "react";
import {Image, StyleSheet} from "react-native";
const Menu = ({size = 24, style}) => {
  return (
    <Image
      source={require("../assets/icons/menu.png")}
      style={{width: size, height: size, ...StyleSheet.flatten(style)}}
    />
  );
};

export default Menu;
