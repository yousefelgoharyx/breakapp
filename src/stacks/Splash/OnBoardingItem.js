import React from "react";
import {Image, StyleSheet, useWindowDimensions, View} from "react-native";
import StyledText from "../../components/StyledText";
const OnBoardingItem = ({title, subtitle, source}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image source={source} style={[styles.image, {width: width - 64}]} />
      <View style={styles.info}>
        <StyledText style={styles.title}>{title}</StyledText>
        <StyledText style={styles.subtitle}>{subtitle}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.5,
    paddingHorizontal: 24,
    marginBottom: 16,
    resizeMode: "contain",
  },
  info: {},
  title: {
    textAlign: "center",
    fontSize: 32,
  },
  subtitle: {
    color: "#999",
    paddingHorizontal: 24,
    textAlign: "center",
    marginTop: 8,
    fontSize: 16,
  },
});

export default OnBoardingItem;
