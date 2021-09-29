import React, {useRef, useCallback} from 'react';
import {
  Image,
  ImageBackground,
  //   Button,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {data} from './data';

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: '#EFF9FF', height: '100%'}}>
      <SafeAreaView
        style={{
          height: '7%',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SafeAreaView style={{width: '85%', justifyContent: 'space-between'}}>
          <Text>Adoção</Text>
        </SafeAreaView>
        <SafeAreaView>
          <Button
            type="clear"
            // buttonStyle={{ width:'10%'}}
            icon={<Icon name="filter" size={20} color="black" />}
            // onPress={() => Alert.alert('Simple Button pressed')}
          />
        </SafeAreaView>
      </SafeAreaView>
      
        {/* <ScrollView> */}
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({item}) => {
              return (
                <SafeAreaView style={{ width:'50%', alignItems:'center',display:'flex', justifyContent:'center'}}>
                  <SafeAreaView
                  style={{
                    alignItems: 'center',
                    backgroundColor: '#ffffff',
                    // flexGrow: 1,
                    width:146,
                    height:211.98,
                    margin: 20,
                    // padding: 20,
                    borderRadius:12.34
                  }}>
                  <Image style={{width:146, height:124.3, borderTopLeftRadius:12.34, borderTopRightRadius:12.34}} source={{uri:item.imagem}} />
                  <Text style={{color: '#333333'}}>{item.nome}</Text>
                </SafeAreaView>
                </SafeAreaView>
              );
            }}
          />
          {/* </ScrollView> */}
      
    </SafeAreaView>
  );
}
