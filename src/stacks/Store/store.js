import React from "react";
import {View, StyleSheet} from "react-native";
import AppBar from "../../components/AppBar";
import Screen from "../../components/Screen";
import UserInfo from "./userInfo";
import TabBar from "./tabBar";
import Spacer from "../../components/Spacer";
import Balance from "./Balance";
import Button from "../../components/Button";
import colors from "../../utils/colors";

const Store = ({navigation}) => {
  return (
    <Screen statusBarBg={colors.bg}>
      <AppBar title="المتجر" onBack={navigation.goBack} />
      <UserInfo />
      <TabBar />
      <View style={styles.storeControl}>
        <Balance amount={12} />
        <View style={styles.buttonsWrapper}>
          <Button small title="الاهداء" />
          <Spacer space={8} />
          <Button small title="الشراء" color="green" />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  storeControl: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#151515",
  },
  buttonsWrapper: {
    flexDirection: "row",
  },
});
export default Store;
