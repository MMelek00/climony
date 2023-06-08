import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ListRenderItem,
  ActivityIndicator,
  InteractionManager,
  StatusBar,
} from "react-native";
import color from "../../utils/color";
import { Articles } from "../../api/model";
import { useNavigation, useRoute } from "@react-navigation/native";
import { VerstehenStackNavigation } from "../../navigation/VerstehenStack";
import useCategory from "../../hooks/useCategory";
import Card from "./component/Card";
import LeftHeader from "../../components/StackHeader";

export const CategoryScreen = () => {
  const navigation = useNavigation<VerstehenStackNavigation>();
  const route = useRoute();
  const { categoryId } = route.params as { categoryId: string };
  const { data, isLoading } = useCategory(categoryId);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      navigation.setOptions({
        headerLeft: () => <LeftHeader title={data?.category as string} />,
      });
    });
  }, [navigation, data, categoryId]);
  const renderItem: ListRenderItem<Articles> = ({ item, index }) => (
    <Card data={item} index={index} onPress={() => onCardPress(item.id)} />
  );

  const renderItemHeader = () => (
    <>
      <Text style={styles.categoryTitle}>{data?.title}</Text>
      <Text style={styles.descriptionText}>{data?.description}</Text>
      <Text style={styles.OverviewText}>Übersicht</Text>
    </>
  );
  const onCardPress = (ArticleId: string) => {
    navigation.navigate("ArticleSlideScreen", {
      categoryId: data?.id as string,
      ArticleId: ArticleId,
      categoryName: data?.category as string,
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={color.primary} />
      {isLoading && <ActivityIndicator color={color.primary} size={30} />}
      <FlatList
        data={data?.articles}
        style={styles.wrapper}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        ListHeaderComponent={renderItemHeader}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    backgroundColor: color.white,
  },
  categoryTitle: {
    fontFamily: "PoppinsBold",
    fontSize: 22,
    lineHeight: 32,
  },
  descriptionText: {
    fontFamily: "SFCompact",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 6,
    color: color.text,
  },
  OverviewText: {
    fontFamily: "PoppinsBold",
    fontSize: 18,
    lineHeight: 24,
    marginTop: 30,
    marginBottom: 26,
  },
  wrapper: {
    flex: 1,
    paddingTop: 65,
  },
});
export default CategoryScreen;
