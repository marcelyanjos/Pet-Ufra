import React, {useRef, useCallback} from 'react';
import {
  Image,
  ImageBackground,
  //   Button,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Filter from './filter';
import {data} from './data';

export default function Home({navigation}) {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
}
  
  return (
    <SafeAreaView style={{backgroundColor: '#EFF9FF', height: '100%'}}>
      <SafeAreaView
        style={{
          height: '7%',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SafeAreaView style={{width: '85%', justifyContent: 'space-between'}}>
          <Text>Adoção</Text>
        </SafeAreaView>
        <SafeAreaView>
          <Button
            type="clear"
            // buttonStyle={{ width:'10%'}}
            icon={<Icon name="filter" size={20} color="black" />}
            onPress={() => goTo('Filter')}
          />
        </SafeAreaView>
      </SafeAreaView>

      {/* <ScrollView> */}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <SafeAreaView
              style={{
                width: '50%',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}>
              <SafeAreaView
                style={{
                  alignItems: 'center',
                  backgroundColor: '#ffffff',
                  // flexGrow: 1,
                  width: 170,
                  height: 250,
                  margin: 20,
                  // padding: 20,
                  borderRadius: 12.34,
                }}>
                <Image
                  style={{
                    width: 172,
                    height: 124.3,
                    borderTopLeftRadius: 12.34,
                    borderTopRightRadius: 12.34,
                  }}
                  source={{uri: item.imagem}}
                />
                <SafeAreaView style={{width:'100%',display:'flex', alignItems:'center'}}>
                <SafeAreaView
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '90%',
                    justifyContent: 'space-between',
                    marginTop: 5,
                  }}>
                  <Text style={{color: '#333333', fontWeight:'bold', fontSize:18}}>{item.nome}</Text>
                  <Image style={{width: 20, height: 20}} source={item.gender} />
                </SafeAreaView >
                <SafeAreaView style={{width:'90%', height:'43%'}}>
                <Text style={{color: '#333333'}}>Descrição: {item.descrição}</Text>
                </SafeAreaView>
                <SafeAreaView style={{width:'90%'}}>
                <Text style={{color: '#333333'}}>Idade: {item.idade}</Text>
                </SafeAreaView>
              </SafeAreaView>
              </SafeAreaView>
            </SafeAreaView>
          );
        }}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
