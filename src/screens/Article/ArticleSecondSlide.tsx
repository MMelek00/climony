import React from "react";
import { StyleSheet, View } from "react-native";
import color from "../../utils/color";
import TheEnd from "../../../assets/icons/theEnd.svg";

export const ArticleSecondSlide = () => {
  return (
    <View style={styles.container}>
      <TheEnd width={300} height={250} style={styles.icon} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: color.sand,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginBottom: 80,
  },
});
export default ArticleSecondSlide;
