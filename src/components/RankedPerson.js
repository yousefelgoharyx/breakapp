import React from "react";
import {Image, StyleSheet, View} from "react-native";
import StyledText from "./StyledText";
const jewelIcon = require("../assets/icons/jewels.png");
const RankedPerson = ({name, id, amount, children, top = 0}) => {
  return (
    <View style={[styles.container, {top}]}>
      {children}
      <StyledText style={styles.name}>{name}</StyledText>
      <View>
        <StyledText size={12} style={styles.id}>
          {id}
        </StyledText>
        <View style={styles.jewelContainer}>
          <Image source={jewelIcon} style={styles.jewelIcon} />
          <StyledText size={12} style={styles.jewelAmount}>
            {amount}
          </StyledText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    marginTop: 4,
  },
  id: {
    color: "rgba(255,255,255,0.7)",
  },
  jewelContainer: {
    flexDirection: "row",
    marginEnd: 4,
    alignItems: "center",
  },
  jewelAmount: {
    color: "rgb(255,255,255)",
  },
  jewelIcon: {
    width: 12,
    height: 12,
    marginEnd: 4,
  },
});

export default RankedPerson;
