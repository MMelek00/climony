import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import VerstehenScreen from "../screens/Verstehen";
import CategoryScreen from "../screens/Category";
import ArticleSlide from "../screens/Article";
import { NavigationProp } from "@react-navigation/native";
import color from "../utils/color";
import LeftHeader from "../components/StackHeader";

export type VerstehenStackParamList = {
  VerstehenScreen: undefined;
  WohnenScreen: { categoryId: string };
  ArticleSlideScreen: {
    ArticleId: string;
    categoryId: string;
    categoryName: string;
  };
};
export type VerstehenStackNavigation = NavigationProp<VerstehenStackParamList>;
const Stack = createNativeStackNavigator<VerstehenStackParamList>();
export default function VerstehenStack() {
  return (
    <Stack.Navigator initialRouteName={"VerstehenScreen"}>
      <Stack.Screen
        name={"VerstehenScreen"}
        options={() => ({
          headerShown: false,
        })}
        component={VerstehenScreen as React.ComponentType}
      />
      <Stack.Screen
        name={"WohnenScreen"}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: color.primary,
          },
          headerLeft: () => <LeftHeader title="Wohnen" />,
        }}
        component={CategoryScreen as React.ComponentType}
      />
    </Stack.Navigator>
  );
}
