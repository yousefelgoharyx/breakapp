import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import StyledText from "./StyledText";
const AppBar = ({onBack, title}) => {
  return (
    <View style={styles.header}>
      <View style={styles.side}>
        {onBack ? (
          <TouchableOpacity onPress={onBack}>
            <Icon
              name="arrow-forward-outline"
              size={24}
              color={"#fff"}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      <StyledText style={styles.headerText}>{title}</StyledText>
      <View style={styles.side}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  headerIcon: {
    marginStart: 16,
    marginEnd: "auto",
  },
  headerText: {
    lineHeight: 16 * 1.6,
    flex: 1,
    textAlign: "center",
  },
  side: {
    flex: 1,
  },
});

export default AppBar;
