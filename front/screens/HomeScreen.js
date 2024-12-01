import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('myCards');
  const [cards, setCards] = useState([
    {id: '1', image: require('../assets/sample_card.png')}, // 샘플 카드 이미지
  ]);

  const renderMyCards = () => {
    if (cards.length === 0) {
      return <Text style={styles.noCardsText}>등록된 카드가 없습니다.</Text>;
    }

    return (
      <FlatList
        data={cards}
        renderItem={({item}) => (
          <View style={styles.cardWrapper}>
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => navigation.navigate('Payment')}>
              <Image source={item.image} style={styles.cardImage} />
            </TouchableOpacity>
            <Text style={styles.cardInstruction}>
              결제하려면 카드를 터치하세요
            </Text>
          </View>
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardList}
      />
    );
  };

  const renderAddCard = () => (
    <TouchableOpacity
      style={styles.addCardContainer}
      onPress={() => navigation.navigate('AddCard')}>
      <Text style={styles.addCardText}>+</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* 상단 바 */}
      <View style={styles.headerContainer}>
        <Text style={styles.appName}>Traffic-Thru</Text>
      </View>
      {/* 탭 버튼 */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'myCards' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('myCards')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'myCards' && styles.activeTabText,
            ]}>
            내 카드
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'addCard' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('addCard')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'addCard' && styles.activeTabText,
            ]}>
            카드 추가하기
          </Text>
        </TouchableOpacity>
      </View>

      {/* 활성화된 탭에 따른 내용 표시 */}
      <View style={styles.contentContainer}>
        {activeTab === 'myCards' ? renderMyCards() : renderAddCard()}
      </View>
      {/* 배너 이미지 */}
      <Image
        source={require('../assets/banner.png')} // 배너 이미지 경로
        style={styles.banner}
      />
      {/* 공지사항 버튼 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Notice')}>
        <Text style={styles.buttonText}>공지사항</Text>
      </TouchableOpacity>
      {/* 다른 버튼들 */}
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
    backgroundColor: '#000',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#000',
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  activeTab: {
    backgroundColor: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  tabText: {
    fontSize: 16,
    color: '#fff',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardList: {
    paddingVertical: 20,
  },
  cardWrapper: {
    alignItems: 'center',
  },
  cardContainer: {
    width: 160,
    height: 103,
    backgroundColor: '#fff',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    padding: 2,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cardInstruction: {
    marginTop: 15,
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  noCardsText: {
    fontSize: 16,
    color: '#fff',
  },
  addCardContainer: {
    width: 150,
    height: 100,
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  addCardText: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
  },
  banner: {
    width: '100%',
    height: 55,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F5A6A7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'left',
    fontWeight: '500',
  },
});

export default HomeScreen;
