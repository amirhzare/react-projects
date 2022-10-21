import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <span className={classes.price}>{props.price}</span>
      </div>

      <div>
        <MealItemForm />
      </div>
    </li>
  );
}

export default MealItem;
