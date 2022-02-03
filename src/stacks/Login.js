import React from "react";
import {View} from "react-native";
import Page from "../components/Page";
import StyledText from "../components/StyledText";
const Login = ({navigation}) => {
  return (
    <Page effect onBack={navigation.goBack}>
      <StyledText>مربحا</StyledText>
    </Page>
  );
};

export default Login;
