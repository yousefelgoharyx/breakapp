import React from "react";
import {Image, ImageBackground, StyleSheet} from "react-native";
const FramedAvatar = ({frameSource, imageSource}) => {
  return (
    <ImageBackground source={frameSource} style={[styles.frame]}>
      <Image source={imageSource} style={styles.image} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  frame: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    zIndex: 1,
  },
  image: {
    width: 40,
    height: 40,
    zIndex: -1,
    borderRadius: 40 / 2,
  },
});

export default FramedAvatar;
