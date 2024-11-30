import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const SetPasswordScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordSubmit = () => {
    if (password === confirmPassword) {
      navigation.navigate('Home'); // 메인 화면으로 돌아가기
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>결제 비밀번호 설정하기</Text>
      <TextInput
        style={styles.input}
        placeholder="비밀번호 입력"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호 재입력"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        keyboardType="numeric"
      />
      <Button title="확인" onPress={handlePasswordSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

export default SetPasswordScreen;
