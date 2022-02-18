import React from "react";
import {StyleSheet, View} from "react-native";
import colors from "../utils/colors";
import Avatar from "./Avatar";
import StyledText from "./StyledText";

const LabeledAvatar = ({source, label, size = 48}) => {
  return (
    <View style={styles.container}>
      <Avatar source={source} size={size} />
      <StyledText bold size={14} style={styles.label}>
        {label}
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    backgroundColor: colors.primary,
    width: "100%",
    textAlign: "center",
    borderRadius: 16,
    height: 24,
    alignItems: "center",
    top: -12,
    textAlignVertical: "center",
  },
});
export default LabeledAvatar;
