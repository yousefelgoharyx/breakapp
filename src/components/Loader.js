import React from "react";
import {View, ActivityIndicator} from "react-native";
import colors from "../utils/colors";
const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Loader;
