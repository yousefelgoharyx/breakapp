import React from "react";
import {Pressable, StyleSheet} from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeOut,
  FadeOutDown,
} from "react-native-reanimated";

const BlackModal = ({children, isOpen, requestClose, bg = "#000000a5"}) => {
  if (!isOpen) return null;
  return (
    <Pressable
      onPress={requestClose}
      style={[
        styles.container,
        {backgroundColor: "transparent", display: isOpen ? "flex" : "none"},
      ]}>
      <Animated.View
        style={[styles.container, {backgroundColor: bg}]}
        entering={FadeInDown}
        exiting={FadeOutDown}>
        {children}
      </Animated.View>
    </Pressable>
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
});

export default BlackModal;
