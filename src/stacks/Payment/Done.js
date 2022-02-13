import React from "react";
import {Image, StyleSheet, View} from "react-native";
import Button from "../../components/Button";
import Screen from "../../components/Screen";
import StyledText from "../../components/StyledText";
const completeImage = require("../../assets/complete.png");
const Done = () => {
  return (
    <Screen bg="#000" statusBarBg="#000">
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={completeImage} style={styles.image} />
          <StyledText bold size={24} style={styles.heading}>
            شكرا لك تم الدفع بنجاح
          </StyledText>

          <StyledText size={16}>
            سوف تصلك رسالة تأكيد علي بريدك الاليكتروني
          </StyledText>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="قم بشراء المزيد من الذهب" />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  content: {
    marginTop: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 184,
    height: 184,
    marginBottom: 16,
  },
  heading: {
    marginBottom: 8,
  },
  buttonContainer: {
    alignSelf: "stretch",
    marginTop: "auto",
    paddingBottom: 24,
  },
});

export default Done;
