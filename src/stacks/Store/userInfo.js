import React from "react";
import {StyleSheet, View} from "react-native";
import GoldFrame from "../../components/GoldFrame";
import StyledText from "../../components/StyledText";
import UserBlance from "./userBalance";
import Icon from "react-native-vector-icons/Ionicons";

const personImage = require("../../assets/person.png");

const UserInfo = () => {
  return (
    <View style={styles.profileContainer}>
      <View style={{position: "absolute", top: 16, left: 8}}>
        <UserBlance onArrowClick={() => {}} />
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

  profileContainer: {
    flexDirection: "row",
    padding: 24,
    paddingVertical: 32,
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.2)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF9639",
    marginHorizontal: 24,
    marginBottom: 16,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
export default UserInfo;
