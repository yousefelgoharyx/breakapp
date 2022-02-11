import React from "react";
import {Image, ImageBackground, StyleSheet, View} from "react-native";
import DarkFrame from "../../components/DarkFrame";
import GoldFrame from "../../components/GoldFrame";
import IceFrame from "../../components/IceFrame";
import Screen from "../../components/Screen";
import Spacer from "../../components/Spacer";
import StyledText from "../../components/StyledText";
import colors from "../../utils/colors";
const Stars = () => {
  return (
    <Screen bg={colors.primary}>
      <View style={styles.tabsContainer}>
        <View style={[styles.tab, styles.tabActive]}>
          <StyledText style={[styles.tabText, styles.activeTabText]}>
            يومي
          </StyledText>
        </View>
        <View style={styles.tab}>
          <StyledText style={styles.tabText}>اسبوعي</StyledText>
        </View>
        <View style={styles.tab}>
          <StyledText style={styles.tabText}>شهري</StyledText>
        </View>
      </View>
      <View style={styles.topStarsContainer}>
        <View style={{justifyContent: "center", alignItems: "center"}}>
          <IceFrame source={require("../../assets/person.png")} />
          <StyledText style={{marginTop: 4}}>Sherif Ashraf</StyledText>
          <StyledText size={12} style={{color: "rgba(255,255,255,0.7)"}}>
            ID 3285224
          </StyledText>
        </View>

        <View
          style={{justifyContent: "center", alignItems: "center", top: -24}}>
          <GoldFrame source={require("../../assets/person.png")} />
          <StyledText style={{marginTop: 4}}>Sherif Ashraf</StyledText>
          <StyledText size={12} style={{color: "rgba(255,255,255,0.7)"}}>
            ID 3285224
          </StyledText>
        </View>

        <View style={{justifyContent: "center", alignItems: "center"}}>
          <DarkFrame source={require("../../assets/person.png")} />
          <StyledText style={{marginTop: 4}}>Sherif Ashraf</StyledText>
          <StyledText size={12} style={{color: "rgba(255,255,255,0.7)"}}>
            ID 3285224
          </StyledText>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    height: 56,
    backgroundColor: "#ffffff50",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 8,
    marginTop: 32,
    marginHorizontal: 24,
    borderRadius: 16,
  },
  tab: {
    backgroundColor: "transparent",
    height: 56 - 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  tabActive: {
    backgroundColor: "#fff",
  },
  tabText: {
    color: "#000",
    lineHeight: 26,
  },
  activeTabText: {
    color: "#FF3976",
  },
  topStarsContainer: {
    flexDirection: "row",
    marginTop: 64,
    justifyContent: "space-between",
    paddingHorizontal: 32,
    alignItems: "center",
  },
});
export default Stars;
