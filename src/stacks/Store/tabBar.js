import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import useGet from "../../hooks/useGet";
import Loader from "../../components/Loader";
import {View, Text} from "react-native";
import List from "./List";
const Tab = createMaterialTopTabNavigator();

const tabBarOptions = {
  inactiveTintColor: "#707070",
  labelStyle: {fontFamily: "Cairo"},
  activeTintColor: "#FF9639",
  pressColor: "transparent",
  scrollEnabled: true,
  tabStyle: {
    width: "auto",
  },
  indicatorStyle: {
    backgroundColor: "#FF9639",
  },
  style: {backgroundColor: "transparent"},
};
const TabBar = () => {
  const GetOwner = useGet("/store/category?page=1");
  let categories = <Loader />;
  if (GetOwner.isReady) {
    let cats = GetOwner.data.result;
    categories = (
      <Tab.Navigator lazy tabBarOptions={tabBarOptions}>
        {cats.map(category => (
          <Tab.Screen
            initialParams={{categoryId: category._id}}
            key={category._id}
            name={category.name}
            component={List}
          />
        ))}
      </Tab.Navigator>
    );
  }
  if (GetOwner.error) {
    categories = (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );
  }
  return categories;
};

export default TabBar;
