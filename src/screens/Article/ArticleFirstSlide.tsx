import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Clock from "../../../assets/icons/clock.svg";

import color from "../../utils/color";
import { Article } from "../../api/model";

export const ArticleFirstSlide = ({ content }: { content: Article }) => {
  const publishDate = new Date(content?.publishedAt);
  const publishDateFormatted =
    publishDate.getDate() +
    "." +
    publishDate.getMonth() +
    1 +
    "." +
    publishDate.getFullYear();
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backGroundImage}
        imageStyle={{ borderBottomLeftRadius: 40 }}
        source={{
          uri: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/4d055a61645085.5a74cc840d2eb.jpg",
        }}
      />
      <ImageBackground
        style={styles.backGroundImage}
        source={{
          uri: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/4d055a61645085.5a74cc840d2eb.jpg",
        }}
      >
        <View style={styles.dynamicSection}>
          <Text style={styles.dynamicSectionTitle}>
            Deine wichtigsten Themen
          </Text>
          <View style={styles.rowWrapper}>
            <View style={styles.rowTimer}>
              <Clock width={15} height={15} />
              <Text style={styles.cardTimer}>5 min</Text>
            </View>
            <Text style={styles.cardTimer}>
              {publishDateFormatted.toString()}
            </Text>
          </View>
          <Text style={styles.descriptionText}>{content.description}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: color.sand,
  },
  dynamicSection: {
    paddingHorizontal: 25,
    borderTopRightRadius: 40,
    backgroundColor: color.sand,
    flex: 1,
  },
  dynamicSectionTitle: {
    fontFamily: "PoppinsBold",
    fontSize: 28,
    lineHeight: 40,
    marginVertical: 22,
  },
  rowWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  rowTimer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTimer: {
    fontFamily: "SFCompact",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "500",
    marginLeft: 5,
  },
  backGroundImage: {
    height: 250,
    resizeMode: "contain",
  },
  descriptionText: {
    fontFamily: "SFCompact",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 6,
    color: color.text,
  },
});
export default ArticleFirstSlide;
