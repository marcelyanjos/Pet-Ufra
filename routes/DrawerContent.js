import React from 'react'
import { SafeAreaView,StyleSheet, ImageBackground } from "react-native"
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import {Avatar,
    Title,
    // Paragraph,
    Drawer,
    // Text,
    // TouchableRipple,
    // Switch
} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import Sair from '../src/assets/sair.svg'
import Home from '../src/assets/home_2.svg'
// import Table from '../assets/table.svg'
// import SMS from '../assets/sms.svg'
// import Chart from '../assets/chart.svg'
import { color } from 'react-native-reanimated'
import { ScrollView } from 'react-native-gesture-handler'


const styles = StyleSheet.create({
    section: {
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 1,
      alignItems:'center',
      justifyContent:'center',
      marginLeft:5
    },
    bottomDrawerSection: {
        marginBottom: 0,
        borderTopColor: '#f4f4f4',
        backgroundColor:'#fefff1',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    label:{
        color:'black',
        fontSize:36,
        fontFamily:'Yomogi-Regular'
    },
    labelOut:{
        color:'black',
        fontSize:30,
        fontFamily:'Yomogi-Regular'
    },
    image:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
  });

export function DrawerContent(props){

    const handleOutClick=()=>{
        navigation.reset({
            routes:[{name:'SignIn'}]
        });
    }

    const navigation = useNavigation();

    return(
        <ImageBackground source={require("../src/assets/bg.png")} style={styles.image}>
        <SafeAreaView style={{flex:1, backgroundColor:'rgba(254, 255, 241, 0.6)', marginTop:-5}}>
            <DrawerContentScrollView {...props} screenOptions={{ swipeEnabled: false }}>
                <SafeAreaView>
                            {/* <SafeAreaView style={{alignItems:'center', marginTop:'10%'}}>
                            <Avatar.Image source={{
                                uri:'https://scontent.fbel7-1.fna.fbcdn.net/v/t1.6435-9/99092876_105217667872104_1174323339527716864_n.png?_nc_cat=107&ccb=1-3&_nc_sid=973b4a&_nc_ohc=ChgLXaMGO38AX9xhTb1&_nc_ht=scontent.fbel7-1.fna&oh=f546902770a9b1a8f21f26f20a385330&oe=60CC9EA9'
                            }}
                            size={150}
                            style={{borderWidth:77, borderColor:'white',alignItems:'center', justifyContent:'center'}}
                            />
                            </SafeAreaView> */}

                        <ScrollView>
                                <DrawerItem
                                icon={({color, size}) =>(
                                    <Home style={{width:30, height:30}}
                                    color={color}
                                    size={size}
                                    />
                                    )}
                                style={{width:'100%'}}
                                label='Home'
                                labelStyle={styles.label}
                                onPress={()=>{props.navigation.navigate('Home')}}
                                />
                                
                                {/* <DrawerItem
                                icon={({color, size}) =>(
                                    <Table style={{width:30, height:30}}
                                    color={color}
                                    size={size}
                                    />
                                    )}
                                style={{width:'100%'}}
                                label='Valores Negociados'
                                labelStyle={{color:'white', fontSize:16}}
                                onPress={()=>{props.navigation.navigate('Values')}}
                                /> */}
                                 {/* <DrawerItem
                                icon={({color, size}) =>(
                                    <Table style={{width:30, height:30}}
                                    color={color}
                                    size={size}
                                    />
                                    )}
                                style={{width:'100%'}}
                                label='Tabela Valores'
                                labelStyle={{color:'white', fontSize:20}}
                                onPress={()=>{props.navigation.navigate('Tabela')}}
                                /> */}

                                {/* <DrawerItem
                                icon={({color, size}) =>(
                                    <SMS style={{width:30, height:30}}
                                    color={color}
                                    size={size}
                                    />
                                    )}
                                style={{width:'100%'}}
                                label='SMS Enviados'
                                labelStyle={styles.label}
                                onPress={()=>{props.navigation.navigate('SMS')}}
                                /> */}

                                {/* <DrawerItem
                                icon={({color, size}) =>(
                                    <SMS style={{width:30, height:30}}
                                    color={color}
                                    size={size}
                                    />
                                    )}
                                style={{width:'100%'}}
                                label='Tabela SMS'
                                labelStyle={styles.label}
                                onPress={()=>{props.navigation.navigate('Tabela2')}}
                                /> */}

                            {/* <DrawerItem
                                icon={({color, size}) =>(
                                    <Chart style={{width:30, height:30}}
                                    color={color}
                                    size={size}
                                    />
                                    )}
                                style={{width:'100%'}}
                                label='Fluxo de SMS'
                                labelStyle={styles.label}
                                onPress={()=>{props.navigation.navigate('Grafico1')}}
                                /> */}
                        {/* </SafeAreaView> */}
                       
                    </ScrollView>
                </SafeAreaView>

            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                icon={({color, size}) =>(
                    <Sair style={{width:30, height:30}}
                    color={color}
                    size={size}
                    />
                     )}
                style={{marginLeft:'5%'}}
                label='SignOut'
                labelStyle={styles.labelOut}
                onPress={handleOutClick}
                
                />
            </Drawer.Section>
        </SafeAreaView>
        </ImageBackground>
    )

}