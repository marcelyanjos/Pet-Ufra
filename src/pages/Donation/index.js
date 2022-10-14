import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  PixelRatio,
  SafeAreaView,
  StyleSheet,
  Text,
  BackHandler,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SearchIcon from '../../assets/search.svg';
import Medicine from '../../assets/medicine.svg';
import Toy from '../../assets/toy.svg';
import Bed from '../../assets/dogBed.svg';
import Food from '../../assets/food.svg';
import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import styles from './styles';

export default function Home() {
  const navigation = useNavigation();

  const route = useRoute();
  console.log(route.name);

  //backbutton
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  //end backbuton

  // Navegar para pagina fora do Menu
  const handleSignClick = () => {
    navigation.navigate('Medicine');
  };

  return (
    <SafeAreaView>
      <SafeAreaView style={styles.head}>
        <SafeAreaView style={styles.headcontainer}>
          <SafeAreaView style={styles.headtitle}>
            <Text style={styles.title}>DOAÇÕES</Text>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView
          style={{
            elevation: 1.5,
            backgroundColor: '#fff',
            width: '95%',
            height: '88%',
            marginTop: 20,
            borderRadius: 10,
          }}>
          <SafeAreaView style={{height: 55}}>
            <Text style={styles.subtitle}>Categorias</Text>
          </SafeAreaView>
          <SafeAreaView
            style={{width: '100%', height: '100%', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => handleSignClick()}
              style={styles.button}>
              {/* <ProfileInfo style={{height: '25%'}} /> */}
              <Medicine style={{marginLeft: 15}} />
              <Text style={styles.buttontitle}>Medicamentos</Text>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity style={styles.button}>
              {/* <ProfileInfo style={{height: '25%'}} /> */}
              <Toy style={{marginLeft: 15}} />
              <Text style={styles.buttontitle}>Brinquedos e arranhadores</Text>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity style={styles.button}>
              {/* <ProfileInfo style={{height: '25%'}} /> */}
              <Bed style={{marginLeft: 12}} />
              <Text style={styles.buttontitle}>Camas e almofadas</Text>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity style={styles.button}>
              {/* <ProfileInfo style={{height: '25%'}} /> */}
              <Food style={{marginLeft: 15}} />
              <Text style={styles.buttontitle}>Alimentos e rações</Text>
              <Divider />
            </TouchableOpacity>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
