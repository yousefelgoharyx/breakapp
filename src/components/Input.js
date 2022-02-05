import React, {useState} from "react";
import {StyleSheet, TextInput} from "react-native";
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
  maxChars = 1000,
  showMaxCharsIndicator,
  ...rest
}) => {
  const [charCount, setCharCount] = useState(0);
  const [value, setValue] = useState("");
  const borderColorValue = useSharedValue(0);
  const borderStyles = useAnimatedStyle(() => {
    const borderBottomColor = interpolateColor(
      borderColorValue.value,
      [0, 100],
      ["#707070", colors.primary],
    );
    return {borderBottomColor};
  });
  const handleFocus = () => (borderColorValue.value = withSpring(100));
  const handleBlur = () => (borderColorValue.value = withSpring(0));

  const handleChangeText = text => {
    if (text.length <= maxChars) {
      setValue(text);
      setCharCount(text.length);
      onChangeText ? onChangeText(value) : null;
    }
  };
  return (
    <Animated.View style={[styles.inputWrapper, borderStyles]}>
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        selectionColor={colors.primary}
        placeholderTextColor="#fafafa50"
        placeholder={placeholder}
        textAlign="right"
        style={styles.input}
        onChangeText={handleChangeText}
        secureTextEntry={isSecure}
        value={value}
        {...rest}
      />
      {showMaxCharsIndicator ? (
        <StyledText size={14} style={styles.max}>
          {`${charCount}/${maxChars}`}
        </StyledText>
      ) : null}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    borderBottomWidth: 2,
    height: 48,
    flexDirection: "row",
  },
  input: {
    textAlign: "right",
    fontFamily: "Cairo",
    flex: 1,
    alignSelf: "flex-end",
  },
  max: {
    color: "#ffffff50",
    alignSelf: "flex-end",
    marginBottom: 8,
  },
});

export default Input;
