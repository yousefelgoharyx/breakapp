import React from "react";
import {View} from "react-native";
const Divider = ({marginV = 0}) => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: "#444",
        marginVertical: marginV,
      }}></View>
  );
};

export default Divider;
