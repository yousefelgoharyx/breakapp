import React from "react";
import {View, StyleSheet} from "react-native";

const Row = ({children}) => <View style={styles.row}>{children}</View>;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginBottom: 8,
    alignItems: "flex-start",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 24,
  },
});

export default Row;
