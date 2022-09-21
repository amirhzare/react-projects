import { React, useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses({ filteredExpenses, filteredYear, onChangeFilter }) {
  // const [filteredExpenses, setFilteredExpense] = useState(props.items);

  console.log("rendering expences");
  return (
    <Card className="expenses">
      <ExpenseFilter
        filteredYear={filteredYear}
        onChangeFilter={onChangeFilter}
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
