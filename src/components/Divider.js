import React from "react";
import {View} from "react-native";
const Divider = ({marginV = 0, bg = "#444"}) => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: bg,
        marginVertical: marginV,
      }}></View>
  );
};

export default Divider;
