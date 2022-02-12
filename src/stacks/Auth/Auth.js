import React from "react";
import {
  Image,
  SafeAreaView,
  useWindowDimensions,
  Dimensions,
  StyleSheet,
  View,
} from "react-native";
import AbsoluteView from "../../components/AbsoluteView";
import DoublePolygen from "../../components/DoublePolygen";
import Screen from "../../components/Screen";
import SocialButton from "../../components/SocialButton";
import Spacer from "../../components/Spacer";
import StyledText from "../../components/StyledText";
import colors from "../../utils/colors";

const headImage = require("../../assets/auth/head.png");
const Auth = ({navigation}) => {
  const {width, height} = Dimensions.get("window");
  return (
    <Screen bg="#000" statusBarBg="#000">
      <AbsoluteView top="8%" right={56}>
        <DoublePolygen />
      </AbsoluteView>
      <AbsoluteView top="49%" left={-24}>
        <DoublePolygen />
      </AbsoluteView>

      <View
        style={{
          alignItems: "center",
          marginTop: 32,
          height: height * 0.45,
          width: width,
        }}>
        <Image resizeMode="contain" source={headImage} style={{flex: 1}} />
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
        <SocialButton
          icon="google"
          color="#000"
          text="Google"
          onPress={() => navigation.navigate("Stars")}
        />
        <Spacer space={20} />
        <SocialButton icon="mobile-alt" color="#000" text="Google" />
        <Spacer space={32} />
        <StyledText size={12} style={styles.copyrightText}>
          جميع الحقوق محفوظة بموجب قانون الملكية لعام 2021 الخاص بنا
        </StyledText>
      </View>
    </Screen>
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
