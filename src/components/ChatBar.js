import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Chest from "../icons/Chest";
import Game from "../icons/Game";
import Gift from "../icons/Gift";
import Menu from "../icons/Menu";
import AbsoluteView from "./AbsoluteView";
import Spacer from "./Spacer";

const ChatBar = ({onShowMenu, onStartCall}) => {
  const [height, setHeight] = React.useState(40);
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef(null);
  return (
    <>
      <View style={styles.container}>
        <AbsoluteView bottom={height + 64} right={0}>
          <Game size={36} />
        </AbsoluteView>
        <AbsoluteView bottom={height + 16} right={0}>
          <View style={[styles.iconContainer, {backgroundColor: "#F9A512"}]}>
            <Chest size={20} />
          </View>
        </AbsoluteView>
        <TouchableOpacity style={styles.iconContainer} onPress={onStartCall}>
          <Icon name="mic" size={24} color="#fff" />
        </TouchableOpacity>
        <Spacer space={8} />
        <View style={styles.inputContainer}>
          <Icon name="sms" size={20} color="#fff" style={styles.inputIcon} />

          <TextInput
            style={[styles.input, {height}]}
            onContentSizeChange={e => {
              if (e.nativeEvent.contentSize.height <= 150) {
                setHeight(e.nativeEvent.contentSize.height);
              }
            }}
            placeholderTextColor="#fff"
            placeholder="اكتب..."
            textAlign="right"
            textAlignVertical="center"
            multiline={true}
            ref={inputRef}
          />
        </View>
        <Spacer space={8} />

        <View style={[styles.iconContainer, {backgroundColor: "#2EAAB8"}]}>
          <Gift size={24} />
        </View>
        <Spacer space={8} />

        <TouchableOpacity
          style={[styles.iconContainer, {backgroundColor: "#FEBF02"}]}
          onPress={onShowMenu}>
          <Menu size={16} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingVertical: 8,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40 / 2,
    alignSelf: "flex-start",
  },
  inputContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 4,
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    width: "100%",
    fontFamily: "Cairo",
    marginStart: 4,
    textAlignVertical: "top",
    maxHeight: 150,
  },
  inputIcon: {
    marginTop: 12,
  },
});

export default ChatBar;
