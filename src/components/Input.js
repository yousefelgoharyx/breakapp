import React, {useState} from "react";
import {Controller, useController} from "react-hook-form";
import {StyleSheet, TextInput, View} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolateColor,
} from "react-native-reanimated";
import colors from "../utils/colors";
import StyledText from "./StyledText";

const Input = ({
  placeholder,
  onChangeText,
  isSecure,
  control = null,
  rules,
  invalid,
  name = "",
  message = "",
  ...rest
}) => {
  const borderColorValue = useSharedValue(0);
  const borderStyles = useAnimatedStyle(() => {
    const borderBottomColor = interpolateColor(
      borderColorValue.value,
      [0, 100],
      ["#707070", invalid ? "red" : colors.primary],
    );
    return {borderBottomColor};
  });
  const handleFocus = () => (borderColorValue.value = withSpring(100));
  const handleBlur = () =>
    invalid
      ? (borderColorValue.value = withSpring(100))
      : (borderColorValue.value = withSpring(0));
  const {field} = useController({
    control,
    rules,
    defaultValue: "",
    name,
  });
  return (
    <View style={{marginBottom: 8}}>
      <Animated.View
        style={[
          styles.inputWrapper,
          borderStyles,
          invalid ? {borderBottomColor: "red"} : null,
        ]}>
        <TextInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          selectionColor={colors.primary}
          placeholderTextColor="#fafafa50"
          placeholder={placeholder}
          textAlign="right"
          style={styles.input}
          onChangeText={field.onChange}
          secureTextEntry={isSecure}
          value={field.value}
          multiline
          {...rest}
        />
      </Animated.View>
      {invalid ? (
        <StyledText size={12} style={{color: "red"}}>
          {message}
        </StyledText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    borderBottomWidth: 2,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  input: {
    textAlign: "right",
    fontFamily: "Cairo",
    flex: 1,
    alignSelf: "flex-end",
    color: "#fff",
  },
  max: {
    color: "#ffffff50",
    alignSelf: "flex-end",
    marginBottom: 8,
  },
});

export default Input;
