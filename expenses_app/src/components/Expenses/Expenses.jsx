import { React, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("ALL");
  const [filteredExpenses, setFilteredExpense] = useState(props.items);

  function changeFilter(newYear) {
    setFilteredYear(newYear);

    if (newYear === "ALL") {
      setFilteredExpense(props.items);
    } else {
      setFilteredExpense(
        props.items.filter(
          (item) => item.date.getFullYear() === parseInt(newYear)
        )
      );
    }
  }
  return (
    <Card className="expenses">
      <ExpenseFilter
        filteredYear={filteredYear}
        onChangeFilter={changeFilter}
      />

      {filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.key}
          title={item.title}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
}
export default Expenses;
