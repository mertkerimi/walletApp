import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0)
  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }
  return (
    <div>
      <h3>Yeni Islem</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">İşlem Adı</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="İşlemin Adını Giriniz." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Miktar <br />
          (Pozitif Değer - Gelir) <br /> (Negatif Değer - Gider)
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Girmek istediğiniz tutarı giriniz." />
        </div>
        <button className="btn">Yeni İşlem Ekle</button>
      </form>
    </div>
  )
}
