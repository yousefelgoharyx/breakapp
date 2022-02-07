import React from "react";
import {Image, StyleSheet, useWindowDimensions, View} from "react-native";
import Header from "../../components/Header";
import StyledText from "../../components/StyledText";
const mobileImage = require("../../assets/home/mobile.png");
const starsImage = require("../../assets/home/stars.png");
const TennisImage = require("../../assets/home/tennis.png");
const CrownImage = require("../../assets/home/crowns.png");

const HomeCat = ({src, title}) => {
  return (
    <View style={styles.cat}>
      <Image source={src} style={styles.catImage} />
      <StyledText style={styles.catText}>{title}</StyledText>
    </View>
  );
};

const Home = () => {
  const {width} = useWindowDimensions();
  return (
    <View>
      <Header />
      <Image
        source={require("../../assets/ad.png")}
        style={{width, height: width / 4}}
      />
      <View style={styles.catsContainer}>
        <HomeCat src={mobileImage} title="ترتيب الغرف" />
        <HomeCat src={starsImage} title="النجوم" />
        <HomeCat src={TennisImage} title="الالعاب" />
        <HomeCat src={CrownImage} title="الاثرياء" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  catsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
    marginTop: 16,
  },
  cat: {
    backgroundColor: "#fff",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    borderRadius: 16,
  },
  catImage: {
    width: 48,
    height: 48,
  },
  catText: {
    color: "#000",
    fontSize: 12,
  },
});

export default Home;
