import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SetPasswordScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmMode, setIsConfirmMode] = useState(false);

  const handleKeyPress = value => {
    if (isConfirmMode) {
      if (confirmPassword.length < 4) {
        setConfirmPassword(prev => prev + value);
      }
    } else {
      if (password.length < 4) {
        setPassword(prev => prev + value);
      }
    }
  };

  const handleDelete = () => {
    if (isConfirmMode) {
      setConfirmPassword(prev => prev.slice(0, -1));
    } else {
      setPassword(prev => prev.slice(0, -1));
    }
  };

  const handleSubmit = () => {
    if (password === confirmPassword) {
      navigation.navigate('Home'); // 메인 화면으로 이동
    } else {
      alert('비밀번호가 일치하지 않습니다.');
      setPassword('');
      setConfirmPassword('');
      setIsConfirmMode(false);
    }
  };

  const renderPasswordDots = input => {
    return (
      <View style={styles.dotsContainer}>
        {[...Array(4)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {backgroundColor: index < input.length ? '#F5A6A7' : '#ddd'},
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isConfirmMode ? '비밀번호 확인' : '비밀번호 입력'}
      </Text>

      {/* 비밀번호 입력 상태 표시 */}
      {renderPasswordDots(isConfirmMode ? confirmPassword : password)}

      {/* 키패드 */}
      <View style={styles.keypadContainer}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(key => (
          <TouchableOpacity
            key={key}
            style={styles.key}
            onPress={() => handleKeyPress(key)}>
            <Text style={styles.keyText}>{key}</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.emptyKey} />
        {/* 0 버튼 */}
        <TouchableOpacity
          style={styles.key}
          onPress={() => handleKeyPress('0')}>
          <Text style={styles.keyText}>0</Text>
        </TouchableOpacity>
        {/* 삭제 버튼 */}
        <TouchableOpacity style={styles.key} onPress={handleDelete}>
          <Text style={styles.keyText}>⌫</Text>
        </TouchableOpacity>
      </View>

      {/* 확인 버튼 */}
      {password.length === 4 &&
        confirmPassword.length === 4 &&
        isConfirmMode && (
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>확인</Text>
          </TouchableOpacity>
        )}

      {/* 비밀번호 입력 완료 후 확인 모드로 전환 */}
      {!isConfirmMode && password.length === 4 && (
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => setIsConfirmMode(true)}>
          <Text style={styles.submitText}>다음</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  dot: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
  keypadContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '60%',
    marginVertical: 20,
  },
  key: {
    width: '30%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
  },
  emptyKey: {
    width: '30%',
    aspectRatio: 1,
    marginBottom: 10,
  },
  keyText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#F5A6A7',
  },
  submitText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SetPasswordScreen;
