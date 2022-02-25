import {useRoute} from "@react-navigation/native";
import React from "react";
import {Text, View} from "react-native";
const ItemsList = ({navigation}) => {
  const route = useRoute();
  console.log(route.name);
  return (
    <View style={{flex: 1}}>
      <Text>{route.name}</Text>
    </View>
  );
};

export default ItemsList;
