import React from "react";
import {StyleSheet, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Avatar from "../../components/Avatar";
import Divider from "../../components/Divider";
import Screen from "../../components/Screen";
import Spacer from "../../components/Spacer";
import StyledText from "../../components/StyledText";
import colors from "../../utils/colors";
import ChatItem from "./ChatItem";
import SystemChatItem from "./SystemChatItem";

const ChatHead = () => (
  <View style={styles.chatHeadContainer}>
    <StyledText bold>الرسائل</StyledText>
    <Icon
      name="chat"
      size={24}
      color={colors.primary}
      style={styles.chatHeadIcon}
    />
  </View>
);

const Index = () => {
  return (
    <Screen bg="#0e0e0e" statusBarBg="#0e0e0e">
      <View style={styles.container}>
        <ChatHead />
        <SystemChatItem
          text="رسائل النظام"
          subText="رسالة عن النظام"
          date="04:31 12-03"
          icon="notifications"
        />
        <Divider bg="#302C2E" />
        <SystemChatItem
          text="خدمة عملاء بريك شات"
          subText="رسالة عن النظام"
          date="04:31 12-03"
          icon="face"
        />
        <Spacer space={32} />
        <ChatItem
          text="مروة محمد"
          subText="منور"
          date="04:31 12-03"
          source={require("../../assets/person.png")}
        />
        <Divider bg="#302C2E" />
        <ChatItem
          text="محمد محمود"
          subText="كيف حالك"
          date="04:31 12-03"
          source={require("../../assets/person.png")}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatHeadContainer: {
    flexDirection: "row",
    backgroundColor: "#474546",
    alignSelf: "flex-start",
    padding: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    margin: 16,
    alignItems: "center",
  },
  chatHeadIcon: {
    marginStart: 8,
  },
});

export default Index;
