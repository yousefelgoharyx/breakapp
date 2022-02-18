import React, {useRef} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import Screen from "../../components/Screen";
import StyledText from "../../components/StyledText";
import Stars from "../../icons/Stars";
import Share from "../../icons/Share";
import Logout from "../../icons/Logout";
import Vote from "../../icons/Vote";
import Flag from "react-native-country-flag";
import Spacer from "../../components/Spacer";
import Award from "../../icons/Award";
import colors from "../../utils/colors";
import UserCount from "../../components/UserCount";
import FramedAvatar from "../../components/FramedAvater";
import LabeledAvatar from "../../components/LabeledAvatar";
import ChatMessage from "../../components/ChatMessage";
import AbsoluteView from "../../components/AbsoluteView";
import Icon from "react-native-vector-icons/MaterialIcons";
import ChatBar from "../../components/ChatBar";
const Live = () => {
  return (
    <Screen bg="#000" statusBarBg="#000">
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <Flag isoCode="EG" size={16} />
          <StyledText bold style={styles.headerText}>
            اصدقاء 24
          </StyledText>
          <Stars size={20} />
        </View>
        <View style={styles.icons}>
          <Vote size={32} />
          <Spacer />
          <Logout size={32} />
          <Spacer />
          <Share size={34} />
        </View>
      </View>

      <View style={styles.topUsers}>
        <View style={styles.award}>
          <Award />
          <StyledText bold style={styles.awardText}>
            30.0K
          </StyledText>
        </View>
        <View style={styles.users}>
          <UserCount count={963} />
          <Spacer />
          <FramedAvatar
            frameSource={require("../../assets/frames/idk.png")}
            imageSource={require("../../assets/person.png")}
          />
          <Spacer />
          <FramedAvatar
            frameSource={require("../../assets/frames/idk.png")}
            imageSource={require("../../assets/person.png")}
          />
        </View>
      </View>

      <View style={styles.usersRow}>
        <LabeledAvatar
          source={require("../../assets/person.png")}
          label="10K"
          size={56}
        />
        <LabeledAvatar
          source={require("../../assets/person.png")}
          label="10K"
          size={56}
        />
        <LabeledAvatar
          source={require("../../assets/person.png")}
          label="10K"
          size={56}
        />
        <LabeledAvatar
          source={require("../../assets/person.png")}
          label="10K"
          size={56}
        />
        <LabeledAvatar
          source={require("../../assets/person.png")}
          label="10K"
          size={56}
        />
      </View>

      <View style={styles.usersRow}>
        <LabeledAvatar
          source={require("../../assets/person.png")}
          label="10K"
          size={56}
        />
        <LabeledAvatar
          source={require("../../assets/person.png")}
          label="10K"
          size={56}
        />
        <LabeledAvatar
          source={require("../../assets/person.png")}
          label="10K"
          size={56}
        />
        <LabeledAvatar
          source={require("../../assets/person.png")}
          label="10K"
          size={56}
        />
        <LabeledAvatar
          source={require("../../assets/person.png")}
          label="10K"
          size={56}
        />
      </View>

      <ScrollView
        style={{}}
        contentContainerStyle={{marginTop: 24, paddingBottom: 24}}
        showsVerticalScrollIndicator={false}>
        <ChatMessage source={require("../../assets/person.png")} />
        <Spacer />
        <ChatMessage source={require("../../assets/person.png")} />
        <Spacer />
        <ChatMessage source={require("../../assets/person.png")} />
        <Spacer />
        <ChatMessage source={require("../../assets/person.png")} />
        <Spacer />
        <ChatMessage source={require("../../assets/person.png")} />
        <Spacer />
        <ChatMessage source={require("../../assets/person.png")} />
        <Spacer />
        <ChatMessage source={require("../../assets/person.png")} />
        <Spacer />
      </ScrollView>
      <ChatBar />
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    padding: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#403F3E",
    alignSelf: "flex-start",
    paddingHorizontal: 24,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },
  headerText: {
    marginHorizontal: 8,
  },
  icons: {
    flexDirection: "row",
    top: 1,
  },
  topUsers: {
    marginHorizontal: 24,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  award: {
    flexDirection: "row",
    backgroundColor: "#403F3E50",
    alignSelf: "flex-start",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  awardText: {
    marginStart: 12,
    color: colors.primary,
  },
  users: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  usersRow: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 8,
  },
});

export default Live;
