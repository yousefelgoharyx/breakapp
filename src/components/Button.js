import React from "react";
import {TouchableOpacity, StyleSheet, ActivityIndicator} from "react-native";
import colors from "../utils/colors";
import StyledText from "./StyledText";
const Button = ({title, variant, onPress, small, color, style, loading}) => {
  let containerStyles = [styles.container];
  let textStyles = {};
  if (variant === "outlined") {
    containerStyles.push(styles.outlinedContainer);
    textStyles = styles.outlinedText;
  }

  if (color == "green") containerStyles.push(styles.containerGreen);
  if (small) containerStyles.push(styles.containerSmall);
  containerStyles.push(StyleSheet.flatten(style));
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={containerStyles}
      disabled={loading}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={colors.dark} size={28} />
      ) : (
        <StyledText style={textStyles}>{title}</StyledText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkPrimary,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderColor: "transparent",
    borderWidth: 2,
    minWidth: 120,
  },
  containerSmall: {
    height: 40,
  },
  containerGreen: {
    backgroundColor: "#00AE2E",
  },
  outlinedContainer: {
    backgroundColor: "transparent",
    borderColor: colors.darkPrimary,
  },
  outlinedText: {color: colors.darkPrimary},
});

export default Button;
