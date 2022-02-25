import React from "react";
import {StyleSheet, View} from "react-native";
import Moon from "../icons/Moon";
import StyledText from "./StyledText";

const LvBadge = ({bg = "#5151EF", children}) => {
  return (
    <View style={[styles.container, {backgroundColor: bg}]}>
      <Moon size={16} style={styles.icon} />
      <StyledText size={12}>{children}</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "",
    width: 72,
    height: 28,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginEnd: 12,
  },
  icon: {
    marginEnd: 4,
  },
});

export default LvBadge;
