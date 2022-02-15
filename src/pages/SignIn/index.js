import React, {useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import NewLogo from '../../assets/new_logo.svg';


const styles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: '#BBDFF3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color:'#787878',
    fontSize: 50,
    fontFamily: 'PatuaOne-Regular',
  },
  logo: {
    width: 300,
    height: 250,
  },
  textinput: {
    width: 300,
    height: 60,
    backgroundColor: '#E4F2FA',
    overflow: 'hidden',
    color: '#787878',
    // fontSize: 18,
    marginBottom: 10,
  },
  inputlogo: {
    width: '120%',
    height: '120%',
  },
  forgotAccount: {
    width: 300,
    marginBottom:18,
    display: 'flex',
    alignItems: 'flex-end',
  },
  signin:{
    // backgroundColor:"green",
    width:187,
    height:50,
    
  }
});
export default function SignIn() {
  const [user, setUser] = React.useState();
  const [password, setPassword] = React.useState();

  const navigation = useNavigation();

  const handleSignClick = () =>{
    navigation.navigate('Main');
  }
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.text}>Pet Ufra</Text>
      <NewLogo style={styles.logo} />
      {/* Formulário */}
      <TextInput
        value={user}
        onChange={setUser}
        underlineColor="transparent"
        label="E-mail ou usuário"
        theme={{colors: {primary: '#97B6C7', underlineColor: 'transparent'}}}
        style={styles.textinput}
        right={
          <TextInput.Icon
            name="email"
            color="#97B6C7"
            style={styles.inputlogo}
          />
        }
      />
      <TextInput
        value={password}
        onChange={setPassword}
        secureTextEntry
        autoCompleteType='password'
        underlineColor="transparent"
        label="Senha"
        theme={{colors: {primary: '#97B6C7', underlineColor: 'transparent'}}}
        style={styles.textinput}
        right={
          <TextInput.Icon
            name="email"
            color="#97B6C7"
            style={styles.inputlogo}
          />
        }
      />
      <SafeAreaView style={styles.forgotAccount}>
        <Text style={{color:'#787878'}}>Esqueci minha senha</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.signin}>
      <Button
        title="Entrar"
        color='#72A9FA'
        onPress={() => handleSignClick()}
      />
      </SafeAreaView>
      {/* Fim do Formulário*/}
    </SafeAreaView>
  );
}
