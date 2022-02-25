import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import BlackModal from "../../components/BlackModal";
import Spacer from "../../components/Spacer";
import StyledText from "../../components/StyledText";
import colors from "../../utils/colors";

const ActionsModal = ({isOpen, requestClose}) => {
  return (
    <BlackModal isOpen={isOpen} requestClose={requestClose}>
      <TouchableOpacity style={styles.iconContainer} activeOpacity={0.7}>
        <Icon name="arrow-downward" size={56} color="#fff" />
      </TouchableOpacity>
      <StyledText bold>حفظ</StyledText>
      <Spacer space={64} />
      <TouchableOpacity style={styles.iconContainer} activeOpacity={0.7}>
        <Icon name="power-settings-new" size={56} color="#fff" />
      </TouchableOpacity>
      <StyledText bold>خروج</StyledText>
    </BlackModal>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: colors.primary,
    width: 96,
    height: 96,
    borderRadius: 96 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
});

export default ActionsModal;
