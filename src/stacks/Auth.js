import React from "react";
import {Image, SafeAreaView, StyleSheet, View} from "react-native";
import AbsoluteView from "../components/AbsoluteView";
import DoublePolygen from "../components/DoublePolygen";
import SocialButton from "../components/SocialButton";
import Spacer from "../components/Spacer";
import StyledText from "../components/StyledText";
import colors from "../utils/colors";
const Auth = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <AbsoluteView top="8%" right={56}>
        <DoublePolygen />
      </AbsoluteView>
      <AbsoluteView top="49%" left={-24}>
        <DoublePolygen />
      </AbsoluteView>

      <View style={{alignItems: "center", marginTop: 32, position: "relative"}}>
        <StyledText
          size={22}
          style={{position: "absolute", top: "46%", left: 48}}>
          دردشة
        </StyledText>
        <StyledText
          size={14}
          style={{position: "absolute", top: 40, right: "42%"}}>
          اصدقاء جدد
        </StyledText>
        <StyledText
          size={14}
          style={{position: "absolute", bottom: 32, left: "39%"}}>
          مواهب جديدة
        </StyledText>
        <StyledText
          size={22}
          style={{position: "absolute", bottom: "46%", right: 32}}>
          كون ذاتك
        </StyledText>
        <Image
          source={require("../assets/head.png")}
          style={{width: 324, height: 350}}
        />
      </View>
      <View style={styles.social}>
        <StyledText size={12}>
          سجل الدخول للاستمتاح بمزيد من المميزات
        </StyledText>
        <Spacer space={24} />
        <SocialButton
          onPress={() => navigation.navigate("Login")}
          icon="facebook"
          text="Facebook"
        />
        <Spacer />
        <SocialButton icon="google" color="#000" text="Google" />
        <Spacer space={20} />
        <SocialButton icon="mobile-alt" color="#000" text="Google" />
        <Spacer space={32} />
        <StyledText size={12} style={styles.copyrightText}>
          جميع الحقوق محفوظة بموجب قانون الملكية لعام 2021 الخاص بنا
        </StyledText>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    direction: "rtl",
  },
  social: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
  },
  copyrightText: {
    maxWidth: 270,
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 24,
  },
});

export default Auth;
