import React from "react";
import {StyleSheet, Text} from "react-native";

const StyledText = ({children, size = 16, style, bold, ...rest}) => {
  let styles = {...style};
  if (Array.isArray(style)) {
    styles = StyleSheet.flatten(style);
  }
  styles.fontFamily = "Cairo";
  if (bold) styles.fontFamily = "Cairo-Bold";
  return (
    <Text
      style={{
        color: "#fff",
        fontSize: size,
        ...styles,
      }}
      {...rest}>
      {children}
    </Text>
  );
};

export default StyledText;
