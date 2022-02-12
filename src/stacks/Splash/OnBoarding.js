import React, {useState, useRef} from "react";
import {FlatList, Animated, View} from "react-native";
import Screen from "../../components/Screen";
import AbsoluteView from "../../components/AbsoluteView";
import DoublePolygen from "../../components/DoublePolygen";
import OnBoardingItem from "./OnBoardingItem";
import OnBoardingButton from "./OnBoardingButton";
import Paginator from "./Paginator";

const steps = [
  {
    id: 0,
    title: "اصدقاء",
    subtitle:
      "كون صداقات من جميع انحاء الوطن العربي بشكل سريع مع ميزة متابعة الاشخاص",
    source: require("../../assets/splash/step1.png"),
  },
  {
    id: 1,
    title: "محتوي متنوع",
    subtitle:
      "تايع وشاهد الاف الاشخاص حول العالم العربي المميزين وتفاعل معهم بشكل مستمر",
    source: require("../../assets/splash/step2.png"),
  },
  {
    id: 2,
    title: "غرف متنوعة",
    subtitle:
      "عشرات غرف المحادثة سوف تجدها في نفس اللحظة مفتوحة وابضا يمكنك انشاء غرفتك الخاصة",
    source: require("../../assets/splash/step3.png"),
  },
];

const OnBoarding = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const stepsRef = useRef(null);
  const onScrollHandler = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: false},
  );
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const scrollTo = () => {
    if (currentIndex < steps.length - 1) {
      stepsRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate("Auth");
    }
  };
  return (
    <Screen bg="#000" statusBarBg="#000">
      <AbsoluteView top="5%" right={56}>
        <DoublePolygen />
      </AbsoluteView>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}>
        <FlatList
          data={steps}
          renderItem={({item}) => (
            <OnBoardingItem
              title={item.title}
              subtitle={item.subtitle}
              source={item.source}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={onScrollHandler}
          viewabilityConfig={viewConfig}
          onViewableItemsChanged={viewableItemsChanged}
          ref={stepsRef}
        />
      </View>
      <Paginator steps={steps} scrollX={scrollX} />
      <OnBoardingButton onPress={scrollTo} />
    </Screen>
  );
};

export default OnBoarding;
