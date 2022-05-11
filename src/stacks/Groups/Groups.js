import React, {useEffect, useState} from "react";
import {View, Image, StyleSheet, ScrollView} from "react-native";
import AppBar from "../../components/AppBar";
import Screen from "../../components/Screen";
import Button from "../../components/Button";
import Spacer from "../../components/Spacer";
import StyledText from "../../components/StyledText";
import Box from "../../Layout/Box";
import Tab from "../../components/Tab";
import Icon from "react-native-vector-icons/MaterialIcons";
import useGroups, {PER_PAGE} from "./api/useGroups";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
const tabs = [
  {
    title: "HOT",
    id: "hot",
  },
  {
    title: "NEW",
    id: "new",
  },
];
const levelIcon = require("../../assets/profile/level.png");
const Group = ({title, image, usersCount, level}) => (
  <View style={styles.container}>
    <View style={styles.imageWrapper}>
      <Image source={{uri: image}} style={styles.image} />
    </View>

    <StyledText numberOfLines={1} bold style={styles.title}>
      {title}
    </StyledText>

    <View style={styles.info}>
      <View style={styles.count}>
        <Icon name="people" size={20} color="#fff" />
        <Spacer space={4} />
        <StyledText>{usersCount}</StyledText>
      </View>

      <Spacer space={8} />
      <View style={styles.badge}>
        <Image source={levelIcon} style={{width: 20, height: 20}} />
        <StyledText style={styles.badgeText}>Lv {level}</StyledText>
      </View>
    </View>
  </View>
);

const Groups = () => {
  // const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const [currentPage, setCurrentPage] = useState(1);
  // useEffect(() => {
  //   console.log(activeTabId);
  // }, [activeTabId]);

  const query = useGroups(currentPage);
  if (query.isLoading) return <Loader />;
  if (query.isError) return <StyledText>Error</StyledText>;
  return (
    <Screen>
      <ScrollView>
        <Box>
          <AppBar fixed title="القبائل" />
          <View style={{flexDirection: "row"}}>
            <Button title="انشاء قبيلة" style={{flex: 1}} />
            <Spacer space={8} />
            <Button color="green" title="ترتيب القبائل" style={{flex: 1}} />
          </View>
          {/* <Tab tabs={tabs} onTabChange={tabId => setActiveTabId(tabId)} dark /> */}
        </Box>
        <ScrollView
          contentContainerStyle={{padding: 24}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.agcontainer}>
            {query.isFetching ? (
              <Loader />
            ) : (
              query.data.agencies.map(item => {
                return (
                  <Group
                    title={item.name}
                    image={item.avatar}
                    usersCount={0}
                    level={0}
                    key={item._id}
                  />
                );
              })
            )}
          </View>
        </ScrollView>

        <Pagination
          pagesCount={Math.ceil(query.data.agenciesCount / 2 / PER_PAGE)}
          onPageChange={page => setCurrentPage(page)}
        />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 140,
    maxWidth: "48%",
    flexDirection: "column",
    backgroundColor: "#202020",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F04E27",
    aspectRatio: 3 / 4,
    padding: 16,
    marginBottom: "4%",
  },
  imageWrapper: {
    overflow: "hidden",
    backgroundColor: "red",
    borderRadius: 150,
  },
  image: {
    width: "80%",
    aspectRatio: 1 / 1,
  },
  title: {
    marginTop: 16,
    fontSize: 16,
  },
  info: {
    marginTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  count: {
    flexDirection: "row",
    alignItems: "center",
  },

  badge: {
    paddingHorizontal: 8,
    flexDirection: "row",
    alignSelf: "flex-start",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    backgroundColor: "#4A088B",
  },
  badgeText: {
    marginStart: 6,
    lineHeight: 16 * 1.6,
    fontSize: 12,
  },
  agcontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default Groups;
