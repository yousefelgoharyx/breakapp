import React from "react";
import {Image, StyleSheet, View} from "react-native";
import Spacer from "../../components/Spacer";
import StyledText from "../../components/StyledText";
const ProfileStat = ({stat, title, iconSource, size = 20, color = "#fff"}) => {
  let imageSize = {width: size, height: size};
  return (
    <View style={styles.container}>
      <StyledText style={{marginStart: 4}}>{stat}</StyledText>
      <Spacer space={4} />
      <View style={styles.infoContainer}>
        <Image source={iconSource} style={imageSize} />
        <Spacer space={12} />
        <StyledText>{title}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ProfileStat;
