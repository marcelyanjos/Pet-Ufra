import React from 'react'
import {Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Header} from '../../components/Header'

export default function Main(){
    const navigation=useNavigation();
//     var oracledb = require('oracledb');
 
//   async function run() {
//       let connection = await oracledb.getConnection( {
//       user : "system", // [nome do usuário]
//       password : "Teste123", // [senha]
//       connectString : "localhost:1521" // [nome do host]:[porta]/[nome do serviço de BD]
//     });
//     let result = await connection.execute( "SELECT 'Hello World!' FROM dual");
//     console.log(result.rows[0]);
//   }
 
//   run();
    return(
        <>
        {/* <Header navigation={navigation}/> */}
        <Text style={{color:'#323232'}}>Redes sociais</Text>
        </>
    )
}