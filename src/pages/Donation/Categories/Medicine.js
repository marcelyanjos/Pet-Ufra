import React from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Back from '../../../assets/coolicon.svg';
export default function Main({navigation}) {
    // const navigation = useNavigation({});
    
    const goTo = () => {
        navigation.navigate('Main', { screen: 'Donation' });
      };

    // const handleBackButtonClick=()=>{
    //     navigation.Back({
    //         routes:[{name:'Main'}]
    //     });
    // }

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
    </SafeAreaView>
  );
}
