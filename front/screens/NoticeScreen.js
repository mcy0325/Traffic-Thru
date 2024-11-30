import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const NoticeScreen = () => {
  const notices = [
    {id: '1', title: '공지사항 1', content: '공지사항 내용 1입니다.'},
    {id: '2', title: '공지사항 2', content: '공지사항 내용 2입니다.'},
    {id: '3', title: '공지사항 3', content: '공지사항 내용 3입니다.'},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>공지사항</Text>
      <FlatList
        data={notices}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.notice}>
            <Text style={styles.noticeTitle}>{item.title}</Text>
            <Text style={styles.noticeContent}>{item.content}</Text>
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
  notice: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  noticeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noticeContent: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
  },
});

export default NoticeScreen;
