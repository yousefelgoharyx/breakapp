import React from "react";
import {StyleSheet, View} from "react-native";
import GoldFrame from "../../components/GoldFrame";
import StyledText from "../../components/StyledText";
import UserBlance from "./Balance";
import {useAuth} from "../../context/auth";
import AbsoluteView from "../../components/AbsoluteView";

const UserInfo = () => {
  const {user} = useAuth();
  return (
    <View style={styles.profileContainer}>
      <AbsoluteView top={16} left={8}>
        <UserBlance amount={user.golds} onArrowClick={() => {}} />
      </AbsoluteView>

      <View style={styles.column}>
        <GoldFrame source={require("../../assets/avatar.jpg")} />
        <StyledText bold>{user.name}</StyledText>
        <StyledText style={{color: "#707070"}} size={14}>
          ID {user._id}
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
