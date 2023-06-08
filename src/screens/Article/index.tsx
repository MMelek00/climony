import React, { useEffect, useState } from "react";
import { StyleSheet, View, InteractionManager } from "react-native";
import EmptyBar from "../../../assets/icons/progressEmpty.svg";
import FilledBar from "../../../assets/icons/progressFilled.svg";

import color from "../../utils/color";
import { useNavigation, useRoute } from "@react-navigation/native";
import { VerstehenStackNavigation } from "../../navigation/VerstehenStack";
import Swiper from "react-native-swiper";
import ArticleFirstSlide from "./ArticleFirstSlide";
import ArticleSecondSlide from "./ArticleSecondSlide";
import LeftHeader from "../../components/StackHeader";
import useArticles from "../../hooks/useArticles";
import { Article } from "../../api/model";
import useCategory from "../../hooks/useCategory";

export const ArticleSlide = () => {
  const navigation = useNavigation<VerstehenStackNavigation>();
  const route = useRoute();
  const { categoryId, ArticleId, categoryName } = route.params as {
    categoryId: string;
    ArticleId: string;
    categoryName: string;
  };

  const { data, isSuccess } = useArticles(categoryId, ArticleId);
  const { refetch } = useCategory(categoryId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const onGoBack = () => {
    refetch();
    navigation.navigate("WohnenScreen", {
      categoryId: categoryId,
    });
  };
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      navigation.setOptions({
        headerLeft: () => (
          <LeftHeader title={categoryName} onPress={() => onGoBack()} />
        ),
      });
    });
  }, [navigation, categoryName, data]);
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        showsPagination={false}
        onIndexChanged={(index) => setCurrentIndex(index)}
      >
        {isSuccess && <ArticleFirstSlide content={data as Article} />}
        <ArticleSecondSlide />
      </Swiper>
      <View style={styles.bottomPage}>
        <FilledBar width={170} height={10} style={{ marginRight: 3 }} />
        {currentIndex === 0 ? (
          <EmptyBar width={170} height={10} />
        ) : (
          <FilledBar width={170} height={10} />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: color.backGround,
  },
  wrapper: {},
  bottomPage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: color.backGround,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
  },
});
export default ArticleSlide;
