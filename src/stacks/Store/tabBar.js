import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import ItemsList from "./itemsList";
import {View} from "react-native";
const Tab = createMaterialTopTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      lazy
      tabBarOptions={{
        inactiveTintColor: "#707070",
        labelStyle: {fontFamily: "Cairo"},
        activeTintColor: "#FF9639",
        scrollEnabled: true,
        pressColor: "transparent",
        tabStyle: {
          width: "auto",
        },
        indicatorStyle: {
          backgroundColor: "#FF9639",
        },
        style: {backgroundColor: "transparent"},
      }}>
      <Tab.Screen name="أطار" component={ItemsList} />
      <Tab.Screen name="ركوبة" component={ItemsList} />
      <Tab.Screen name="صندوق الدردشة" component={ItemsList} />

      <Tab.Screen name="أطار الغرفة" component={ItemsList} />
      <Tab.Screen name="خلفية الغرفة" component={ItemsList} />
    </Tab.Navigator>
  );
};

export default TabBar;
