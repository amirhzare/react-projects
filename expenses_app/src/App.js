import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import './App.css'
import { useState } from 'react';


function App() {
  const [expenses, setExpenses]=useState([
    { key: "e1", title: "Transfer", amount: 20, date: new Date(2020, 12, 3) },
    { key: "e2", title: "Phone Bill", amount: 150, date: new Date(2022, 1, 7) },
  ])
  // const expenses = [
  //   { key: "e1", title: "Transfer", amount: 20, date: new Date(2020, 12, 3) },
  //   { key: "e2", title: "Phone Bill", amount: 150, date: new Date(2022, 1, 7) },
  // ];
  function changeExpense (data) {
    // console.log("->", data);
    const newexpense = {
      ...data,
      id: Math.random().toString()
    }
    setExpenses((prevState=>{
      var new_data = [...prevState, newexpense]
      console.log(new_data)
      return new_data
    }))

  }

  
  return (
    <div className='App'>
      <NewExpense onChangeExpense={changeExpense}/>
      <Expenses items={expenses} />
    </div>
  );
  }

export default App;
