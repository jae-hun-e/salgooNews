import React, { useEffect } from "react";
import {
  FlatList,
  Linking,
  Platform,
  Share,
  TextComponent,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components/native";
import { darkMode, softMode } from "../theme/colors";
import Swiper from "react-native-swiper";
import { SCREEN_HEIGHT } from "../theme/screenSize";
import { tmp } from "../tmpData/newsData";
import { grantLink } from "../tmpData/grantLink";
import Poster from "../components/Poster";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation: { setOptions } }) => {
  // # naviagter를 이용하면서 파라미터를 넘겨줄 수 있다.

  const shareLink = async () => {
    // #공유하기 기능 구현
    const isAndroid = Platform.OS === "android";
    if (isAndroid) {
      await Share.share({
        message: `알면 받고 모르면 못 받는 지원금 살구가 찾아드릴게요!🐶`,
      });
    } else {
      await Share.share({
        url: `알면 받고 모르면 못 받는 지원금 살구가 찾아드릴게요!🐶`,
      });
    }
  };

  const openSite = async (link) => {
    //# 링크로 넘어감
    await Linking.openURL(link);
  };

  useEffect(() => {
    setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={shareLink}>
          <Ionicons name="share-outline" color="white" size={24} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id + ""}
        ListHeaderComponent={(item, idx) => (
          <>
            <Text>지원 사이트들</Text>
            <Swiper
              loop
              // autoplay={true}
              autoplayTimeout={3}
              containerStyle={{
                width: "100%",
                height: SCREEN_HEIGHT / 2,
                marginBottom: 20,
              }}
            >
              {grantLink?.map((news) => (
                <GrantSite key={news.id}>
                  <Title>{news.siteName}</Title>
                  <Link onPress={() => openSite(news.URL)}>
                    <Poster path={news.imgUrl} />
                  </Link>
                </GrantSite>
              ))}
            </Swiper>
          </>
        )}
        data={tmp}
        renderItem={({ item }) => (
          <News>
            <Text>{item.title}</Text>
            <Info>{item.info}</Info>
            <Img />
          </News>
        )}
        ListFooterComponent={() => (
          <Footer>
            <CreateInfo>제공 : 🐶 salgooNews</CreateInfo>
            <CreateInfo>제작 : 😁 jjh</CreateInfo>
            <CreateInfo>고객센터: ☎️ 010-2373-9147</CreateInfo>
          </Footer>
        )}
      />
    </View>
  );
};
export default Home;

const News = styled.TouchableOpacity`
  display: flex;
  margin: 20px 10px;
`;

const Text = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
  padding: 10px;
`;

const Info = styled.Text`
  font-size: 10px;
  padding: 10px;
`;

const Img = styled.Image`
  width: 100px;
  height: 50px;
`;

const GrantSite = styled.View`
  background-color: #ffecd2;
  border-radius: 30px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 25px;
  margin: 15px;
`;

const Link = styled.TouchableOpacity`
  width: 100%;
  height: 90%;
`;

const Footer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const CreateInfo = styled.Text`
  font-size: 14px;
  padding: 0 10px;
`;
