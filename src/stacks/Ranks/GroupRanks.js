import React, {useEffect, useState} from "react";
import {ImageBackground, ScrollView, StyleSheet, View} from "react-native";
import DarkFrame from "../../components/DarkFrame";
import GoldFrame from "../../components/GoldFrame";
import IceFrame from "../../components/IceFrame";
import Person from "../../components/Person";
import RankedPerson from "../../components/RankedPerson";
import Screen from "../../components/Screen";
import AppBar from "../../components/AppBar";
import Tab from "../../components/Tab";
import colors from "../../utils/colors";
import {people, tabs} from "./ranksData";
import StyledText from "../../components/StyledText";
import RankedGroup from "../../components/RankedGroup";

const personImage = require("../../assets/person.png");

const GroupRanks = ({navigation}) => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  useEffect(() => {
    console.log(activeTabId);
  }, [activeTabId]);

  return (
    <Screen bg={colors.black} statusBarBg={colors.black}>
      <AppBar title="ترتيب القبائل" onBack={navigation.goBack} />
      <Tab tabs={tabs} onTabChange={tabId => setActiveTabId(tabId)} />

      <View style={styles.topStarsContainer}>
        <RankedGroup>
          <IceFrame source={personImage} />
        </RankedGroup>

        <RankedGroup high>
          <GoldFrame source={personImage} />
        </RankedGroup>

        <RankedGroup>
          <DarkFrame source={personImage} />
        </RankedGroup>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        {people.map(person => (
          <Person
            image={person.image}
            name={person.name}
            listId={person.listId}
            id={person.id}
            amount={person.amount}
            key={person.listId}
          />
        ))}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  topStarsContainer: {
    flexDirection: "row",
    marginTop: 32,
    justifyContent: "space-between",
    paddingHorizontal: 32,
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  scrollViewContent: {
    padding: 24,
    paddingBottom: 0,
  },
});
export default GroupRanks;
