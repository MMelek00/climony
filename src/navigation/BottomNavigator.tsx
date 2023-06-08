import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import VerstehenStack from "./VerstehenStack";
import Home from "../../assets/icons/home.svg";
import Understand from "../../assets/icons/understand.svg";
import Smile from "../../assets/icons/smile.svg";
import Upload from "../../assets/icons/upload.svg";
import color from "../utils/color";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Verstehen"
      screenOptions={{ headerShown: false }}
    >
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Home
              width={20}
              height={20}
              color={focused ? "#12173D" : "#AAABB9"}
            />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
          },
        }}
        name="Übersicht"
        component={VerstehenStack}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Understand
              width={20}
              height={20}
              color={focused ? "#12173D" : "#AAABB9"}
            />
          ),
          tabBarActiveTintColor: color.text,
          tabBarLabelStyle: { fontFamily: "SFCompact", fontSize: 12 },
        }}
        name="Verstehen"
        component={VerstehenStack}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Smile
              width={20}
              height={20}
              color={focused ? "#12173D" : "#AAABB9"}
            />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
          },
        }}
        name="Projekte"
        component={VerstehenStack}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Upload
              width={20}
              height={20}
              color={focused ? "#12173D" : "#AAABB9"}
            />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
          },
        }}
        name="Dein Profil"
        component={VerstehenStack}
      />
    </BottomTab.Navigator>
  );
}
