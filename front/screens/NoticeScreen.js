import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const NoticeScreen = () => {
  const warningNotices = [
    {
      id: 'w1',
      title: '긴급',
      content: '경기 남부 폭설 주의보로 인한 버스 저속 운행',
      isWarning: true,
    },
  ];
  const notices = [
    {
      id: '1',
      title: '경기',
      content: '경기 남부 폭설 주의보로 인한 버스 저속 운행',
    },
    {
      id: '2',
      title: '경기',
      content: '기후동행카드 경기 일부지역 사용 안내',
    },
  ];

  // 데이터를 합치면서 warningNotices를 먼저 추가
  const combinedNotices = [...warningNotices, ...notices];

  return (
    <View style={styles.container}>
      <FlatList
        data={combinedNotices}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={[
              styles.notice,
              item.isWarning && styles.warningNotice, // 긴급 공지 스타일 적용
            ]}>
            <Text
              style={[
                styles.noticeTitle,
                item.isWarning && styles.warningTitle, // 긴급 공지 제목 스타일
              ]}>
              {item.title}
            </Text>
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
    backgroundColor: '#000',
  },
  notice: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  warningNotice: {
    borderColor: '#FF0000',
    backgroundColor: '#330000',
  },
  noticeTitle: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'NEXONLv2GothicMedium',
  },
  warningTitle: {
    fontSize: 18,
    color: '#FF0000',
    fontFamily: 'NEXONLv2GothicMedium',
  },
  noticeContent: {
    marginTop: 5,
    fontSize: 14,
    color: '#ddd',
    fontFamily: 'NEXONLv2Gothic',
  },
});

export default NoticeScreen;
