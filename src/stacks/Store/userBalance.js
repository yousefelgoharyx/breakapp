import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import StyledText from "../../components/StyledText";
import Coin from "../../icons/Coin";
const UserBlance = ({onArrowClick, amount = 200}) => {
  let arrow = null;
  if (onArrowClick) {
    arrow = (
      <TouchableOpacity onPress={onArrowClick}>
        <Icon name="chevron-right" size={24} color={"#fff"} />
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      {arrow}
      <StyledText bold>{amount}</StyledText>
      <Coin style={styles.icon} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  icon: {
    marginStart: 12,
  },
});
export default UserBlance;
