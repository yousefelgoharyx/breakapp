import React from "react";
import {Image, ImageBackground, StyleSheet} from "react-native";
const frame = require("../assets/frames/dark.png");
const DarkFrame = ({source}) => {
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
    width: 38,
    height: 38,
    zIndex: -1,
    borderRadius: 38 / 2,
  },
});

export default DarkFrame;
