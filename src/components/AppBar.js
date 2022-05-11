import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Dimensions, StyleSheet, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../utils/colors";
import StyledText from "./StyledText";
const AppBar = ({onBack, title, hideBack, fixed}) => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={[
          styles.header,
          fixed
            ? {
                position: "absolute",
                top: 0,
                right: 0,
                width: Dimensions.get("screen").width,
                zIndex: 999,
                backgroundColor: colors.bg,
              }
            : null,
        ]}>
        <View style={styles.side}>
          {!hideBack ? (
            <TouchableOpacity onPress={onBack ? onBack : navigation.goBack}>
              <Icon
                name="arrow-forward-outline"
                size={24}
                color={"#fff"}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
          ) : null}
        </View>

        <StyledText style={styles.headerText}>{title}</StyledText>
        <View style={styles.side}></View>
      </View>
      {fixed ? <View style={{height: 64 + 16}}></View> : null}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  headerIcon: {
    marginStart: 16,
    marginEnd: "auto",
  },
  headerText: {
    lineHeight: 16 * 1.6,
    flex: 1,
    textAlign: "center",
  },
  side: {
    flex: 1,
  },
});

export default AppBar;
