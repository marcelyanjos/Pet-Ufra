import React from 'react';
import {Text, ImageBackground, Image, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Back from '../../../../assets/coolicon.svg';
import {data} from '../data';
export default function Main({navigation, item, isItem}) {
  // console.log(data[0]);
  // console.log('item:',item);
  const goTo = () => {
    navigation.navigate('Main', {screen: 'Donation'});
  };

  const handleMedicineClick = () => {
    navigation.navigate('ItemMedicineEdit');
  };

  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        backgroundColor: '#ffff',
        height: '100%',

        // borderRadius: 12.34,
      }}>
      <SafeAreaView style={{width: '100%', height: '40%'}}>
        <TouchableOpacity
          style={{marginTop: 8, marginLeft: 8}}
          onPress={() => handleSignClick()}>
          <Back />
        </TouchableOpacity>
        <Image
          source={{uri: data[0].img}}
          style={{
            width: '100%',
            height: '90%',
            resizeMode: 'contain',
          }}
          keyExtractor={item => item.id}
        />
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
            width:'100%',
            marginBottom: 10,
            flexWrap: 'wrap',
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {data[0].nome}
        </Text>
        <Text style={{fontSize: 15, marginBottom: 8, width: '100%'}}>
          Descrição:{' '}
        </Text>
        <Text style={{fontSize: 15, marginBottom: 8}}>{data[0].descricao}</Text>
        <Text style={{fontSize: 15, marginBottom: 8, width: '100%'}}>
          Valor de mercado:
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: '#000',
            marginBottom: 8,
            width: '100%',
            textAlign: 'center',
          }}>
          R${data[0].min_val} ~ R${data[0].max_val}
        </Text>
        <SafeAreaView
          style={{width: '100%', display: 'flex', alignItems: 'center'}}>
          <SafeAreaView
            style={{
              fontSize: 15,
              width: '90%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              textAlign: 'center',
            }}>
            <Text>Total em estoque</Text>
            <Text>{data[0].total_estoque} qtd.</Text>
          </SafeAreaView>
          <SafeAreaView
            style={{
              fontSize: 15,
              width: '90%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              textAlign: 'center',
            }}>
            <Text>Minimo necessário</Text>
            <Text>{data[0].minimo_necessario} qtd.</Text>
          </SafeAreaView>
        </SafeAreaView>
        <TouchableOpacity
          style={{
            marginTop: 70,
            width: 180,
            height: '25%',
            justifyContent: 'center',
            borderRadius: 5,
            backgroundColor: '#72A9FA',
          }} onPress={()=>handleMedicineClick()}>
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
              marginBottom: 8,
              width: '100%',
              textAlign: 'center',
            }}>
            AGENDAR DOAÇÃO
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}
