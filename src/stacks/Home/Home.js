import React, {useLayoutEffect} from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import Header from "../../components/Header";
import Screen from "../../components/Screen";
import Spacer from "../../components/Spacer";
import colors from "../../utils/colors";
import HomeCat from "./HomeCat";
import HomePerson from "./HomePerson";

const mobileImage = require("../../assets/home/mobile.png");
const starsImage = require("../../assets/home/stars.png");
const TennisImage = require("../../assets/home/tennis.png");
const CrownImage = require("../../assets/home/crowns.png");
const adImage = require("../../assets/ad.png");
const HomeRow = ({children}) => <View style={styles.row}>{children}</View>;
const Home = ({navigation}) => {
  const {width} = useWindowDimensions();
  return (
    <Screen>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <Image
          source={adImage}
          style={{width, height: width / 4, resizeMode: "cover"}}
        />
        <View style={styles.catsContainer}>
          <HomeCat
            src={mobileImage}
            title="ترتيب الغرف"
            onPress={() => navigation.navigate("GroupRanks")}
          />
          <HomeCat
            src={starsImage}
            title="النجوم"
            onPress={() => navigation.navigate("Stars")}
          />
          <HomeCat src={TennisImage} title="الالعاب" />
          <HomeCat
            src={CrownImage}
            title="الاثرياء"
            onPress={() => navigation.navigate("Rich")}
          />
        </View>
        <HomeRow>
          <HomePerson onPress={() => navigation.navigate("Live")} />
          <HomePerson />
          <HomePerson />
          <HomePerson />
          <HomePerson />
          <HomePerson />
        </HomeRow>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  catsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
    marginTop: 16,
    flexWrap: "wrap",
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginBottom: 8,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default Home;
