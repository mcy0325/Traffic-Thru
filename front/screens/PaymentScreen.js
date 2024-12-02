import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

// 상단바 컴포넌트
const HeaderBar = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.appName}>Traffic-Thru</Text>
  </View>
);

const PaymentScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleKeyPress = key => {
    if (password.length < 4) {
      setPassword(password + key);
    }
  };

  const handleDelete = () => {
    setPassword(password.slice(0, -1));
  };

  const handleConfirm = () => {
    // 결제 프로세스 시작
    setIsProcessing(true);

    setTimeout(() => {
      // 10초 후 결제 완료 가정
      setIsProcessing(false);
      navigation.navigate('Home');
    }, 10000);
  };

  return (
    <View style={styles.container}>
      {/* 상단바 */}
      <HeaderBar />
      <View style={styles.contentContainer}>
        {isProcessing ? (
          <>
            {/* 결제 진행 중 화면 */}
            <Image
              source={require('../assets/sample_card.png')}
              style={styles.cardImage}
            />
            <Text style={styles.processingText}>
              휴대폰 뒷면을 카드 리더기에 대주세요
            </Text>
          </>
        ) : (
          <>
            {/* 결제 비밀번호 입력 화면 */}
            <Image
              source={require('../assets/sample_card.png')}
              style={styles.cardImage}
            />
            <Text style={styles.header}>결제 비밀번호를 입력해주세요</Text>
            <View style={styles.passwordContainer}>
              {[...Array(4)].map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.passwordDot,
                    index < password.length && styles.passwordDotFilled,
                  ]}
                />
              ))}
            </View>
            {/* 키패드 */}
            <View style={styles.keypad}>
              {[...Array(9)].map((_, index) => (
                <TouchableOpacity
                  key={index + 1}
                  style={styles.key}
                  onPress={() => handleKeyPress((index + 1).toString())}>
                  <Text style={styles.keyText}>{index + 1}</Text>
                </TouchableOpacity>
              ))}
              <View style={styles.emptyKey} />
              <TouchableOpacity
                style={styles.key}
                onPress={() => handleKeyPress('0')}>
                <Text style={styles.keyText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.key} onPress={handleDelete}>
                <Text style={styles.keyText}>←</Text>
              </TouchableOpacity>
            </View>
            {/* 확인 버튼 */}
            {password.length === 4 && (
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleConfirm}>
                <Text style={styles.confirmButtonText}>확인</Text>
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 10,
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  cardImage: {
    width: 200,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  passwordDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 5,
  },
  passwordDotFilled: {
    backgroundColor: '#F5A6A7',
  },
  keypad: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  emptyKey: {
    width: '30%',
    aspectRatio: 1,
    marginBottom: 10,
  },
  key: {
    width: '30%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginVertical: 10,
  },
  keyText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  confirmButton: {
    backgroundColor: '#F5A6A7',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  confirmButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  processingText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default PaymentScreen;
