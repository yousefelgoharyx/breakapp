import React from "react";
import {StyleSheet, View} from "react-native";
import Avatar from "./Avatar";
import Spacer from "./Spacer";
import StyledText from "./StyledText";
import Heart from "../icons/Heart";
import TribeHouse from "../icons/TribeHouse";
import Jewel from "../icons/Jewel";

const Person = ({tribe, image, listId, id, name, amount}) => {
  let iconTextStyles = [
    styles.jewelsAmount,
    {color: tribe ? "#999" : "#FF0707"},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.side}>
        <StyledText style={styles.id1}>{listId}</StyledText>
        <Avatar source={image} size={56} />
        <View style={styles.infoContainer}>
          <View style={styles.infoText}>
            <StyledText style={styles.name}>{name}</StyledText>
            <Heart size={14} style={styles.icon} />
            <Spacer space={4} />
            <Heart size={14} style={styles.icon} />
          </View>
          <StyledText style={styles.id2}>{id}</StyledText>
        </View>
      </View>

      <View style={styles.side}>
        {tribe ? <TribeHouse size={14} /> : <Jewel size={14} />}
        <StyledText style={iconTextStyles}>{amount}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  side: {
    flexDirection: "row",
    alignItems: "center",
  },
  id1: {
    marginEnd: 12,
    color: "#999",
  },
  infoContainer: {
    marginStart: 16,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  infoText: {
    flexDirection: "row",
    marginBottom: 4,
    alignItems: "center",
  },
  name: {
    color: "#000",
    marginEnd: 8,
  },
  icon: {
    top: 2,
  },
  id2: {
    color: "#999",
    fontSize: 12,
  },
  jewelsAmount: {
    marginStart: 6,
    fontSize: 12,
  },
});

export default Person;
