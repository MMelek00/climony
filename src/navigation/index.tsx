import React from "react";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import BottomTabNavigator from "./BottomNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import color from "../utils/color";
import ArticleSlide from "../screens/Article";
export type MainStackParamList = {
  Main: undefined;
  ArticleSlideScreen: {
    ArticleId: string;
    categoryId: string;
    categoryName: string;
  };
};
export type MainStackNavigation = NavigationProp<MainStackParamList>;
const Stack = createNativeStackNavigator<MainStackParamList>();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Main"}>
        <Stack.Screen
          options={() => ({
            headerShown: false,
          })}
          name="Main"
          component={BottomTabNavigator}
        />
        <Stack.Screen
          name={"ArticleSlideScreen"}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: color.primary,
            },
            gestureEnabled: false,
          }}
          component={ArticleSlide as React.ComponentType}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
