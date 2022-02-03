import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React, {useMemo} from "react";
import {I18nManager} from "react-native";
import Auth from "./src/stacks/Auth";
import Login from "./src/stacks/Login";

const AppStack = createStackNavigator();

const App = () => {
  useMemo(() => I18nManager.forceRTL(true), []);
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          background: "#000",
        },
      }}>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Auth" component={Auth} />
        <AppStack.Screen name="Login" component={Login} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
