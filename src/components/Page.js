import React from "react";
import {Image, StyleSheet, View} from "react-native";
import colors from "../utils/colors";
import AbsoluteView from "./AbsoluteView";
import AppBar from "./AppBar";

const Page = ({effect, children, onBack, title}) => {
  let effectNode = null;
  if (effect)
    effectNode = (
      <AbsoluteView top={-130} right={-70}>
        <Image
          source={require("../assets/effect.png")}
          style={styles.effectImage}
        />
      </AbsoluteView>
    );
  return (
    <View style={styles.container}>
      {effectNode}
      <AppBar title={title} onBack={onBack} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },

  effectImage: {
    width: 256,
    height: 256,
    opacity: 0.7,
  },
});

export default Page;
