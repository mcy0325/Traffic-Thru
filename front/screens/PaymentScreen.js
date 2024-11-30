import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';

const PaymentScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    if (!password) {
      Alert.alert('Error', 'Please enter the payment password.');
      return;
    }

    // 결제 프로세스 시작
    setIsProcessing(true);

    setTimeout(() => {
      // 2초 후 결제 완료 가정
      setIsProcessing(false);
      navigation.navigate('Success'); // 결제 성공 후 화면 이동 (SuccessScreen 필요)
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>결제 화면</Text>

      {!isProcessing ? (
        <>
          <Text style={styles.message}>결제 비밀번호를 입력하세요.</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="결제 비밀번호"
            value={password}
            onChangeText={setPassword}
          />
          <Button title="결제하기" onPress={handlePayment} />
        </>
      ) : (
        <>
          <Text style={styles.message}>
            휴대폰 뒷면을 카드 리더기에 대세요...
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});

export default PaymentScreen;
