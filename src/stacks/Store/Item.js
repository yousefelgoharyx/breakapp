import React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import StyledText from "../../components/StyledText";
import UserBlance from "./Balance";
const Item = ({onPress, name, price, image}) => {
  return (
    <TouchableOpacity
      style={itemStyle.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <View style={itemStyle.remainingDates}>
        <Image
          source={require("../../assets/store/select.png")}
          style={{width: 32, height: 32, marginRight: 10}}
        />
        <StyledText style={{color: "#E4B554"}} size={14}>
          7 ايام
        </StyledText>
      </View>
      <Image source={{uri: image}} style={itemStyle.image} />
      <StyledText style={itemStyle.title}>{name}</StyledText>
      <UserBlance amount={price} />
    </TouchableOpacity>
  );
};

const itemStyle = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 140,
    maxWidth: "48%",
    flexDirection: "column",
    backgroundColor: "#202020",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F04E27",
    marginBottom: "4%",
    aspectRatio: 2 / 3,
    padding: 12,
  },
  remainingDates: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    alignSelf: "stretch",
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    marginVertical: 12,
  },
  title: {
    marginBottom: 8,
  },
});

export default Item;
