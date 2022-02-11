import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Spacer from "./Spacer";
import StyledText from "./StyledText";
const AppBar = ({onBack, title}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack}>
        <Icon
          name="arrow-forward-outline"
          size={24}
          color={"#fff"}
          style={styles.headerIcon}
        />
      </TouchableOpacity>
      <StyledText style={styles.headerText}>{title}</StyledText>
      <Spacer space={40} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 64,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerIcon: {
    marginStart: 16,
  },
  headerText: {
    lineHeight: 16 * 1.6,
  },
});

export default AppBar;
