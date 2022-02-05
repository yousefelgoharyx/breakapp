import React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../utils/colors";
import AbsoluteView from "./AbsoluteView";
import Spacer from "./Spacer";
import StyledText from "./StyledText";

const ArrowIcon = () => (
  <Icon
    name="arrow-forward-outline"
    size={24}
    color={"#fff"}
    style={styles.headerIcon}
  />
);
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
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <ArrowIcon />
        </TouchableOpacity>
        <StyledText style={styles.headerText}>{title}</StyledText>
        <Spacer space={40} />
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  header: {
    height: 64,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerIcon: {
    marginStart: 16,
  },
  headerText: {
    lineHeight: 16 * 1.6,
  },
  effectImage: {
    width: 256,
    height: 256,
    opacity: 0.7,
  },
});

export default Page;
