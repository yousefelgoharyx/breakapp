import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import StyledText from "../../components/StyledText";

const Button = ({title, bg = "#15B715", style, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.button, {backgroundColor: bg}, StyleSheet.flatten(style)]}>
      <StyledText>{title}</StyledText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: 32,
    paddingHorizontal: 12,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
export default Button;
