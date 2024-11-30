import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const IssueCardScreen = () => {
  const cards = [
    {id: '1', name: 'Traffic Card', benefits: '교통비 5% 할인'},
    {id: '2', name: 'Thru Card', benefits: '대중교통 무제한'},
  ];

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>트래픽스 교통카드 발급</Text>
      <FlatList
        data={cards}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.cardItem,
              selectedCard === item.id && styles.selectedCard,
            ]}
            onPress={() => setSelectedCard(item.id)}>
            <Text style={styles.cardName}>{item.name}</Text>
            <Text>{item.benefits}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="발급하기" onPress={() => alert('카드 발급 완료')} />
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
  cardItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedCard: {
    borderColor: '#2196F3',
    backgroundColor: '#E3F2FD',
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default IssueCardScreen;
