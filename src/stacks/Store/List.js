import React, {useState} from "react";
import {useRoute} from "@react-navigation/native";
import {ScrollView, View, TouchableOpacity} from "react-native";
import Loader from "../../components/Loader";
import Row from "../../components/Row";
import StyledText from "../../components/StyledText";
import Item from "./Item";
import useItems from "./api/useItems";
import colors from "../../utils/colors";
import Pagination from "../../components/Pagination";

const List = () => {
  const route = useRoute();
  const [currentPage, setCurrentPage] = useState(1);
  const categoryId = route.params.categoryId;
  const query = useItems(categoryId, currentPage);
  if (query.isLoading) {
    return <Loader />;
  }
  if (query.isError) {
    return <StyledText>Error</StyledText>;
  }
  if (query.data.result.result.length < 1) {
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
        {query.data.result.result.map(item => (
          <Item
            key={item._id}
            name={item.name}
            price={item.price}
            image={item.avatar}
          />
        ))}
      </Row>
      <Pagination
        pagesCount={Math.ceil(query.data.result.count / 10)}
        onPageChange={page => setCurrentPage(page)}
      />
    </ScrollView>
  );
};

export default List;
