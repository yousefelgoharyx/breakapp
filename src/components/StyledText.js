import React from "react";
import {StyleSheet, Text} from "react-native";

const StyledText = ({children, size = 16, style, ...rest}) => {
  let styles = {...style};
  if (Array.isArray(style)) {
    styles = StyleSheet.flatten(style);
  }
  return (
    <Text
      style={{
        color: "#fff",
        fontFamily: "Cairo",
        fontSize: size,
        ...styles,
      }}
      {...rest}>
      {children}
    </Text>
  );
};

export default StyledText;
