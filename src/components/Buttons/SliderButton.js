import React, {useState} from 'react';
import {Text, View, Stylesheet} from 'react-native';
// import style from './styles';
import Slider from '@react-native-community/slider'

export default function SliderButton() {
  const [idade, setIdade] = useState(0);
  return (
    <View style={{width:'100%'}}>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{color:'#666666', fontSize:20}}>Idade</Text>
          <Text style={{color:'#666666', fontSize:20}}>{Math.floor(idade)}</Text></View>
        <Slider style={{width:'100%',height:50}}
        minimumTrackTintColor='#bddff3'
        maximumTrackTintColor='#a2a2a2'
        minimumValue={0}
        maximumValue={15}
        onValueChange={(value)=>setIdade(value)}
        thumbTintColor='#9ac9e3'
        />
    </View>
  );
}
