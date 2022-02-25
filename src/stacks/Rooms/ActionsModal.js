// import React from "react";
// import {StyleSheet, TouchableOpacity} from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import BlackModal from "../../components/BlackModal";
// import Spacer from "../../components/Spacer";
// import StyledText from "../../components/StyledText";
// import colors from "../../utils/colors";

// const ActionsModal = ({isOpen, requestClose}) => {
//   return (
//     <BlackModal isOpen={isOpen} requestClose={requestClose}>
//       <TouchableOpacity
//         style={styles.iconContainer}
//         activeOpacity={0.7}
//         onPress={() => console.log("HEllo")}>
//         <Icon name="arrow-downward" size={56} color="#fff" />
//       </TouchableOpacity>
//       <StyledText bold>حفظ</StyledText>
//       <Spacer space={64} />
//       <TouchableOpacity style={styles.iconContainer} activeOpacity={0.7}>
//         <Icon name="power-settings-new" size={56} color="#fff" />
//       </TouchableOpacity>
//       <StyledText bold>خروج</StyledText>
//     </BlackModal>
//   );
// };

// const styles = StyleSheet.create({
//   iconContainer: {
//     backgroundColor: colors.primary,
//     width: 96,
//     height: 96,
//     borderRadius: 96 / 2,
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 16,
//   },
// });

// export default ActionsModal;

import {
  BottomSheetModal,
  useBottomSheetDynamicSnapPoints,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import React, {useMemo} from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import StyledText from "../../components/StyledText";
import Icon from "react-native-vector-icons/MaterialIcons";
import Backdrop from "./Backdrop";
import Spacer from "../../components/Spacer";
import colors from "../../utils/colors";

const UserModal = React.forwardRef((props, ref) => {
  const sheetProps = {
    ref: ref,
    index: 0,
    snapPoints: ["100%"],
    enablePanDownToClose: true,
    backdropComponent: Backdrop,
    backgroundStyle: styles.modal,
    style: styles.container,
    handleIndicatorStyle: styles.handleIndicatorStyle,
    handleStyle: styles.indicatorStyles,
    detached: true,
  };
  return (
    <BottomSheetModal {...sheetProps}>
      <View style={[styles.modalWrapper]}>
        <Pressable
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => ref.current.dismiss()}>
          <TouchableOpacity
            style={[styles.iconContainer]}
            activeOpacity={0.7}
            onPress={() => console.log("HEllo")}>
            <Icon name="arrow-downward" size={56} color="#fff" />
          </TouchableOpacity>
          <StyledText bold>حفظ</StyledText>
          <Spacer space={64} />
          <TouchableOpacity style={styles.iconContainer} activeOpacity={0.7}>
            <Icon name="power-settings-new" size={56} color="#fff" />
          </TouchableOpacity>
          <StyledText bold>خروج</StyledText>
        </Pressable>
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

export default UserModal;
