import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [filteredExpenses, setFilteredExpenses] = useState([])
  const [expenses, setExpenses]=useState([
    { key: "e1", title: "Transfer", amount: 20, date: new Date(2020, 12, 3) },
    { key: "e2", title: "Phone Bill", amount: 150, date: new Date(2022, 1, 7) },
    { key: "e3", title: "Qurl", amount: 150, date: new Date(2022, 1, 7) },
    { key: "e5", title: "Bill", amount: 150, date: new Date(2020, 1, 7) },
  ])
  const [filteredYear, setFilteredYear] = useState("ALL");
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
    function changeFilter(newYear) {
      setFilteredYear(newYear);
    }
  
    useEffect(() => {
      if (filteredYear === "ALL") {
        setFilteredExpenses(expenses)
      } else {
        setFilteredExpenses(expenses.filter(
            (item) => item.date.getFullYear() === parseInt(filteredYear)
          ))
      }
    }, [filteredYear]);



  

  useEffect(()=>{
    setFilteredExpenses(expenses)
  }, [expenses])

  console.log('rendering')
  return (
    <div className='App'>
      <NewExpense onChangeExpense={changeExpense}/>
      <Expenses filteredExpenses={filteredExpenses} filteredYear={filteredYear} onChangeFilter = {changeFilter}/>
    </div>
  );
  }

export default App;
