import React, {useEffect, useState} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import DarkFrame from "../../components/DarkFrame";
import GoldFrame from "../../components/GoldFrame";
import IceFrame from "../../components/IceFrame";
import Person from "../../components/Person";
import RankedPerson from "../../components/RankedPerson";
import Screen from "../../components/Screen";
import Spacer from "../../components/Spacer";
import Tab from "../../components/Tab";
import colors from "../../utils/colors";
import {people, tabs} from "./ranksData";

const personImage = require("../../assets/person.png");

const Rich = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  useEffect(() => {
    console.log(activeTabId);
  }, [activeTabId]);

  return (
    <Screen bg={colors.black} statusBarBg={colors.black}>
      <Spacer space={32} />
      <Tab tabs={tabs} onTabChange={tabId => setActiveTabId(tabId)} dark />

      <View style={styles.topStarsContainer}>
        <RankedPerson name="Sherif Ashraf" amount="225.13k" id="ID 3285224">
          <IceFrame source={personImage} />
        </RankedPerson>
        <RankedPerson
          name="Sherif Ashraf"
          amount="225.13k"
          id="ID 3285224"
          top={-32}>
          <GoldFrame source={personImage} />
        </RankedPerson>
        <RankedPerson name="Sherif Ashraf" amount="225.13k" id="ID 3285224">
          <DarkFrame source={personImage} />
        </RankedPerson>
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
    marginTop: 64,
    justifyContent: "space-between",
    paddingHorizontal: 32,
    alignItems: "center",
    marginBottom: 16,
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
export default Rich;
