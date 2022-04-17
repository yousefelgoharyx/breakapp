import React from "react";
import {useRoute} from "@react-navigation/native";
import {ScrollView, View} from "react-native";
import Loader from "../../components/Loader";
import Row from "../../components/Row";
import StyledText from "../../components/StyledText";
import Item from "./Item";
import useItems from "./api/useItems";

const List = () => {
  const route = useRoute();
  const categoryId = route.params.categoryId;
  const query = useItems(categoryId);
  // const GetOwner = useGet(`/store/getCategoryProducts/${categoryId}?page=1`);
  if (query.isLoading) {
    return <Loader />;
  }
  if (query.isError) {
    return <StyledText>Error</StyledText>;
  }
  if (query.data.result.length < 1) {
    return (
      <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
        <StyledText size={20} bold>
          لا يوجد شيئ
        </StyledText>
      </View>
    );
  }

  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{paddingHorizontal: 8}}>
      {query.isFetching ? <StyledText>Updating</StyledText> : null}
      <Row>
        {query.data.result.map(item => (
          <Item
            key={item._id}
            name={item.name}
            price={item.price}
            image={item.avatar}
          />
        ))}
      </Row>
    </ScrollView>
  );
};

export default List;
