import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Catagory from "../screens/Catagory";
import QandA from "../screens/QandA";
import { useColorScheme } from "react-native";
import { darkMode, softMode } from "../theme/colors";

const NavTabs = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <NavTabs.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? darkMode.bgColor : softMode.bgColor, //# tabs 배경색 모두 적용
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? darkMode.bgColor : softMode.bgColor, //# tabBar 배경색 모두 적용
        },
        tabBarActiveTintColor: isDark ? darkMode.textColor : softMode.textColor, //# tabBarIcon 선택 된것 색상
        tabBarInactiveTintColor: isDark ? darkMode.cardColor : softMode.cardColor, //# tabBarIcon 선택 안된것 색상
        headerStyle: {
          backgroundColor: isDark ? darkMode.cardColor : softMode.cardColor, //# tabHeader 배경색 모두 적용
        },
        headerTitleStyle: {
          color: isDark ? darkMode.textColor : softMode.textColor,
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
};

export default Tabs;
