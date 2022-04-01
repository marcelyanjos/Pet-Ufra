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
import Account from '../../assets/account.svg';
import Paw from '../../assets/paw.svg';
import FormAdoption from '../../assets/formAdoption.svg';
import Out from '../../assets/out_outline.svg';
import { Divider } from 'react-native-paper';

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
    <SafeAreaView style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <SafeAreaView
        style={{
          height: '7%',
          width: '100%',
          backgroundColor: '#ffffff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 9,
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SafeAreaView
          style={{
            width: '92%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 20,
              color: '#323232',
              //   width:150,
              // borderBottomWidth: 1,
              // borderColor: '#aad7f2',
              fontFamily: 'PatuaOne-Regular',
            }}>
            PERFIL
          </Text>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView
        style={{
          height: '22%',
          width: '100%',
          backgroundColor: '#dcf1ff',

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 1.5,
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SafeAreaView
          style={{
            width: '92%',
            height: '80%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '-2%',
          }}>
          <Image
            style={{
              height: '72%',
              width: '24%',
              borderRadius: 100,
              borderWidth: 1,
              borderColor: '#ababab',
            }}
            source={data.user_profile}
          />
          <SafeAreaView>
            <Text
              style={{
                marginLeft: 15,
                fontFamily: 'PatuaOne-Regular',
                fontSize: 22,
                color: '#00000',
              }}>
              {data.nome}
            </Text>
            <Text style={{marginLeft: 15, fontSize: 12, color: '#7f898f'}}>
              {data.user}
            </Text>
            <Text
              style={{
                marginLeft: 15,
                marginTop: 5,
                fontSize: 10,
                color: '#7f898f',
              }}>
              {data.email}
            </Text>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
      {/* </ImageBackground> */}
      {/* </SafeAreaView> */}
      {/* <SafeAreaView
        style={{
          marginTop: 3,
          height: '23.6%',
          width: '100%',
          alignItems: 'center',
        }}> */}
        <TouchableOpacity
          style={{
            height: 40,
            width: '100%',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* <ProfileInfo style={{height: '25%'}} /> */}
          <Account style={{marginLeft: 15}} />
          <Text
            style={{
              marginLeft: 15,
              fontSize: 17,
              fontWeight: '400',
              color: '#323232',
            }}>
            DADOS PESSOAIS
          </Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
          style={{
            height: 40,
            marginTop: 1.5,
            backgroundColor: '#FFFFFF',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* <Pets style={{height: '25%'}} /> */}
          <Paw style={{marginLeft: 13}} />
          <Text
            style={{
              marginLeft: 11,
              fontSize: 17,
              fontWeight: '400',
              color: '#323232',
            }}>
            MEUS PETS
          </Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
          style={{
            height: 40,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            marginTop: 1.5,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
          }}>
          {/* <Form style={{height: '25%'}} /> */}
          <FormAdoption style={{marginLeft: 13}} />
          <Text
            style={{
              marginLeft: 13,
              fontSize: 17,
              fontWeight: '400',
              color: '#323232',
            }}>
            FORMULÁRIOS DE ADOÇÃO
          </Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
          onPress={() => handleSignClick()}
          style={{
            height: 40,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            marginTop: 1.5,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
          }}>
          <Out style={{marginLeft: 15}} />
          {/* <LogOut style={{height: '25%'}} /> */}
          <Text
            style={{
              marginLeft: 15,
              fontSize: 17,
              fontWeight: '400',
              color: '#323232',
            }}>
            SAIR
          </Text>
        </TouchableOpacity>
        <Divider />
      {/* </SafeAreaView> */}
    </SafeAreaView>
  );
}
