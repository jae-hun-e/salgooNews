import React from "react";
import { FlatList, TextComponent, View } from "react-native";
import styled from "styled-components/native";
import { darkMode, softMode } from "../theme/colors";
import Swiper from "react-native-swiper";
import { SCREEN_HEIGHT } from "../theme/screenSize";
import { tmp } from "../tmpData/newsData";
import { grantLink } from "../tmpData/grantLink";
import Poster from "../components/Poster";

const Home = () => (
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
                <Poster path={news.imgUrl} />
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
      ListFooterComponent={() => <Text>Footer</Text>}
    />
  </View>
);

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

const Title = styled.Text`
  font-size: 25px;
  margin: 15px;
`;

const GrantSite = styled.TouchableOpacity`
  background-color: #ffecd2;
  border-radius: 30px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
