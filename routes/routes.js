import React, {memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import Preload from '../pages/Preload'
import Preload from '../src/pages/Preload';
import SignIn from '../src/pages/SignIn';
import SignUp from '../src/pages/SignUp';
import HomeScreen from './MainTab';
// import Main from '../pages/Main/index'
import Filter from '../src/pages/Adopt/filter';
import Medicine from '../src/pages/Donation/Categories/Medicamentos/Medicine';
import ItemMedicine from '../src/pages/Donation/Categories/Medicamentos/ItemMedicine';
import ItemMedicineEdit from '../src/pages/Donation/Categories/Medicamentos/ItemMedicineEdit';
import Food from '../src/pages/Donation/Categories/Food';
const Stack = createStackNavigator();

const Donations = [
  {
    name: 'Medicine',
    component: Medicine,
  },
  {
    name: 'ItemMedicine',
    component: ItemMedicine,
  },
  { 
    name: 'ItemMedicineEdit',
    component: ItemMedicineEdit
  },
  {
    name: 'Food',
    component: Food,
  },
];
function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // tira o cabeçlho
        screenOptions={{headerShown: false}}
        initialRouteName="Preload">
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={HomeScreen} />
        {Donations.map(index => {
          return <Stack.Screen name={index.name} component={index.component} />;
        })}

        <Stack.Screen name="Filter" component={Filter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
