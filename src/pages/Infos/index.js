import React, {useRef, useCallback} from 'react';
import {
  Image,
  ImageBackground,
  PixelRatio,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import SearchIcon from '../../assets/search.svg'

export default function Home() {
  return (
    <SafeAreaView>
        <SafeAreaView style={{height:'100%'}}>
      <SafeAreaView
          style={{
            height: '7%',
            width: '100%',
            backgroundColor: '#ffffff',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
            borderBottomLeftRadius:6,
            borderBottomRightRadius:6,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <SafeAreaView style={{width:'92%', display:'flex', flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 20,
              color: '#323232',
            //   width:150,
              // borderBottomWidth: 1,
              // borderColor: '#aad7f2',
              fontFamily: 'PatuaOne-Regular',
            }}>
            INFORMAÇÕES
          </Text>
          {/* <SafeAreaView> */}
            <SearchIcon style={{height:24, width:24}} />
          {/* </SafeAreaView> */}
          </SafeAreaView>
          </SafeAreaView>
          </SafeAreaView>
    </SafeAreaView>
  );
}
