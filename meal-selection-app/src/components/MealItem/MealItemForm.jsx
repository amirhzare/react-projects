import { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        lable="Amount"
        ref={amountInputRef}
        input={{
          id: "input",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter a valid amount (1-5)</p>}
    </form>
  );
}

export default MealItemForm;
