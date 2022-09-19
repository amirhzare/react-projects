import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";
function NewExpense(props) {
  const [isEditing, useIsEditing] = useState(false);

  function EnableEditing() {
    useIsEditing(true);
  }
  function DisableEditing() {
    useIsEditing(false);
  }
  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onAddExpense={props.onChangeExpense}
          onCancle={DisableEditing}
        />
      ) : (
        <button
          class="new-expense__button"
          type="button"
          onClick={EnableEditing}
        >
          Add Expense
        </button>
      )}
    </div>
  );
}
export default NewExpense;
