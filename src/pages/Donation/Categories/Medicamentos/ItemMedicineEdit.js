import React, {useState} from 'react';
import {Text, ImageBackground, Image, FlatList} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Back from '../../../../assets/coolicon.svg';
import {data} from '../data';
export default function Main({navigation, item, isItem}) {
  const [count, setCount] = useState(0);
  const goTo = () => {
    navigation.navigate('Main', {screen: 'Donation'});
  };

  const handleSignClick = () => {
    navigation.reset({
      routes: [{name: 'Medicine'}],
    });
  };

  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        backgroundColor: '#ffff',
        height: '100%',

        // borderRadius: 12.34,
      }}>
      <SafeAreaView style={{width: '100%', height: '45%'}}>
        <TouchableOpacity
          style={{marginTop: 8, marginLeft: 8}}
          onPress={() => handleSignClick()}>
          <Back />
        </TouchableOpacity>
        <SafeAreaView style={{alignItems: 'center'}}>
          <Image
            source={{uri: data[0].img}}
            style={{
              width: '100%',
              height: '82%',
              resizeMode: 'contain',
            }}
            keyExtractor={item => item.id}
          />
          <SafeAreaView style={{display: 'flex', flexDirection: 'row'}}>
            <IconButton
              icon="plus"
              color='#000'
              style={{borderWidth:1, borderColor:'#000'}}
              size={20}
              onPress={() => {
                setCount(count + 1);
              }}
            />
            <Text style={{marginLeft: 15, marginRight: 15,marginTop:8, fontSize:20, fontWeight:'bold', color:'#4a4a4a'}}>{count}</Text>
            <IconButton
              icon="minus"
              color='#000'
              style={{borderWidth:1, borderColor:'#000'}}
              size={20}
              onPress={() => {
                setCount(count - 1);
              }}
            />
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView
        style={{
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '60%',
          padding: 8,
          backgroundColor: '#ffff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
        }}>
        <Text
          style={{
            width: '100%',
            marginBottom: 10,
            flexWrap: 'wrap',
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {data[0].nome}
        </Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}
