// Não lembro para que serve
import React, { createContext, useReducer } from 'react';
import { inicialState, UserReducer } from '../reducer/UserReducer'

export const UserContext = createContext();

export default({children})=>{
    const [state,dispatch] =useReducer(UserReducer, inicialState);

    return(
        <UserContext.Provider value={{state,dispatch}}>
            {children}
        </UserContext.Provider>
    );
}