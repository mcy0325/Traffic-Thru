import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import AddCardScreen from '../screens/AddCardScreen';
import SetPasswordScreen from '../screens/SetPasswordScreen';
import IssueCardScreen from '../screens/IssueCardScreen';
import MyPageScreen from '../screens/MyPageScreen';
import NoticeScreen from '../screens/NoticeScreen';
import PaymentScreen from '../screens/PaymentScreen';
import TransportHistoryScreen from '../screens/TransportHistoryScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddCard"
          component={AddCardScreen}
          options={{
            title: '카드 추가하기',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="SetPassword"
          component={SetPasswordScreen}
          options={{
            title: '결제 비밀번호 설정',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="IssueCard" component={IssueCardScreen} />
        <Stack.Screen name="MyPage" component={MyPageScreen} />
        <Stack.Screen name="Notice" component={NoticeScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen
          name="TransportHistory"
          component={TransportHistoryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
