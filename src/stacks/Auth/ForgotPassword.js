import React from "react";
import {useForm} from "react-hook-form";
import AuthFlowView from "../../components/AuthFlowView";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Page from "../../components/Page";
import Screen from "../../components/Screen";
import Spacer from "../../components/Spacer";

const ForgotPassword = ({navigation}) => {
  const toCreateGroup = () => navigation.navigate("CreateGroup");
  const {control} = useForm();
  return (
    <Screen bg="#000" statusBarBg="#000">
      <Page effect onBack={navigation.goBack} title="نسيت كلمة المرور">
        <AuthFlowView>
          <Input
            placeholder="رقم الهاتف"
            control={control}
            name="phone"
            rules={{required: true}}
          />
          <Button title="تسجيل دخول" onPress={toCreateGroup} />
        </AuthFlowView>
      </Page>
    </Screen>
  );
};

export default ForgotPassword;
