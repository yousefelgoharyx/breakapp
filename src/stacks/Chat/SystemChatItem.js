import React from "react";
import {View, StyleSheet} from "react-native";
import StyledText from "../../components/StyledText";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../utils/colors";
const SystemChatItem = ({text, subText, date, icon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon name={icon} color="#3B4652" size={40} />
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
  iconWrapper: {
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 64 / 2,
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
export default SystemChatItem;
