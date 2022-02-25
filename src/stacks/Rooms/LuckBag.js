import {
  BottomSheetModal,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import React, {useMemo} from "react";
import {Dimensions, Image, StyleSheet, View} from "react-native";
import StyledText from "../../components/StyledText";
import Button from "../../components/Button";
import Backdrop from "./Backdrop";
import colors from "../../utils/colors";

const LuckBag = React.forwardRef((props, ref) => {
  const {width} = Dimensions.get("screen");
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
    handleStyle: styles.indicatorStyles,
    contentHeight: sheetSettings.animatedContentHeight,
    handleHeight: sheetSettings.animatedHandleHeight,
  };
  return (
    <BottomSheetModal {...sheetProps}>
      <View
        style={styles.modalWrapper}
        onLayout={sheetSettings.handleContentLayout}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("../../assets/luckbag.png")}
            resizeMode="contain"
            style={styles.image}
          />
          <StyledText style={styles.imageText} bold>
            كيس الحظ
          </StyledText>
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.contentTextWrapper}>
            <StyledText bold style={styles.contentTextNo}>
              1
            </StyledText>
            <StyledText style={styles.contentText}>
              يعتمد عدد اكياس الحظ علي عدد المستخدمين فالغرفة
            </StyledText>
          </View>

          <View style={styles.contentTextWrapper}>
            <StyledText bold style={styles.contentTextNo}>
              2
            </StyledText>
            <StyledText style={styles.contentText}>
              يحتوي كل كيس علي كمية عشوائية من الماس
            </StyledText>
          </View>

          <View style={styles.contentTextWrapper}>
            <StyledText bold style={styles.contentTextNo}>
              3
            </StyledText>
            <StyledText style={styles.contentText}>
              تساعد اكياس الحظ علي جذب المستخدمين للانضمام الي الغرفة
            </StyledText>
          </View>

          <View style={styles.contentTextWrapper}>
            <StyledText bold style={styles.contentTextNo}>
              4
            </StyledText>
            <StyledText style={styles.contentText}>
              ان كان لديك اكياس حظ متبقية من المرة السابقة اثناء نزول اكياس حظ
              جديدة تكون فرصة حصولك علي كيس جديد 80%
            </StyledText>
          </View>

          <Button title="ارسال" />
        </View>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  container: {
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    position: "relative",
  },
  modal: {
    backgroundColor: "transparent",
  },
  indicatorStyles: {
    display: "none",
  },

  modalWrapper: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  },

  imageWrapper: {
    position: "absolute",
    top: 0,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
    height: 150,
  },
  image: {
    height: 150,
    position: "absolute",
  },
  imageText: {
    color: "#000",
    fontSize: 18,
  },
  contentWrapper: {
    backgroundColor: "#2a2a2a",
    flex: 1,
    width: "100%",
    marginTop: 75,
    zIndex: 1,
    borderRadius: 32,
    padding: 24,
    paddingTop: 75 + 24,
  },
  contentText: {
    lineHeight: 16 * 1.4,
  },
  contentTextNo: {
    color: colors.primary,
    marginEnd: 12,
  },
  contentTextWrapper: {
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "flex-start",
  },
});

export default LuckBag;
