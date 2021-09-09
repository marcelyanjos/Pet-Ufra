import React, { memo } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

// import Preload from '../pages/Preload'
import Preload from '../src/pages/Preload'
import SignIn from '../src/pages/SignIn'
import SignUp from '../src/pages/SignUp'
import HomeScreen from './drawer'
// import Main from '../pages/Main/index'


const Stack = createStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator
            // tira o cabeçlho
            screenOptions={{headerShown:false}}
            initialRouteName='Preload'
            >
                <Stack.Screen name='Preload' component={Preload} />
                <Stack.Screen name='SignIn' component={SignIn} />
                <Stack.Screen name='SignUp' component={SignUp} />
                <Stack.Screen name='Main' component={HomeScreen} />
                


            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;