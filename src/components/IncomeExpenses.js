import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *-1).toFixed(2); 
    
  return (
        <>
          <div className="inc-exp-container">
        <div>
          <h4>Gelir</h4>
          <p className="money plus">{income.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}TL</p>
        </div>
        <div>
          <h4>Gider</h4>
          <p className="money minus">-{expense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}TL</p>
        </div>
      </div>  
        </>
    )
}
