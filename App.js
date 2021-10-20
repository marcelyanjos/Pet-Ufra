
import React from 'react';
import 'react-native-gesture-handler';
import Routes from './routes/routes'
import UserContextProvider from './src/Context/UserContext'

// MainStack = routes

export default function App(){
  return(
    <UserContextProvider>
        <Routes/>
    </UserContextProvider>
  )
}