import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../Home/Home";
import {View, TouchableOpacity, StyleSheet} from "react-native";
import StyledText from "../../components/StyledText";
import colors from "../../utils/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import Profile from "../Profile/Profile";
const Tabs = createBottomTabNavigator();

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabsContainer}>
      {state.routes.map((route, index) => {
        const label = descriptors[route.key].options.title;
        const icon = descriptors[route.key].options.icon;
        const isFocused = state.index === index;
        const color = isFocused ? colors.primary : colors.white;
        console.log(route.name);
        const onPress = () => {
          navigation.navigate({name: route.name, merge: true});
        };

        return (
          <TouchableOpacity
            onPress={onPress}
            style={{alignItems: "center"}}
            key={route.name}>
            <Icon name={icon} size={20} color={color} />
            <StyledText size={14} style={{color}}>
              {label}
            </StyledText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Main = () => {
  return (
    <Tabs.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tabs.Screen
        component={Home}
        name="Home"
        options={{title: "الرئيسية", icon: "home"}}
      />
      <Tabs.Screen
        component={Profile}
        name="Chat"
        options={{title: "الدردشة", icon: "chat"}}
      />
      <Tabs.Screen
        component={Profile}
        name="Profile"
        options={{title: " الشخصي", icon: "person"}}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    height: 64,
    backgroundColor: colors.bg,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
export default Main;
