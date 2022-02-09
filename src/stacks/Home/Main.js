import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "./Home";

const Tabs = createBottomTabNavigator();
const Main = () => {
  return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen component={Home} name="Home" />
      <Tabs.Screen component={Home} name="Chat" />
      <Tabs.Screen component={Home} name="Profile" />
    </Tabs.Navigator>
  );
};

export default Main;
