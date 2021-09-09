import * as React from 'react';
// import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import Main from '../src/pages/Main/index';
// import Values from '../pages/Dados/values'
// import Sms from '../pages/Dados/sms'
// import Grafico1 from '../pages/Dados/chart1'
// import Start from '../pages/Home/index'
// import TesteTabela from '../pages/Dados/Tabela'
// import TesteTabela2 from '../pages/Dados/Tabela2'

import {DrawerContent} from './DrawerContent'


// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator drawerContent={props=><DrawerContent {...props} />}
      screenOptions={{ swipeEnabled: false }} initialRouteName="Home">
        <Drawer.Screen name="Home" component={Main} />
        {/* <Drawer.Screen name="Values" component={Values} /> */}
        {/* <Drawer.Screen name="Tabela" component={TesteTabela} /> */}
        {/* <Drawer.Screen name="SMS" component={Sms} /> */}
        {/* <Drawer.Screen name="Tabela2" component={TesteTabela2} /> */}

        {/* <Drawer.Screen name="Grafico1" component={Grafico1} /> */}


      </Drawer.Navigator>
  );
}