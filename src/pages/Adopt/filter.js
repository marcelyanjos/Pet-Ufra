import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function Filter() {
  const [selectedAnimal, setSelectedAnimal] = useState();
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#EFF9FF',
        height: '100%',
        // display: 'flex',
        // alignItems: 'center',
      }}>
      <SafeAreaView
        style={{display: 'flex', alignItems: 'center', marginTop: 15}}>
        <Picker
          style={{
            width: '90%',
            backgroundColor: 'white',
            borderRadius:10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
          }}
          mode='dropdown'
          selectedValue={selectedAnimal}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedAnimal(itemValue)
          }>
          <Picker.Item label="Todos" value="todos" />
          <Picker.Item label="Cachorro" value="cão" />
          <Picker.Item label="Gato" value="gato" />
        </Picker>
      </SafeAreaView>
    </SafeAreaView>
  );
}
