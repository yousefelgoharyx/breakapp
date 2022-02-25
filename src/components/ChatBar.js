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
import BlackModal from "./BlackModal";
import Spacer from "./Spacer";
import StyledText from "./StyledText";

const CatItem = ({title, source, width = 32, height = 32, onPress}) => {
  return (
    <TouchableOpacity style={styles.catItem} onPress={onPress}>
      <Image source={source} style={{width, height, marginBottom: 8}} />
      <StyledText style={styles.catText}>{title}</StyledText>
    </TouchableOpacity>
  );
};
const ChatBar = ({onShowLuckBag}) => {
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
        <View style={styles.iconContainer}>
          <Icon name="mic" size={24} color="#fff" />
        </View>
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
          onPress={() => setOpen(!open)}>
          <Menu size={16} />
        </TouchableOpacity>
      </View>
      <BlackModal
        isOpen={open}
        requestClose={() => setOpen(false)}
        bg="transparent">
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "flex-end",
            alignSelf: "stretch",
          }}>
          <View
            style={{
              padding: 16,
              backgroundColor: "#fff",
              alignSelf: "stretch",
              margin: 32,
              borderRadius: 16,
            }}>
            <View style={styles.catRow}>
              <CatItem
                title="لعبة النرد"
                source={require("../assets/icons/dice.png")}
              />
              <CatItem
                title="كتم الصوت"
                source={require("../assets/icons/volume-mute.png")}
              />
              <CatItem
                title="رقم الحظ"
                source={require("../assets/icons/numbers.png")}
              />
              <CatItem
                title="الخلفية"
                source={require("../assets/icons/background.png")}
              />
            </View>
            <Spacer space={24} />
            <View style={styles.catRow}>
              <CatItem
                title="العداد"
                source={require("../assets/icons/calc.png")}
                width={28}
                height={32}
              />
              <CatItem
                title="الوسيقي"
                source={require("../assets/icons/musical-note.png")}
              />
              <CatItem
                title="كيس الحظ"
                source={require("../assets/icons/money-bag.png")}
                onPress={onShowLuckBag}
              />
              <CatItem
                title="مسح"
                source={require("../assets/icons/delete.png")}
              />
            </View>
          </View>
        </View>
      </BlackModal>
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

export default ChatBar;
