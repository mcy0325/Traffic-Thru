import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const MyPageScreen = () => {
  const menuItems = [
    '개인정보 수정',
    '결제 비밀번호 변경',
    '대표 카드 변경',
    '자택 주소지 변경',
    '카드 삭제하기',
    '계정 탈퇴',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>마이페이지</Text>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.menuItem}>
          <Text style={styles.menuText}>{item}</Text>
        </TouchableOpacity>
      ))}
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
  menuItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 16,
  },
});

export default MyPageScreen;
