import React from "react";
import {Image, StyleSheet, View} from "react-native";
import StyledText from "./StyledText";
const Badge = ({title, imageSource, bg = "#4A088B", size = 24}) => {
  let bgColor = {backgroundColor: bg};
  let imageSize = {width: size, height: size};
  return (
    <View style={[styles.container, bgColor]}>
      <Image source={imageSource} style={imageSize} />
      {title ? <StyledText style={styles.title}>{title}</StyledText> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignSelf: "flex-start",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 44,
  },
  title: {
    marginStart: 8,
    lineHeight: 16 * 1.6,
  },
});

export default Badge;
