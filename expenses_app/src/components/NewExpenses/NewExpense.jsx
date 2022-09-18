import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={props.onChangeExpense} />
    </div>
  );
}
export default NewExpense;
