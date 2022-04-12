import React from "react";
import {useRoute} from "@react-navigation/native";
import {ScrollView, View} from "react-native";
import Loader from "../../components/Loader";
import Row from "../../components/Row";
import StyledText from "../../components/StyledText";
import useGet from "../../hooks/useGet";
import Item from "./Item";

const List = () => {
  const route = useRoute();
  const categoryId = route.params.categoryId;
  const GetOwner = useGet(`/store/getCategoryProducts/${categoryId}?page=1`);

  let content = <Loader />;
  if (GetOwner.isReady) {
    let items = GetOwner.data.result;
    content =
      items.length > 0 ? (
        items.map(item => (
          <Item
            key={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))
      ) : (
        <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
          <StyledText size={20} bold>
            لا يوجد شيئ
          </StyledText>
        </View>
      );
  }
  return (
    <ScrollView style={{flex: 1}}>
      <Row>{content}</Row>
    </ScrollView>
  );
};

export default List;
