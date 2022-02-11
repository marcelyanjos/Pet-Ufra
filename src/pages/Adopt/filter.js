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
import styles from './style';
import RadioButton1 from '../../components/Buttons/RadioButton1';
import RadioButton2 from '../../components/Buttons/RadioButton2';
import SliderButton from '../../components/Buttons/SliderButton';
import Male from '../../assets/male.svg';
import Female from '../../assets/female.svg'
function ModalFilter({item, modalVisible, setModalVisible}) {
  const [optionSexo, setOptionSexo] = useState([]);
  const [optionEspecie, setOptionEspecie] = useState([]);
  const [userOption1, setUserOption1] = useState();
  const [userOption2, setUserOption2] = useState();
  const [userOption3, setUserOption3] = useState();
  // const [idade, setIdade] = useState(0);
  const sexo = [{value: 'Cachorro'}, {value: 'Gato'}, {value: 'Todos'}];
  const genero = [{value: 'Femea', icon:Female}, {value: 'Macho', icon:Male}, {value: 'Todos', icon:[Male,Female]}];

  const selectHandler = value => {
    onSelect(value);
    setUserOption(value);
  };

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
            height: '45%',
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
          <View
            style={{
              width: '95%',
              height: '95%',
              marginTop: 2,

            }}>
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
            <View
              style={{
                height: '90%',
                marginTop: 8,
                paddingBottom: 8,
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <View style={{width:'100%',marginLeft:10}}>
              <Text style={{color: '#666666',fontSize:16, marginRight:'2%', marginBottom:5}}> Especie:</Text>
              <View style={{width:'100%', height: 40,display:'flex', flexDirection:'row'}}>
              <RadioButton1
                data={sexo}
                onSelect={value => setOptionSexo(value)}
              />
              </View></View>
              <View style={{width:'100%',marginLeft:10}}>
              <Text style={{color: '#666666',fontSize:16,  marginRight:'2%', marginBottom:5}}> Genero:</Text>
              <View style={{width:'100%', height: 40,display:'flex', flexDirection:'row'}}>
              <RadioButton1
                data={genero}
                onSelect={value => setOptionEspecie(value)}
              />
              </View></View>
              <View style={{width:'95%'}}>
              <Text style={{color: '#666666',fontSize:16, marginLeft:'-1%', marginBottom:5}}> Caracteristicas:</Text>
              <View style={{width:'100%',height: 40,display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <Pressable style={{borderWidth:1.5, borderColor:'#BBDFF3', width:'29%', justifyContent:'center', borderRadius:8}} onPress={() => setUserOption1()}>
                  <Text style={{color: 'gray', textAlign:'center',fontSize:16}}>Dócil</Text>
                </Pressable>
                <Pressable style={{borderWidth:1.5, borderColor:'#BBDFF3', width:'29%', justifyContent:'center', borderRadius:8}} onPress={() => setUserOption2()}>
                  <Text style={{color: 'gray', textAlign:'center',fontSize:16}}>Carinhoso</Text>
                </Pressable>
                <Pressable style={{borderWidth:1.5, borderColor:'#BBDFF3', width:'29%', justifyContent:'center', borderRadius:8}} onPress={() => setUserOption3()}>
                  <Text style={{color: 'gray', textAlign:'center',fontSize:16}}>Divertido</Text>
                </Pressable>
              </View></View>
              <SliderButton />
              
              {/* <Text> Your option: {option}</Text> */}
              {/* <Text style={{color: 'black'}}>{Math.floor(idade)}</Text> */}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalFilter;
