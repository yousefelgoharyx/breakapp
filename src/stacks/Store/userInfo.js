import React from "react";
import {StyleSheet, View} from "react-native";
import GoldFrame from "../../components/GoldFrame";
import StyledText from "../../components/StyledText";
import Coin from "../../icons/Coin";
import Icon from "react-native-vector-icons/Ionicons";
const personImage = require("../../assets/person.png");

const UserInfo = () => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.topIcon}>
        <Icon
          name="chevron-forward-outline"
          size={24}
          color={"#fff"}
          style={styles.headerIcon}
        />
        <StyledText bold>{"200"}</StyledText>
        <Coin style={{marginHorizontal: 10}}></Coin>
      </View>
      <View style={styles.column}>
        <GoldFrame source={personImage} />
        <StyledText bold>{"Sherif Ashraf"}</StyledText>
        <StyledText style={{color: "#707070"}} size={14}>
          {"ID 5463456"}
        </StyledText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  column: {
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  topIcon: {
    flexDirection: "row",
    position: "absolute",
    top: 30,
    left: 10,
  },
  profileContainer: {
    flexDirection: "row",
    padding: 20,
    paddingTop: 45,
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.2)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF9639",
    margin: 10,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
export default UserInfo;
