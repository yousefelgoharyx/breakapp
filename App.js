import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import React, {useMemo} from "react";
import {I18nManager} from "react-native";
import Auth from "./src/stacks/Auth";
import CreateGroup from "./src/stacks/CreateGroup";
import ForgotPassword from "./src/stacks/ForgotPassword";
import Login from "./src/stacks/Login";
I18nManager.forceRTL(true);
I18nManager.allowRTL(true);
const AppStack = createStackNavigator();

const App = () => {
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
        <AppStack.Screen name="ForgotPassword" component={ForgotPassword} />
        <AppStack.Screen name="CreateGroup" component={CreateGroup} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
