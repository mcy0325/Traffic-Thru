import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const IssueCardScreen = () => {
  const cards = [
    {
      id: '1',
      name: 'Traffic Card',
      benefits: '교통비 5% 할인',
      image: require('../assets/sample_card.png'),
    },
    {
      id: '2',
      name: 'Thru Card',
      benefits: '0.5% 페이백',
      image: require('../assets/sample_card.png'),
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);
  const [address, setAddress] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // 본인인증 상태 관리

  // 본인인증 완료 처리 함수
  const handleAuthentication = () => {
    setIsAuthenticated(true); // 본인인증 상태를 true로 설정
    alert('본인인증 완료');
  };

  return (
    <View style={styles.container}>
      {/* 본인인증 버튼과 본인인증 완료 텍스트 */}
      <View style={styles.authSection}>
        <TouchableOpacity
          style={styles.authButton}
          onPress={handleAuthentication}>
          <Text style={styles.issueButtonText}>본인인증</Text>
        </TouchableOpacity>
        {isAuthenticated && <Text style={styles.authText}>*완료</Text>}
      </View>

      {/* 자택주소 입력 칸 */}
      <View style={styles.addressSection}>
        <Text style={styles.label}>자택 주소</Text>
        <TextInput
          style={styles.addressInput}
          placeholder="주소를 입력하세요"
          placeholderTextColor="#ddd"
          value={address}
          onChangeText={setAddress}
        />
      </View>

      {/* 카드 선택 섹션 */}
      <Text style={styles.cardSelectTitle}>카드 선택</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cards.map(item => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.cardItem,
              selectedCard === item.id && styles.selectedCard,
            ]}
            onPress={() => setSelectedCard(item.id)}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardName}>{item.name}</Text>
            <Text style={styles.cardBenefits}>{item.benefits}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 발급 버튼 */}
      <View style={styles.issueButtonContainer}>
        <TouchableOpacity
          style={styles.issueButton}
          onPress={() => alert('카드 발급 완료')}>
          <Text style={styles.issueButtonText}>발급하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  authSection: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authButton: {
    width: 140,
    backgroundColor: '#F5A6A7',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  authText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
    fontFamily: 'NEXONLv2Gothic',
  },
  addressSection: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#fff',
    fontFamily: 'NEXONLv2GothicMedium',
  },
  addressInput: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    color: '#fff',
    fontFamily: 'NEXONLv2Gothic',
  },
  cardSelectTitle: {
    fontSize: 18,
    marginVertical: 13,
    color: '#fff',
    fontFamily: 'NEXONLv2GothicMedium',
  },
  cardItem: {
    width: 150,
    height: 180,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginRight: 15,
    width: 180,
    alignItems: 'center',
    backgroundColor: '#222',
  },
  selectedCard: {
    borderColor: '#fff',
    backgroundColor: '#979797',
  },
  cardImage: {
    width: 160,
    height: 100,
    marginBottom: 13,
  },
  cardName: {
    fontSize: 16,
    marginBottom: 8,
    color: '#fff',
    fontFamily: 'NEXONLv2GothicMedium',
  },
  cardBenefits: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'NEXONLv2Gothic',
  },
  issueButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  issueButton: {
    width: 140,
    backgroundColor: '#F5A6A7',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  issueButtonText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'NEXONLv2GothicMedium',
  },
});

export default IssueCardScreen;
