import React from "react";
import {StyleSheet, View} from "react-native";
import AppBar from "../../components/AppBar";
import Screen from "../../components/Screen";
import StyledText from "../../components/StyledText";

const PaymentMethod = () => {
  return (
    <Screen statusBarBg="#000" bg="#000">
      <AppBar title="بوابة الدفع" />
      <View style={styles.content}>
        <StyledText style={styles.header}>
          اختار طريقة الدفع المناسبة لك
        </StyledText>
        <View style={styles.paymentOptions}>
          <StyledText bold>طرق الدفع</StyledText>
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
});

export default PaymentMethod;
