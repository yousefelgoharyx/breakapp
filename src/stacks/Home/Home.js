import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import Screen from "../../components/Screen";
import StyledText from "../../components/StyledText";
import colors from "../../utils/colors";
import HomeCat from "./HomeCat";
import HomePerson from "./HomePerson";
import useRooms from "./api/useRooms";
const mobileImage = require("../../assets/home/mobile.png");
const starsImage = require("../../assets/home/stars.png");
const TennisImage = require("../../assets/home/tennis.png");
const CrownImage = require("../../assets/home/crowns.png");
const adImage = require("../../assets/ad.png");

const HomeRow = ({children}) => <View style={styles.row}>{children}</View>;

const Home = ({navigation}) => {
  const {width} = useWindowDimensions();

  const query = useRooms();
  if (query.isLoading) {
    return <Loader />;
  }
  if (query.isError) {
    return <StyledText>Error</StyledText>;
  }

  return (
    <Screen statusBarBg={colors.primary}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{minHeight: "100%"}}>
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
          {query.data.rooms.rooms.map(item => (
            <HomePerson
              key={item._id}
              name={item.room_name}
              isPrivate={item.private}
              image={item.room_owner.avatar}
              onPress={() => navigation.navigate("Live")}
            />
          ))}
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
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Home;
