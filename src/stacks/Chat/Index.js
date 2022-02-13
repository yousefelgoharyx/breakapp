import React from "react";
import {StyleSheet, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Avatar from "../../components/Avatar";
import Divider from "../../components/Divider";
import Screen from "../../components/Screen";
import StyledText from "../../components/StyledText";
import colors from "../../utils/colors";

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

const ChatItem = () => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#171516",
      padding: 24,
      paddingHorizontal: 16,
    }}>
    <View
      style={{
        backgroundColor: "#fff",
        alignSelf: "flex-start",
        width: 64,
        height: 64,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 64 / 2,
        marginEnd: 16,
      }}>
      <Icon name="notifications" color="#3B4652" size={40} />
    </View>
    <View>
      <StyledText
        bold
        size={22}
        style={{color: colors.primary, marginBottom: 4}}>
        رسائل النظام
      </StyledText>
      <StyledText style={{color: "#707070"}}>رسالة عن الظام</StyledText>
    </View>

    <View style={{marginStart: "auto"}}>
      <StyledText style={{color: "#707070"}} size={12}>
        04:31 12-03
      </StyledText>
    </View>
  </View>
);
const Index = () => {
  return (
    <Screen bg="#0e0e0e" statusBarBg="#0e0e0e">
      <View style={styles.container}>
        <ChatHead />
        <ChatItem />
        <Divider bg="#302C2E" />
        <ChatItem />
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
