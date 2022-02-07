import React from "react";
import {ScrollView, View} from "react-native";
const AuthFlowView = ({children}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{padding: 16, paddingTop: 16}}>{children}</View>
    </ScrollView>
  );
};

export default AuthFlowView;
