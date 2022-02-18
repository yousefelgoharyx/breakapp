import React from "react";
import {View, StyleSheet} from "react-native";
import StyledText from "../../components/StyledText";
import Avatar from "../../components/Avatar";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../utils/colors";
const ChatItem = ({text, subText, date, source}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Avatar source={source} size={64} />
      </View>
      <View style={{flexShrink: 1}}>
        <StyledText bold size={18} style={styles.headText}>
          {text}
        </StyledText>
        <StyledText size={14} style={styles.headSubText}>
          {subText}
        </StyledText>
      </View>

      <View style={styles.dateWrapper}>
        <StyledText style={styles.date} size={12}>
          {date}
        </StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#171516",
    padding: 24,
    paddingHorizontal: 16,
  },
  imageWrapper: {
    marginEnd: 16,
  },
  headText: {
    color: colors.primary,
    marginBottom: 4,
  },
  headSubTexT: {
    color: "#707070",
  },
  dateWrapper: {
    marginStart: "auto",
  },
  date: {
    color: "#707070",
  },
});
export default ChatItem;
