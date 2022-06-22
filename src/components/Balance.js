import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map(transaction =>transaction.amount)
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (

        <>
          <h4>Varlıklar</h4>
          <h1>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}TL</h1>  
        </>
    )
}
