import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import Root from "./JS/navigators/Root";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import AppLoading from "expo-app-loading";
import { Image, useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";
import LoginNav from "./JS/navigators/LoginNav";
import Join from "./JS/screens/Join";

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
  console.log(isDark);

  const [user, setUser] = useState(false);
  useEffect(() => {
    console.log(auth().currentUser);
    //# EventListener을 넣어줘야함 firebase에서 상태가 변할때만 Listener를 넣을 수 있기 떄문이다.
    return auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUser(true);
      } else {
        setUser(false);
      }
    });
  }, []);

  if (!ready) {
    return (
      <AppLoading startAsync={startLoading} onFinish={onFinish} onError={console.error} />
    );
  }
  return <NavigationContainer>{user ? <Root /> : <Join />}</NavigationContainer>;
}
