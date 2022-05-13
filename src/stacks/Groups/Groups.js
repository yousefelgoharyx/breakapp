import React, {useState} from "react";
import {View, ScrollView, StyleSheet} from "react-native";
import AppBar from "../../components/AppBar";
import Screen from "../../components/Screen";
import Button from "../../components/Button";
import Spacer from "../../components/Spacer";
import StyledText from "../../components/StyledText";
import Box from "../../Layout/Box";
import useGroups, {PER_PAGE} from "./api/useGroups";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import Group from "./Group";

const Groups = ({navigation}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const query = useGroups(currentPage);
  if (query.isLoading) return <Loader />;
  if (query.isError) return <StyledText>Error</StyledText>;

  let groups = <Loader />;
  if (!query.isFetching) {
    groups = query.data.agencies.map(item => {
      return (
        <Group
          title={item.name}
          image={item.avatar}
          usersCount={0}
          level={0}
          key={item._id}
        />
      );
    });
  }
  return (
    <Screen>
      <ScrollView>
        <Box>
          <AppBar fixed title="القبائل" />
          <View style={styles.control}>
            <Button
              title="انشاء قبيلة"
              onPress={() => navigation.navigate("CreateGroup")}
              style={styles.controlButtons}
            />
            <Spacer space={8} />
            <Button
              color="green"
              title="ترتيب القبائل"
              style={styles.controlButtons}
            />
          </View>
        </Box>
        <ScrollView
          contentContainerStyle={styles.scorllViewContent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.agcontainer}>{groups}</View>
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
  control: {
    flexDirection: "row",
  },
  controlButtons: {
    flex: 1,
  },
  scorllViewContent: {
    padding: 24,
  },
  agcontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default Groups;
