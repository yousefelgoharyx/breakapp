import React from "react";
import {Image, StyleSheet, View} from "react-native";
import StyledText from "../../components/StyledText";

const idIcon = require("../../assets/profile/id.png");
const profileImage = require("../../assets/person.png");
const ProfileHeader = () => {
  return (
    <View>
      <View style={styles.imageWrapper}>
        <Image source={profileImage} style={styles.image} />
      </View>
      <View style={styles.infoWrapper}>
        <StyledText>Sherif Ashraf</StyledText>
        <View style={styles.idWrapper}>
          <Image source={idIcon} style={styles.idIcon} />
          <StyledText size={14} style={styles.idText}>
            1559856
          </StyledText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    borderRadius: 96 / 2,
    overflow: "hidden",
    width: 96,
    height: 96,
    alignSelf: "center",
    marginTop: 16,
  },
  image: {
    width: 96,
    height: 96,
  },
  infoWrapper: {
    alignSelf: "center",
    marginTop: 16,
  },
  idWrapper: {
    flexDirection: "row-reverse",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 4,
  },
  idIcon: {
    width: 16,
    height: 16,
    marginStart: 4,
  },
  idText: {
    color: "#999",
  },
});

export default ProfileHeader;