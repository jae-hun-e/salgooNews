import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinkList from "../screens/LinkList";

const NavStack = createNativeStackNavigator();

const Stack = () => (
  <NavStack.Navigator>
    <NavStack.Screen name="LinkList" component={LinkList} />
  </NavStack.Navigator>
);

export default Stack;
