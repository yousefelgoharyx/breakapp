import React from "react";
import {
  ScrollView,
  useWindowDimensions,
  View,
  Text,
  StyleSheet,
} from "react-native";
import AppBar from "../../components/AppBar";
import Screen from "../../components/Screen";
import UserInfo from "./UserInfo";
import TabBar from "./tabBar";
import Spacer from "../../components/Spacer";
import UserBlance from "./userBalance";
import Button from "../../components/Button";

const Store = ({navigation}) => {
  return (
    <Screen statusBarBg={"#000"}>
      <AppBar title={"المتجر"} onBack={() => navigation.goBack()} />
      <UserInfo />
      <TabBar />
      <View style={styles.storeControl}>
        <UserBlance amount={12} />
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
    paddingVertical: 8,
    alignItems: "center",
  },
  buttonsWrapper: {
    flexDirection: "row",
  },
});
export default Store;
