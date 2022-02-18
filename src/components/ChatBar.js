import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AbsoluteView from "./AbsoluteView";
import Spacer from "./Spacer";

const ChatBar = () => {
  const [height, setHeight] = React.useState(40);
  const inputRef = React.useRef(null);
  return (
    <View style={styles.container}>
      <AbsoluteView
        bottom={height + 62 > 150 ? 150 + 62 : height + 62}
        right={0}>
        <View style={styles.iconContainer}>
          <Icon name="grid-view" size={24} color="#fff" />
        </View>
      </AbsoluteView>
      <AbsoluteView
        bottom={height + 16 > 150 ? 150 + 16 : height + 16}
        right={0}>
        <View style={styles.iconContainer}>
          <Icon name="person" size={24} color="#fff" />
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
            setHeight(e.nativeEvent.contentSize.height);
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

      <View style={styles.iconContainer}>
        <Icon name="mood" size={24} color="#fff" />
      </View>
    </View>
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
