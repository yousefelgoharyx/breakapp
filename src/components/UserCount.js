import React from "react";
import {StyleSheet, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import StyledText from "./StyledText";

const UserCount = ({count}) => {
  return (
    <View style={styles.container}>
      <Icon name="person" size={20} color="#fff" />
      <StyledText>{count}</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    top: 2,
  },
});

export default UserCount;
