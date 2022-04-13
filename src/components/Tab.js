import React, {useRef} from "react";
import {Pressable, StyleSheet, useWindowDimensions, View} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import colors from "../utils/colors";
import StyledText from "./StyledText";

const mySpring = x => withSpring(x, {damping: 50, stiffness: 150});
const Tab = ({tabs, onTabChange = () => {}, dark}) => {
  const window = useWindowDimensions();
  const tabsInfo = useRef({}).current;
  const x = useSharedValue(window.width);
  const width = useSharedValue(0);

  const handleLayout = ({nativeEvent}, tabId) => {
    const layout = nativeEvent.layout;
    tabsInfo[tabId] = {x: layout.x, width: layout.width};
    if (tabId === tabs[0].id) {
      x.value = mySpring(layout.x);
      width.value = layout.width;
    }
  };

  const handlePress = tabId => {
    onTabChange(tabId);
    x.value = mySpring(tabsInfo[tabId].x);
    width.value = mySpring(tabsInfo[tabId].width);
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {width: width.value, right: x.value};
  });

  const tabIndicatorStyles = [styles.tabIndicator, animatedStyles];
  if (dark) tabIndicatorStyles.push({backgroundColor: colors.primary});
  return (
    <View style={styles.container}>
      <Animated.View style={tabIndicatorStyles}></Animated.View>
      {tabs.map(tab => (
        <TabItem
          dark={dark}
          key={tab.id}
          title={tab.title}
          onPress={() => handlePress(tab.id)}
          onLayout={e => handleLayout(e, tab.id)}
        />
      ))}
    </View>
  );
};

export const TabItem = ({title, onLayout, onPress, dark}) => {
  let tabStyles = [styles.tab];
  let textStyles = [styles.tabText];
  if (dark) textStyles.push({color: "#fff"});
  return (
    <Pressable style={tabStyles} onLayout={onLayout} onPress={onPress}>
      <StyledText bold style={textStyles}>
        {title}
      </StyledText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: "#ffffff70",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 8,
    borderRadius: 16,
  },
  tab: {
    backgroundColor: "transparent",
    height: 64 - 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  activeTab: {
    backgroundColor: "#fff",
  },
  tabText: {
    color: "#000",
    lineHeight: 26,
    top: 1,
  },
  activeTabText: {
    color: "#FF3976",
  },
  tabIndicator: {
    height: 64 - 16,
    backgroundColor: "#fff",
    position: "absolute",
    borderRadius: 14,
  },
});

export default Tab;
