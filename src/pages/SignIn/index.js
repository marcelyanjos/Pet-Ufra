import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import NewLogo from '../../assets/new_logo.svg';

export default function SignIn() {
  return (
    <SafeAreaView
      style={{
        height: '100%',
        // paddingBottom:10,
        backgroundColor: '#BBDFF3',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 36, fontFamily: 'Comic Neue-Regular'}}>
        Pet Ufra
      </Text>
      <NewLogo style={{width: 300, height: 250}} />
    </SafeAreaView>
  );
}
