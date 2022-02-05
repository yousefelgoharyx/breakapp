import React, {useState} from "react";
import {View, TextInput, Pressable, TouchableOpacity} from "react-native";
import AuthFlowView from "../components/AuthFlowView";
import Button from "../components/Button";
import Input from "../components/Input";
import Page from "../components/Page";
import Spacer from "../components/Spacer";
import StyledText from "../components/StyledText";
import colors from "../utils/colors";

const ForgotPassword = ({navigation}) => {
  const toCreateGroup = () => navigation.navigate("CreateGroup");
  return (
    <Page effect onBack={navigation.goBack} title="نسيت كلمة المرور">
      <AuthFlowView>
        <Input placeholder="رقم الهاتف" />
        <Spacer space={32} />
        <Button title="تسجيل دخول" onPress={toCreateGroup} />
      </AuthFlowView>
    </Page>
  );
};

export default ForgotPassword;
