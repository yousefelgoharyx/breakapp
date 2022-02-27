import {useRoute} from "@react-navigation/native";
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import ItemRender from "./itemRender";
const ItemsRow = ({children}) => <View style={styles.row}>{children}</View>;

const ItemsList = ({navigation}) => {
  const route = useRoute();
  console.log(route.name);
  return (
    <ScrollView style={{flex: 1}}>
      <ItemsRow>
        <ItemRender onPress={() => console.log("df")} />
        <ItemRender />
        <ItemRender />
        <ItemRender />
        <ItemRender />
        <ItemRender />
      </ItemsRow>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginBottom: 8,
    alignItems: "flex-start",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 24,
  },
});

export default ItemsList;
