import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import useGet from "../../hooks/useGet";
import Loader from "../../components/Loader";
import {View, Text} from "react-native";
import List from "./List";
import useCategories from "./api/useCategories";
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
  const query = useCategories();
  if (query.isLoading) {
    return <Loader />;
  }
  if (query.isError) {
    return <StyledText>Error</StyledText>;
  }

  return (
    <Tab.Navigator lazy tabBarOptions={tabBarOptions}>
      {query.data.result.map(category => (
        <Tab.Screen
          initialParams={{categoryId: category._id}}
          key={category._id}
          name={category.name}
          component={List}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabBar;
