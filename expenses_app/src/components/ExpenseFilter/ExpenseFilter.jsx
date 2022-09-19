import React from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  function optionChange(event) {
    // console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  }
  return (
    <div className="expense-filter__box">
      <h1>Filter by year</h1>
      <select
        value={props.filteredYear}
        className="expense-filter__option"
        onChange={optionChange}
      >
        <option value="ALL">ALL</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
}
export default ExpenseFilter;
