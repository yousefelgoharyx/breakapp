import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import React from "react";
import {I18nManager, LogBox} from "react-native";
import Auth from "./src/stacks/Auth/Auth";
import CreateGroup from "./src/stacks/Auth/CreateGroup";
import ForgotPassword from "./src/stacks/Auth/ForgotPassword";
import Login from "./src/stacks/Auth/Login";
import Main from "./src/stacks/Main/Main";
import OnBoarding from "./src/stacks/Splash/OnBoarding";
import Stars from "./src/stacks/Ranks/Stars";
import Rich from "./src/stacks/Ranks/Rich";
import GroupRanks from "./src/stacks/Ranks/GroupRanks";
import Wallet from "./src/stacks/Payment/Wallet";
import Done from "./src/stacks/Payment/Done";
import PaymentMethod from "./src/stacks/Payment/PaymentMethod";
import Live from "./src/stacks/Rooms/Live";
import Store from "./src/stacks/Store/Store";
import PaymentInfo from "./src/stacks/Payment/PaymentInfo";
import CreateUser from "./src/stacks/Auth/CreateUser";
import {AuthProvider, useAuth} from "./src/context/auth";
import UploadAvatar from "./src/stacks/Auth/UploadAvatar";
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

const stackOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const AppInside = () => {
  const {user, loading, onboarding} = useAuth();
  if (loading) return null;
  if (onboarding)
    return (
      <AppStack.Navigator screenOptions={stackOptions}>
        <AppStack.Screen name="OnBoarding" component={OnBoarding} />
      </AppStack.Navigator>
    );
  if (user)
    return (
      <AppStack.Navigator screenOptions={stackOptions}>
        <AppStack.Screen name="MainTabs" component={Main} />
        <AppStack.Screen name="CreateGroup" component={CreateGroup} />
        <AppStack.Screen name="Stars" component={Stars} />
        <AppStack.Screen name="Rich" component={Rich} />
        <AppStack.Screen name="GroupRanks" component={GroupRanks} />
        <AppStack.Screen name="Wallet" component={Wallet} />
        <AppStack.Screen name="Done" component={Done} />
        <AppStack.Screen name="PaymentMethod" component={PaymentMethod} />
        <AppStack.Screen name="PaymentInfo" component={PaymentInfo} />
        <AppStack.Screen name="Live" component={Live} />
        <AppStack.Screen name="Store" component={Store} />
        <AppStack.Screen name="UploadAvatar" component={UploadAvatar} />
      </AppStack.Navigator>
    );
  else
    return (
      <AppStack.Navigator screenOptions={stackOptions}>
        <AppStack.Screen name="Auth" component={Auth} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="CreateUser" component={CreateUser} />
        <AppStack.Screen name="ForgotPassword" component={ForgotPassword} />
      </AppStack.Navigator>
    );
};
const App = () => {
  // const isLoggedIn = storage.getString("auth_token");
  return (
    <AuthProvider>
      <NavigationContainer theme={theme}>
        <AppInside />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
