import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import Stacks from "./Stack";

const NavRoot = createNativeStackNavigator();

const Root = () => (
  <NavRoot.Navigator
    screenOptions={{
      presentation: "modal",
      animation: "slide_from_right",
      headerShown: false,
    }}
  >
    <NavRoot.Screen name="Tabs" component={Tabs} />
    <NavRoot.Screen name="Stacks" component={Stacks} />
  </NavRoot.Navigator>
);

export default Root;
