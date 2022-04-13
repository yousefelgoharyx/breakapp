import React from "react";
import {View, StyleSheet} from "react-native";
import Spacer from "../../components/Spacer";
import useGet from "../../hooks/useGet";
import ProfileBadge from "./ProfileBadge";
import ProfileStat from "./ProfileStat";

const levelIcon = require("../../assets/profile/level.png");
const globeIcon = require("../../assets/profile/globe.png");
const gender = require("../../assets/profile/maleGender.png");
const Stats = ({user}) => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.badgesSection}>
        <ProfileBadge title="مصر" imageSource={globeIcon} bg="#FFA564" />
        <Spacer />
        <ProfileBadge
          title={`Lv ${user.level}`}
          imageSource={levelIcon}
          size={28}
        />
        <Spacer />
        <ProfileBadge imageSource={gender} bg="#2680EB" size={16} />
      </View>
      <View style={styles.statsSection}>
        <ProfileStat
          stat="30k"
          title="زائر"
          iconSource={require("../../assets/profile/visitor.png")}
        />
        <Spacer />
        <ProfileStat
          stat={user.followings}
          title="متابعة"
          iconSource={require("../../assets/profile/follower.png")}
        />
        <Spacer />
        <ProfileStat
          stat={user.followers}
          title="متابعين"
          iconSource={require("../../assets/profile/like.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    paddingHorizontal: 32,
  },
  badgesSection: {
    flexDirection: "row",
    marginTop: 32,
    justifyContent: "center",
  },
  statsSection: {
    flexDirection: "row",
    marginTop: 32,
    justifyContent: "space-between",
  },
});
export default Stats;
