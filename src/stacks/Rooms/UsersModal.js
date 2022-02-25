import BottomSheet, {
  BottomSheetModal,
  BottomSheetScrollView,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import React, {useMemo, useRef} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Avatar from "../../components/Avatar";
import StyledText from "../../components/StyledText";
import colors from "../../utils/colors";
import Backdrop from "./Backdrop";
import Button from "./Button";
import UserSettingsModal from "./UserSettingsModal";

const User = ({onKick}) => {
  return (
    <View style={styles.user}>
      <View style={styles.userSide}>
        <Avatar
          source={require("../../assets/girl.png")}
          size={64}
          style={styles.userAvatar}
        />
        <StyledText bold style={styles.spacing}>
          القناص
        </StyledText>
      </View>
      <View style={styles.userSide}>
        <Button title="متابعة" style={styles.spacing} />
        <Button title="مشرف" bg="#454FD6" style={styles.spacing} />
        <Button title="طرد" bg="#D61414" onPress={onKick} />
      </View>
    </View>
  );
};

const UsersModal = React.forwardRef((props, ref) => {
  const userSettingsRef = useRef(null);

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

  const scrollViewProps = {
    showsVerticalScrollIndicator: false,
    style: styles.scrollview,
    contentContainerStyle: styles.content,
    onLayout: sheetSettings.handleContentLayout,
  };
  return (
    <BottomSheetModal {...sheetProps}>
      <BottomSheetScrollView {...scrollViewProps}>
        <User onKick={() => userSettingsRef.current.present()} />
        <User onKick={() => userSettingsRef.current.present()} />
        <User onKick={() => userSettingsRef.current.present()} />
        <User onKick={() => userSettingsRef.current.present()} />
        <User onKick={() => userSettingsRef.current.present()} />
        <User onKick={() => userSettingsRef.current.present()} />
        <User onKick={() => userSettingsRef.current.present()} />
        <User onKick={() => userSettingsRef.current.present()} />
      </BottomSheetScrollView>
      <UserSettingsModal ref={userSettingsRef} />
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    borderRadius: 16,
    overflow: "hidden",
  },
  modal: {
    backgroundColor: "#2a2a2a",
  },

  scrollview: {
    flex: 1,
    backgroundColor: "#2a2a2a",
    maxHeight: 400,
  },
  content: {
    padding: 24,
    paddingBottom: 0,
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

  user: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  userSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatar: {
    marginEnd: 12,
  },
  spacing: {
    marginEnd: 8,
  },
});

export default UsersModal;
