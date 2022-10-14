import React from 'react';
import 'react-native-gesture-handler';
import Routes from './routes/routes';
import UserContextProvider from './src/Context/UserContext';
import {SafeAreaView, StatusBar} from 'react-native';
// MainStack = routes

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor="#b3e6ff"
        barStyle="dark-content"
        hidden={true}
        translucent={true}
      />
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </SafeAreaView>
  );
}
