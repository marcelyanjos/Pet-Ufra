//Faltou trocar estilos
import React, {useRef, useCallback, useState} from 'react';
import {
  Image,
  ImageBackground,
  //   Button,
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Text,
  Pressable, TouchableOpacity 
} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './style';
import ModalFilter from './filter';
import {data} from './data';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  // const [modalData, setModalData] = useState({});

    const navigation = useNavigation();

  function openModal() {
    // setModalData();
    setModalVisible(true);
  }

  const handleAdoptItemClick = () => {
    console.log('clicked')
    navigation.navigate('AdoptItem');
  };

  return (
    <SafeAreaView>
      <ModalFilter
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        // item={modalData}
      />
      <SafeAreaView
        style={{
          backgroundColor: '#fafdff',
          height: '100%',
          // marginTop: 2,
          alignItems: 'center',
        }}>
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
                // borderBottomWidth: 1,
                // borderColor: '#aad7f2',
                // width: 100,
                fontFamily: 'PatuaOne-Regular',
              }}>
              DISPONÍVEL PARA ADOÇÃO
            </Text>
            <SafeAreaView>
              <Button
                type="clear"
                // buttonStyle={{ width:'10%'}}
                title="filtro"
                titleStyle={{color: 'black', textAlign: 'center'}}
                buttonStyle={{
                  borderWidth: 1,
                  borderRadius: 12,
                  borderColor: '#aad7f2',
                  height: 40,
                  backgroundColor: '#fafeff',
                }}
                // icon={<Icon name="filter" size={20} color="black" />}
                onPress={() => openModal()}
              />
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>

        {/* <ScrollView> */}
        <FlatList
          style={{paddingLeft: 4, paddingRight: 4}}
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
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    backgroundColor: '#ffffff',
                    // flexGrow: 1,
                    width: 180,
                    height: 250,
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
                  onPress={()=>handleAdoptItemClick()}>
                  <Image
                    style={{
                      width: 180,
                      height: 132,
                    }}
                    source={{uri: item.imagem}}
                  />
                  <SafeAreaView
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                    }}>
                    <SafeAreaView
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '90%',
                        justifyContent: 'space-between',
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          color: '#333333',
                          fontWeight: 'bold',
                          fontSize: 16,
                        }}>
                        {item.nome}
                      </Text>
                      <Image
                        style={{width: 20, height: 20}}
                        source={item.gender}
                      />
                    </SafeAreaView>
                    <SafeAreaView style={{width: '90%', height: '40%'}}>
                      <Text style={{color: '#333333', fontSize:12}}>
                        Descrição: {item.descrição}
                      </Text>
                    </SafeAreaView>
                    <SafeAreaView style={{width: '90%'}}>
                      <Text style={{color: '#333333', fontSize:12}}>
                        Idade: {item.idade}
                      </Text>
                    </SafeAreaView>
                  </SafeAreaView>
                </TouchableOpacity>
              </SafeAreaView>
            );
          }}
        />
        {/* </ScrollView> */}
      </SafeAreaView>
    </SafeAreaView>
  );
}
