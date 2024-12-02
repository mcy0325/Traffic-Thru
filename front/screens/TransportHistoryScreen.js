import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const formatDate = date => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const TransportHistoryScreen = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(null);
  const [filteredHistory, setFilteredHistory] = useState([]);

  const history = [
    {id: '1', date: '2024-11-20', amount: '1,500원', busNumber: '700'},
    {id: '2', date: '2024-11-21', amount: '1,500원', busNumber: '66'},
    {id: '3', date: '2024-11-22', amount: '1,500원', busNumber: '710'},
    {id: '4', date: '2024-11-28', amount: '1,500원', busNumber: '7727'},
    {id: '5', date: '2024-12-01', amount: '1,500원', busNumber: '75'},
    {id: '6', date: '2024-12-02', amount: '1,500원', busNumber: '7726'},
  ];

  const onDateChange = (event, selectedDate) => {
    if (showPicker === 'start') {
      setStartDate(selectedDate || startDate);
    } else {
      setEndDate(selectedDate || endDate);
    }
    setShowPicker(null);
  };

  //검색 버튼 클릭 시, 날짜 범위에 맞는 데이터만 보여줌
  const handleSearch = () => {
    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);

    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);

    const filteredData = history.filter(item => {
      const itemDate = new Date(item.date);
      itemDate.setHours(0, 0, 0, 0);

      return itemDate >= start && itemDate <= end;
    });

    setFilteredHistory(filteredData);
  };

  return (
    <View style={styles.container}>
      {/* 날짜 선택 영역 */}
      <View style={styles.datePickers}>
        <View style={styles.datePickerContainer}>
          <Text style={styles.calendarIcon}>📅</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowPicker('start')}>
            <Text style={styles.dateText}>{formatDate(startDate)}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.datePickerContainer}>
          <Text style={styles.calendarIcon}>-</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowPicker('end')}>
            <Text style={styles.dateText}>{formatDate(endDate)}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* DateTimePicker */}
      {showPicker && (
        <DateTimePicker
          value={showPicker === 'start' ? startDate : endDate}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

      {/* 검색 버튼 */}
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>검색</Text>
      </TouchableOpacity>

      {/* 이용내역 목록 */}
      <FlatList
        data={filteredHistory.length > 0 ? filteredHistory : history}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.historyItem}>
            <Text style={styles.historyDate}>{item.date}</Text>
            <View style={styles.historyDetails}>
              <Text style={styles.historyBusNumber}>{item.busNumber}</Text>
              <Text style={styles.historyAmount}>{item.amount}</Text>
            </View>
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
    backgroundColor: '#000',
  },
  datePickers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarIcon: {
    fontSize: 24,
    color: '#fff',
    marginRight: 8,
  },
  dateButton: {
    borderWidth: 1,
    borderColor: '#F5A6A7',
    borderRadius: 5,
    padding: 10,
    width: 150,
    alignItems: 'center',
  },
  dateText: {
    color: '#fff',
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#F5A6A7',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  historyItem: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#222',
  },
  historyDate: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  historyDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyBusNumber: {
    fontSize: 24,
    color: '#F5A6A7',
  },
  historyAmount: {
    fontSize: 18,
    color: '#fff',
  },
});

export default TransportHistoryScreen;
