import React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import Flag from "react-native-country-flag";
import Icon from "react-native-vector-icons/MaterialIcons";
import AbsoluteView from "../../components/AbsoluteView";
import StyledText from "../../components/StyledText";
const HomePerson = ({onPress, image, isPrivate, name}) => {
  return (
    <TouchableOpacity
      style={personStyles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <View style={personStyles.imageWrapper}>
        <Image
          source={{
            uri:
              image === "default avatar src"
                ? "https://i.pravatar.cc/300"
                : image,
          }}
          style={personStyles.image}
        />
        <View style={personStyles.imageOverlay}>
          <AbsoluteView
            bottom={8}
            right={8}
            flexDirection="row"
            alignItems="center">
            <StyledText>160</StyledText>
            <Icon name="person" size={20} color="#fff" />
          </AbsoluteView>

          {isPrivate ? (
            <AbsoluteView top={12} right={8}>
              <Image
                source={require("../../assets/home/lock.png")}
                style={{width: 24, height: 24}}
              />
            </AbsoluteView>
          ) : null}

          <AbsoluteView top={8} left={8}>
            <Image
              source={require("../../assets/home/bag.png")}
              style={{width: 32, height: 32}}
            />
          </AbsoluteView>
        </View>
      </View>
      <View style={personStyles.infoWrapper}>
        {/* <Flag isoCode="SA" size={20} style={personStyles.flag} /> */}
        <StyledText size={14}>{name}</StyledText>
        <Icon
          name="favorite"
          size={16}
          color="#a83f39"
          style={personStyles.heart}
        />
      </View>
    </TouchableOpacity>
  );
};

const personStyles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 140,
    maxWidth: "48%",
    marginBottom: "2%",
  },
  imageWrapper: {
    aspectRatio: 1 / 1,
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },
  imageOverlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#00000020",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  infoWrapper: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  flag: {
    marginEnd: 8,
    borderRadius: 4,
  },
  heart: {
    marginStart: 8,
    marginTop: 2,
  },
});

export default HomePerson;
