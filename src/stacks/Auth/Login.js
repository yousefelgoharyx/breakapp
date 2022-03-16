import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {TouchableOpacity, StyleSheet} from "react-native";
import Snackbar from "react-native-snackbar";
import AuthFlowView from "../../components/AuthFlowView";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Page from "../../components/Page";
import Screen from "../../components/Screen";
import Spacer from "../../components/Spacer";
import StyledText from "../../components/StyledText";
import {useAuth} from "../../context/auth";
import instance from "../../utils/axios";

const Login = ({navigation}) => {
  const handleForgotPassword = () => navigation.navigate("ForgotPassword");
  const handleRegister = () => navigation.navigate("CreateUser");
  const {login} = useAuth();
  const [loading, setLoading] = useState(false);
  const handleLogin = async data => {
    try {
      setLoading(true);
      const response = await instance.post("/users/login", data);
      login(response.data.info, response.data.auth_token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Snackbar.show({
        text: "البريد الالكتروني او كلمة المرور غير صحيحة",
        fontFamily: "Cairo",
        rtl: true,
      });
    }
    console.log(data);
  };
  const {control, handleSubmit, formState} = useForm();
  return (
    <Screen bg="#000" statusBarBg="#000">
      <Page effect onBack={navigation.goBack} title="تسجيل الدخول">
        <AuthFlowView>
          <Input
            placeholder="البريد الاكتروني"
            control={control}
            rules={{required: true}}
            name="email"
            invalid={formState.errors.email}
            message="هذا الحقل مطلوب"
          />
          <Input
            placeholder="كلمة المرور"
            isSecure
            rules={{required: true}}
            control={control}
            name="password"
            invalid={formState.errors.password}
            message="هذا الحقل مطلوب"
          />
          <TouchableOpacity activeOpacity={0.8} onPress={handleForgotPassword}>
            <StyledText style={styles.forgotPasswordText}>
              نسيت كلمة المرور ؟
            </StyledText>
          </TouchableOpacity>
          <Button
            title="تسجيل دخول"
            onPress={handleSubmit(handleLogin)}
            loading={loading}
          />
          <Spacer space={16} />
          <Button
            title="انشاء حساب"
            variant="outlined"
            onPress={handleRegister}
          />
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
