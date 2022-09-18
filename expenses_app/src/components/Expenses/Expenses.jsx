import { React, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function changeFilter(filteredDate) {
    setFilteredYear(filteredDate);
  }
  return (
    <Card className="expenses">
      <ExpenseFilter
        filteredYear={filteredYear}
        onChangeFilter={changeFilter}
      />
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.key}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}
export default Expenses;
