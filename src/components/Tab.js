import React from "react";
import {StyleSheet, View} from "react-native";
import StyledText from "./StyledText";
const Tab = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export const TabItem = ({active, title}) => {
  let tabStyles = [styles.tab];
  let textStyles = [styles.tabText];
  if (active) {
    tabStyles.push(styles.activeTab);
    textStyles.push(styles.activeTabText);
  }
  return (
    <View style={tabStyles}>
      <StyledText style={textStyles}>{title}</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: "#ffffff50",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 8,
    marginTop: 32,
    marginHorizontal: 24,
    borderRadius: 16,
  },
  tab: {
    backgroundColor: "transparent",
    height: 56 - 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: "#fff",
  },
  tabText: {
    color: "#000",
    lineHeight: 26,
  },
  activeTabText: {
    color: "#FF3976",
  },
});

export default Tab;
