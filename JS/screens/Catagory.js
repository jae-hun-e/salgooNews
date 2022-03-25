import React from "react";
import styled from "styled-components/native";
import { darkMode, softMode } from "../theme/colors";

const exList = [
  {
    name: "서울특별시",
  },
  {
    name: "부산시",
  },
  {
    name: "대구시",
  },
  {
    name: "인천시",
  },
  {
    name: "광주시",
  },
  {
    name: "대전시",
  },
  {
    name: "울산시",
  },
  {
    name: "세종특별자치시",
  },
];

const Catagory = () => (
  <Container>
    <CatagoryList>
      {exList.map((list, idx) => (
        <List key={idx}>
          <TextItem>{list.name}</TextItem>
        </List>
      ))}
    </CatagoryList>
  </Container>
);

export default Catagory;

const Container = styled.ScrollView``;

const CatagoryList = styled.View`
  width: 100%;
  height: 40%;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 30px;
`;

const List = styled.TouchableOpacity`
  width: 40%;
  height: 50px;
  text-align: center;
  background-color: ${darkMode.textColor};
  margin: 10px;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextItem = styled.Text``;
