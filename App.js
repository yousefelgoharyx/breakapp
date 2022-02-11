import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import {I18nManager, StatusBar, LogBox} from "react-native";
import Auth from "./src/stacks/Auth/Auth";
import CreateGroup from "./src/stacks/Auth/CreateGroup";
import ForgotPassword from "./src/stacks/Auth/ForgotPassword";
import Login from "./src/stacks/Auth/Login";
import Main from "./src/stacks/Main/Main";
import OnBoarding from "./src/stacks/Splash/OnBoarding";
import Stars from "./src/stacks/Ranks/Stars";
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

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar backgroundColor="#000" />
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="OnBoarding" component={OnBoarding} />
        <AppStack.Screen name="Auth" component={Auth} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="ForgotPassword" component={ForgotPassword} />
        <AppStack.Screen name="CreateGroup" component={CreateGroup} />
        <AppStack.Screen name="MainTabs" component={Main} />
        <AppStack.Screen name="Stars" component={Stars} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
