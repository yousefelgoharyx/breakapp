import React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Spacer from "../../components/Spacer";
import StyledText from "../../components/StyledText";
const ProfileSetting = ({title, iconSource, leftText}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={leftText ? 1 : 0.2}>
      <View style={styles.iconContainer}>
        <Image source={iconSource} style={styles.icon} />
        <StyledText>{title}</StyledText>
      </View>
      {leftText ? (
        <StyledText size={14}>{leftText}</StyledText>
      ) : (
        <Icon name="chevron-left" size={32} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    marginEnd: 12,
  },
});

export default ProfileSetting;
