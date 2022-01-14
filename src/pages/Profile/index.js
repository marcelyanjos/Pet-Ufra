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
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    navigate
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigation = useNavigation();

  const handleSignClick = () =>{
    navigation.reset({
      routes:[{name:'SignIn'}]
  });
}
  return (
    <SafeAreaView style={{backgroundColor: '#EFF9FF', height: '100%'}}>
      <SafeAreaView
        style={{
          height: '7%',
          backgroundColor: 'rgba(255,255,255,0.3)',
          display: 'flex',
          flexDirection: 'row',
          // justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <SafeAreaView style={{width: '85%', justifyContent: 'space-between'}}> */}
        <Text style={{marginLeft: 15, fontSize: 20, color:'#323232'}}>Perfil</Text>
      </SafeAreaView>
      <SafeAreaView style={{marginTop: 10, height: '91.5%'}}>
        <TouchableOpacity
          style={{
            marginLeft: 15,
            display: 'flex',
            flexDirection: 'row',
            width: '92%',
            alignItems:'center'
          }}>
          <ProfileInfo style={{height: '25%'}} />
          <Text style={{fontSize: 16, marginLeft:15, color:'#323232'}}>Dados Pessoais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: 15,
            marginTop:10,
            display: 'flex',
            flexDirection: 'row',
            width: '92%',
            alignItems:'center'
          }}>
          <Pets style={{height: '25%'}} />
          <Text style={{fontSize: 16, marginLeft:15, color:'#323232'}}>Meus Bichinhos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: 15,
            marginTop:10,
            display: 'flex',
            flexDirection: 'row',
            width: '92%',
            alignItems:'center'
          }}>
          <Form style={{height: '25%'}} />
          <Text style={{fontSize: 16, marginLeft:15, color:'#323232'}}>Meus formulários de Adoção</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: 15,
            marginTop:10,
            display: 'flex',
            flexDirection: 'row',
            width: '92%',
            alignItems:'center'
          }}>
          <Notification style={{height: '25%'}} />
          <Text style={{fontSize: 16, marginLeft:15, color:'#323232'}}>Notificações</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => handleSignClick()}
          style={{
            marginLeft: 15,
            marginTop:10,
            display: 'flex',
            flexDirection: 'row',
            width: '92%',
            alignItems:'center'
          }}>
          <LogOut style={{height: '25%'}} />
          <Text style={{fontSize: 16, marginLeft:15, color:'#323232'}}>Sair</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}
