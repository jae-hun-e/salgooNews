import React from "react";
import styled from "styled-components/native";

const Poster = ({ path }) => {
  return path ? <PosterImg source={{ uri: path }} /> : <DefaultImg />;
};
export default Poster;

const PosterImg = styled.Image`
  width: 90%;
  height: 250px;
  border-radius: 5px;
  margin: 20px;
`;

const DefaultImg = styled.View`
  width: 100px;
  height: 150px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
`;
