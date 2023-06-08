import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Articles } from "../../../api/model";
import Clock from "../../../../assets/icons/clock.svg";
import color from "../../../utils/color";
const Card = ({
  data,
  index,
  onPress,
}: {
  data: Articles;
  index: number;
  onPress: () => void;
}) => (
  <TouchableOpacity
    style={styles.card}
    onPress={() => onPress()}
    disabled={index === 0 ? false : true}
  >
    <Image
      source={{
        uri: data.image
          ? data.image
          : "https://mir-s3-cdn-cf.behance.net/project_modules/fs/4d055a61645085.5a74cc840d2eb.jpg",
      }}
      style={styles.cardImage}
    />
    <View style={styles.cardContent}>
      <View>
        <Text style={styles.cardTitle}>{data.title}</Text>
        <Text style={styles.cardDescription}>{data.shortDescription}</Text>
      </View>
      <View style={styles.rowTimer}>
        <Clock width={15} height={15} />
        <Text style={styles.cardTimer}>{data.readingTime} min</Text>
      </View>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  rowTimer: {
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    flex: 1,
    backgroundColor: color.sand,
    borderRadius: 16,
    flexDirection: "row",
    marginBottom: 16,
    minHeight: 150,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    marginHorizontal: 5,
  },
  cardTitle: {
    fontFamily: "PoppinsBold",
    fontSize: 16,
    lineHeight: 24,
    width: "60%",
  },
  cardDescription: {
    fontFamily: "SFCompact",
    fontSize: 12,
    lineHeight: 16,
    marginTop: 6,
    width: "70%",
  },
  cardTimer: {
    fontFamily: "SFCompact",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "500",
    marginLeft: 5,
  },
  cardImage: {
    borderRadius: 16,
    overflow: "hidden",
    width: "30%",
    height: "100%",
    resizeMode: "cover",
  },
  cardContent: {
    justifyContent: "space-between",
    padding: 16,
  },
});
export default Card;
