import React from 'react';
import {SafeAreaView, Image, Text, Button} from 'react-native';
import {data} from './data';
import Gato from '../../assets/gato.jpg';
import {ScrollView} from 'react-native-gesture-handler';

export default function AdoptItem() {
  return (
    <SafeAreaView>
      <SafeAreaView>
        <ScrollView>
          <Image
            style={{height: 300, width: 'auto', resizeMode: 'cover'}}
            source={require('../../assets/gato.jpg')}
          />
          <SafeAreaView
            style={{
              padding: 15,
              marginTop:-15,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              backgroundColor: '#fff',
              minHeight: 465,
            }}>
            <SafeAreaView>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 25,
                  marginTop: 5,
                }}>
                Paulo
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '600',
                  fontSize: 18,
                  marginTop: -5,
                }}>
                1 ano
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '500',
                  fontSize: 14,
                  marginTop: 15,
                }}>
                Descrição:
              </Text>
              <Text style={{color: 'black', fontSize: 14}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                odio augue. Maecenas aliquam gravida egestas. Maecenas auctor
                tellus nibh, quis sodales quam egestas vitae. In cursus augue
                sit amet neque dapibus efficitur et vitae tortor. Nunc fermentum
                sapien nisl, a vulputate nisi mollis id. Quisque et imperdiet
                est. Aliquam.
              </Text>
            </SafeAreaView>
            <SafeAreaView style={{position:'absolute', bottom:0, left:0, minWidth:380, alignItems:'center'}}>
              <Button title="Adotar" />
            </SafeAreaView>
          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
