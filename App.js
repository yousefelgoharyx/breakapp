import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React, {useMemo} from "react";
import {I18nManager} from "react-native";
import Auth from "./src/stacks/Auth/Auth";
import CreateGroup from "./src/stacks/Auth/CreateGroup";
import ForgotPassword from "./src/stacks/Auth/ForgotPassword";
import Login from "./src/stacks/Auth/Login";
import Home from "./src/stacks/Home/Home";
I18nManager.forceRTL(true);
I18nManager.allowRTL(true);
const AppStack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: "#000",
  },
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Auth" component={Auth} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="ForgotPassword" component={ForgotPassword} />
        <AppStack.Screen name="CreateGroup" component={CreateGroup} />
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
