import React from "react";
import {View} from "react-native";
import colors from "../utils/colors";
const Screen = ({children, bg}) => {
  return (
    <View style={{flex: 1, backgroundColor: bg || colors.bg}}>{children}</View>
  );
};

export default Screen;
