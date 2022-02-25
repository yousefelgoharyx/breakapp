import React, { useState } from "react";
import { Image, Pressable, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import AppBar from "../../components/AppBar";
import Button from "../../components/Button";
import Screen from "../../components/Screen";
import StyledText from "../../components/StyledText";
import colors from "../../utils/colors";

const RadioButton = ({ active }) => (
  <View style={{ borderColor: colors.primary, borderWidth: 2, width: 20, height: 20, borderRadius: 20 / 2, alignItems: 'center', justifyContent: 'center' }}>
    <View style={{ backgroundColor: colors.primary, width: active ? 12 : 0, height: active ? 12 : 0, borderRadius: 12 / 2 }}></View>
  </View>
)
const options = [
  {
    id: "visa",
    title: "الدفع بالفيزا",
    image: require("../../assets/icons/visa.png"),
    active: true
  },
  {
    id: "fawry",
    title: "الدفع باستخدام فوري",
    image: require("../../assets/icons/fawry.png"),
    active: false
  },
  {
    id: "mastercard",
    title: "الدفع باستخدام ماستر كارد",
    image: require("../../assets/icons/mastercard.png"),
    active: false
  }
]
const PaymentMethod = ({ navigation }) => {


  const [active, setActive] = useState("visa")

  return (
    <Screen statusBarBg="#000" bg="#000">
      <AppBar title="بوابة الدفع" />
      <StyledText style={styles.header}>
        اختار طريقة الدفع المناسبة لك
      </StyledText>
      <View style={styles.content}>

        <View style={styles.paymentOptions}>
          <StyledText bold>طرق الدفع</StyledText>
          {options.map(option => {
            return (
              <Pressable style={styles.option} onPress={() => setActive(option.id)} key={option.title}>
                <RadioButton active={active === option.id} />
                <Image source={option.image} style={{ width: 12 * 3, height: 12, marginHorizontal: 8 }} />
                <StyledText style={{ color: "#000" }}>{option.title}</StyledText>
              </Pressable>
            )

          })}

        </View>
        <View style={{ alignSelf: 'stretch', padding: 24 }}>

          <Button title="الي الدفع" onPress={() => navigation.navigate("PaymentInfo")} />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
  },
  content: {
    alignItems: "center",
    flex: 1,
  },
  paymentOptions: {
    alignSelf: "stretch",
    justifyContent: "center",
    paddingHorizontal: 24,
    flex: 1,
  },
  option: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 16
  }
});

export default PaymentMethod;
