import React from "react";
import {StyleSheet, View, ScrollView} from "react-native";
import AppBar from "../../components/AppBar";
import Screen from "../../components/Screen";
import Spacer from "../../components/Spacer";
import ProfileHeader from "./ProfileHeader";
import ProfileBadge from "./ProfileBadge";
import ProfileStat from "./ProfileStat";
import Divider from "../../components/Divider";
import ProfileSetting from "./ProfileSetting";

const levelIcon = require("../../assets/profile/level.png");
const globeIcon = require("../../assets/profile/globe.png");
const gender = require("../../assets/profile/maleGender.png");
const storeIcon = require("../../assets/profile/store.png");
const tribeIcon = require("../../assets/profile/tribe.png");
const walletIcon = require("../../assets/profile/wallet.png");
const awardIcon = require("../../assets/profile/award.png");
const inviteIcon = require("../../assets/profile/invite.png");
const settingsIcon = require("../../assets/profile/settings.png");
const Profile = () => {
  return (
    <Screen bg="#262626">
      <AppBar title="الملف الشخصي" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader />
        <View style={styles.infoContainer}>
          <View style={styles.badgesSection}>
            <ProfileBadge title="مصر" imageSource={globeIcon} bg="#FFA564" />
            <Spacer />
            <ProfileBadge title="Lv 36" imageSource={levelIcon} size={28} />
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
              stat="16K"
              title="متابعة"
              iconSource={require("../../assets/profile/follower.png")}
            />
            <Spacer />
            <ProfileStat
              stat="160K"
              title="متابعين"
              icon="favorite"
              iconSource={require("../../assets/profile/like.png")}
            />
          </View>
        </View>
        <Divider marginV={32} />
        <View style={{paddingHorizontal: 24}}>
          <ProfileSetting title="المتجر" iconSource={storeIcon} />
          <ProfileSetting title="القبائل" iconSource={tribeIcon} />
          <ProfileSetting title="الحفظة" iconSource={walletIcon} />
          <ProfileSetting
            title="المستوي"
            iconSource={levelIcon}
            leftText="Lv 36"
          />
          <ProfileSetting title="الاوسمة" iconSource={awardIcon} />
          <ProfileSetting title="دعوة الاصدقاء" iconSource={inviteIcon} />
          <ProfileSetting title="الاعدادات" iconSource={settingsIcon} />
        </View>
      </ScrollView>
    </Screen>
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

export default Profile;
