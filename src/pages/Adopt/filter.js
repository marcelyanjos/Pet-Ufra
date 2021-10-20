import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

export default function Filter() {
  const [value, setValue] = React.useState('todos');
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#EFF9FF',
        height: '100%',
        // display: 'flex',
        // alignItems: 'center',
      }}>
      <SafeAreaView
        style={{
          height: '7%',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SafeAreaView>
          <Button
            type="clear"
            // buttonStyle={{ width:'10%'}}
            icon={<Icon name="angle-left" size={20} color="black" />}
            onPress={() => navigation.goBack()}
          />
        </SafeAreaView>
        <SafeAreaView
          style={{
            width: '85%',
            marginLeft: 10,
            justifyContent: 'space-between',
          }}>
          <Text>Filtro</Text>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          // backgroundColor: 'yellow',
        }}>
        {/* <SafeAreaView style={{ width:'90%', display:'flex',  alignItems: 'center',justifyContent:'space-between',backgroundColor:'blue'}}> */}
        <SafeAreaView
          style={{
            width: '90%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
            // backgroundColor: 'green',
            justifyContent: 'space-between',
          }}>
          <Text>Especie</Text>
          <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <SafeAreaView>
        <Text>Todos</Text>
        <RadioButton value="Todos" />
      </SafeAreaView>
      <SafeAreaView>
        <Text>Cachorro</Text>
        <RadioButton value="Cachorro" />
      </SafeAreaView>
      <SafeAreaView>
        <Text>Gato</Text>
        <RadioButton value="Gato" />
      </SafeAreaView>
    </RadioButton.Group>

        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
    // </SafeAreaView>
  );
}
