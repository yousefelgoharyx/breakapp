import React, {useEffect, useState} from "react";
import {TouchableOpacity, View, StyleSheet} from "react-native";
import colors from "../utils/colors";
import StyledText from "./StyledText";
import Icon from "react-native-vector-icons/MaterialIcons";
const PaginationButton = ({number, active, onPress, disabled, icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.5}
      style={[
        styles.button,
        {
          backgroundColor: active ? colors.primary : "#333",
          opacity: disabled ? 0 : 1,
        },
      ]}>
      {icon ? icon : <StyledText bold>{number}</StyledText>}
    </TouchableOpacity>
  );
};

const Pagination = ({pagesCount, onPageChange = () => {}}) => {
  const [page, setPage] = useState(1);
  const handleNext = () => {
    if (page + 1 <= pagesCount) setPage(page + 1);
  };
  const handleBack = () => {
    if (page - 1 > 0) setPage(page - 1);
  };
  useEffect(() => onPageChange(page), [page]);
  return (
    <View style={styles.container}>
      <PaginationButton
        disabled={page === 1}
        icon={<Icon name="chevron-right" size={32} />}
        onPress={handleBack}
      />

      <View style={styles.pageNumber}>
        <StyledText bold>{page}</StyledText>
      </View>
      <PaginationButton
        icon={<Icon name="chevron-left" size={32} />}
        disabled={page === pagesCount}
        onPress={handleNext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    marginTop: 16,
    marginBottom: 16,
  },
  button: {
    width: 48,
    height: 48,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    marginRight: "2%",
  },
  pageNumber: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginRight: "2%",
    backgroundColor: colors.primary,
    borderRadius: 24,
  },
});
export default Pagination;
