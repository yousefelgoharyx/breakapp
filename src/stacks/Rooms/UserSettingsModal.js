import {
  BottomSheetModal,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import React, {useMemo} from "react";
import {StyleSheet, View} from "react-native";
import Avatar from "../../components/Avatar";
import StyledText from "../../components/StyledText";
import Backdrop from "./Backdrop";
import Button from "./Button";

const UserSettingsModal = React.forwardRef((props, ref) => {
  const initialSnapPoints = useMemo(() => ["CONTENT_HEIGHT"], []);
  const sheetSettings = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  const sheetProps = {
    style: styles.container,
    handleIndicatorStyle: styles.handleIndicatorStyle,
    handleStyle: styles.indicatorStyles,
    backgroundStyle: styles.modal,
    ref: ref,
    index: 0,
    snapPoints: sheetSettings.animatedSnapPoints,
    enablePanDownToClose: true,
    contentHeight: sheetSettings.animatedContentHeight,
    handleHeight: sheetSettings.animatedHandleHeight,
    backdropComponent: Backdrop,
  };
  return (
    <BottomSheetModal {...sheetProps}>
      <View
        style={styles.userSettings}
        onLayout={sheetSettings.handleContentLayout}>
        <Avatar
          source={require("../../assets/girl.png")}
          size={64}
          style={{marginBottom: 8}}
        />
        <StyledText bold>القناص</StyledText>
        <View style={styles.userSettingsActions}>
          <Button bg="#D61414" title="طرد 30 دقيقة" />
          <Button
            bg="#D61414"
            title="طرد 24 ساعة"
            style={{marginHorizontal: 8}}
          />
          <Button bg="#D61414" title="طرد نهائي" />
        </View>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    borderRadius: 16,
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
  userSettings: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  userSettingsActions: {
    flexDirection: "row",
    marginTop: 12,
  },
});

export default UserSettingsModal;
