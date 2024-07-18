import React from 'react'
import { useState } from 'react'
import './ScrollBar.css'

const App = () => {
      const [input,setInput] = useState('');
      const [Amount,setAmount] = useState('');
      const [expenses,setExpenses] = useState([]);

      const addExpense = ()=>{
            if(!input || !Amount){
                  return;
            }
            const newExpense = {
                  id: expenses.length + 1,
                  title: input,
                  amount: Amount
            }
            setExpenses([...expenses,newExpense])
            setInput('');
            setAmount('');

      }
      const handleDelete = (id)=>{
            setExpenses(expenses.filter((expenses)=> expenses.id !== id))
      }
      

  return (
    <div className='w-screen bg-slate-600 min-h-screen text-white flex flex-col items-center pt-12'>
      <h1 className='font-bold pb-6 text-3xl'>Expense Tracker</h1>
      <div className='w-72 bg-gray-400 p-4 rounded-md shadow-md shadow-slate-200 flex flex-col items-center gap-4 text-black sm:w-2/3 lg:w-2/5 '>
      <input type='text' placeholder='Expense' onChange={(e)=>setInput(e.target.value)} value={input} className='rounded-sm p-2  focus:outline-none focus:ring focus:border-blue-600 sm:w-2/3'></input>
      <input type='number' placeholder='Amount' onChange={(e)=>setAmount(e.target.value)} value={Amount} className='rounded-sm p-2 focus:outline-none focus:ring focus:border-blue-600 sm:w-2/3' ></input>
      <button onClick={addExpense} className='bg-slate-500 p-2 rounded-md text-white hover:bg-green-500 sm:w-1/3'>Add Expense</button>

      </div>
      <div className={`w-72 flex flex-col items-center mt-8 bg-neutral-200 p-2 rounded-sm text-black overflow-x-hidden max-h-72 mb-4 ${expenses.length === 0 ? 'hidden' : ''} sm:w-2/3 scrollbar-hide`}>
      <ul className='w-full flex flex-col items-center justify-center list-decimal px-3 gap-2'>
       {    
            expenses.map((expense)=>(
                  <li key={expense.id} className='w-full flex items-start justify-between'>
                  <span className='font-medium truncate w-16 sm:w-1/3'>{expense.title}</span>
                  <span className='text-xl font-mono truncate w-24 sm:w-1/3'> ${expense.amount}</span>
                  <button onClick={()=>handleDelete(expense.id)} className='bg-slate-500 px-2 rounded-sm text-white'>Delete</button>
                  </li>
            ))
       }
      </ul>
      </div>
    </div>
  )
}

export default App
