import React, {useRef, useCallback} from 'react';
import {
  Image,
  ImageBackground,
  PixelRatio,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import ProfileInfo from '../../assets/Profile_info.svg';
import Pets from '../../assets/Pets.svg';
import Form from '../../assets/Form.svg';
import Notification from '../../assets/Notifications.svg';
import LogOut from '../../assets/Out.svg';
import {useNavigation} from '@react-navigation/native';
import {data} from './data';

export default function Profile() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    navigate;
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigation = useNavigation();

  const handleSignClick = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };
  return (
    <SafeAreaView style={{backgroundColor: '#fafafa', height: '100%'}}>
      {/* <SafeAreaView
        style={{width: '100%', height: '25%', alignItems: 'center'}}> */}
        {/* <ImageBackground style={{
          width:'100%',
          resizeMode: "cover",
          overflow: "hidden",}}
           source={require('../../assets/bg.jpg')}> */}
          <SafeAreaView
            style={{
              height: '22%',
              width: '100%',
              backgroundColor: '#BBDFF3',

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
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SafeAreaView style={{marginTop: '2%', width:'91%'}}>
              <Text style={{color: 'black', fontSize:20, fontFamily:'PatuaOne-Regular'}}>PERFIL</Text>
            </SafeAreaView>
            <SafeAreaView
              style={{
                width: '92%',
                height: '80%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop:'-2%'
              }}>
              <Image
                style={{height: '72%', width: '27%', borderRadius: 100, borderWidth:1, borderColor:'#ababab'}}
                source={data.user_profile}
              />
              <SafeAreaView>
                <Text style={{marginLeft: 15, fontSize: 20, color: '#323232'}}>
                  {data.nome}
                </Text>
                <Text style={{marginLeft: 15, fontSize: 15, color: '#323232'}}>
                  {data.user}
                </Text>
              </SafeAreaView>
            </SafeAreaView>
          </SafeAreaView>
        {/* </ImageBackground> */}
      {/* </SafeAreaView> */}
      <SafeAreaView style={{marginTop: 10, height: '26%',width:'100%', alignItems:'center', backgroundColor:'#cfcfcf'}}>
        <TouchableOpacity
          style={{
            height:40,
            width:'100%',
            backgroundColor:'#fafafa',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* <ProfileInfo style={{height: '25%'}} /> */}
          <Text style={{marginLeft:15,fontSize: 17, fontWeight:'400', color: '#323232'}}>
            DADOS PESSOAIS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height:40,
            marginTop:0.8,
            backgroundColor:'#fafafa',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* <Pets style={{height: '25%'}} /> */}
          <Text style={{marginLeft:15,fontSize: 17, fontWeight:'400', color: '#323232'}}>
            MEUS PETS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height:40,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            marginTop:0.5,
            backgroundColor:'#fafafa',
            alignItems: 'center',
          }}>
          {/* <Form style={{height: '25%'}} /> */}
          <Text style={{marginLeft:15,fontSize: 17, fontWeight:'400', color: '#323232'}}>
            FORMULÁRIOS DE ADOÇÃO
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height:40,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            marginTop:0.5,
            backgroundColor:'#fafafa',
            alignItems: 'center',
           
          }}>
          {/* <Notification style={{height: '25%'}} /> */}
          <Text style={{marginLeft:15,fontSize: 17, fontWeight:'400', color: '#323232'}}>
            NOTIFICAÇÕES
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSignClick()}
          style={{
            height:40,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            marginTop:0.5,
            backgroundColor:'#fafafa',
            alignItems: 'center',
          }}>
          {/* <LogOut style={{height: '25%'}} /> */}
          <Text style={{marginLeft:15,fontSize: 17, fontWeight:'400', color: '#323232'}}>
            SAIR
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}
