import React from "react";
import {Image, ImageBackground, StyleSheet} from "react-native";
const frame = require("../assets/frames/gold.png");
const GoldFrame = ({source, top = 0}) => {
  return (
    <ImageBackground source={frame} style={[styles.frame, {top}]}>
      <Image source={source} style={styles.image} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  frame: {
    width: 96,
    height: 96,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    zIndex: 1,
  },
  image: {
    width: 96 - 28,
    height: 96 - 28,
    zIndex: -1,
    borderRadius: (96 - 28) / 2,
  },
});

export default GoldFrame;
