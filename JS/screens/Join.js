import React, { useRef, useState } from "react";
import { Text, View, TextInput } from "react-native";

const Join = () => {
  const [email, setEmial] = useState("");
  const [password, setPassword] = useState("");
  const passwordInput = useRef(); //refrence 변수

  const onSubmitEditing = () => {
    passwordInput.current.focus(); // passwordInput ref로 포커스를 시켜줌
  };
  return (
    <View>
      <Text>Join</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmial(text)}
        placeholder="Email"
        keyboardType="email-address" // email 형식으로 자동 맞춤(@가 자판에 생김)
        autoCapitalize="none" // 첫글자 대문자 유무
        autoCorrect={false} // 자판 위에 자동 수정 유무
        returnKeyType="next" // 완료 버튼 뭐로 띄울지
        onSubmitEditing={onSubmitEditing} //finish했을때 할 일 함수로 넣어줌
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry //비밀번호 안보이게
        keyboardType="visible-password"
        placeholder="password"
        returnKeyType="done"
        ref={passwordInput} //refercese를 만들어서 다른곳에서 참조 가능하게 만들어줌
      />
    </View>
  );
};

export default Join;
