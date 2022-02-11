import React from "react";
import {StyleSheet, View, Animated, useWindowDimensions} from "react-native";
import StyledText from "../../components/StyledText";
import colors from "../../utils/colors";
const Paginator = ({steps, scrollX}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      {steps.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotSize = scrollX.interpolate({
          inputRange,
          outputRange: [10, 15, 10],
          extrapolate: "clamp",
        });
        const dotColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#ccc", colors.primary, "#ccc"],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[
              styles.dot,
              {width: dotSize, height: dotSize, backgroundColor: dotColor},
            ]}
            key={i.toString()}></Animated.View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
    height: 64,
  },
  dot: {
    height: 10,
    borderRadius: 10,
    backgroundColor: "#ccc",
    marginHorizontal: 8,
  },
});
export default Paginator;
