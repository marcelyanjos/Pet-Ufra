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
import {Divider} from 'react-native-paper';
import styles from './styles';

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
    <SafeAreaView style={styles.root}>
      {/* <SafeAreaView
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
        }}> */}
      {/* <SafeAreaView
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
        </SafeAreaView> */}
      {/* </SafeAreaView> */}

      {/* Informações do perfil */}
      <SafeAreaView style={styles.info}>
        <SafeAreaView style={styles.infobody}>
          <Image style={styles.image} source={data.user_profile} />
          <SafeAreaView>
            <Text style={styles.name}>{data.nome}</Text>
            <Text style={styles.user}>{data.user}</Text>
            <Text style={styles.email}>{data.email}</Text>
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

      {/* Menu do perfil */}
      <SafeAreaView style={styles.menu}>
        <TouchableOpacity style={styles.touchable}>
          {/* <ProfileInfo style={{height: '25%'}} /> */}
          <Account style={styles.icons} />
          <Text style={styles.text}>DADOS PESSOAIS</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity style={styles.touchable}>
          {/* <Pets style={{height: '25%'}} /> */}
          <Paw style={styles.icons2} />
          <Text style={styles.text}>MEUS PETS</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity style={styles.touchable}>
          {/* <Form style={{height: '25%'}} /> */}
          <FormAdoption style={styles.icons2} />
          <Text style={styles.text}>FORMULÁRIOS DE ADOÇÃO</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
          onPress={() => handleSignClick()}
          style={styles.touchable}>
          <Out style={styles.icons} />
          {/* <LogOut style={{height: '25%'}} /> */}
          <Text style={styles.text}>SAIR</Text>
        </TouchableOpacity>
        <Divider />
      </SafeAreaView>
      {/* </SafeAreaView> */}
    </SafeAreaView>
  );
}
