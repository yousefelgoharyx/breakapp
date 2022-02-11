import React from "react";
import {Image, StyleSheet, TouchableOpacity} from "react-native";
import StyledText from "../../components/StyledText";

const HomeCat = ({src, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.cat} onPress={onPress} activeOpacity={0.5}>
      <Image source={src} style={styles.catImage} />
      <StyledText style={styles.catText}>{title}</StyledText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cat: {
    backgroundColor: "#fff",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    borderRadius: 16,
  },
  catImage: {
    width: 48,
    height: 48,
  },
  catText: {
    color: "#000",
    fontSize: 12,
  },
});

export default HomeCat;
