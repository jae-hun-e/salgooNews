import React, { useRef, useState } from "react";
import { Text, View, TextInput, Alert, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import auth from "@react-native-firebase/auth";

const Join = () => {
  const [email, setEmial] = useState("");
  const [password, setPassword] = useState("");
  const [loading, SetLoading] = useState(false);
  const passwordInput = useRef(); //# refrence 변수

  const onSubmitEmailEditing = () => {
    passwordInput.current.focus(); //# passwordInput ref로 포커스를 시켜줌
  };

  const onSubmitPasswordEditing = async () => {
    if (email === "" || password === "") {
      return Alert.alert("내용을 채워주세요");
    }
    if (loading) {
      return;
    }
    SetLoading(true);
    try {
      //# 이런식으로 뭐가 들어오는지 확인할 수 있다.
      // const userCredential = await auth().createUserWithEmailAndPassword(email, password); //user가 입력한 email, password를 firebase에 저장시켜준다.
      // console.log(userCredential);
      await auth().createUserWithEmailAndPassword(email, password); //# user가 입력한 email, password를 firebase에 저장시켜준다.
    } catch (e) {
      switch (e.code) {
        case "auth/weak-password": {
          //# createUserWithEmailAndPassword에 있는 Error들로 case를 나눠서 경고 띄우기
          Alert.alert("비밀번호가 보안에 취약합니다.");
        }
      }
    }
  };
  return (
    <View>
      <Text>Join</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmial(text)}
        placeholder="Email"
        keyboardType="email-address" //# email 형식으로 자동 맞춤(@가 자판에 생김)
        autoCapitalize="none" //# 첫글자 대문자 유무
        autoCorrect={false} //# 자판 위에 자동 수정 유무
        returnKeyType="next" //# 완료 버튼 뭐로 띄울지
        onSubmitEditing={onSubmitEmailEditing} //# finish했을때 할 일 함수로 넣어줌
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry //# 비밀번호 안보이게
        keyboardType="visible-password"
        placeholder="password"
        returnKeyType="done"
        ref={passwordInput} //# refercese를 만들어서 다른곳에서 참조 가능하게 만들어줌
        onSubmitEditing={onSubmitPasswordEditing}
      />
      <Btn onPress={onSubmitPasswordEditing}>
        {loading ? <ActivityIndicator color="red" /> : <BtnText>Create Account</BtnText>}
      </Btn>
    </View>
  );
};

export default Join;

const Btn = styled.TouchableOpacity``;
const BtnText = styled.Text``;
