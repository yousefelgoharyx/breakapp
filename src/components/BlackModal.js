import React from "react";
import {Pressable, StyleSheet, TouchableOpacity, View} from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeOut,
  FadeOutDown,
  Layout,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import StyledText from "./StyledText";

const BlackModal = ({children, isOpen, requestClose, bg = "#000000a5"}) => {
  if (!isOpen) return null;
  return (
    <Animated.View
      style={[styles.container, {backgroundColor: bg}]}
      entering={FadeInDown}
      layout={Layout.springify()}
      onStartShouldSetResponder={() => {
        requestClose();
        console.log("Hellooooo");
      }}
      exiting={FadeOutDown}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  animatedView: {
    height: 300,
    width: 200,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});

export default BlackModal;
