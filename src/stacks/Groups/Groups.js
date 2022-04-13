import React, {useEffect, useState} from "react";
import {View} from "react-native";
import AppBar from "../../components/AppBar";
import Screen from "../../components/Screen";
import Button from "../../components/Button";
import Spacer from "../../components/Spacer";
import Box from "../../Layout/Box";
import Tab from "../../components/Tab";

const tabs = [
  {
    title: "Hot",
    id: "hot",
  },
  {
    title: "New",
    id: "new",
  },
];
const Groups = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  useEffect(() => {
    console.log(activeTabId);
  }, [activeTabId]);
  return (
    <Screen>
      <AppBar title="القبائل" />
      <Box>
        <View style={{flexDirection: "row", marginBottom: 16}}>
          <Button title="انشاء قبيلة" style={{flex: 1}} />
          <Spacer space={8} />
          <Button color="green" title="ترتيب القبائل" style={{flex: 1}} />
        </View>
        <Tab tabs={tabs} onTabChange={tabId => setActiveTabId(tabId)} dark />
        <View></View>
      </Box>
    </Screen>
  );
};

export default Groups;
