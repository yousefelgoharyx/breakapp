import {
  BottomSheetModal,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import React, {useMemo} from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import Avatar from "../../components/Avatar";
import StyledText from "../../components/StyledText";
import LvBadge from "../../components/LvBadge";
import colors from "../../utils/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import Backdrop from "./Backdrop";

const UserAction = ({title, iconSource, style, onAction}) => {
  return (
    <TouchableOpacity
      style={[styles.userAction, StyleSheet.flatten(style)]}
      onPress={onAction}>
      <Image source={iconSource} style={styles.userActionIcon} />
      <StyledText size={14} bold>
        {title}
      </StyledText>
    </TouchableOpacity>
  );
};

const UserSetting = ({icon, style, onAction}) => {
  return (
    <TouchableOpacity
      style={[styles.userSetting, StyleSheet.flatten(style)]}
      onPress={onAction}>
      <Icon name={icon} size={24} color="#fff" />
    </TouchableOpacity>
  );
};

const UserModal = React.forwardRef((props, ref) => {
  const initialSnapPoints = useMemo(() => ["CONTENT_HEIGHT"], []);
  const sheetSettings = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  const sheetProps = {
    ref: ref,
    index: 0,
    snapPoints: sheetSettings.animatedSnapPoints,
    enablePanDownToClose: true,
    backdropComponent: Backdrop,
    backgroundStyle: styles.modal,
    style: styles.container,
    handleIndicatorStyle: styles.handleIndicatorStyle,
    handleStyle: styles.indicatorStyles,
    contentHeight: sheetSettings.animatedContentHeight,
    handleHeight: sheetSettings.animatedHandleHeight,
  };
  const imageSource = require("../../assets/girl.png");
  return (
    <BottomSheetModal {...sheetProps}>
      <View
        style={styles.modalWrapper}
        onLayout={sheetSettings.handleContentLayout}>
        {/* User Info */}
        <View style={styles.userInfo}>
          <Avatar size={64} source={imageSource} style={styles.avatar} />
          <View>
            <StyledText bold size={18}>
              اميرة
            </StyledText>
            <View style={styles.lvContainer}>
              <LvBadge>LV. 15</LvBadge>
              <LvBadge bg="#6AD84A">LV. 15</LvBadge>
              <LvBadge bg="#57FFBC">LV. 15</LvBadge>
            </View>
          </View>
        </View>
        {/* User Actions */}
        <View style={styles.userActions}>
          <UserAction
            title="اضافة صديق"
            iconSource={require("../../assets/icons/person-add.png")}
          />
          <UserAction
            title="الصفحة الشخصية"
            iconSource={require("../../assets/icons/person.png")}
            style={{marginHorizontal: 24}}
          />
          <UserAction
            title="ارسال هدية"
            iconSource={require("../../assets/icons/send-gift.png")}
          />
        </View>
        {/* User Settings */}
        <View style={styles.userSettings}>
          <UserSetting icon="mic" />
          <UserSetting icon="mic-off" style={{marginHorizontal: 24}} />
          <UserSetting icon="person-remove" />
        </View>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  container: {
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    overflow: "hidden",
  },
  modal: {
    backgroundColor: "#2a2a2a",
  },
  indicatorStyles: {
    backgroundColor: "#333",
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  handleIndicatorStyle: {
    backgroundColor: "#fff",
  },
  modalWrapper: {
    padding: 24,
    flex: 1,
    backgroundColor: "#2a2a2a",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userActions: {
    flexDirection: "row",
    marginTop: 32,
    justifyContent: "center",
  },
  userAction: {
    alignItems: "center",
  },
  userActionIcon: {
    width: 48,
    height: 48,
    marginBottom: 8,
  },
  userSettings: {
    flexDirection: "row",
    marginTop: 32,
    justifyContent: "center",
  },
  userSetting: {
    width: 48,
    height: 48,
    backgroundColor: "#ffffff50",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  avatar: {
    marginEnd: 16,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  lvContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
});

export default UserModal;
