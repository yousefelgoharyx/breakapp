import React from "react";
import {View} from "react-native";
const Box = ({children}) => {
  return (
    <View style={{paddingHorizontal: 24, paddingBottom: 24}}>{children}</View>
  );
};

export default Box;
