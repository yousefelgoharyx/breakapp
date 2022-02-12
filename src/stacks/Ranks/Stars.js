import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Avatar from "../../components/Avatar";
import DarkFrame from "../../components/DarkFrame";
import GoldFrame from "../../components/GoldFrame";
import IceFrame from "../../components/IceFrame";
import RankedPerson from "../../components/RankedPerson";
import Screen from "../../components/Screen";
import Spacer from "../../components/Spacer";
import StyledText from "../../components/StyledText";
import Tab, {TabItem} from "../../components/Tab";
import Heart from "../../icons/Heart";
import Jewel from "../../icons/Jewel";
import colors from "../../utils/colors";

const Person = () => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 24,
    }}>
    <View style={{flexDirection: "row", alignItems: "center"}}>
      <StyledText style={{marginEnd: 12, color: "#999"}}>1</StyledText>
      <Avatar source={personImage} size={56} />
      <View
        style={{
          marginStart: 16,
          alignItems: "flex-start",
          justifyContent: "center",
        }}>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 4,
            alignItems: "center",
          }}>
          <StyledText style={{color: "#000", marginEnd: 8}}>
            احمد علي
          </StyledText>
          <Heart size={14} style={{top: 2, marginEnd: 4}} />
          <Heart size={14} style={{top: 2}} />
        </View>
        <StyledText style={{color: "#999", fontSize: 12}}>
          ID 3285224
        </StyledText>
      </View>
    </View>

    <View style={{flexDirection: "row", alignItems: "center"}}>
      <Jewel size={12} />
      <StyledText style={{color: "#FF0707", marginStart: 4, fontSize: 12}}>
        225.13k
      </StyledText>
    </View>
  </View>
);

const personImage = require("../../assets/person.png");
const Stars = () => {
  return (
    <Screen bg={colors.primary}>
      <Tab>
        <TabItem title="يومي" active />
        <TabItem title="اسبوعي" />
        <TabItem title="شهري" />
      </Tab>

      <View style={styles.topStarsContainer}>
        <RankedPerson name="Sherif Ashraf" amount="225.13k" id="ID 3285224">
          <IceFrame source={personImage} />
        </RankedPerson>
        <RankedPerson
          name="Sherif Ashraf"
          amount="225.13k"
          id="ID 3285224"
          top={-32}>
          <GoldFrame source={personImage} />
        </RankedPerson>
        <RankedPerson name="Sherif Ashraf" amount="225.13k" id="ID 3285224">
          <DarkFrame source={personImage} />
        </RankedPerson>
      </View>

      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          marginHorizontal: 16,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
        contentContainerStyle={{padding: 24, paddingBottom: 0}}>
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  topStarsContainer: {
    flexDirection: "row",
    marginTop: 64,
    justifyContent: "space-between",
    paddingHorizontal: 32,
    alignItems: "center",
    marginBottom: 16,
  },
});
export default Stars;
