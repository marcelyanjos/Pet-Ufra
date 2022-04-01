import React from 'react'
import {Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function Main(){
    const navigation=useNavigation();

    return(
        <>
        <Text style={{color:'#323232'}}>Alimentos e Rações</Text>
        </>
    )
}