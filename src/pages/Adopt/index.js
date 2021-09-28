import React, {useRef, useCallback} from 'react';
import {
  Image,
  ImageBackground,
//   Button,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
  return (
    <SafeAreaView>
      <SafeAreaView
        style={{
          height: '23%',
          backgroundColor: '#ffffff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SafeAreaView style={{width: '95%', display: 'flex'}}>
          <Text>Adoção</Text>
          <Button
          icon={
            <Icon
            name="filter"
            size={15}
            color="black"
          />
          }
            // onPress={() => Alert.alert('Simple Button pressed')}
          />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
