import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import Root from "./JS/navigators/Root";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import AppLoading from "expo-app-loading";
import { Image, useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

const loadImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });

export default function App() {
  const [ready, setReady] = useState(false);

  const onFinish = () => setReady(true);

  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font]);
    await Promise.all([...fonts]);
  };

  const isDark = useColorScheme() === "dark";
  if (!ready) {
    return (
      <AppLoading startAsync={startLoading} onFinish={onFinish} onError={console.error} />
    );
  }
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
