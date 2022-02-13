import React, {useState} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import AppBar from "../../components/AppBar";
import Button from "../../components/Button";
import Screen from "../../components/Screen";
import StyledText from "../../components/StyledText";
import Tab from "../../components/Tab";
import Coin from "../../icons/Coin";
import Coins from "../../icons/Coins";

const CoinOption = ({amount, price}) => {
  return (
    <View style={styles.coinOption}>
      <View style={styles.coinOptionAmount}>
        <Coin style={styles.coinOptionAmountIcon} />
        <StyledText>{amount}</StyledText>
      </View>
      <Button title={price} variant="contained" small />
    </View>
  );
};

const CoinsTab = ({navigation}) => {
  return (
    <View style={styles.coinOptions}>
      <CoinOption amount="100" price="20.99 $" />
      <CoinOption amount="1000" price="139.99 $" />
      <CoinOption amount="5000" price="659.99 $" />
      <CoinOption amount="13000" price="1539.99 $" />
      <CoinOption amount="14000" price="1539.99 $" />
      <CoinOption amount="15000" price="1539.99 $" />
      <CoinOption amount="15000" price="1539.99 $" />
      <CoinOption amount="15000" price="1539.99 $" />
      <View style={{marginTop: 16}}>
        <Button title="تواصل" onPress={() => navigation.navigate("Done")} />
      </View>
    </View>
  );
};

const FasolyaTab = () => {
  return (
    <View style={styles.coinOptions}>
      <View style={{padding: 24, marginTop: "auto"}}>
        <Button title="تواصل" />
      </View>
    </View>
  );
};

const tabs = [
  {
    title: "الذهب",
    id: "gold",
  },
  {
    title: "الفاصوليا",
    id: "fasolya",
  },
];

const Wallet = ({navigation}) => {
  const [active, setActive] = useState(tabs[0].id);
  let page = null;
  if (active === "gold") page = <CoinsTab navigation={navigation} />;
  if (active === "fasolya") page = <FasolyaTab />;
  return (
    <Screen bg="#000" statusBarBg="#000">
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppBar title="الحفظة" onBack={navigation.goBack} />
        <Coins size={160} style={styles.icon} />
        <Tab tabs={tabs} dark onTabChange={tabId => setActive(tabId)} />
        {page}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
    left: -32,
    marginTop: 32,
    marginBottom: 32,
  },
  coinOptions: {
    padding: 24,
  },
  coinOption: {
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,
    flexDirection: "row",
  },
  coinOptionAmount: {
    flexDirection: "row",
  },
  coinOptionAmountIcon: {
    marginEnd: 12,
  },
});

export default Wallet;
