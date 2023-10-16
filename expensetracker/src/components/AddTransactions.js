import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

function AddTransactions() {
  
  const [ text, setText ] = useState('');
  const [ amount, setAmount ] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
   
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);

  }

  return (
    <>
      <h3>Add New Transactions</h3>
      <form onSubmit={onSubmit} action="form">
        <div className='form-control'>
          <label htmlFor="text">Text</label>
          <input type="text" placeholder='enter text...' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='form-control'>
          <label htmlFor="amount">Amount <br /> (Negative - expense,positive - income) </label>

          <input type="number" placeholder='enter amount...' value={amount} onChange={(e) => setAmount(e.target.value)} />     
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </>
  )
}

export default AddTransactions
