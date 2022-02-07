import React from "react";
import {StatusBar, StyleSheet, TextInput, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import colors from "../utils/colors";
const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="default" />
      <View style={styles.searchWrapper}>
        <Feather name="search" color="#000" size={24} />
        <TextInput
          textAlign="right"
          style={styles.searchInput}
          placeholder="ابحث عن اصدقاء"
          selectionColor="#000"
          placeholderTextColor="#000"
        />
      </View>
      <View style={styles.leftSideWrapper}>
        <View style={styles.iconWrapper}>
          <View style={styles.addIconWrapper}>
            <Icon name="add" color="#000" size={16} />
          </View>
          <Feather name="home" color="#fff" size={24} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 48 + 32,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  searchWrapper: {
    backgroundColor: "#fff",
    height: 48,
    flex: 2,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 16,
  },
  searchInput: {
    flex: 1,
    color: "#000",
    fontFamily: "Cairo",
    marginStart: 8,
  },
  leftSideWrapper: {
    flex: 1,
  },
  iconWrapper: {
    position: "relative",
    width: 24,
    marginStart: "auto",
  },
  addIconWrapper: {
    position: "absolute",
    left: -8,
    top: -10,
    width: 16,
    height: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});

export default Header;
