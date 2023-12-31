// import React , { useContext} from 'react'
// import { GlobalContext } from '../context/GlobalState';
// import Transaction from './Transaction';

// function TransactionsList() {

// const {transactions} = useContext(GlobalContext);

//   return (
//     <>
//       <h3>History</h3>
//         <ul id='list' className='list'>
//           {transactions.map(transaction => (
//  <Transaction key={transaction.id} transaction = {transaction}/>
//           ))}
           
//         </ul>
//     </>
//   )
// }

// export default TransactionsList


import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

function TransactionsList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransactionsList;
