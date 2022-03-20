import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Catagory from "../screens/Catagory";
import QandA from "../screens/QandA";
import colors from "../theme/colors";

const NavTabs = createBottomTabNavigator();

const Tabs = () => (
  <NavTabs.Navigator
    sceneContainerStyle={{
      backgroundColor: colors.bgColor, //tabs 배경색 모두 적용
    }}
    screenOptions={{
      tabBarStyle: {
        backgroundColor: colors.bgColor, // tabBar 배경색 모두 적용
      },
      headerStyle: {
        backgroundColor: colors.cardColor, // tabHeader 배경색 모두 적용
      },
    }}
  >
    <NavTabs.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="home-outline" size={size} color={color} />
        ),
      }}
    />
    <NavTabs.Screen
      name="Catagory"
      component={Catagory}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="folder" size={size} color={color} />
        ),
      }}
    />
    <NavTabs.Screen
      name="QandA"
      component={QandA}
      options={{
        tabBarIcon: ({ size, color }) => (
          <AntDesign name="question" size={24} color={color} />
        ),
      }}
    />
  </NavTabs.Navigator>
);

export default Tabs;
