import React from 'react'
import {StyleSheet, Image, PixelRatio, SafeAreaView, Text, TouchableOpacity} from 'react-native'
import { Appbar, Card, Title, Paragraph } from 'react-native-paper';
import Menu from '../../assets/menu.svg'

const styles =StyleSheet.create({
    logo:{
        resizeMode:'center',
        aspectRatio: 1.0,
        height:'7%',         
      },
    })

export function Header ({navigation}){
  // const classes = useStyles();
 return (
     
    <Appbar.Header style={{backgroundColor:'#fefff1'}}>
    <TouchableOpacity onPress={() => navigation.openDrawer()} style={{backgroundColor:'#fefff1'}}>
        <Menu style={{color:'black', marginLeft:10}}/>
        </TouchableOpacity>
     <Appbar.Content title='Pet Ufra' titleStyle={{fontFamily:'Yomogi-Regular'}}/>
  </Appbar.Header>
    
      
 )
}