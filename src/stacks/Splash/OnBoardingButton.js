import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../utils/colors";

const OnBoardingButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.outerCircle}>
      <View style={styles.innerCircle}>
        <Icon name="arrow-back" size={32} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    width: 72,
    height: 72,
    backgroundColor: "#000",
    borderRadius: 72 / 2,
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    margin: 24,
  },
  innerCircle: {
    width: 56,
    height: 56,
    backgroundColor: colors.primary,
    borderRadius: 56 / 2,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OnBoardingButton;
