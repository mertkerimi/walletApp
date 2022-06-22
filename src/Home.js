import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'
function Home() {
  return (
    <GlobalProvider>
      <div className='header' >
        <Header />
      </div>
      <div className="balance">
        <Balance />
        <IncomeExpenses />
        <div className='add-transaction'>
        <AddTransaction />
        </div>
        <div className='history'>
          <TransactionList />
        </div>
      </div>

    </GlobalProvider>
  );
}

export default Home;
