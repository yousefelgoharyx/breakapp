import React from "react";
import {Image, useWindowDimensions, View} from "react-native";
import Header from "../../components/Header";
const Home = () => {
  const {width} = useWindowDimensions();
  return (
    <View>
      <Header />
      <Image
        source={require("../../assets/ad.png")}
        style={{width, height: 90}}
      />
    </View>
  );
};

export default Home;
