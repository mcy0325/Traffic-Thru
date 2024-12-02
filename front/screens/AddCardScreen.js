import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

const AddCardScreen = ({navigation}) => {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [expiryDate, setExpiryDate] = useState(['', '']);
  const [cvc, setCvc] = useState('');
  const [password, setPassword] = useState('');

  const handleCardNumberChange = (text, index) => {
    const updatedCardNumber = [...cardNumber];
    updatedCardNumber[index] = text.slice(0, 4);
    setCardNumber(updatedCardNumber);
  };

  const handleExpiryDateChange = (text, index) => {
    const updatedExpiryDate = [...expiryDate];
    updatedExpiryDate[index] = text.slice(0, 2);
    setExpiryDate(updatedExpiryDate);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* 카드 번호 입력 */}
        <Text style={styles.title}>카드 번호</Text>
        <View style={styles.row}>
          {cardNumber.map((value, index) => (
            <TextInput
              key={index}
              style={styles.cardInput}
              value={value}
              onChangeText={text => handleCardNumberChange(text, index)}
              keyboardType="numeric"
              maxLength={4}
            />
          ))}
        </View>

        {/* 유효 기간 입력 */}
        <Text style={styles.title}>유효 기간</Text>
        <View style={styles.row}>
          {expiryDate.map((value, index) => (
            <TextInput
              key={index}
              style={styles.expiryInput}
              value={value}
              onChangeText={text => handleExpiryDateChange(text, index)}
              keyboardType="numeric"
              maxLength={2}
              placeholder={index === 0 ? 'MM' : 'YY'}
            />
          ))}
        </View>

        {/* CVC 입력 */}
        <Text style={styles.title}>CVC 번호</Text>
        <TextInput
          style={styles.input}
          placeholder="CVC"
          value={cvc}
          onChangeText={setCvc}
          keyboardType="numeric"
          maxLength={3}
        />

        {/* 카드 비밀번호 입력 */}
        <Text style={styles.title}>카드 비밀번호</Text>
        <TextInput
          style={styles.passwordInput}
          placeholder="카드 비밀번호 4자리를 입력하세요"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          keyboardType="numeric"
          maxLength={4}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SetPassword')}>
          <Text style={styles.buttonText}>카드 등록하기</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: '#fff',
    fontFamily: 'NEXONLv2GothicMedium',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  cardInput: {
    borderWidth: 1,
    borderColor: '#F5A6A7',
    borderRadius: 5,
    padding: 10,
    width: '22%',
    height: 45,
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    fontFamily: 'NEXONLv2Gothic',
  },
  expiryInput: {
    borderWidth: 1,
    borderColor: '#F5A6A7',
    borderRadius: 5,
    padding: 10,
    width: '48%',
    height: 45,
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    fontFamily: 'NEXONLv2Gothic',
  },
  input: {
    borderWidth: 1,
    borderColor: '#F5A6A7',
    borderRadius: 5,
    padding: 10,
    width: '18%',
    height: 45,
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 16,
    color: '#fff',
    fontFamily: 'NEXONLv2Gothic',
  },
  passwordInput: {
    borderWidth: 1,
    borderColor: '#F5A6A7',
    borderRadius: 5,
    padding: 10,
    width: '22%',
    height: 45,
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    marginBottom: 15,
    fontFamily: 'NEXONLv2Gothic',
  },
  button: {
    backgroundColor: '#F5A6A7',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    width: 150,
    alignSelf: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'NEXONLv2GothicMedium',
  },
});

export default AddCardScreen;
