import React from "react";
import { FlatList, View } from "react-native";
import styled from "styled-components/native";
import colors from "../theme/colors";

const tmp = [
  {
    id: 1,
    title: "청년도약계좌…청년희망적금과 차이점은? 갈아타기·중복 가입 가능할까",
    info: "윤석열 대통령 당선인이 공약으로 내걸었던 '청년도약계좌'에 관심이 쏠리며 지원대상과 기존의 청년희망적금과의 중복 가입이 가능할지 화제가 되고 있습니다.",
    link: "https://www.salgoonews.com/news/articleView.html?idxno=17354",
    img: "https://cdn.salgoonews.com/news/photo/202203/17354_41531_563.jpg",
  },
  {
    id: 2,
    title: "2022년 코로나19 가족돌봄비용 신청방법 (+증빙서류, 신청기간, 지원대상)",
    info: "코로나 확진세가 증가함에 따라 돌봄이 긴급하게 돌봄이 필요한 인원이 증가하고있습니다. ",
    link: "https://www.salgoonews.com/news/articleView.html?idxno=17314",
    img: "https://cdn.salgoonews.com/news/photo/202203/17314_41485_3411.jpg",
  },
];

const Home = () => (
  <View>
    <FlatList
      keyExtractor={(item) => item.id + ""}
      ListHeaderComponent={(item) => (
        <>
          <Text>Header</Text>
          <HeaderImg source={item.link} />
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

const HeaderImg = styled(Img)`
  background-color: ${colors.cardColor};
`;
