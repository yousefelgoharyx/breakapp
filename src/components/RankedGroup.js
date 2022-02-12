import React from "react";
import {ImageBackground, StyleSheet, View} from "react-native";
import Level from "../icons/Level";
import TribeHouse from "../icons/TribeHouse";
import StyledText from "./StyledText";
const highRank = require("../assets/high.png");
const lowRank = require("../assets/low.png");
const RankedGroup = ({children, high}) => {
  return (
    <View
      style={[
        styles.container,
        {marginHorizontal: high ? 16 : 0, top: high ? 0 : 32},
      ]}>
      {children}
      <ImageBackground
        source={high ? highRank : lowRank}
        style={[styles.image, {height: high ? 160 : 140}]}>
        <StyledText size={14}>قبيلة الشمال</StyledText>

        <StyledText size={12}>ID 32652</StyledText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 4,
            marginTop: 4,
          }}>
          <Level size={16} style={{marginEnd: 4}} />
          <StyledText size={14}>360</StyledText>
        </View>

        <View style={{flexDirection: "row", alignItems: "center"}}>
          <TribeHouse size={16} style={{marginEnd: 4}} />
          <StyledText size={12}>360</StyledText>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: "100%",
    marginTop: 16,
    paddingTop: 32,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default RankedGroup;
