import React from "react";
import {ScrollView, useWindowDimensions, View, Text} from "react-native";
import AppBar from "../../components/AppBar";
import Screen from "../../components/Screen";
import UserInfo from "./userInfo";
import TabBar from "./tabBar";

const Store = ({navigation}) => {
  const {width} = useWindowDimensions();
  return (
    <Screen statusBarBg={"#000"}>
      <AppBar title={"المتجر"} onBack={() => navigation.goBack()} />
      <UserInfo />
      <TabBar />
    </Screen>
  );
};

export default Store;
