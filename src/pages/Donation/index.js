import React, {useRef, useCallback} from 'react';
import {
  Image,
  ImageBackground,
  PixelRatio,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SearchIcon from '../../assets/search.svg';
import Medicine from '../../assets/medicine.svg';
import Toy from '../../assets/toy.svg';
import Bed from '../../assets/dogBed.svg';
import Food from '../../assets/food.svg';
import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

  const handleSignClick = () => {
    navigation.reset({
      routes: [{name: 'Medicine'}],
    });
  };
  return (
    <SafeAreaView>
      <SafeAreaView style={{height: '100%', backgroundColor: '#FAFDFF'}}>
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
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SafeAreaView
            style={{
              width: '92%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
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
              DOAÇÕES
            </Text>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={{height: 45}}>
          <Text
            style={{
              marginTop: 10,
              marginLeft: 15,
              fontSize: 20,
              fontWeight: '400',
              color: '#323232',
              fontWeight: '600',
            }}>
            Categorias
          </Text>
        </SafeAreaView>
        <Divider />
        <SafeAreaView>
          <TouchableOpacity
            onPress={() => handleSignClick()}
            style={{
              height: 40,
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 3,
            }}>
            {/* <ProfileInfo style={{height: '25%'}} /> */}
            <Medicine style={{marginLeft: 15}} />
            <Text
              style={{
                marginLeft: 15,
                fontSize: 17,
                fontWeight: '400',
                color: '#323232',
                fontWeight: 'bold',
              }}>
              Medicamentos
            </Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity
            style={{
              height: 40,
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 3,
            }}>
            {/* <ProfileInfo style={{height: '25%'}} /> */}
            <Toy style={{marginLeft: 15}} />
            <Text
              style={{
                marginLeft: 15,
                fontSize: 17,
                fontWeight: '400',
                color: '#323232',
                fontWeight: 'bold',
              }}>
              Brinquedos e arranhadores
            </Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity
            style={{
              height: 40,
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 3,
            }}>
            {/* <ProfileInfo style={{height: '25%'}} /> */}
            <Bed style={{marginLeft: 12}} />
            <Text
              style={{
                marginLeft: 14,
                fontSize: 17,
                fontWeight: '400',
                color: '#323232',
                fontWeight: 'bold',
              }}>
              Camas e almofadas
            </Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity
            style={{
              height: 40,
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 3,
            }}>
            {/* <ProfileInfo style={{height: '25%'}} /> */}
            <Food style={{marginLeft: 15}} />
            <Text
              style={{
                marginLeft: 15,
                fontSize: 17,
                fontWeight: '400',
                color: '#323232',
                fontWeight: 'bold',
              }}>
              Alimentos e rações
            </Text>
            <Divider />
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
