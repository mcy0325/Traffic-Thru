import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* 상단 로고 */}
      <View style={styles.header}>
        <Text style={styles.logo}>TRAFFIC THRU</Text>
      </View>
      {/* 버튼들 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddCard')}>
        <Text style={styles.buttonText}>내 카드 추가하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Notice')}>
        <Text style={styles.buttonText}>공지사항</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TransportHistory')}>
        <Text style={styles.buttonText}>대중교통 이용내역</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('IssueCard')}>
        <Text style={styles.buttonText}>트래픽스 교통카드 발급</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MyPage')}>
        <Text style={styles.buttonText}>마이페이지</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;
