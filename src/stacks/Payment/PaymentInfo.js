import React, {useState} from "react";
import {Image, StyleSheet, View} from "react-native";
import AppBar from "../../components/AppBar";
import Button from "../../components/Button";
import Screen from "../../components/Screen";
import {TextInputMask} from "react-native-masked-text";
import Spacer from "../../components/Spacer";
import StyledText from "../../components/StyledText";

const PaymentInput = ({icon, ...rest}) => (
  <View style={styles.inputWrapper}>
    <TextInputMask {...rest} />
    <Image source={icon} style={styles.inputImage} />
  </View>
);
const PaymentInfo = ({navigation}) => {
  const [state, setState] = useState({
    date: "",
    number: "",
    cvv: "",
  });
  return (
    <Screen statusBarBg="#000" bg="#000">
      <AppBar title="فيزا" />

      <View style={styles.content}>
        <StyledText>بيانات كارت الدفع الخاص بك</StyledText>
        <View style={styles.inputGroup}>
          <PaymentInput
            onChangeText={text => {
              setState(prev => ({...prev, number: text}));
            }}
            value={state.number}
            style={styles.input}
            type="credit-card"
            options={{format: "YY/MM"}}
            placeholder="Cart Number"
            placeholderTextColor={"#fff"}
            icon={require("../../assets/icons/credit-card.png")}
          />
        </View>
        <View style={styles.inputGroup}>
          <PaymentInput
            onChangeText={text => {
              setState(prev => ({...prev, cvv: text}));
            }}
            value={state.cvv}
            style={styles.input}
            type="only-numbers"
            placeholder="CVV"
            placeholderTextColor={"#fff"}
            maxLength={3}
            icon={require("../../assets/icons/cvv.png")}
          />
          <Spacer />
          <PaymentInput
            onChangeText={text => {
              setState(prev => ({...prev, date: text}));
            }}
            value={state.date}
            style={styles.input}
            maxLength={5}
            type="datetime"
            options={{format: "YY/MM"}}
            placeholder="YY/MM"
            placeholderTextColor={"#fff"}
            icon={require("../../assets/icons/calendar.png")}
          />
        </View>
      </View>
      <Button
        style={styles.button}
        title="دفع"
        onPress={() => navigation.navigate("Done")}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#707070",
    paddingHorizontal: 12,
    borderWidth: 1,
    height: 48,
    borderRadius: 8,
    flex: 1,
  },
  input: {
    flex: 1,
    fontFamily: "Cairo",
    height: "100%",
  },
  inputImage: {
    marginStart: 8,
    width: 20,
    height: 20,
  },
  button: {
    margin: 24,
  },
  inputGroup: {
    flexDirection: "row",
    marginTop: 16,
  },
});

export default PaymentInfo;
