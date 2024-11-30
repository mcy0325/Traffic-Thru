import React, {useState} from 'react';
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const TransportHistoryScreen = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(null);

  const history = [
    {id: '1', date: '2024-11-20', amount: '1200원', busNumber: '302'},
    {id: '2', date: '2024-11-21', amount: '1500원', busNumber: 'M6117'},
    {id: '3', date: '2024-11-22', amount: '1000원', busNumber: '1000'},
  ];

  const onDateChange = (event, selectedDate) => {
    if (showPicker === 'start') {
      setStartDate(selectedDate || startDate);
    } else {
      setEndDate(selectedDate || endDate);
    }
    setShowPicker(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>대중교통 이용 내역</Text>

      <View style={styles.datePickers}>
        <View>
          <Button
            title="시작 날짜 선택"
            onPress={() => setShowPicker('start')}
          />
          <Text>{startDate.toDateString()}</Text>
        </View>
        <View>
          <Button title="종료 날짜 선택" onPress={() => setShowPicker('end')} />
          <Text>{endDate.toDateString()}</Text>
        </View>
      </View>

      {showPicker && (
        <DateTimePicker
          value={showPicker === 'start' ? startDate : endDate}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

      <FlatList
        data={history}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.historyItem}>
            <Text>{item.date}</Text>
            <Text>버스번호: {item.busNumber}</Text>
            <Text>금액: {item.amount}</Text>
          </View>
        )}
      />
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
  datePickers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  historyItem: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
});

export default TransportHistoryScreen;
