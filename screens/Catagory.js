import React from "react";
import styled from "styled-components/native";
import colors from "../JS/theme/colors";

const exList = [
  {
    name: "소상공인",
  },
  {
    name: "코로나",
  },
  {
    name: "안산시",
  },
  {
    name: "인천",
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
`;

const List = styled.TouchableOpacity`
  width: 40%;
  height: 50px;
  text-align: center;
  background-color: ${colors.cardColor};
  margin: 10px;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextItem = styled.Text``;
