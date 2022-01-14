import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  Pressable,
  View,
  Modal,
} from 'react-native';
import RadioButton from '../../components/Buttons/RadioButton';

function ModalFilter({item, modalVisible, setModalVisible}) {
  const [option, setOption] = useState();
  const data = [{value: 'Cachorro'}, {value: 'Gato'}, {value: 'Todos'}];
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.2)',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: '60%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            // padding: 35,
            // alignItems: "center",
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
          <View style={{width: '95%', height: '95%', marginTop: 2}}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{textAlign: 'center', width: '100%'}}>Filtro</Text>
              <Pressable
                style={{marginLeft: -15}}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={{
                    // marginLeft: -5,
                    fontSize: 22,
                    color: '#a8a8a8',
                    fontWeight: 'bold',
                    fontWeight: '400',
                    textAlign: 'left',
                  }}>
                  X
                </Text>
              </Pressable>
            </View>
            <View style={{height:'92%', marginTop:8}}>
              <RadioButton data={data} onSelect={value => setOption(value)} />
              {/* <Text> Your option: {option}</Text> */}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalFilter;
