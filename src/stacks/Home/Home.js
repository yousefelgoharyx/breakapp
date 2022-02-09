import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import Flag from "react-native-country-flag";
import Icon from "react-native-vector-icons/MaterialIcons";
import Header from "../../components/Header";
import Spacer from "../../components/Spacer";
import StyledText from "../../components/StyledText";
import AbsoluteView from "../../components/AbsoluteView";
import colors from "../../utils/colors";
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

const HomePerson = () => {
  return (
    <View style={personStyles.container}>
      <View style={personStyles.imageWrapper}>
        <Image
          source={require("../../assets/person.png")}
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

          <AbsoluteView top={12} right={8}>
            <Image
              source={require("../../assets/home/lock.png")}
              style={{width: 24, height: 24}}
            />
          </AbsoluteView>

          <AbsoluteView top={8} left={8}>
            <Image
              source={require("../../assets/home/bag.png")}
              style={{width: 32, height: 32}}
            />
          </AbsoluteView>
        </View>
      </View>
      <View style={personStyles.infoWrapper}>
        <Flag isoCode="SA" size={20} style={personStyles.flag} />
        <StyledText size={14}>رواق الجابوري</StyledText>
        <Icon
          name="favorite"
          size={16}
          color="#a83f39"
          style={personStyles.heart}
        />
      </View>
    </View>
  );
};

const personStyles = StyleSheet.create({
  container: {
    flex: 1,
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

const Home = () => {
  const {width} = useWindowDimensions();
  return (
    <View style={{flex: 1, backgroundColor: colors.bg}}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <Image
          source={require("../../assets/ad.png")}
          style={{width, height: width / 4, resizeMode: "cover"}}
        />
        <View style={styles.catsContainer}>
          <HomeCat src={mobileImage} title="ترتيب الغرف" />
          <HomeCat src={starsImage} title="النجوم" />
          <HomeCat src={TennisImage} title="الالعاب" />
          <HomeCat src={CrownImage} title="الاثرياء" />
        </View>
        <View style={styles.peopleRow}>
          <HomePerson />
          <Spacer space={12} />
          <HomePerson />
        </View>

        <View style={styles.peopleRow}>
          <HomePerson />
          <Spacer space={12} />
          <HomePerson />
        </View>

        <View style={styles.peopleRow}>
          <HomePerson />
          <Spacer space={12} />
          <HomePerson />
        </View>
      </ScrollView>
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
  peopleRow: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginBottom: 8,
  },
});

export default Home;
