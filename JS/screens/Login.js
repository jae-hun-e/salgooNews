import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Login = ({ navigation: { navigate } }) => (
  <View>
    <Text>Loging하세요</Text>
    <Btn onPress={() => navigate("Join")}>
      <BtnText>로그인</BtnText>
    </Btn>
  </View>
);

export default Login;

const Btn = styled.TouchableOpacity``;
const BtnText = styled.Text``;
