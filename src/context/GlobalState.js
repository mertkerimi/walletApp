import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


const initialState = {
    transactions: [
        { id: 1, text: 'Çiçek', amount: -70 },
        { id: 3, text: 'Kitap', amount: -25 },
        { id: 4, text: 'Kamera', amount: -3350 },
        { id: 5, text: 'Telefon', amount: -17150 },
        { id: 2, text: 'Maaş', amount: 30000 },



    ]
}

export const GlobalContext = createContext(initialState)
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //Actions 
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)

}