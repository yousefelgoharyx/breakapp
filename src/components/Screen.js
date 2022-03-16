import React, {useLayoutEffect} from "react";
import {StatusBar, View} from "react-native";
import colors from "../utils/colors";
const Screen = ({children, bg, statusBarBg, gutter = 0, ...rest}) => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View
        style={{
          backgroundColor: statusBarBg || colors.primary,
          height: StatusBar.currentHeight,
        }}></View>
      <View
        style={{
          flex: 1,
          backgroundColor: bg || colors.bg,
          marginHorizontal: gutter,
        }}
        {...rest}>
        {children}
      </View>
    </>
  );
};

export default Screen;
