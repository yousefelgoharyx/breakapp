import React from "react";
import {TouchableOpacity, StyleSheet} from "react-native";
import AuthFlowView from "../../components/AuthFlowView";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Page from "../../components/Page";
import Screen from "../../components/Screen";
import Spacer from "../../components/Spacer";
import StyledText from "../../components/StyledText";

const Login = ({navigation}) => {
  const handleForgotPassword = () => navigation.navigate("ForgotPassword");
  return (
    <Screen bg="#000" statusBarBg="#000">
      <Page effect onBack={navigation.goBack} title="تسجيل الدخول">
        <AuthFlowView>
          <Input placeholder="رقم الهاتف" />
          <Input placeholder="كلمة المرور" isSecure />
          <TouchableOpacity activeOpacity={0.8} onPress={handleForgotPassword}>
            <StyledText style={styles.forgotPasswordText}>
              نسيت كلمة المرور ؟
            </StyledText>
          </TouchableOpacity>
          <Button title="تسجيل دخول" />
          <Spacer space={24} />
          <Button title="انشاء حساب" variant="outlined" />
        </AuthFlowView>
      </Page>
    </Screen>
  );
};

const styles = StyleSheet.create({
  forgotPasswordText: {
    textAlign: "center",
    color: "#ffffff50",
    marginBottom: 24,
  },
});

export default Login;
