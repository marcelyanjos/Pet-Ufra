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

export default function Profile() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
        <Text style={{marginLeft: 15, fontSize: 20}}>Perfil</Text>
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
          <Text style={{fontSize: 16, marginLeft:15}}>Dados Pessoais</Text>
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
          <Text style={{fontSize: 16, marginLeft:15}}>Meus Bichinhos</Text>
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
          <Text style={{fontSize: 16, marginLeft:15}}>Meus formulários de Adoção</Text>
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
          <Text style={{fontSize: 16, marginLeft:15}}>Notificações</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onClick={handleOpen}
          style={{
            marginLeft: 15,
            marginTop:10,
            display: 'flex',
            flexDirection: 'row',
            width: '92%',
            alignItems:'center'
          }}>
          <LogOut style={{height: '25%'}} />
          <Text style={{fontSize: 16, marginLeft:15}}>Sair</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}
