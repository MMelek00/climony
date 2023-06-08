import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import color from "../utils/color";
import Home from "../../assets/icons/home.svg";
import Back from "../../assets/icons/back.svg";
import { VerstehenStackNavigation } from "../navigation/VerstehenStack";
import { useNavigation } from "@react-navigation/native";

const LeftHeader = ({
  title,
  onPress,
}: {
  title: string;
  onPress?: () => void;
}) => {
  const navigation = useNavigation<VerstehenStackNavigation>();

  return (
    <View style={styles.contentContainerStyle}>
      <TouchableOpacity
        onPress={() => (onPress ? onPress() : navigation.goBack())}
        hitSlop={styles.cardTrigger}
      >
        <Back width={10} height={16} color={color.white} />
      </TouchableOpacity>
      <Home
        width={18}
        height={18}
        style={styles.homeIcon}
        color={color.white}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTrigger: { top: 20, bottom: 20, left: 50, right: 50 },
  title: {
    fontFamily: "SFCompact",
    fontSize: 14,
    color: "#fff",
    lineHeight: 24,
  },
  homeIcon: {
    marginLeft: 15,
    marginRight: 10,
  },
});
export default LeftHeader;
