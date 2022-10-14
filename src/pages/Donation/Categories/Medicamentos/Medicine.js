import React, {useState, useEffect} from 'react';
import {Text, Image, FlatList, BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {data} from '../data';
import Back from '../../../../assets/coolicon.svg';
import { useRoute } from '@react-navigation/native';

export default function Main({navigation}) {
  const [isItem, setIsItem] = useState({});

  const route = useRoute();
  console.log(route.name);
  
  const goTo = () => {
    navigation.navigate('Main', {screen: 'Donation'});
  };
  const handleMedicineClick = () => {
    navigation.navigate('ItemMedicine');
  };

  // backbutton
  useEffect(() => {
    const backAction = () => {
      {route.name == "Medicine" ? navigation.navigate('Main', {screen: 'Donation'}) : navigation.goBack()};
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  //end backbutton

  return (
    <SafeAreaView
      SafeAreaView
      style={{height: '100%', backgroundColor: '#FAFDFF'}}>
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
            // justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => goTo('Donation')}>
            <Back />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 15,
              fontWeight: '400',
              fontSize: 20,
              color: '#323232',
              //   width:150,
              // borderBottomWidth: 1,
              // borderColor: '#aad7f2',
              fontFamily: 'PatuaOne-Regular',
            }}>
            MEDICAMENTOS
          </Text>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView>
        {/* <ScrollView style={{marginBottom: 50}}> */}
        <FlatList
          data={data}
          style={{marginBottom: 50}}
          keyExtractor={item => item.id}
          numColumns={1}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  // alignItems: 'center',
                  backgroundColor: '#ffffff',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'row',
                  padding: 5,
                  margin: 8,
                  shadowColor: '#777',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.27,
                  shadowRadius: 4.65,

                  elevation: 8,
                  // borderRadius: 12.34,
                }}
                key={item.id}
                onPress={() => (
                  handleMedicineClick(), console.log('is Item', item)
                )}>
                <Image
                  source={{uri: item.img}}
                  style={{
                    width: 120,
                    height: 120,
                    resizeMode: 'contain',
                    marginRight: 8,
                  }}
                  keyExtractor={item => item.id}
                />
                <SafeAreaView style={{display: 'flex', flex: 1}}>
                  <Text
                    style={{
                      flexGrow: 1,
                      flexWrap: 'wrap',
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 16,
                    }}>
                    {item.nome}
                  </Text>
                  <Text style={{fontSize: 14, flex: 1}} numberOfLines={2}>
                    Descrição: {item.descricao}
                  </Text>
                  <SafeAreaView
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{color: 'gray'}}>minimo necessário:</Text>
                    <Text style={{color: 'black'}}>
                      {item.minimo_necessario} unidades
                    </Text>
                  </SafeAreaView>
                </SafeAreaView>
              </TouchableOpacity>
            );
          }}
        />
        {/* </ScrollView> */}
      </SafeAreaView>
    </SafeAreaView>
  );
}
