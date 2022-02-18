import React from "react";
import {Image, StyleSheet} from "react-native";
const Avatar = ({source, size = 32, style}) => {
  return (
    <Image
      source={source}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        ...StyleSheet.flatten(style),
      }}
    />
  );
};

export default Avatar;
