import React, {useState} from "react";
import {
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AuthFlowView from "../components/AuthFlowView";
import Button from "../components/Button";
import Input from "../components/Input";
import Page from "../components/Page";
import Spacer from "../components/Spacer";
import StyledText from "../components/StyledText";
import colors from "../utils/colors";

const Login = ({navigation}) => {
  const handleForgotPassword = () => navigation.navigate("ForgotPassword");
  return (
    <Page effect onBack={navigation.goBack} title="تسجيل الدخول">
      <AuthFlowView>
        <Input placeholder="رقم الهاتف" />
        <Spacer space={32} />
        <Input placeholder="كلمة المرور" isSecure />
        <Spacer space={32} />
        <TouchableOpacity activeOpacity={0.8} onPress={handleForgotPassword}>
          <StyledText style={styles.forgotPasswordText}>
            نسيت كلمة المرور ؟
          </StyledText>
        </TouchableOpacity>

        <Spacer space={24} />
        <Button title="تسجيل دخول" />
        <Spacer space={24} />
        <Button title="انشاء حساب" variant="outlined" />
      </AuthFlowView>
    </Page>
  );
};

const styles = StyleSheet.create({
  forgotPasswordText: {
    textAlign: "center",
    color: "#ffffff50",
  },
});

export default Login;
