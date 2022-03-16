import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinkList from "../../screens/LinkList";

const NavStack = createNativeStackNavigator();

const Stack = () => (
  <NavStack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
    }}
  >
    <NavStack.Screen name="List" component={LinkList} />
  </NavStack.Navigator>
);

export default Stack;
