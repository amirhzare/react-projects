import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
function MealItemForm() {
  return (
    <form className={classes.form}>
      <Input
        lable="Amount"
        input={{
          id: "input",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
