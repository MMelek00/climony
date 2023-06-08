import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ListRenderItem,
  ActivityIndicator,
} from "react-native";
import colors from "../../utils/color";
import { useNavigation } from "@react-navigation/native";
import { Topic } from "../../api/model";

import useTopics from "../../hooks/useTopics";
import { type VerstehenStackNavigation } from "../../navigation/VerstehenStack";
import color from "../../utils/color";
import Card from "./component/Card";

export const VerstehenScreen = () => {
  const { data, isLoading, isSuccess } = useTopics();
  const navigation = useNavigation<VerstehenStackNavigation>();

  const onCardPress = (categoryId: string) => {
    navigation.navigate("WohnenScreen", {
      categoryId: categoryId,
    });
  };

  const renderItem: ListRenderItem<Topic> = ({ item, index }) => (
    <Card data={item} index={index} onPress={() => onCardPress(item.id)} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.staticSection}>
        <Text style={styles.staticSectionTitle}>Verstehen</Text>
        <Text style={styles.descriptionText}>
          Wir helfen dir, den Klimawandel zu verstehen, damit du deinen Einfluss
          bewusst verringern kannst.
        </Text>
      </View>
      <View style={styles.dynamicSectionIntrovertBorder}>
        <View style={styles.dynamicSection}>
          <Text style={styles.dynamicSectionTitle}>
            Deine wichtigsten Themen
          </Text>
          {isLoading && <ActivityIndicator color={color.primary} size={30} />}
          {isSuccess && (
            <FlatList
              data={data?.topics}
              style={styles.wrapper}
              horizontal={true}
              keyExtractor={(item) => `${item.id}`}
              renderItem={renderItem}
              scrollEnabled
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 50,
  },
  wrapper: {
    flex: 1,
    width: 400,
  },
  staticSection: {
    justifyContent: "center",
    alignItems: "flex-start",
    height: "35%",
    backgroundColor: colors.white,
    borderBottomLeftRadius: 40,
    paddingHorizontal: 25,
  },
  dynamicSection: {
    justifyContent: "center",
    paddingHorizontal: 25,
    borderTopRightRadius: 40,
    backgroundColor: colors.sand,
    flex: 1,
  },
  dynamicSectionIntrovertBorder: {
    flex: 1,
    backgroundColor: colors.white,
  },
  dynamicSectionWrapper: {
    borderTopRightRadius: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  staticSectionTitle: {
    fontFamily: "PoppinsBold",
    fontSize: 42,
    lineHeight: 50,
  },
  dynamicSectionTitle: {
    fontFamily: "PoppinsBold",
    fontSize: 28,
    lineHeight: 40,
    marginVertical: 30,
  },
  descriptionText: {
    fontFamily: "SFCompact",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 30,
  },
});
export default VerstehenScreen;
