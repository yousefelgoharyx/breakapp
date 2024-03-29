import React, {createContext, useContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";

const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
    user: null,
    token: null,
  });
  const [loading, setLoading] = useState(true);
  const [onboarding, setOnboarding] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    async function getUserData() {
      const token = await AsyncStorage.getItem("token");
      const user = await AsyncStorage.getItem("user");
      const onboardingShown = await AsyncStorage.getItem("onboardingShown");
      if (onboardingShown) setOnboarding(false);
      if (token && user) setUser({...JSON.parse(user), token});
      setLoading(false);
    }
    getUserData();
  }, []);

  const login = async (user, token) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      await AsyncStorage.setItem("token", token);
      setUser({...user, token});
      navigation.navigate("MainTabs");
    } catch {
      setUser({
        user: null,
        token: null,
      });
    }
  };
  const logout = async () => {
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("token");
    setUser({
      user: null,
      token: null,
    });
    navigation.navigate("Auth");
  };
  return (
    <AuthContext.Provider
      value={{login, logout, user, loading, onboarding, setOnboarding}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export {AuthProvider, useAuth};
