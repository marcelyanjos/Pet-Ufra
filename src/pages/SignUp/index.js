import React, { useRef, useCallback } from 'react'
import { Image, ImageBackground, PixelRatio, SafeAreaView, StyleSheet, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {
    CustomButton,
    CustomButtonText,
} from './styles'
// import { useHistory } from 'react-router-dom';
// import api from '../../services/api';

export default function Home() {

    const navigation = useNavigation();
    
    const handleLoginButtonClick=()=>{
        navigation.reset({
            routes:[{name:'Main'}]
        });
    }


    return ( 
        
            <SafeAreaView style={{
        height:'100%',
        // paddingBottom:10,
        // backgroundColor:'rgba(254, 255, 241, 0.5)',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
        <Text>SignUp</Text>
</SafeAreaView>
        
       
    )
}