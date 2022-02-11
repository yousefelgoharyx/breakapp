import React from "react";
import {Image, ImageBackground, StyleSheet} from "react-native";
const frame = require("../assets/frames/ice.png");
const IceFrame = ({source}) => {
  return (
    <ImageBackground source={frame} style={styles.frame}>
      <Image source={source} style={styles.image} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  frame: {
    width: 72,
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    zIndex: 1,
  },
  image: {
    width: 44,
    height: 44,
    zIndex: -1,
    borderRadius: 50 / 2,
    top: 3,
  },
});

export default IceFrame;
