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
  Pressable,
} from 'react-native';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import ModalFilter from './filter';
import {data} from './data';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  // const [modalData, setModalData] = useState({});

  function openModal() {
    // setModalData();
    setModalVisible(true);
  }

  return (
    <SafeAreaView>
      <ModalFilter
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        // item={modalData}
      />
      <SafeAreaView
        style={{
          backgroundColor: '#EFF9FF',
          height: '100%',
          marginTop: 2,
          alignItems: 'center',
        }}>
        <SafeAreaView
          style={{
            height: '7%',
            width: '88%',
            backgroundColor: '#EFF9FF',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 20,
              borderBottomWidth: 1,
              borderColor: '#aad7f2',
              width: 100,
            }}>
            Adoção
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
                    borderWidth: 0.8,
                    borderColor: '#aad7f2',
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
                          fontSize: 18,
                        }}>
                        {item.nome}
                      </Text>
                      <Image
                        style={{width: 20, height: 20}}
                        source={item.gender}
                      />
                    </SafeAreaView>
                    <SafeAreaView style={{width: '90%', height: '40%'}}>
                      <Text style={{color: '#333333'}}>
                        Descrição: {item.descrição}
                      </Text>
                    </SafeAreaView>
                    <SafeAreaView style={{width: '90%'}}>
                      <Text style={{color: '#333333'}}>
                        Idade: {item.idade}
                      </Text>
                    </SafeAreaView>
                  </SafeAreaView>
                </SafeAreaView>
              </SafeAreaView>
            );
          }}
        />
        {/* </ScrollView> */}
      </SafeAreaView>
    </SafeAreaView>
  );
}
