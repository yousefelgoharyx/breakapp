import {useNavigation} from "@react-navigation/native";
import React from "react";
import {useAuth} from "../../context/auth";
import ProfileSetting from "./ProfileSetting";
import {View} from "react-native";

const storeIcon = require("../../assets/profile/store.png");
const tribeIcon = require("../../assets/profile/tribe.png");
const walletIcon = require("../../assets/profile/wallet.png");
const awardIcon = require("../../assets/profile/award.png");
const inviteIcon = require("../../assets/profile/invite.png");
const settingsIcon = require("../../assets/profile/settings.png");
const logoutIcon = require("../../assets/icons/logout.png");
const levelIcon = require("../../assets/profile/level.png");

const Tabs = ({user}) => {
  const navigation = useNavigation();
  const {logout} = useAuth();
  return (
    <View style={{paddingHorizontal: 24}}>
      <ProfileSetting
        title="المتجر"
        iconSource={storeIcon}
        onPress={() => navigation.navigate("Store")}
      />
      <ProfileSetting
        onPress={() => navigation.navigate("Groups")}
        title="القبائل"
        iconSource={tribeIcon}
      />
      <ProfileSetting
        title="الحفظة"
        iconSource={walletIcon}
        onPress={() => navigation.navigate("Wallet")}
      />
      <ProfileSetting
        title="المستوي"
        iconSource={levelIcon}
        leftText={`Lv ${user.level}`}
      />
      <ProfileSetting title="الاوسمة" iconSource={awardIcon} />
      <ProfileSetting title="دعوة الاصدقاء" iconSource={inviteIcon} />
      <ProfileSetting title="الاعدادات" iconSource={settingsIcon} />
      <ProfileSetting title="خروج" iconSource={logoutIcon} onPress={logout} />
    </View>
  );
};

export default Tabs;
