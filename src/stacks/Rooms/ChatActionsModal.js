import {
  BottomSheetModal,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import React, {useMemo} from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import StyledText from "../../components/StyledText";
import Backdrop from "./Backdrop";
import Spacer from "../../components/Spacer";
const CatItem = ({title, source, width = 32, height = 32, onPress}) => {
  return (
    <TouchableOpacity style={styles.catItem} onPress={onPress}>
      <Image source={source} style={{width, height, marginBottom: 8}} />
      <StyledText style={styles.catText}>{title}</StyledText>
    </TouchableOpacity>
  );
};
const ChatActionsModal = React.forwardRef((props, ref) => {
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
  return (
    <BottomSheetModal {...sheetProps}>
      <View
        style={[styles.modalWrapper]}
        onLayout={sheetSettings.handleContentLayout}>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "flex-end",
            alignSelf: "stretch",
            marginBottom: 32,
          }}>
          <View
            style={{
              padding: 16,
              backgroundColor: "#fff",
              alignSelf: "stretch",
              borderRadius: 16,
            }}>
            <View style={styles.catRow}>
              <CatItem
                title="لعبة النرد"
                source={require("../../assets/icons/dice.png")}
              />
              <CatItem
                title="كتم الصوت"
                source={require("../../assets/icons/volume-mute.png")}
              />
              <CatItem
                title="رقم الحظ"
                source={require("../../assets/icons/numbers.png")}
              />
              <CatItem
                title="الخلفية"
                source={require("../../assets/icons/background.png")}
              />
            </View>
            <Spacer space={24} />
            <View style={styles.catRow}>
              <CatItem
                title="العداد"
                source={require("../../assets/icons/calc.png")}
                width={28}
                height={32}
              />
              <CatItem
                title="الوسيقي"
                source={require("../../assets/icons/musical-note.png")}
              />
              <CatItem
                title="كيس الحظ"
                source={require("../../assets/icons/money-bag.png")}
                onPress={props.onShowLuckBag}
              />
              <CatItem
                title="مسح"
                source={require("../../assets/icons/delete.png")}
              />
            </View>
          </View>
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
    backgroundColor: "transparent",
  },
  indicatorStyles: {
    backgroundColor: "#333",
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  handleIndicatorStyle: {
    backgroundColor: "#fff",
  },
  modalWrapper: {
    padding: 24,
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  catItem: {
    justifyContent: "center",
    alignItems: "center",
    width: 72,
  },
  catText: {
    color: "#000",
    fontSize: 14,
  },
  catRow: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
  },
});

export default ChatActionsModal;
