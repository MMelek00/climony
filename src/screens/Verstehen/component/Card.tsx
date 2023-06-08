import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Topic } from "../../../api/model";
import Car from "../../../../assets/icons/car.svg";
import color from "../../../utils/color";
const Card = ({
  data,
  index,
  onPress,
}: {
  data: Topic;
  index: number;
  onPress: () => void;
}) => (
  <TouchableOpacity
    style={styles.card}
    onPress={() => onPress()}
    disabled={index === 0 ? false : true}
  >
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../../../assets/topic.png")}
    >
      <Car style={{ marginBottom: 5, marginRight: 5 }} width={30} height={30} />
      <Text style={styles.cardTitle}>{data.name}</Text>
    </ImageBackground>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  card: {
    height: 200,
    width: 300,
  },
  cardTitle: {
    fontFamily: "PoppinsBold",
    fontSize: 28,
    lineHeight: 40,
    color: color.white,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "flex-start",
    padding: 10,
    borderRadius: 16,
    overflow: "hidden",
    marginRight: 10,
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
export default Card;
