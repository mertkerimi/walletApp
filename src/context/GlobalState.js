import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


const initialState = {
    transactions: [
        { id: 1, text: 'Çiçek', amount: -20 },
        { id: 2, text: 'Maaş', amount: 10000 },
        { id: 3, text: 'Kitap', amount: -10 },
        { id: 4, text: 'Kamera', amount: 150 },
        { id: 5, text: 'Telefon', amount: 150 },



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