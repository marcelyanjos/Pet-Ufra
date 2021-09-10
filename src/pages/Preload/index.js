import React, {useRef, useCallback, useEffect} from 'react';
import {
  Image,
  PixelRatio,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NewLogo from '../../assets/new_logo.svg';

export default function Home() {
  const navigation = useNavigation();
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
      } else {
          navigation.navigate('SignIn')
      }
    };
    checkToken();
  }, []);

  // const handleLoginButtonClick = () => {
  //   navigation.reset({
  //     routes: [{name: 'Main'}],
  //   });
  // };

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
      <ActivityIndicator size="large" color="#ffffff" style={{marginTop: 50}} />
    </SafeAreaView>
  );
}
