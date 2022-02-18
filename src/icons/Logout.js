import React from "react";
import {Image, StyleSheet} from "react-native";
const Logout = ({size = 24, style}) => {
  return (
    <Image
      source={require("../assets/icons/logout.png")}
      style={{width: size, height: size, ...StyleSheet.flatten(style)}}
    />
  );
};

export default Logout;
